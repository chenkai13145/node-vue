<template>
  <div class="abnomal-wrap">
    <div class="top-abnormal">
      <div class="abnormal-title">
        <img style="width:30px;margin-right:10px" src="../../../assets/monitoring/ic_title_abnormal.png"><span>异常事件</span>
      </div>
      <div class="abnomal-num"   @click="toggleShow"><span style="font-size:16px;">{{abnomalData.length}}</span>次<img :class="{ 'arrow': toggle}" style="width:16px;margin-left:5px;" src="static/img/monitoring/ic_bottom.png"></div>
    </div>
    <div v-show="toggle" class="abnormal-con">
      <ul class="abnormal-list" v-show="hasDate">
        <li v-for="(item,index) in abnomalData" :key="index">
          <p class="date-box">{{item.start_time.split(' ')[0]}}</p>
          <p class="time-box">{{item.start_time.split(' ')[1]}}</p>
          <div class="con-box" @click="closeBtn(item)">
            <div class="tit-box">{{item.name}}</div>
            <div class="text-box">{{item.carnum+' 车辆'+ item.name + '请注意安全'}}</div>
          </div>
        </li>
      </ul>
      <ul class="abnormal-list no-data" v-show="noDate">
        <li style="text-align:center"  @click="closeBtn">暂无数据</li>
      </ul>
    </div>
    <!---轨迹回放-->
    <div class="TrackPlaybackLayer" v-show="TrackPlaybackLayer">
      <div class="bg"></div>
      <div class="TrackPlaybackCon">
         <div class="TrackPlaybackHead">
           <div class="headCon">
            <span class="title">轨迹回放</span>
            <!-- <div style="margin-right: 10px;width: 40%;">
              <el-select v-model="trackSelect" placeholder="请选择">
                <el-option
                  v-for="item in trankData.trackPlaybackSelectData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div> -->
            <el-dropdown @command="selectChange"> 
              <span class="el-dropdown-link">
                {{trackSelect ? trackSelect : '查看该车历史轨迹'}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item  v-for="(items,index) in trankData.trackPlaybackSelectData" :key="index" :command="items">
                  <span style="font-size: 12px;color: #39394D;">{{items.starttime +'至'+ items.finishtime}}</span>
                  <span style="font-size: 12px;color: #84849A;margin-left:10px;">{{'运单号：'+items.waybill_id}}</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <div style="font-size: 12px;color: #39394D" v-show="showData">运单号:{{showData ? showData.waybill_id : ''}}</div>
            <img style="margin:0 24px;height:23px;" v-show="showData" src="../../../assets/monitoring/lineBg.png">
            <div style="font-size: 12px;color: #39394D" v-show="showData">{{showData ? showData.from_addr_city : ''}}<img src="../../../assets/monitoring/left.png">{{showData ? showData.to_addr_city : ''}}</div>
           </div>
           <span class="el-icon-close" style="font-size: 24px;" @click="closeBtn"></span>
         </div>
         <div class="TrackPlaybackBody">
            <div class="BodyL">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="运行轨迹" name="first">
                  <div class="conBox">
                    <div v-for="(item,index) in TrajectoryData" :key="index">
                      <div class="dateTit">{{item.dateTit}}</div>
                      <div class="line">
                        <div class="lineTit">{{item.lineTit}}</div>
                        <div class="lineCon">{{item.lineCon}}</div>
                        <div class="lineTime">{{item.lineTime}}</div>
                      </div>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="异常提示" name="second">
                  <div class="conBox">
                    <div v-for="(item,index) in trankData.indicateAbnormalityData" :key="index">
                      <div class="dateTit">{{item.start_time ? (item.start_time.split(' ')[0].split('-')[0] + '/' + item.start_time.split(' ')[0].split('-')[1]) : ''}}</div>
                      <div class="line">
                        <div class="lineTit">{{item.event_type}}</div>
                        <div class="lineCon">{{item.lineCon}}</div>
                        <div class="lineTime">{{item.endtime ? item.endtime.split(' ')[1] : ''}}</div>
                      </div>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane name="third">
                  <span slot="label">
                    <span>承运明细</span>
                    <span class="number">(1/2)</span></span>
                    <div class="conBox">
                      <ul class="CarriageDetailsList">
                        <li v-for="(item,index) in trankData.carriageDetailsData" :key="index">
                          <div class="title">VIN码：{{item.car_vin}}</div>
                          <div class="carModel"><span>{{item.code_name}}</span><span></span>车型：{{item.factory_code}}</div>
                          <div class="addr"><span>4s店：</span><span>{{item.fours}}</span></div>
                          <div class="notice"><span>出发晚点</span><span>计划：{{item.plan_deliver_time}}</span></div>
                        </li>
                      </ul>
                    </div>
                </el-tab-pane>
              </el-tabs>
              <div class="PaginationBox">
                <el-pagination
                  background
                  @size-change="sizeChangeHandle"
				          @current-change="currentChangeHandle"
                  layout="prev, pager, next"
                  :pager-count="9"
                  :current-page="trankData.page.pageIndex"
                  :page-size="trankData.page.pageSize"
                  :total="trankData.page.totalPage">
                </el-pagination>
              </div>
            </div>
            <div class="BodyR">
              <!-- <BaiduMap :markers="markers"></BaiduMap> -->
              <div id="controller" align="center">  
                <!-- <input id="follow" type="checkbox"><span style="font-size:12px;">画面跟随</span></input>   -->
                <div class="trank-div">
                  <div class="trank-play">
                    <div id="play" class="tipicon" @click="play" v-show="!isplay">
                      <!-- <img src="~@/assets/img/ic_play.png" width='40' style="margin-left: 2px;" /> -->
                    </div>
                    <div id="pause" class="tipicon" @click="pause" v-show="isplay">
                      <!-- <img src="~@/assets/img/ic_pause.png" width='40' /> -->
                    </div>
                    <!-- <input  type="button" value="播放"  disabled />   -->
                  </div>
                  <div class="trank-pross">
                    <el-progress :percentage="percentage" :color="customColor" :show-text="false"></el-progress>
                    <div class="trank-time">
                      <span>53454</span>
                      <span>5454</span>
                    </div>
                  </div>
                  <div class="trank-forward">
                    <span class="tacnk-speed" v-for="(item, ind) in trankData.playSpeed" :key="ind" 
                        @click="playSpeed(ind)"
                        :class="{active:ind==count}">{{item}}
                      <span></span>
                    </span> 
                  </div>
                </div>
              </div> 
              <div id="allmapTop"></div>
              <!-- <div v-show="this.activeName == 'first' ">
              </div>
              <div v-show="this.activeName == 'second' ">
              </div>
              <div v-show="this.activeName == 'third'">
              </div> -->
              <div class="top-box" v-show="showData">
                <div class="top-box-tit">{{showData ? showData.truck_no : ''}}</div>
                <div class="top-box-con">
                  <div>
                    <span class="lable">司机</span>
                    <span class="value">{{showData ? showData.name : ''}}</span>
                  </div>
                  <div>
                    <span class="lable">电话</span>
                    <span class="value">{{showData ? showData.mobile : ''}}</span>
                  </div>
                  <div>
                    <span class="lable">承运公司</span>
                    <span class="value">{{showData ? showData.sub_org_name : ''}}</span>
                  </div>
                </div>
              </div>
              <div class="video-btn">
                <!-- <img src="static/img/monitoring/video_03.png"> -->
                <img  @click="videoBtn" src="../../../assets/monitoring/video_05.png">
              </div>
              <div class="videoBox" v-show="videoHide">
                <el-carousel trigger="click" :autoplay="false" height="220px" class="video-outside">
                  <el-carousel-item v-for="item in 2" :key="item">
                      <video id="myPlayer" poster="" controls playsInline webkit-playsinline autoplay></video>
                      <span @click="videoBtn" class="closeVideobtn el-icon-close" style="font-size: 24px;color:#fff"></span>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import GacButtonFiltrate from '../../../components/common/gac-button-filtrate'
import { listCarnumEvent } from '../../../utils/api/monitoring/exception'
import BaiduMap from '../../../components/monitoring/full-capacity/baidu-map'
// import { delimiter } from 'path';
import {historyLocation,getWayBillListInfo, getWayBillList, listByCondition,getG7CodeByTruckNo} from '../../../utils/api/monitoring/full-capacity'

export default {
  name: 'top-filtration',
  components: {
    GacButtonFiltrate,
    BaiduMap
  },
  props: {
    hideSearch: Boolean,
    trankData: {
      type: Object,
      required: true
    },
    TrackPlaybackLayer: Boolean
  },
  
  data () {
    return {
      videoHide: false,
      player: Function,
      cItem:'http://gcqq450f71eywn6bv7u.exp.bcevod.com/mda-hbqagik5sfq1jsai/mda-hbqagik5sfq1jsai.mp4',
     
      customColor: '#fff',
      carriageDetailsData: [],
      markers : [],
      // TrackPlaybackLayer: false,
      // 时间线
        TrajectoryData: [
            {
            dateTit:'09/24',
            lineTit: '出发',
            lineCon: '离开成都市',
            lineTime:'22:12'
          }, {
            lineTit: '出发',
            lineCon: '离开成都市',
            lineTime:'22:12'
          }, {
            dateTit:'09/25',
            lineTit: '出发',
            lineCon: '离开成都市',
            lineTime:'22:12'
          }, {
            dateTit:'09/25',
            lineTit: '出发',
            lineCon: '离开成都市',
            lineTime:'22:12'
          }, {
            dateTit:'09/25',
            lineTit: '出发',
            lineCon: '离开成都市',
            lineTime:'22:12'
          }],
          IndicateAbnormalityData: [{
            dateTit:'09/24',
            lineTit: '出发',
            lineCon: '离开成都市',
            lineTime:'22:12'
          }, {
            lineTit: '出发',
            lineCon: '离开成都市',
            lineTime:'22:12'
          }, {
            dateTit:'09/25',
            lineTit: '出发',
            lineCon: '离开成都市',
            lineTime:'22:12'
          }, {
            dateTit:'09/25',
            lineTit: '出发',
            lineCon: '离开成都市',
            lineTime:'22:12'
          }, {
            dateTit:'09/25',
            lineTit: '出发',
            lineCon: '离开成都市',
            lineTime:'22:12'
          }
        ],
      // 查看该车历史轨迹
      activeName: 'first',
      trackPlaybackSelectData: [],
      trackSelect: '',
      selectValue: '',
      showData: '',//切换历史轨迹更改数据显示
      toggle: false,
      noDate:true,
      hasDate:true,
      abnomalData: [],
      points: [],
      percentage: 0,
      customColor: '#409eff',
      carnum: '',//车牌号
      map: '',//百度地图对象  
      car: '', //汽车图标 
      label: '',//信息标签 
      myIcon: '',//标记的图标
      centerPoint: '',
      timer: '', //定时器  
      index: 0,//记录播放到第几个point
      speedTime: 500,//时间  
      count: 1,
      isplay: false,
      isplayCover: false//是否播放完
    }
  },
  mounted() {
    this.listCarnumEvent()
    this.playVideo()
    this.map = new BMap.Map("allmapTop"); 
    //this.map.setMapStyle({style:'grayscale'});
    var point = new BMap.Point(116.404, 39.915);
    // 创建点坐标
    this.map.centerAndZoom(point, 15);
    // 地图样式
    this.map.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}));
      this.map.setMapStyle({
        styleJson:[
                    {
                      "featureType": "all", 
                      "elementType": "all", 
                      "stylers": {
                        "lightness": 10, 
                        "saturation": -45
                      }
                    }, 
                    {
                      "featureType": "highway", 
                      "elementType": "geometry.fill", 
                      "stylers": {
                        "color": "#b5bcd6ff", 
                        "lightness": 42
                      }
                    }, 
                    {
                      "featureType": "highway", 
                      "elementType": "geometry.stroke", 
                      "stylers": {
                        "color": "#a3a8bdff"
                      }
                    }, 
                    {
                      "featureType": "green", 
                      "elementType": "geometry.fill", 
                      "stylers": {
                        "color": "#daf1e8ff", 
                        "saturation": -36
                      }
                    }, 
                    {
                      "featureType": "water", 
                      "elementType": "geometry.fill", 
                      "stylers": {
                        "color": "#81c3ffff", 
                        "lightness": 55, 
                        "saturation": -55
                      }
                    }, 
                    {
                      "featureType": "boundary", 
                      "elementType": "geometry", 
                      "stylers": {
                        "color": "#dcddeaff"
                      }
                    }, 
                    {
                      "featureType": "land", 
                      "elementType": "geometry.fill", 
                      "stylers": {
                        "color": "#eaebf2ff", 
                        "saturation": -66
                      }
                    }, 
                    {
                      "featureType": "road", 
                      "elementType": "labels.text.fill", 
                      "stylers": {
                        "saturation": -100
                      }
                    }, 
                    {
                      "featureType": "poilabel", 
                      "elementType": "labels.text.fill", 
                      "stylers": {
                        "color": "#8b9196ff", 
                        "saturation": -100
                      }
                    }, 
                    {
                      "featureType": "subway", 
                      "elementType": "labels.icon", 
                      "stylers": {
                        "visibility": "off"
                      }
                    }, 
                    {
                      "featureType": "subway", 
                      "elementType": "geometry", 
                      "stylers": {
                        "visibility": "off"
                      }
                    }, 
                    {
                      "featureType": "manmade", 
                      "elementType": "geometry.fill", 
                      "stylers": {
                        "visibility": "off"
                      }
                    }, 
                    {
                      "featureType": "building", 
                      "elementType": "all", 
                      "stylers": {
                        "visibility": "off"
                      }
                    }, 
                    {
                      "featureType": "arterial", 
                      "elementType": "geometry.fill", 
                      "stylers": {
                        "color": "#dcddeaff"
                      }
                    }, 
                    {
                      "featureType": "arterial", 
                      "elementType": "geometry.stroke", 
                      "stylers": {
                        "color": "#c1c3d1ff"
                      }
                    }, 
                    {
                      "featureType": "poilabel", 
                      "elementType": "labels.icon", 
                      "stylers": {
                        "visibility": "off"
                      }
                    }, 
                    {
                      "featureType": "administrative", 
                      "elementType": "all", 
                      "stylers": {
                        "saturation": -87
                      }
                    }, 
                    {
                      "featureType": "district", 
                      "elementType": "labels.text.fill", 
                      "stylers": {
                        "color": "#7a7a7aff"
                      }
                    }, 
                    {
                      "featureType": "district", 
                      "elementType": "labels.text.stroke", 
                      "stylers": {
                        "color": "#ffffffff", 
                        "saturation": -100
                      }
                    }, 
                    {
                      "featureType": "poilabel", 
                      "elementType": "all", 
                      "stylers": { }
                    }, 
                    {
                      "featureType": "manmade", 
                      "elementType": "labels", 
                      "stylers": {
                        "saturation": -100
                      }
                    }, 
                    {
                      "featureType": "highway", 
                      "elementType": "labels.text.stroke", 
                      "stylers": {
                        "color": "#dfe6ffff"
                      }
                    }
                  ]
      })
  },
  // 视频
   watch:{
        item:function(newVal,oldVal){
            this.cItem = newVal;  //newVal即是item
            this.playVideo()   
        }
    },
    beforeDestroy(){
        //this.player.remove();
    },
    // 实例销毁后移除所有的监听器，解绑全部指令及监视器,防止音频犹存
	destroyed() {
	    this.$off();
	    this.$destroy();
  },
  methods:{
    //车辆历史轨迹查询
    historyLocation(data) {
      this.getWayBillListInfo()
      this.getWayBillList()
      this.listByCondition()
      this.carnum = data
      var data = {
        plate_num: this.carnum
      }
      historyLocation(data).then(res => {
        if(!res || res.length == 0) return
        this.trankData.markers = res
        this.showMap()
      });
    },
    // 承运明细 -- 每页数
    sizeChangeHandle (val) {
      this.trankData.page.pageSize = val
      this.trankData.page.pageIndex = 1

      this.handleClick()
    },
    // 承运明细 -- 当前页
    currentChangeHandle (val) {
      this.trankData.page.pageIndex = val
      this.handleClick()
    },
    //承运明细
    getWayBillListInfo() {
      var data
      if(this.selectValue.waybill_id) {
        //选中车辆历史轨迹刷新承运明细
        data = {
          currPage: this.trankData.page.pageIndex,
          pageSize: this.trankData.page.pageSize,
          waybill_id: this.selectValue.waybill_id,
          truck_no: this.carnum
        }
      } else {
        data = {
          currPage: this.trankData.page.pageIndex,
          pageSize: this.trankData.page.pageSize
        }
      }
      getWayBillListInfo(data).then(res => {
        if(!res.page.list || res.page.list.length == 0) {
          this.trankData.page.totalPage = 0
          this.trankData.page.pageIndex = 1
          return
        }
        this.trankData.carriageDetailsData = res.page.list
        this.trankData.page.totalPage = res.page.totalPage;
        this.trankData.page.pageIndex = res.page.currPage
        this.trankData.page.pageSize = res.page.pageSize
        console.log('this.trankData',this.trankData)
      })
    },
    //弹框——————异常
    listByCondition() {
      var data = {
        currPage: this.trankData.page.pageIndex,
        pageSize: this.trankData.page.pageSize,
        truck_no: this.carnum
      }
      listByCondition(data).then(res => {
        if(!res.page.list || res.page.list.length == 0) {
          this.trankData.page.totalPage = 0
          this.trankData.page.pageIndex = 1
          return
        }
        this.trankData.indicateAbnormalityData = res.page.list 
        this.trankData.page.totalPage = res.page.totalPage;
        this.trankData.page.pageIndex = res.page.currPage
        this.trankData.page.pageSize = res.page.pageSize
      })
    },
    handleClick(tab) {
      if(tab) {
        this.activeName = tab.name
        this.trankData.page.pageIndex = 1
      }
      if(this.activeName == 'first') {

      } else if(this.activeName == 'second'){
        this.listByCondition()
      } else {
        this.getWayBillListInfo()
      }
    },
    //查看该车历史轨迹-----选中切换
    selectChange(value) {
      this.selectValue = value
      this.trackSelect = this.selectValue.starttime +'至'+ this.selectValue.finishtime+ ' ' + ' 运单号：'+this.selectValue.waybill_id
      this.getWayBillList()
    },
    //查看该车历史轨迹-----选中切换
    getWayBillList() {
      var data = {
        waybill_id: this.selectValue.waybill_id,
        truck_no: this.carnum
      }
      this.getWayBillListInfo()
      getWayBillList(data).then(res => {
        this.showData = res.data[0]
      })
    },
    //显示地图
    showMap() {
      let _this = this  
      //初始化地图,选取第一个点为起始点  
      // this.map = new BMap.Map("allmap");  
      if(!this.trankData.markers) return
      for (let i = 0; i < this.trankData.markers.length; i++) {
        var p0 = this.trankData.markers[i].lng;
        var p1 = this.trankData.markers[i].lat;
        // var checksum = makerArry[i].checksum;
        var point = new BMap.Point(p0, p1); //118.230272,33.482474
        _this.points.push(point);
      }
      this.map.centerAndZoom(this.points[0], 15);  
      this.map.enableScrollWheelZoom();  
      this.map.addControl(new BMap.NavigationControl());  
      this.map.addControl(new BMap.ScaleControl());  
      //this.map.addControl(new BMap.OverviewMapControl({isOpen: true})); 
      //通过DrivingRoute获取一条路线的point  
      var driving = new BMap.DrivingRoute(this.map);  
      var qidian = new BMap.Point(this.points[0].lng, this.points[0].lat);//起点
      var zhongdian = new BMap.Point(this.points[this.points.length-1].lng, this.points[this.points.length-1].lat);//终点
      
      driving.search(qidian, zhongdian);  
      var startIcon=new BMap.Icon("../../../assets/monitoring/ic_map_origin@2x_03.png", new BMap.Size(24,24));
      var endIcon=new BMap.Icon("../../../assets/monitoring/ic_map_terminus@2x_03.png", new BMap.Size(24,24));
      var marker1=new BMap.Marker(_this.points[0],{icon:startIcon})
      var marker2=new BMap.Marker(_this.points[this.points.length-1],{icon:endIcon})
      this.map.addOverlay(marker1)
      this.map.addOverlay(marker2)
      driving.setSearchCompleteCallback(function() {  
          //得到路线上的所有point  
          _this.points = driving.getResults().getPlan(0).getRoute(0).getPath();  
          //画面移动到起点和终点的中间  
          _this.centerPoint = new BMap.Point((_this.points[0].lng + _this.points[_this.points.length - 1].lng) / 2, (_this.points[0].lat + _this.points[_this.points.length - 1].lat) / 2);  
          _this.map.panTo(_this.centerPoint);  
          //连接所有点  
          _this.map.addOverlay(new BMap.Polyline(_this.points, {strokeColor: "#1FAF70 ", strokeWeight: 5, strokeOpacity: 1}));  
            
          //显示小车子  ../static/img/monitoring/ic_deiving.png
          // _this.label = new BMap.Label("", {offset: new BMap.Size(-20, -20)});  
          _this.myIcon = new BMap.Icon('../../../assets/monitoring/ic_deiving.png',new BMap.Size(24,24));//设置标记图标
          _this.car = new BMap.Marker(_this.points[0], {icon:_this.myIcon}); //创建运行坐标图标
          // _this.car.setLabel(_this.label);  
          _this.map.addOverlay(_this.car); //将标注添加到地图中
      });
      
      setTimeout(function()  {
        if(_this.trankData.trackPlaybackSelectData.length > 0) {
          _this.trackSelect = _this.trankData.trackPlaybackSelectData[0].value
        }
      }, 1000)
      
    },
    //播放轨迹
    play() { 
      if(this.isplayCover) {
        this.isplayCover = false
        this.reset()
      }
      this.isplay = true 
      let _this = this
      var point = this.points[this.index];  
      if(this.index > 0) {  
          this.map.addOverlay(new BMap.Polyline([this.points[this.index - 1], point], {strokeColor: "#1FAF70 ", strokeWeight: 1, strokeOpacity: 1}));  
          this.percentage = (this.index/this.points.length) * 100
          
      }  
      // this.label.setContent("经度: " + point.lng + "<br>纬度: " + point.lat);  
      this.car.setPosition(point);  
      this.index++;  
      this.map.panTo(point);  
      if(this.index < this.points.length) {  
        this.timer = setTimeout(function()  {
          _this.play(_this.index);
        }, this.speedTime)
          // this.timer = window.setTimeout("this.play(" + this.index + ")", 200);  
      } else { 
          if(this.index == this.points.length) {
              this.isplay = false
              this.isplayCover = true
          }
          
          this.map.panTo(point);  
      }  
    },
    playSpeed(value) {
      this.count=value
      if(this.count == 0) {
        this.speedTime = 800
      } else if(this.count == 1){
        this.speedTime = 500
      }else if(this.count == 2){
        this.speedTime = 300
      } else {
        this.speedTime = 150
      }
    }, 
    //
     //暂停
    pause() { 
        this.isplay = false 
        if(this.timer) {  
            window.clearTimeout(this.timer);  
        }  
    },  
    //停止
    reset() {  
        if(this.timer) {  
            window.clearTimeout(this.timer);  
        }  
        this.index = 0;  
        this.car.setPosition(this.points[0]);  
        // this.map.panTo(this.centerPoint);  
    },  
  
    closeBtn(data){
        this.TrackPlaybackLayer =! this.TrackPlaybackLayer
        if(!data) return
        let _this = this
        this.carnum = data.carnum
        if(this.TrackPlaybackLayer) {
          this.percentage = 0
          if(this.timer) {  
            window.clearTimeout(this.timer);  
          } 
          if(this.isplay) {
            this.isplay = false
          }
          this.historyLocation(this.carnum)
          // this.$emit('historyLocation', this.carnum)
          // setTimeout(function()  {
          //   _this.showMap()
          // }, 1000)
          
        }
        
    },
    // 轨迹回放ed
    toggleShow () {
      if(this.abnomalData !==undefined && this.abnomalData.length > 0 ){
        this.toggle =! this.toggle
        this.hasDate = true
        this.noDate = false
      }else{
        this.toggle =! this.toggle
        this.hasDate = false
        this.noDate = true
      }
    },
    listCarnumEvent() {
      listCarnumEvent({}).then(res => {
        this.abnomalData = res.data
      })
    },
    // 视频
    videoBtn(){
      this.videoHide =! this.videoHide
      this.getG7CodeByTruckNo()
      this.playVideo()
    },
    playVideo(){
        this.player = cyberplayer("myPlayer").setup({
            width : 309, 
            height : 220,  
            backcolor : "#FFFFFF",
            stretching : "fill",
            file : this.cItem, // 视频地址
            image: "http://gcqq450f71eywn6bv7u.exp.bcevod.com/mda-hbqagik5sfq1jsai/mda-hbqagik5sfq1jsai.jpg", // 预览图
            ak : "88abcbd72fbc4b809dfe9e5bc97ad759",// 公有云平台注册即可获得accessKey
            autostart: false, // 是否自动播放
            stretching: "uniform", // 拉伸设置
            repeat: false, // 是否重复播放
            volume: 20, // 音量
            controls: true, // controlbar是否显示
            starttime: 0, // 视频开始播放时间点(单位s)，如果不设置，则可以从上次播放时间点续播
            controlbar: {
            barLogo: false
            }
        })
    },
    //获取视频
    getG7CodeByTruckNo() {
      var data = {
        truck_no: '粤ACE409'
      }
      getG7CodeByTruckNo(data).then(res => {

      }) 
    }
  }
}
</script>

