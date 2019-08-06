<template>
  <div class="transport-wrapper">
    <!-- 悬浮控件 -->
    <div class="transport-control-wrap">
      <!-- 地图 -->
      <BaiduMap :markers="markers" @trackOpen="trackOpen"></BaiduMap>
      <!-- 地图 -->
      <!-- 左侧 -->
      <div class="transport-control-left"
           :class="{'transport-control-left-full-screen': true,'transport-control-left-full-fold':true && true}">
        <!-- 折叠左侧 -->
        <button class="transport-control-left-fold"
                v-show="true"
                @click="handleFold">
          <icon-svg name="menu-flod" :class="{'transform-rotate': true}"></icon-svg>
        </button>
        <!-- 折叠左侧 -->
        <!-- 陆运运力 -->
        <TrafficCapacityStatistics :transportData="transportData"></TrafficCapacityStatistics>
        <!-- 陆运运力 -->
        <!-- 承运板车 -->
        <CarrierScooter :transportData2="transportData2"></CarrierScooter>
        <!-- 承运板车 -->
        <!-- 自有板车利用情况 -->
        <FreeScooter :transportData3="transportData3"></FreeScooter>
        <!-- 自有板车利用情况 -->
        <!-- 运输中外协占比 -->
        <TransportationShare :transportData4="transportData4"></TransportationShare>
        <!-- 运输中外协占比 -->
      <!-- 左侧 -->
        
      </div>
      <MapIconSwitch :defaultMapTab="defaultMapTab"
                       @mapTab="mapTab" @mapSearch="mapSearch"  @FilterSearchs="FilterSearchs" :hideSearch="hideSearch"></MapIconSwitch>
        <!-- 地图图标切换 -->
      <!-- 顶部筛选部分 -->
      <!-- <TopFiltration @mapSearch="mapSearch" @FilterSearchs="FilterSearchs" :hideSearch="hideSearch"></TopFiltration> -->
      <!-- 顶部筛选部分 -->
       <!-- 顶部异常事件 -->
      <!-- <TopAbnormalEvents :TrackPlaybackLayer="TrackPlaybackLayer" :trankData="trankData"></TopAbnormalEvents> -->
      <!-- 顶部异常事件 -->
       <!--底部提示-->
      <bottom-tip :juheStatus="juheStatus" :tipStatus="statusTip"></bottom-tip>
      <!--底部提示-->
    </div>
  </div>
</template>

