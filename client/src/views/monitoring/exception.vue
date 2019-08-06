<template>
  <div class="transport-wrapper">
    <!-- 悬浮控件 -->
    <div class="transport-control-wrap">
      <!-- 地图 -->
      <BaiduMap :markers="markers" @trackOpen="trackOpen" v-loading="loading"></BaiduMap>
      <!-- 地图 -->
      <!-- 左侧 -->
      <div
         class="transport-control-left"
        :class="{'transport-control-left-full-screen': true,'transport-control-left-full-fold':true && true}"
      >
        <!-- 折叠左侧 -->
        <button class="transport-control-left-fold" v-show="true" @click="handleFold">
          <icon-svg name="menu-flod" :class="{'transform-rotate': false}"></icon-svg>
        </button>
        <!-- 折叠左侧 -->
        <!-- 设备异常 -->
        <EquipmentException :exceptionData="exceptionData" :exceptionNum="exceptionNum"></EquipmentException>
        <!-- 设备异常 -->
        <!-- 异常事件 -->
        <AbnormalEvents :abnormalEventsData="abnormalEventsData" :eventsNum="eventsNum"></AbnormalEvents>
        <!-- 异常事件 -->
        <!-- 安全事件 -->
        <SecurityIncidents
          :securityPercentData="securityPercentData"
          :FatigueDrivingData="FatigueDrivingData"
          :RoadAlarmData="RoadAlarmData"
          :BadHabitsData="BadHabitsData"
          :ViolationData="ViolationData"
          :SecurityIncidentsNum="SecurityIncidentsNum"
        ></SecurityIncidents>
        <!-- 安全事件 -->
        <!-- 查看全部异常 -->
        <LookExceptions ref="LookException" @lookExceptions="lookExceptions"></LookExceptions>
        <!-- 查看全部异常 -->
      </div>
      <!-- 左侧 -->
      <!-- 顶部筛选部分 -->
      <TopFiltration @FilterSearchs="FilterSearchs" :hideSearch="hideSearch"></TopFiltration>
      <!-- 顶部筛选部分 -->
      <!-- 顶部异常事件 -->
      <!-- <TopAbnormalEvents :TrackPlaybackLayer="TrackPlaybackLayer" :trankData="trankData"></TopAbnormalEvents> -->
      <!-- 顶部异常事件 -->
      <!-- 底部异常事件 -->
      <div class="AggregationStatBox">
        <div class="statL">
          <i></i>异常事件点&nbsp;{{listTruckRiskData1}}
        </div>
        <div class="statR">
          <b></b>
          <span>
            <i style="background: #DC2633;"></i>高风险车&nbsp;{{listTruckRiskData2}}
          </span>
          <span>
            <i style="background: #F9702B;"></i>中风险车&nbsp;{{listTruckRiskData3}}
          </span>
          <span>
            <i style="background: #397BE2;"></i>低风险车&nbsp;{{listTruckRiskData4}}
          </span>
        </div>
      </div>
    </div>
    <!-- 悬浮控件 -->
  </div>
</template>

