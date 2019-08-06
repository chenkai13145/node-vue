<template>
  <div class="contents">
    <!-- 标题 -->
    <h5 class="title" style="display:flex;">
      整车实时看板
      <Help :helpText="helpText2" style="color:#fff;z-index:10"></Help>
    </h5>

    <!-- 标题 -->
    <!-- 运单状态列表 -->
    <el-row class="statusList-item">
      <el-col style="position: relative" v-for="(item,index) in statusList" :key="index">
        <div
          :class="[index==0?'status-item status-left':'status-item']"
          :style="'background: url(/img/'+item.imgurl+') right bottom no-repeat;background-color: rgb(255, 232, 234);'"
        >
          <div style="display:inline-block; margin:15px 0 18px 26px;">
            <span>
              <p
                style="margin-bottom:10px; font-family: 'PingFangSC-Semibold', 'PingFang SC Semibold', 'PingFang SC';
                        font-weight: 650;
                       font-style: normal;
                   font-size: 26px;
                  color: #000;"
              >{{item.count}}</p>
              <span style="font-size: 15px;">{{item.name}}</span>

              <!-- <img
                  v-if="item.imgurl"
                  style="position: absolute;right: 0px;bottom: 0px;display: inline-block;width: 100px;height: 80px;"
                  :src="'/static/img/truckload/'+item.imgurl"
                >
              -->
            </span>
          </div>
          <!-- <img class="img" src="../../../assets/img/truckload/u3214.png"> -->
        </div>
      </el-col>
    </el-row>

    <!-- 运单状态列表 -->
    <!-- 查询表单 -->
    <div style=" border: 1px solid #ccc;padding: 16px;">
      <QueryForm
        :companyList="companyList"
        :clientList="clientList"
        :waybillStateList="waybillStateList"
        :waybillPhaseList="waybillPhaseList"
        @query="query"
      ></QueryForm>
      <!-- 查询表单 -->
      <!-- 整车运输状态列表 -->
      <el-row justify="start" style="height:46px; margin-top:0;">
        <div
          v-for="(item,index) in truckloadList"
          :key="index"
          :class="[index=='0'?'divone':'divtwo']"
        >
          <div :class="[index==0?'first truckload-item':'truckload-item']">
            <span :class="[index==0?'truckload-item-img':'truckload-item-img2']"></span>
            <span class="truckload-item-name">{{item.title}}</span>
            <span class="truckload-item-date">{{item.count}}</span>
          </div>
        </div>
      </el-row>
      <!--  <img src="" -->
      <!-- 整车运输状态列表 -->

      <!-- 列表数据 -->
      <el-table
        :header-cell-style="{height:'10px'}"
        class="el-table__header"
        border
        v-loading="loading"
        v-show="trunoffs"
        :data="returnValearr"
        style="width: 100%;margin:auto;"
      >
        <el-table-column
          width="240"
          header-align="center"
          fixed="left"
          prop="waybill_id"
          label="运单号"
          align="center"
        >
          <template slot-scope="scope">
            <div
              style="cursor: pointer;"
              @click="alerts(scope.row.waybill_id)"
            >SD{{scope.row.waybill_id}}</div>
          </template>
        </el-table-column>
        <el-table-column
          width="100"
          header-align="center"
          fixed="left"
          prop="truck_no"
          align="center"
          label="车牌号"
        ></el-table-column>
        <el-table-column
          width="140"
          header-align="center"
          fixed="left"
          prop="province"
          align="center"
          label="线路"
        >
          <template slot-scope="scope">{{scope.row.from_addr_city}}-{{scope.row.to_addr_city}}</template>
        </el-table-column>
        <el-table-column
          header-align="center"
          width="140"
          fixed="left"
          align="center"
          prop="overtime_info"
          label="监控状态"
          :render-header="renderHeader"
        >
          <template slot-scope="scope">
            <span
              v-if="scope.row.overtime_info=='其他'"
              style="display: inline-block; width: 10px;background-color: #E22B38; height: 10px; border-radius: 50%;"
            />
            <span
              v-else-if="scope.row.overtime_info=='正常'"
              style="display: inline-block; width: 10px;background-color: #F9A62B; height: 10px; border-radius: 50%;"
            />
            <span
              v-else
              style="display: inline-block; width: 10px;background-color: #D8D8D8; height: 10px; border-radius: 50%;"
            />
          </template>
        </el-table-column>
        <el-table-column
          header-align="center"
          width="100"
          prop="load_num"
          label="装载情况"
          align="center"
        ></el-table-column>
        <el-table-column
          header-align="center"
          width="140"
          prop="plan_starttime"
          align="center"
          label="计划发运时间"
        >
          <template slot-scope="scope">{{timeFilter(scope.row.plan_starttime)}}</template>
        </el-table-column>
        <el-table-column
          header-align="center"
          width="140"
          prop="starttime"
          sortable
          align="center"
          label="实际发运时间"
        >
          <template slot-scope="scope">{{timeFilter(scope.row.starttime)}}</template>
        </el-table-column>
        <el-table-column
          header-align="center"
          width="120"
          prop="way_step"
          align="center"
          label="监控阶段"
        >
          <template slot-scope="scope">
            {{scope.row.load_num=='1'?'监控中':'监控结束'}}
            <!-- <span style="display: inline-block; width: 10px;background-color: rgb(243, 43, 29); height: 10px; border-radius: 50%;"></span> -->
          </template>
        </el-table-column>
        <el-table-column
          header-align="center"
          width="100"
          prop="location_info"
          align="center"
          label="当前位置"
        >
          <template
            slot-scope="scope"
          >{{getlocation(scope.row.location_info)?'':scope.row.location_info}}</template>
        </el-table-column>
        <el-table-column
          header-align="center"
          width="100"
          prop="surplus_km"
          align="center"
          label="剩余里程"
        ></el-table-column>
        <el-table-column
          header-align="center"
          width="140"
          prop="plan_finishtime"
          align="center"
          label="计划交付时间"
        >
          <template slot-scope="scope">{{timeFilter(scope.row.plan_finishtime)}}</template>
        </el-table-column>
        <el-table-column
          header-align="center"
          width="140"
          prop="finishtime"
          align="center"
          label="实际交付时间"
        >
          <template slot-scope="scope">{{timeFilter(scope.row.finishtime)}}</template>
        </el-table-column>
        <el-table-column
          header-align="center"
          width="120"
          prop="org_code"
          align="center"
          label="投资企业"
          sortable
        >
          <template slot-scope="scope">{{enumerateKey(scope.row.org_code)}}</template>
        </el-table-column>
        <el-table-column
          header-align="center"
          width="100"
          prop="four_s_name"
          align="center"
          label="4S店"
        ></el-table-column>
        <el-table-column
          header-align="center"
          width="100"
          prop="car_brand_name"
          align="center"
          label="商品车品牌"
        >
          <template slot-scope="scope">{{enumerateImg(scope.row.car_brand_name)}}</template>
        </el-table-column>
      </el-table>
      <!--分页-->
      <el-pagination
        v-show="trunoffs"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="queryPagition.pageNo"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="queryPagition.pageSize"
        layout="total,sizes, prev, pager, next"
        :total="queryPagition.total"
      ></el-pagination>

      <!-- 无数据显示 -->
      <Empty v-show="!trunoffs"></Empty>
      <!-- 运单号弹窗 -->
    </div>
  </div>