<style lang="scss" scoped>
.abnomal-wrap{
.top-abnormal{
  position: absolute;
  top: 80px;
  right: 20px;
  background:#fff;
  width: 250px;
  height: 44px;
  color: #39394d;
  font-size: 12px;
  box-shadow: 0 3px 4px 0 rgba(98, 99, 118, 0.08);
  display: flex;
  align-items: center;
  .abnormal-title{
    width: 70%;
    background: #fd855f;
    display: flex;
    align-items: center;
    padding-left: 10px;
    color: #fff;
    height: 100%;
  }
  .abnomal-num{
    display:flex;
    background: #e95e41;
    height: 100%;
    width: 30%;
    align-items: center;
    justify-content: center;
    color: #fff;
    cursor: pointer;
    .arrow{
      transform:rotate(180deg);
    }
  }
}
  .abnormal-con{
    position: absolute;
    top: 124px;
    right: 20px;
    background: #fff;
    box-shadow: 0 3px 4px 0 rgba(98, 99, 118, 0.08);
    width: 250px;
    .abnormal-list{
      padding: 16px 0;
      max-height: 73vh;
      overflow: auto;
      li{
        position: relative;
        padding: 0px 16px;
        margin-bottom: 20px;
        .date-box{
          font-size: 14px;
          color: #39394d;
        }
        .time-box{
          font-size: 12px;
          color: #84849a;
          line-height: 26px;
        }
        .con-box{
          background: #fef1eb;
          padding: 16px 8px;
          cursor: pointer;
          .tit-box{
            color: #f9712d;
            font-size: 18px;
          }
          .text-box{
            color: #39394d;
            font-size: 14px;
            margin-top:10px; 
          }
        }
      }
    }
    .abnormal-list li:last-child{margin-bottom:0;}
    .abnormal-list.no-data li::after{
      display: none;
    }
    .abnormal-list>li::after{
      content: '';
      display: block;
      height: 5px;
      width: 10px;
      background: #f9702b;
      position: absolute;
      left: 0;
      top:4px;
    }
  }
}
.TrackPlaybackLayer{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1031;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3% 10%;
  .bg{
    background: #000;
    opacity: 0.65;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .TrackPlaybackCon{
    width: 100%;
    height: 100%;
    background: #fff;
    position: relative;
    .TrackPlaybackHead{
      padding: 0 15px;
      height: 50px;
      width: 100%;
      position: absolute;
      top: 0;
      z-index: 10;
      background: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.08);
      .headCon{
        display: flex;
        align-items: center;
        min-width: 70%;
        .title{
          font-family: PingFangSC-Semibold;
          font-size: 16px;
          color: #39394D;
          margin-right: 10px;
        }
        >div{
          >img{
            width: 69px;
            margin: 0 5px;
          }
        }
        /deep/ .el-dropdown{
          height: 30px;
          line-height: 30px;
          border: 1px solid #e0e0eb;
          padding: 0 10px;
          margin:0 30px 0 20px;
          font-size: 12px;
          color: #39394D;
          cursor: pointer;
        }
      }
      /deep/ .el-loading-mask.is-fullscreen{
        max-width: 260px;
        overflow: auto;
      }
    }
    .TrackPlaybackBody{
      position: absolute;
      top:0px;
      width: 100%;
      height: 100%;
      padding-top: 50px;
      background: #fff;
      display: flex;
      .BodyL{
        width: 30%;
        height: 100%;
        box-shadow: 0 10px 7px 0 rgba(0, 0, 0, 0.08);
        /deep/ .el-tabs__nav .el-tabs__active-bar{
          width: 20px!important;
          height: 3px!important;
          background: #D92430!important;
          border-radius: 2px!important;
          left: 16px!important;
        }
        /deep/ .el-tabs__header{
          background: #F2F2F4;
        }
        /deep/ .el-tabs__nav-scroll{
            display: flex;
            justify-content: center;
        }
        /deep/ .el-tabs__item{
          height: 63px;
          line-height: 63px;
          font-size: 13px;
          color: #39394D;
        }
        /deep/ .is-active{
          color: #D92430;
        }
        /deep/ .el-tabs__item>span{
          position: relative;
          .number{
            position: absolute;
            top: 16px;
            line-height: normal;
            font-family: PingFangSC-Regular;
            font-size: 10px;
            color: #84849A;
            letter-spacing: 0;
            text-align: center;
            left: 0;
            right: 0;
            margin: auto;
          }
        }
        /deep/ .el-tabs__nav-wrap::after{
          display: none;
        }
        .conBox{
          width: 100%;
          padding-left: 15px;
          background: #fff;
          height: 60vh;
          overflow: auto;
          .dateTit{
            font-family: PingFangSC-Medium;
            font-size: 16px;
            color: #84849A;
            letter-spacing: 0;
            line-height: 28.8px;
          }
          .line{
            border-left:1px solid #E0E0EB;
            margin-left: 16px;
            padding-left: 26px;
            position: relative;
            .lineTit{
              font-family: PingFangSC-Medium;
              font-size: 16px;
              color: #39394D;
              letter-spacing: 0;
              line-height: 24px;
            }
            .lineCon{
              ont-family: PingFangSC-Regular;
              font-size: 13px;
              color: #39394D;
              letter-spacing: 0;
              line-height: 24px;
            }
            .lineTime{
              font-family: PingFangSC-Regular;
              font-size: 13px;
              color: #84849A;
              letter-spacing: 0;
              line-height: 24px;
              padding-bottom: 10px;
            }
          }
          .line::after{
            content: '';
            display: block;
            width: 11px;
            height: 11px;
            background: #FFB0B5;
            border: 2px solid #FFFFFF;
            border-radius:999px; 
            position: absolute;
            top: 6px;
            left: -6px;
          }
          .CarriageDetailsList{
            li{
              border-bottom:1px solid #E0E0EB;
              padding: 16px 0;
              .title{
                font-family: PingFangSC-Medium;
                font-size: 16px;
                color: #39394D;
                letter-spacing: 0;
                line-height: 24px;
              }
              .carModel{
                font-family: PingFangSC-Regular;
                font-size: 13px;
                color: #39394D;
                letter-spacing: 0;
                line-height: 24px;
                span:last-child{
                  margin-left: 30px;
                }
              }
              .addr{
                font-family: PingFangSC-Regular;
                font-size: 13px;
                color: #84849A;
                letter-spacing: 0;
                line-height: 24px;
              }
              .notice{
                font-family: PingFangSC-Regular;
                font-size: 13px;
                color: #84849A;
                letter-spacing: 0;
                line-height: 13px;
                display: flex;
                align-items: center;
                span:first-child{
                   display: flex;
                   align-items: center;
                   justify-content: center;
                   width: 63px;
                   height: 24px;
                   background: #fbe8e9;
                   font-family: PingFangSC-Regular;
                   font-size: 12px;
                   color: #D92430;
                   letter-spacing: 0;
                   margin-right:13px; 
                }
              }
            }
            li:first-child{
              padding-top:0; 
            }
          }
        }
      }
      .BodyR{
        width: 70%;
        height: 100%;
        position: relative;
        .top-box{
          position: absolute;
          top: 18px;
          left: 20px;
          opacity: 0.9;
          background: #000;
          border: 1px solid #38A1DB;
          box-shadow: 0 2px 4px 0 rgba(0,0,0,0.11);
          border-radius: 2px;
          width: 300px;
          height: 96px;
          padding: 12px 16px;
          .top-box-tit{
            font-family: PingFangSC-Semibold;
            font-size: 18px;
            color: #FFFFFF;
            line-height: 20px;
          }
          .top-box-con{
            display: flex;
            align-items: center;
            justify-content: space-between;
            >div{
              display: flex;
              flex-flow: column;
              justify-content: flex-start;
            }
            .lable{
              font-family: PingFangSC-Regular;
              font-size: 12px;
              color: #BABACE;
              line-height: 20px;
            }
            .value{
              font-family: PingFangSC-Medium;
              font-size: 12px;
              color: #FFFFFF;
              line-height: 20px;
            }
          }
        }
        .video-btn{
          position: absolute;
          right: 18px;
          top:18px;
          cursor: pointer;
          >img{
            width: 75px;
            display: block;
          }
        }
        .videoBox{
          position: absolute;
          right: 18px;
          top:18px;
          .closeVideobtn{
            position: absolute;
            top:0;
            right: 0;
            width: 30px;
            height: 30px;
            opacity: 0.9;
            background: #000;
            border-radius: 0 2px 0 0;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }
          .video-outside{
            width: 309px;
            background-color: #fff;
          }
        }
      }
    }
  }
}
.el-icon-close{
  cursor: pointer;
}
#controller {
  position: absolute;
  bottom: 0;
  background-color: rgba(57,57,77,.9);
  height: 76px;
  z-index: 1;
  width: 100%;
  .el-progress-bar .el-progress-bar__outer {background: rgba(255,255,255, .2)} 
  .trank-div {
    // display: flex;
    margin-top:15px;
    .trank-play {
      display: inline-block;
      vertical-align: middle;
      .tipicon {
        background-color: #171721;
        width: 40px;
        height: 40px;
        border-radius: 100%;
      }
    }
  }
  .trank-pross {
    min-width: 60%;
    display: inline-block;
    margin-left: 22px;
    vertical-align: middle;
    .trank-time {
      display: flex;
      justify-content: space-between;
      color: #EFEFF4;
      font-size: 12px;
      margin-top: 5px;
    }
  }
  .trank-forward {
    background-color: #171721;
    display: inline-block;
    color: #84849A;
    font-size: 12px;
    padding: 15px 0 15px 15px;;
    border-radius: 23px;
    margin-left: 22px;
    vertical-align: middle;
    .tacnk-speed {
      display: inline-block;
      padding-right: 8px;
      cursor: pointer;
    }
    .active {
      color: #E0E0EB;
      span {display: block;width: 6px;height: 2px;background-color: #E0E0EB;margin-top:2px;}
    }
  }
}
#allmapTop{
  height: 90%;
}
.el-input--medium .el-input__inner{height: 30px; line-height: 30px;}

</style>