<script>
import { BmlMarkerClusterer } from "vue-baidu-map";
import EquipmentException from "../../components/monitoring/exception/equipment-exception";
import AbnormalEvents from "../../components/monitoring/exception/abnormal-events";
import SecurityIncidents from "../../components/monitoring/exception/security-incidents";
import LookExceptions from "../../components/monitoring/exception/look-exceptions";
import {historyLocation,getTruckUseByOrgCodeData,getWayBillListInfo, getWayBillList, listByCondition} from '../../api/monitor/full-capacity'
import TopFiltration from "../../components/monitoring/transport/top-filtration";
import TopAbnormalEvents from "../../components/monitoring/exception/top-abnormal-events";
import BaiduMap from "../../components/monitoring/exception/baidu-map";
// import { mapGetters } from "vuex";
import {openApiQueryEventList, listTruckRisk,stateListBy } from '../../api/monitor/exception'
import {
  listEventData,
  getOrderUnusualByOrderOrgCode
} from "../../api/monitor/exception";
export default {
  name: "exception",
  components: {
    EquipmentException,
    AbnormalEvents,
    SecurityIncidents,
    LookExceptions,
    TopFiltration,
    TopAbnormalEvents,
    BaiduMap,
    BmlMarkerClusterer
  },
  data() {
    return {
      
      trankData: {
        markers: [],//坐标参数
        playSpeed: ['慢速','正常','快速','极快'],
        carriageDetailsData: [],//承运明细
        page: {//承运明细的分页
          pageIndex: 1,
          pageSize: 20,
          totalPage: 0
        },
        trackPlaybackSelectData: [],//查看该车历史轨迹
        indicateAbnormalityData: [],//异常
      },
      indexs:0,
      // 隐藏搜索框
      hideSearch: false,
      // 地图
      markers: [
        // {
        //   carnum: "京AKD517",
        //   event_type: "11000",
        //   latitude: 23.502771,
        //   num:56,
        //   longitude: 113.31361
        // }
      ],
      // 设备异常
      exceptionNum: 30,
      exceptionData: {
        OffLine: 0,
        Weakignal: 0
      },
      // 异常事件数据
      eventsNum: 20,
      abnormalEventsData: [
        {
          id: 3,
          value: 120,
          name: "超时未发（次）"
        },
        {
          id: 4,
          value: 107,
          name: "超时未到（辆）"
        },
        {
          id: 5,
          value: 100,
          name: "提货晚点（辆）"
        },
        {
          id: 6,
          value: 112,
          name: "线路偏移（次）"
        }
      ],
      // 安全事项
      SecurityIncidentsNum: 0,
      // 疲劳驾驶
      FatigueDrivingData: [
        {
          value: 0,
          name: "注意力分散（次）"
        },
        {
          value: 0,
          name: "打哈欠（次）"
        },
        {
          value: 0,
          name: "闭眼（次）"
        },
        {
          value: 0,
          name: "频繁低头（次）"
        }
      ],
      // 路况报警
      RoadAlarmData: [
        {
          value: 0,
          name: "碰撞（次）"
        },
        {
          value: 0,
          name: "车道偏离（次）"
        },
        {
          value: 0,
          name: "车距过近（次）"
        }
      ],
      // 不良习惯
      BadHabitsData: [
        {
          value: 0,
          name: "急刹车（次）"
        },
        {
          value: 0,
          name: "玩手机（次）"
        }
      ],
      // 违规
      ViolationData: [
        {
          value: 0,
          name: "脱离监控（次）"
        },
        {
          value: 0,
          name: "抽烟（次）"
        },
        {
          value: 0,
          name: "超速（次）"
        },
        {
          value: 0,
          name: "未登签（次）"
        },
        {
          value: 0,
          name: "停车超时（次）"
        }
      ],
      // 安全事件环形比
      securityPercentData: [
        {
          value: 0,
          name: "疲劳驾驶"
        },
        {
          value: 0,
          name: "路况报警"
        },
        {
          value: 0,
          name: "不良习惯"
        },
        {
          value: 0,
          name: "违规"
        }
      ],
      // 默认选中全部
      defaultMapTab: "全部",
      // // 折叠左侧
      // fold: false,
      //地图条件查询
      mapQuery: {
        type: "",
        org_code: "",
        factory_code: "",
        factory_city_code: "",
        car_brand_code: ""
      },
      lookMap: [],//选择安全事件之后——查看地图
      listTruckRiskData1: '',
      listTruckRiskData2: '',
      listTruckRiskData3: '',
      listTruckRiskData4: '',
      carnum: '',//车牌号
      currPage: 1,//地图当前页
      pageSize: 1000,//地图每页数量
      pageTotal: 0,//地图总页数
      getAllTime: 0,//地图加载数次
      loading: false,
      stateException: '',
      TrackPlaybackLayer: false//打开轨迹弹框
    };
  },
  mounted() {
    // this.getTrafficData()
    this.stateListBy()
    this.getOrderUnusualByOrderOrgCode();
    this.listEventData();
    this.openApiQueryEventList()
    this.listTruckRisk()
  },
  methods: {
    //地图标记点的点击事件
    trackOpen(data) {
      this.TrackPlaybackLayer = true
      this.historyLocation(data.carnum)
    },
    //车辆历史轨迹查询
    historyLocation(data) {
      this.carnum = data
      this.getWayBillListInfo()
      this.getWayBillList()
      this.listByCondition()
      var data = {
        truck_no: this.carnum
      }
      historyLocation(data).then(res => {
        if(!res || res.length == 0) return
        this.trankData.markers = res
        this.showMap()
      });
    },
    // 折叠左侧
    handleFold() {
      this.fold = !this.fold;
    },
    //设备异常
    stateListBy() {
      stateListBy({}).then(res => {
        console.log(res)
        if(!res.data.data) {return}
        this.exceptionData.OffLine = res.data.data.breakNum
        this.exceptionData.Weakignal = res.data.data.weakNum
      })
    },
    //异常事件
    getOrderUnusualByOrderOrgCode() {
      getOrderUnusualByOrderOrgCode(this.mapQuery).then(res => {
        console.log(res)
        this.abnormalEventsData[0].value = res.data.data[0].overtime_unsend_num;
        this.abnormalEventsData[1].value = res.data.data[0].overtime_unfinish_num;
        this.abnormalEventsData[2].value = res.data.data[0].plan_deliver;
        this.abnormalEventsData[3].value = 0;
        this.eventsNum=0
        for(var i=0;i<this.abnormalEventsData.length;i++){
           this.eventsNum+=this.abnormalEventsData[i].value
        }
      });
    },
    //安全事件
    listEventData() {
      listEventData(this.mapQuery).then(res => {
        console.log(res)
        res.data.data.forEach(data => {
          //疲劳驾驶
          if (data.event_type == "41003") {
            this.FatigueDrivingData[0].value = data.num;
          } 
          if (data.event_type == "41002") {
            this.FatigueDrivingData[1].value = data.num;
          } 
          if (data.event_type == "41001") {
            this.FatigueDrivingData[2].value = data.num;
          }
          if (data.event_type == "41009") {
            this.FatigueDrivingData[3].value = data.num;
          } 
          //路况报警
          if (data.event_type == "30000") {
            this.RoadAlarmData[0].value = data.num;
          }
          if (data.event_type == "30002") {
            this.RoadAlarmData[1].value = data.num;
          } 
          if (data.event_type == "30005") {
            this.RoadAlarmData[2].value = data.num;
          } 
          //不良习惯
          if (data.event_type == "10091") {
            this.BadHabitsData[0].value = data.num;
          } 
          if (data.event_type == "41023") {
            this.BadHabitsData[1].value = data.num;
          }
          //违规
          if (data.event_type == "41006") {
            //左顾右盼没得数字
            this.ViolationData[0].value = data.num;
          } 
          if (data.event_type == "41005") {
            this.ViolationData[1].value = data.num;
          } 
          if (data.event_type == "11011") {
            this.ViolationData[2].value = data.num;
          } 
          if (data.event_type == "50002") {
            this.ViolationData[3].value = data.num;
          }
          if (data.event_type == "11000") {
            this.ViolationData[4].value = data.num;
          } 
        });
      });
    },
    //查看选择
    lookExceptions(data) {
      this.lookMap = data
      this.mapQuery.type = data;
      this.getOrderUnusualByOrderOrgCode();
      this.listEventData();
      this.openApiQueryEventList();
        this.listTruckRisk()
    },
    //全局帅选
    FilterSearchs(data) {
      for (let key in data) {
        let arr = data[key].split(":");
        let keys = arr[0];
        this.mapQuery[keys] = arr[1];
      }
       this.getOrderUnusualByOrderOrgCode();
       this.listEventData();
       this.openApiQueryEventList()
       this.listTruckRisk()
    },
    //承运明细
    getWayBillListInfo() {
      var data = {
        currPage: this.trankData.page.pageIndex,
        pageSize: this.trankData.page.pageSize
      }
      getWayBillListInfo(data).then(res => {
        this.trankData.carriageDetailsData = res.page.list
        this.trankData.page.totalPage = res.page.totalPage;
        this.trankData.page.pageIndex = res.page.currPage
        this.trankData.page.pageSize = res.page.pageSize
      })
    },
    // //查看该车历史轨迹
    // getWayBillList() {
    //   var data = {
    //     truck_no: this.carnum
    //   }
    //   getWayBillList(data).then(res => {
    //     this.trankData.trackPlaybackSelectData = res.data
    //   })
    // },
    // //弹框——————异常
    // listByCondition() {
    //   var data = {
    //     currPage: this.trankData.page.pageIndex,
    //     pageSize: this.trankData.page.pageSize,
    //     truck_no: this.carnum
    //   }
    //   listByCondition(data).then(res => {
    //     if(!res.page.list || res.page.list.length == 0) return
    //     this.trankData.indicateAbnormalityData = res.page.list 
    //     this.trankData.page.totalPage = res.page.totalPage;
    //     this.trankData.page.pageIndex = res.page.currPage
    //     this.trankData.page.pageSize = res.page.pageSize
    //     console.log(this.trankData.indicateAbnormalityData)
    //   })
    // },
    //地图信息
    openApiQueryEventList() {
      var data = {
        currPage: this.currPage,
        pageSize: this.pageSize
      }
      let _this = this
      if(this.lookMap.length > 0) {
        data = {
          event_type: this.lookMap,
          currPage: this.currPage,
          pageSize: this.pageSize
        }
      }
      _this.loading = true
      openApiQueryEventList(data).then(res => {
        console.log(res)
        if(!res.data.data.list || res.data.data.list.length > 0) {
          //_this.pageTotal = Math.ceil(data.totalCount * 1 / data.pageSize)
          _this.markers = _this.markers.concat(res.data.data[0].list)
          _this.loading = false
          console.log(_this.markers)
          _this.pageTotal = res.data.data[0].totalPage
          if(_this.pageTotal == 0 || _this.pageTotal == _this.getAllTime) {
            //加载完成
          } else if(res.data.data[0].currPage < _this.pageTotal && res.data.data[0].currPage == 1) {
            for(var i = 2; i <= _this.pageTotal; i++) {
              _this.currPage = i
              _this.getAllTime = i
              _this.openApiQueryEventList()
            }
          }
          
        } else {
          _this.markers = []
        }
      })
    },
    //风险总数
    listTruckRisk() {
      let _this = this
      listTruckRisk(this.mapQuery).then(res => {
        console.log(res)
        if(!res.data.data || res.data.data.length == 0) return
        res.data.data.forEach(item => {
          if(item.level == 0) {
            _this.listTruckRiskData4 = item.num
          } else if(item.level == 1) {
            _this.listTruckRiskData3 = item.num
          } else if(item.level == 2) {
            _this.listTruckRiskData2 = item.num
          } else {
            _this.listTruckRiskData1 = item.num
          }
        })
      })
    }
  },
  computed: {
    // fold: {
    //   get () { return this.$store.state.common.fold },
    //   set (val) { this.$store.commit('common/updataFold', val) }
    // },
    // ...mapGetters(["getScreen"])
  },
  created() {
    this.mapQuery.type = this.$route.query.name||''
    this.$nextTick(()=>{
    if(this.$route.query.name){
          if(this.$route.query.name.indexOf(',')){
            this.$refs.LookException.checkedNames.push(this.$route.query.name.split(',')[0])
            this.$refs.LookException.checkedNames.push(this.$route.query.name.split(',')[1])
        }else{
         this.$refs.LookException.checkedNames.push(this.$route.query.name)
        }
       }else{
         this.$refs.LookException.checkedNames=[]
       }
    })
  },
  watch: {
    $route(to, from) {
      if (to.path === "/monitoring-exception") {
        if(this.indexs==='1') return;
        if(!this.$route.query.name){this.$refs.LookException.checkedNames=[]}
          this.mapQuery.type = this.$route.query.name||''
          this.indexs=1
          this.$refs.LookException.checkedNames.push(this.$route.query.name)
          this.getOrderUnusualByOrderOrgCode()
          this.listEventData()
      }else{
          this.$refs.LookException.checkedNames=[]
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import url('../../../public/css/reset.css');

.transport-wrapper {
  .gac-button-filtrate{
    display:none !important;
  }
  height: 100%;
  position: relative;
  margin-left: 460px;
  margin-top: 40px;
  background-color: #efefef;
}
.transport-control-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.transport-control-left {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 20px;
  transition: left 0.5s ease;
}
.transport-control-left-full-screen {
  background: rgba(32, 32, 32, 0.13);
}
.transport-control-left-fold {
  position: absolute;
  top: 50%;
  right: -17px;
  width: 17px;
  height: 34px;
  margin-top: -17px;
  outline: none;
  background-color: rgba(32, 32, 32, 0.13);
  border-radius: 0 34px 34px 0;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  .icon-svg {
    font-size: 16px;
    margin-left: -14px;
    color: #84849a;
  }
}
.transport-control-left-full-fold {
  left: -318px;
}
</style>
<style lang="scss" scoped>
.AggregationStatBox {
  position: absolute;
  bottom: 36px;
  left: 0;
  right: 0;
  margin: auto;
  height: 36px;
  width: 580px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: PingFangSC-Regular;
  font-size: 13px;
  color: #39394d;
  letter-spacing: 0;
  box-shadow: 0 3px 4px 0 rgba(98, 99, 118, 0.08);
  i {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 999px;
    margin: 0 6px 0 26px;
  }
  .statL {
    display: flex;
    align-items: center;
    i {
      background: url("../../assets/monitoring/ic_map_origin.png")
      // background: url("../../../../static/img/monitoring/ic_map_origin.png")
        center center no-repeat !important;
      background-size: 100%;
      display: block;
      width: 11px;
      height: 15px;
    }
  }
  .statR {
    display: flex;
    position: relative;
    width: 415px;
    justify-content: space-around;
    padding-right: 10px;
    span {
      display: flex;
      align-items: center;
    }
    b {
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 1px;
      height: 20px;
      background: #e0e0eb;
      margin: auto;
    }
  }
}
.transform-rotate{
  transform:rotate(180deg);
}
</style>