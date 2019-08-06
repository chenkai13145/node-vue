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
                v-show="getScreen"
                @click="handleFold">
          <icon-svg name="menu-flod" :class="{'transform-rotate': true}"></icon-svg>
        </button>
        <!-- 折叠左侧 -->
        <!-- 运量统计 -->
        <TrafficStatistics :trafficData="trafficData"
                           :deliveryData="deliveryData"></TrafficStatistics>
        <!-- 运量统计 -->
        <!-- 公铁水占比 -->
        <TransportProportion :transportData="transportData"></TransportProportion>
        <!-- 公铁水占比 -->
        <!-- 线路统计 -->
        <LineStatistics :lineTotalData="lineTotalData"></LineStatistics>
        <!-- 线路统计 -->
        
      </div>
      <!-- 左侧 -->
      <!-- 地图图标切换 -->
        <MapIconSwitch :defaultMapTab="defaultMapTab"
                       @mapTab="mapTab" @mapSearch="mapSearch" @FilterSearchs="FilterSearchs" :hideSearch="hideSearch"></MapIconSwitch>
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
    <!-- 悬浮控件 -->
  </div>
</template>

<script>
import { BmlMarkerClusterer } from 'vue-baidu-map'
import TrafficStatistics from '../../components/monitoring/transport/traffic-statistics'
import TransportProportion from '../../components/monitoring/transport/transport-proportion'
import LineStatistics from '../../components/monitoring/transport/line-statistics'
import MapIconSwitch from '../../components/monitoring/transport/map-icon-switch'
import TopFiltration from '../../components/monitoring/transport/top-filtration'
import AggregationStat from '../../components/monitoring/full-capacity/aggregation-stat'
import { getMonitorByOrgCodeData, getLineNumberData, getTruckWaybilData } from '../../api/monitor/transport'
import TopAbnormalEvents from '../../components/monitoring/exception/top-abnormal-events'
import BaiduMap from '../../components/monitoring/transport/baidu-map'
import BottomTip from '../../components/monitoring/transport/bottomTip'
// import { mapGetters } from 'vuex'
import {historyLocation,getWayBillListInfo, getWayBillList, listByCondition} from '../../api/monitor/full-capacity'
export default {
  name: 'transport',
  components: {
    TrafficStatistics,
    TransportProportion,
    LineStatistics,
    MapIconSwitch,
    TopFiltration,
    BaiduMap,
    BottomTip,
    BmlMarkerClusterer,
    TopAbnormalEvents,
    AggregationStat
  },
  data () {
    return {
      // 是否显示搜索
      activeName: 'first',
      hideSearch: true,
      juheStatus: '聚合状态',
      statusTip: ['行驶', '静止', '离线'],
      // 地图
      markers: [
         {
          carnum: "京AKD517",
          type:1,
          latitude: 23.502771,
          num:55,
          state:3,
          longitude: 113.31361
        },
        {
          carnum: "京AKD517",
          type:1,
          latitude: 23.02771,
          num:55,
          state:3,
          longitude: 113.3361
        }
      ],
      // 运量统计数据量
      trafficData: {},
      // 交付数据
      deliveryData: [],
      transportData: [
         {
            value: 0,
            name: '陆运'
          },
          {
            value: 0,
            name: '铁运'
          },
          {
            value: 0,
            name: '水运'
          }
      ],
      // 线路统计数据
      lineTotalData: {},
      // 默认选中全部
      defaultMapTab: '全部',
      //地图条件查询
      mapQuery:{
        waybill_type:'',
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
    this.getMonitorByOrgCodeData()
    this.getLineNumberData ()
    this.getTruckWaybilData()
  },
  methods: {
    //地图标记点的点击事件
    trackOpen(data) {
      this.TrackPlaybackLayer = true
      this.historyLocation(data.carnum)
    },
    //车辆历史轨迹查询
    // historyLocation(data) {
    //   this.carnum = data
    //   this.getWayBillListInfo()
    //   this.getWayBillList()
    //   this.listByCondition()
    //   var data = {
    //     truck_no: this.carnum
    //   }
    //   historyLocation(data).then(res => {
    //     if(!res || res.length == 0) return
    //     this.trankData.markers = res
    //     this.showMap()
    //   });
    // },
    // 获取运量统计数据流
    getMonitorByOrgCodeData () {
      this.trafficData = {}
      getMonitorByOrgCodeData(this.mapQuery).then(res => {
        console.log(res)
        this.deliveryData = []
        this.transportData = []
        this.trafficData = res.data.monitor
        this.deliveryData.push(
          {
            name: '交付运量',
            value: res.data.monitor.finish_num ||0
          },
          {
            name: '及时交付运量',
            value: ((res.data.monitor.finish_num || 0) - (res.data.monitor.overtime_unsend_num || 0))
          }
        )
        this.transportData.push(
          {
            value: !res.data.monitor.car ? 0 : res.data.monitor.car,
            name: '陆运'
          },
          {
            value: !res.data.monitor.train ? 0 : res.data.monitor.train,
            name: '铁运'
          },
          {
            value: !res.data.monitor.ship ? 0 : res.data.monitor.ship,
            name: '水运'
          }
        )
        console.log('jiaohu',this.deliveryData)
        console.log('jiaohu',this.transportData)
      }).catch(error => {
        console.log(error)
      })
    },
    // 获取选中的地图类型名字
    mapTab (name, key) {
       this.mapQuery.waybill_type=name
       this.mapQuery.key=key
       this.getMonitorByOrgCodeData()
       this.getLineNumberData ()
       this.getTruckWaybilData()
    },
    //搜素
    mapSearch(num,val){
      this.mapQuery.waybill_type=num
      this.mapQuery.key=val
      this.getMonitorByOrgCodeData()
      this.getLineNumberData ()
      this.getTruckWaybilData()
        
    },
    //全局帅选
    FilterSearchs(data){
         for(let key in data){
            let arr=data[key].split(':')
            let keys=arr[0]
            this.mapQuery[keys]=arr[1]
         }
      this.getMonitorByOrgCodeData()
    this.getLineNumberData ()
    this.getTruckWaybilData()
    },
    // 折叠左侧
    handleFold () {
      this.fold = !this.fold
    },
    getLineNumberData() {
      this.lineTotalData = {}
      getLineNumberData(this.mapQuery).then(res => {
        console.log(res)

        if(res.data.data) {
          this.lineTotalData = res.data.data
        }
      }).catch(error => {

      })
    },
    getTruckWaybilData() {
      this.mapQuery.task=1
      this.markers = []
      getTruckWaybilData(this.mapQuery).then(res => {
        console.log(res)

        if(res.data.data.length > 0) {
          this.markers = res.data.data
        }
      }).catch(error => {

      })
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
    //查看该车历史轨迹
    // getWayBillList() {
    //   var data = {
    //     truck_no: this.carnum
    //   }
    //   getWayBillList(data).then(res => {
    //     this.trankData.trackPlaybackSelectData = res.data
    //   })
    // },
    //弹框——————异常
    listByCondition() {
      var data = {
        currPage: this.trankData.page.pageIndex,
        pageSize: this.trankData.page.pageSize,
        truck_no: this.carnum
      }
      listByCondition(data).then(res => {
        if(!res.page.list || res.page.list.length == 0) return
        this.trankData.indicateAbnormalityData = res.page.list 
        this.trankData.page.totalPage = res.page.totalPage;
        this.trankData.page.pageIndex = res.page.currPage
        this.trankData.page.pageSize = res.page.pageSize
        console.log(this.trankData.indicateAbnormalityData)
      })
    }
  },
  computed: {
  // fold: {
  //   get () { return this.$store.state.common.fold },
  //   set (val) { this.$store.commit('common/updataFold', val) }
  // },
  //   ...mapGetters(['true'])
  // }
  }
}
</script>

<style lang="scss" scoped>
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
.transform-rotate{
  transform:rotate(180deg);
}
</style>