<script>
import TrafficCapacityStatistics from '@/components/monitoring/full-capacity/traffic-capacity-statistics'
import CarrierScooter from '@/components/monitoring/full-capacity/carrier-scooter'
import FreeScooter from '@/components/monitoring/full-capacity/free-scooter'
import TransportationShare from '@/components/monitoring/full-capacity/transportation-share'
// import TopFiltration from '@/components/monitoring/transport/top-filtration'
import MapIconSwitch from '@/components/monitoring/full-capacity/map-icon-switch'
import TopAbnormalEvents from '@/components/monitoring/exception/top-abnormal-events'
import BaiduMap from '@/components/monitoring/full-capacity/baidu-map'
import AggregationStat from '@/components/monitoring/full-capacity/aggregation-stat'
// import {historyLocation,getTruckUseByOrgCodeData, getWayBillListInfo, getWayBillList, listByCondition} from '../../api/monitor/full-capacity'
import {getTruckUseByOrgCodeData} from '../../api/monitor/full-capacity'
import {getTruckWaybilData} from '../../api/monitor/transport'
import { mapGetters } from 'vuex'
import BottomTip from '@/components/monitoring/transport/bottomTip'
export default {
  name: 'transport',
  components: {
    TrafficCapacityStatistics,
    CarrierScooter,
    FreeScooter,
    TransportationShare,
    // TopFiltration,
    MapIconSwitch,
    BaiduMap,
    // TopAbnormalEvents,
    AggregationStat,
    BottomTip
  },
  data () {
    return {
      // 是否显示搜索框
      hideSearch: true,
      juheStatus: '聚合状态',
      statusTip: ['行驶', '静止', '离线'],
      // 地图
      markers : [],
      // 陆运运力满足度
      transportData: [
        {
          value: 0,
          name: '使用中板位'
        },
        {
          value: 0,
          name: '待发板位'
        },
        {
          value: 0,
          name: '剩余板位'
        }
      ],
      // 承运板车
      transportData2: [
        {
          value: 0,
          name: '6位半挂车'
        },
        {
          value: 0,
          name: '7位半挂车'
        },
        {
          value: 0,
          name: '8位中置轴车'
        }
      ],
      // 自由板车利用情况
      transportData3: [
        {
          value: 0,
          name: '使用中'
        },
        {
          value: 0,
          name: '未使用'
        }
      ],
      // 运输中外协占比
      transportData4: [
        {
          value: 0,
          name: '外协板车'
        },
        {
          value: 0,
          name: '自有板车'
        }
      ],
      // 默认选中全部
      defaultMapTab: '全部',
      // 折叠左侧
      // fold: false,
      //地图条件查询
      mapQuery:{
        task:'',
        key:'',
        org_code:'',
        factory_code:'',
        factory_city_code:'',
        car_brand_code:'',
      },
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
      carnum: '',//车牌号
      TrackPlaybackLayer: false//打开轨迹弹框
    }
  },
  mounted () {
    // this.getTrafficData()
    this.getTruckUseByOrgCodeData()
    this.getTruckWaybilData()
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
    // 获取运量统计数据流
    getTrafficData () {
      getTrafficData(this.mapQuery).then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
    },
    //获取板车运力统计
    getTruckUseByOrgCodeData() {
      getTruckUseByOrgCodeData(this.mapQuery).then(res => {
        
     
      this.transportData3 = []
      this.transportData=[]
      this.transportData2=[]
      this.transportData4=[]
        console.log(res)
        if(res.data.data) {
          
          this.transportData.push(
            {
              value: res.data.data[0].start ? res.data.data[0].start : 0,
              name: '使用中板位'
            },
            {
              value: res.data.data[0].plan ? res.data.data[0].plan : 0,
              name: '待发板位'
            },
            {
              value: res.data.data[0].finish ? res.data.data[0].finish : 0,
              name: '剩余板位'
            }
          )
          this.transportData2.push(
            {
              value: res.data.data[0].amount6 ? res.data.data[0].amount6 : 0,
              name: '6位半挂车'
            },
            {
              value: res.data.data[0].amount7 ? res.data.data[0].amount7 : 0,
              name: '7位半挂车'
            },
            {
              value: res.data.data[0].amount8 ? res.data.data[0].amount8 : 0,
              name: '8位中置轴车'
            }
          )
          this.transportData3.push(
            {
              value: res.data.data[0].ownStart ? res.data.data[0].ownStart : 0,
              name: '使用中'
            },
            {
              value: res.data.data[0].ownFinish ? res.data.data[0].ownFinish : 0,
              name: '未使用'
            }
          )
          this.transportData4.push(
            {
              value: res.data.data[0].outerTotal ? res.data.data[0].outerTotal : 0,
              name: '外协板车'
            },
            {
              value: res.data.data[0].ownTotal ? res.data.data[0].ownTotal : 0,
              name: '自有板车'
            }
          )
          console.log(this.transportData)
          console.log(this.transportData2)
          console.log(this.transportData3)
          console.log(this.transportData4)
        }
      })
    },
    getTruckWaybilData() {
        console.log('地图')
      this.markers = []
      getTruckWaybilData(this.mapQuery).then(res => {
        console.log('地图')
        console.log(res)
        if(res.data.data.length > 0) {
          this.markers = res.data.data
        } 
      }).catch(error => {

      })
    },
    // 获取选中的地图类型名字
    mapTab (name, key) {
      this.mapQuery.task=name
      this.mapQuery.key=key
      this.getTruckUseByOrgCodeData()
      this.getTruckWaybilData()
    },
    // 折叠左侧
    handleFold () {
      this.fold = !this.fold
    },
     //搜素
    mapSearch(num,val){
      this.mapQuery.task=num
      this.mapQuery.key=val
      this.getTruckUseByOrgCodeData()
      this.getTruckWaybilData()
        
    },
    //全局帅选
    FilterSearchs(data){
      for(let key in data){
        let arr=data[key].split(':')
        let keys=arr[0]
        this.mapQuery[keys]=arr[1]
        }
        this.getTruckUseByOrgCodeData()
        this.getTruckWaybilData()
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
    // }
  },
  computed: {
    // fold: {
    //   get () { return this.$store.state.common.fold },
    //   set (val) { this.$store.commit('common/updataFold', val) }
    // },
    // ...mapGetters(['true'])
  }
}
</script>

<style lang="scss" scpoed>
@import url('../../../public/css/reset.css');

.transport-wrapper {
  height: 100%;
  margin-left: 468px;
  margin-top: 40px;
  position: relative;
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
  // margin-right: 20px;
  transition: left 0.5s ease;
  box-shadow: 0 3px 4px 0 rgba(98,99,118,0.08);
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
// 地图
.bm-view {
width: 100%;
height: 100%;
}
.BMap_stdMpSlider,.BMap_zlHolder.hvr{
  display: none!important;
}
.BMap_stdMpZoom{
  position: fixed!important;
  bottom: 100px;
  top: auto!important;
  height: 60px!important;
}
.BMap_stdMpPan{display: none}
.BMap_stdMpZoomOut{top:18px!important;}
.BMap_cpyCtrl.BMap_noprint.anchorBL,.anchorBL{
   display: none;
}
.BMapLabel{
  font-size:14px;
  color:#333;
  border-radius:4px;
  border:1px solid #ccc!important;
  background: #fff!important;
  padding: 2px 5px!important;
}

.statisticsList{
  border-top:1px dashed #e0e0eb; 
}
.transform-rotate{
  transform:rotate(180deg);
}
</style>