</template>

<script>
import GacButton from "../../components/common/gac-button-filtrate";
import QueryForm from "../../components/monitoring/truckload/query-form";
import Help from "../../components/common/help";
import {
  getTrafficDataTop,
  getTrafficData
} from "../../api/monitor/truckload.js";
import { getcitys } from "../../utils/index";
import Empty from "../../components/monitoring/truckload/empty";
// import { setInterval, clearInterval, clearTimeout, setTimeout } from "timers";
import { enumerateKey, enumerateImg } from "../../utils/common";
export default {
  name: "truckload",
  components: {
    QueryForm,
    Empty,
    GacButton,
    Help
  },
  data() {
    return {
      helpText2:
        "今日计划运量：计划今日发运的运单数量(无论是否已经发运)；\n当前待发运量：计划今日发运，当前还未出发运单数量；\n当前已发量：截止目前今日已发车的运单数量(无论是否为计划今日发出)；\n今日在途运量：目前运输在途的运单数量；\n今日交付运量：截止目前今日已交付的运单数量；\n超时未发：超过计划发车时间但未出发的运单数量；\n超时未到：超过计划到达时间但未交付的运单数量；\n交付及时率：交付及时率=今日按时交付运单数量/今日已交付运单总数(运单中所有的商品车交付完成，才算运单交付完成)；",
      loction: " ",
      // 状态列表
      statusList: [
        {
          name: "今日计划运量(单)",
          count: "_ _",
          key: "plan_num",
          imgurl: "xin.png"
        },
        {
          name: "当前待发运量(单)",
          count: "_ _",
          key: "un_send_num",
          imgurl: "zhong.png"
        },
        {
          name: "当前已发量(单)",
          count: "_ _",
          key: "send_num",
          imgurl: "runcar.png"
        },
        {
          name: "今日在途运量(单)",
          count: "_ _",
          key: "online_num",
          imgurl: "run.png"
        },
        {
          name: "今日交付运量(单)",
          count: "_ _",
          key: "finish_num",
          imgurl: "ok.png"
        }
      ],
      // 查询表单
      queryForm: {},
      // 公司列表
      companyList: [
        {
          label: "company1",
          value: "company1"
        },
        {
          label: "company2",
          value: "company2"
        }
      ],
      // 客户列表
      clientList: [
        {
          label: "client1",
          value: "client1"
        },
        {
          label: "client2",
          value: "clien2"
        }
      ],
      // 运单状态列表
      waybillStateList: [
        {
          label: "超时未发",
          value: "超时未发"
        },
        {
          label: "超时未到",
          value: "超时未到"
        },
        {
          label: "正常",
          value: "正常"
        }
      ],
      // 运单阶段列表
      waybillPhaseList: [
        {
          label: "待发运",
          value: "待发运"
        },
        {
          label: "在途",
          value: "在途"
        },
        {
          label: "已交付",
          value: "已交付"
        }
      ],
      // 整车运输状态列表
      truckloadList: [
        /* {
          name: '超时未发',
          date: '今天',
          count: 166,
          color: '#52C1F5'
        },
        {
          name: '晚发',
          date: '今天',
          count: 18,
          color: '#4BCED0'
        },
        {
          name: '超时未到',
          date: '今天',
          count: 12,
          color: '#FB6260'
        },
        {
          name: '晚到',
          date: '今天',
          count: 5,
          color: '#8167F5'
        } */
        {
          title: "今日超时未发车",
          count: "_ _",
          key: "overtime_unfinish_num"
        },
        {
          title: "今日超时未到",
          count: "_ _",
          key: "overtime_unsend_num"
        }
      ],
      // 表格数据
      tableDataLists: [],
      tableDataList: [
        
      ],
      // 分页
      queryPagition: {
        total: 100,
        pageSize: 10,
        pageNo: 1,
        to_addr_city: "",
        from_addr_city: "",
        overtime_info: "",
        truck_no: "",
        way_step: "",
        waybill_id: "",
        pagefen: ""
      },
      // topData: {
      //   finish_num: 0,
      //   online_num: 1,
      //   overtime_finish_num: 0,
      //   overtime_unfinish_num: 2,
      //   overtime_unsend_num: 1,
      //   plan_num: 0,
      //   send_num: 0,
      //   un_send_num: 0
      // }
      //all
      dataAll: [],
      timer: "", //存放定时器
      loading: false
    };
  },
  created() {
    this.$nextTick(() => {
      this.query();
    });

    this.querlistTop();
  },
  computed: {
    // 查询开关
    trunoffs() {
      if (this.loading) return true;
      return this.tableDataList.length > 0;
    },
    returnValearr() {
      this.tableDataLists = this.tableDataList.map(item => {
        if (item.location_info != null) {
          let index = item.location_info.indexOf("市");
          if (index != -1) {
            item.location_info = item.location_info.substr(0, index + 1);
          }
          return item;
        }
        return item;
      });
      return this.tableDataLists;
    }
  },
  methods: {
    enumerateKey,
    enumerateImg,
    // 获取查询表单数据
    query(value) {
      // 表格数据
      this.loading = true;
      let data = {};

      if (value) {
        if (value.pagefen == "查询") {
          this.queryPagition.pageNo = 1;
        }
        for (let key in value) {
          this.queryPagition[key] = value[key];
        }
      }
      for (let key in this.queryPagition) {
        if (key != "total" && key != "pagefen") {
          data[key] = this.queryPagition[key];
        }
      }
    getTrafficData(data)
        .then(res => {
          console.log(res)
          if (res.data.msg === "success") {
            // let arrs = res.data.filter(item => {
            //   return item.truck_no.indexOf("渝") != -1;
            // });
            // this.tableDataList=arrs
            // 这里只截取了10条数据
            this.loading = false;
            this.queryPagition.total = res.data.data.length;
            this.tableDataList = JSON.parse(JSON.stringify(res.data.data));
            this.tableDataList.forEach((item, index) => {
              getcitys(item.location_info).then(res => {
                //  let index= this.loction.indexOf('市')
                //   return this.loction.substr(0,index+1);
                this.tableDataList[index].location_info = res;
              });
            });
            this.tableDataList=this.tableDataList.slice(0,this.queryPagition.pageSize)
          }
        })
        .catch(err => (this.loading = false));
    },
    // 头部数据
    querlistTop() {
     getTrafficDataTop().then(res => {
    
        if (res.data.data.msg === "success") {
          // 对状态列表操作
          this.statusList = this.statusList.map(item => {
            for (let keys in res.data.data) {
              if (keys === item.key) {
                item.count = res.data.data[keys];
                return item;
              }
            }
          });
          // 对整车运输状态列表操作
          this.truckloadList = this.truckloadList.map(item => {
            for (let keys in res.data.data) {
              if (keys === item.key) {
                item.count = res.data.data[keys];
                return item;
              }
            }
          });
        }
      });
    },
    //页数
    handleSizeChange(val) {
      this.queryPagition.pageSize = val;
      this.query();
    },
    //页码
    handleCurrentChange(val) {
      this.queryPagition.pageNo = val;
      this.query();
    },
    // 表格头图标渲染
    renderHeader(h, { column }) {
      return (
        <el-tooltip class="tooltip" effect="dark" placement="top">
          <ul slot="content">
            <li style="color: #fff;">
              <span style="display: inline-block; width: 10px;background-color: #E22B38; height: 10px; border-radius: 50%;" />
              <strong>超时未发，</strong>
              <span style="display: inline-block; width: 10px;background-color: #F9A62B; height: 10px; border-radius: 50%;" />
              <strong>超时未到, </strong>
              <span style="display: inline-block; width: 10px;background-color: #D8D8D8; height: 10px; border-radius: 50%;" />
              <strong>正常</strong>
            </li>
          </ul>
          <div style="line-height:normal">
            监控状态
            <icon-svg name="help" />
          </div>
        </el-tooltip>
      );
      // return (indexOf
      //   h('span', [
      //     h('span', column.label + ' '),
      //     h('el-tooltip', {
      //       props: {
      //         effect: 'light',
      //         content: '超时未发，正常，超时未到',
      //         placement: 'top'
      //       }
      //     }, [
      //       h('i', {
      //           class: 'el-icon-question',
      //           style: 'color:#000'
      //         })
      //     ])
      //   ])
      // )
    },

    //弹出框
    alerts(val) {
      this.$alert("运单号:" + val, "车辆轨迹跟踪", {
        showConfirmButton: false
      });
    },
    // getLocations(val) {
    //   var _this = this;
    //   if(val){
    //     var point = new BMap.Point(val.split(',')[0], val.split(',')[1])
    //     var gc = new BMap.Geocoder();
    //      gc.getLocation(point, rs => {
    //      _this.oction = rs.address;
    //     });
    //   }
    getlocation(val) {
      if (val != null && val.indexOf(",") != -1) {
        return true;
      } else {
        return false;
      }
    },

    // },
    //时间过滤
    timeFilter(val) {
      if (val) {
        let index = val.indexOf(" ");
        return val.substr(0, index);
      } else {
        return val;
      }
    }
  },

  mounted() {},
  destroyed() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss" scope>
@import url('../../../public/css/reset.css');

.el-table__header td,
.el-table__header th,
.el-table__heade .thead {
  padding: 0px;
}
.el-table .el-table__row {
  height: 50px;
}
.icon-svg {
  vertical-align: middle;
  margin-left: 10px;
  margin-top: -3px;
}
.el-table th div {
  display: flex;
  align-items: center;
}

.gac {
  position: absolute;
  right: 110px;
  top: 20px;
  z-index: 111;
}
.contents {
  margin-top: 50px;
  margin-left: 150px;
  padding: 20px 20px;
  background-color: #fff;
}
.title {
  text-align: left;
  font-size: 18px;
  font-weight: 300;
  font-weight: bold;
}
.status-item {
  // padding: 30px;
  border-radius: 10px;
  color: #000;
  font-size: 14px;
  height: 94px;

  position: relative;
  margin: 10px 10px;
  max-height: 94px;
  &:last-child {
    margin: 10px 0 10px 10px;
  }
  p {
    font-size: 24px;
    font-weight: bold;
    line-height: 1.5em;
    color: #000;
  }
}
.status-left {
  margin: 10px 0px 20px 0 !important;
}
.statusList-item {
  display: flex;
  .img {
    position: absolute;

    right: 22px;
  }
}
.truckload-item {
  // width: 200px;
  padding: 0px;
  border-radius: 20px;
  text-align: center;
  // background-color: rgba(242, 242, 242, 1);
  // position: relative;
  // left: 50%;
  // margin-left: -131px;
  margin-bottom: 50px;
  // vertical-align: middle;
  font-weight: bold;
  font-size: 24px;
  box-sizing: border-box;
  box-sizing: content-box;
}
.first {
  background-color: #fff !important;
}

.truckload-item-color {
  width: 40px;
  height: 20px;
  border-radius: 5px;
}
.truckload-item-name {
  font-size: 14px;
  margin-left: 20px;
  margin-right: auto;
  vertical-align: middle;
}
.truckload-item-date {
  font-size: 14px;
  font-weight: bold;
  margin-right: auto;
  vertical-align: middle;
}
.truckload-item-img,
.truckload-item-img2 {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #e22b38;
  border-radius: 50%;
  vertical-align: middle;
}
.truckload-item-img2 {
  background-color: #f9a62b;
}
.divone {
  margin-left: 0px;
  display: inline-block;
  // width: 200px;
}
.divtwo {
  // width: 200px;
  margin-left: 102px;
  display: inline-block;
}
.tooltip {
  ul li {
    span {
      display: inline-block;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      &:nth-child(1) {
        background-color: rgb(243, 43, 29);
      }
      &:nth-child(2) {
        background-color: rgb(243, 143, 29);
      }
      &:nth-child(3) {
        background-color: rgb(231, 208, 206);
      }
    }
  }
}
</style>
<style scoped lang="scss">
/deep/ .help-wrap {
  p {
    width: 455px !important;
    line-height: 1.2;
    font-weight: normal;
  }
}
</style>
