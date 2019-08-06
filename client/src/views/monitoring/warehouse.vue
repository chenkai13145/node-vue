<template>
  <div class="contents">
    <!-- 筛选 -->
    <!-- <div class="gac">
      <gac-button @click.native="FilterBtn"></gac-button>
      <FilterBox @FilterSearch="FilterSearchs" v-bind:message="FilterShow" v-if="FilterShow" v-on:FilterShow="Filter"></FilterBox>
    </div> -->
    <!-- 筛选 -->
    <!-- 仓库实时监控 -->
    <div class="WarehouseMonitoringwrap">
      <h5 class="title" style="display:flex;">仓库实时监控<Help :helpText="helpText2" style="color:#fff;z-index:10"></Help></h5>
      <div class="warehouse-item" v-for="(item,index) in warehouseData" style="" :key="index">
        <div :class="[item.warehouse_position_use_rate==0?'itemcss':'item1']" >
          <span class="number">{{item.warehouse_car_num}}</span>
          <span class="name">{{item.item1Name}}</span>
          <div class="bg-box" style='background: url("static/img/monitoring/ic-ck-1.png")right bottom no-repeat;'></div>
        </div>
        <div :class="[item.warehouse_position_use_rate==0?'itemcss':'item2']" >
            <span class="number">{{item.warehouse_total}}</span>
            <span class="name">{{item.item2Name}}</span>
            <div class="bg-box" style='background: url("static/img/monitoring/ic-ck-2.png")right bottom no-repeat;'></div>
        </div>
        <div class="item3">
          <div class="">
            <span class="number">{{item.warehouse_position_total}}</span>
            <span class="name">{{item.item3Name}}</span>
          </div>
          <div class="">
            <span class="number">{{item.warehouse_position_use}}</span>
            <span class="name">{{item.item4Name}}</span>
          </div>
          <div class="">
            <span class="number">{{item.warehouse_position_leisure}}</span>
            <span class="name">{{item.item5Name}}</span>
          </div>
          <div class="bg-box" style='background: url("static/img/monitoring/ic-ck-3.png")right bottom no-repeat;'></div>
        </div>
        <div class="item4" v-show="item.warehouse_position_use_rate!=0">
          <div>
            <span class="number">{{item.warehouse_position_use_rate.toFixed(2)}}</span>
            <span class="name">{{item.item6Name}}</span>
          </div>
          <el-progress type="circle" :width="65" :percentage="item.warehouse_position_use_rate" :stroke-width="15" color="#bb29e0"></el-progress>
        </div>
      </div>
      <!-- 地图 -->
      <div class="baid-map">
        <div class="emptyMap" v-show="showEmpty.BaiduMapWarehouse">无数据</div>
        <BaiduMapWarehouse @seach="mapFN" :markers="markers"></BaiduMapWarehouse>
         <div class="baid-bottom">
           <ul>
             <li v-for="(item,index) in grad" :style="'border-top: 2px solid '+item.color" :key="index">{{item.name}}</li>
           </ul>
         </div>
     </div>
      <!-- 地图 -->
      
    </div>
    <!-- 仓库实时监控 -->
    <!-- 当日库存看板 -->
    <div class="DayInventoryWrap">
      <div class="title">当日库存看板</div>
      <div class="dayWrap">
        <div class="dayList">
           <!-- TOP10城市进出车辆数 -->
            <div class="tit">投资企业</div>
            <div class="dayForm">
              <Empty showEmptys='true' :showEmpty="showEmpty.VehiclesNumber"/>
              <VehiclesNumber ref="VehiclesNumber" :mapQuery="mapQuery" @showEmptyFn="showEmptyFn" v-show='showEmpty.VehiclesNumber'></VehiclesNumber>
            </div>
        </div>
        <div class="dayList">
            <div class="tit">客户</div>
            <div class="dayForm">
              <Empty showEmptys='true' :showEmpty="showEmpty.Customer"/>
              <Customer ref="Customer" :mapQuery="mapQuery" @showEmptyFn="showEmptyFn" v-show='showEmpty.Customer'></Customer>
            </div>
        </div>
        <div class="dayList">
            <div class="tit">客户城市</div>
            <div class="dayForm" style="height:300px">
              <Empty showEmptys='true' :showEmpty="showEmpty.CustomerCity"/>
              <CustomerCity ref="CustomerCity" :mapQuery="mapQuery" @showEmptyFn="showEmptyFn" v-show='showEmpty.CustomerCity'></CustomerCity>
            </div>
        </div>
        <div class="dayList">
            <div class="tit">商品车品牌</div>
            <div class="dayForm" style="height:300px">
              <Empty showEmptys='true' :showEmpty="showEmpty.CommodityCarBrand"/>
              <CommodityCarBrand ref="CommodityCarBrand" :mapQuery="mapQuery" @showEmptyFn="showEmptyFn" v-show='showEmpty.CommodityCarBrand'></CommodityCarBrand>
            </div>
        </div>
      </div>
    </div>
    <!-- 当日库存看板 -->
    <!-- 当日仓库计划 -->
    <div class="DayInventoryWrap DayPlanWrap">
      <div class="title" style="display:flex;">当日仓库计划<Help :helpText="helpText1" style="color:#fff;z-index:10"></Help></div>
      <div class="DayPlan"  v-for="(item,index) in DayPlanData" :key="index">
        <div class="item">
          <span class="number">{{item.plan_allorg_outwarehouse_car}}</span>
          <span class="name">{{item.item1Name}}</span>
          <div class="bg-box" style='background: url("static/img/monitoring/ic-ck-4.png")right bottom no-repeat;'></div>
        </div>
        <div class="item">
          <span class="number">{{item.start_todayplan_allorg_outwarehouse_car}}</span>
          <span class="name">{{item.item2Name}}</span>
          <div class="bg-box" style='background: url("static/img/monitoring/ic-ck-5.png")right bottom no-repeat;'></div>
        </div>
        <div class="item">
          <span class="number">{{item.outwarehouse_allorg_plan_reat}}</span>
          <span class="name">{{item.item3Name}}</span>
          <div class="bg-box" style='background: url("static/img/monitoring/ic-ck-6.png")right bottom no-repeat;'></div>
        </div>
        <div class="item">
          <span class="number">{{item.outwarehouse_allorg_finish_reat}}</span>
          <span class="name">{{item.item4Name}}</span>
          <div class="bg-box" style='background: url("static/img/monitoring/ic-ck-7.png")right bottom no-repeat;'></div>
        </div>
      </div>
      <div class="DayPlanTable">
         <el-table
          :data="DayPlanTableData"
          border
          max-height="400"
          style="width: 100%">
          <el-table-column
            prop="code_name"
            label="投资企业">
             <template slot-scope="scope">
               {{scope.row.code_name?scope.row.code_name:'--'}}
            </template>
          </el-table-column>
          <el-table-column
            prop="warehouse_num"
            label="仓库数量(个)">
             <template slot-scope="scope">
               {{scope.row.warehouse_num?scope.row.warehouse_num:'--'}}
            </template>
          </el-table-column>
          <el-table-column
            prop="start_todayplan_inwarehouse_car"
            label="实际入库(辆)">
            <template slot-scope="scope">
               {{scope.row.start_todayplan_inwarehouse_car?scope.row.start_todayplan_inwarehouse_car:'--'}}
            </template>
          </el-table-column>
          <el-table-column
            prop="plan_outwarehouse_car"
            label="计划出库(辆)">
             <template slot-scope="scope">
               {{scope.row.plan_outwarehouse_car?scope.row.plan_outwarehouse_car:'--'}}
            </template>
          </el-table-column>
          <el-table-column
            prop="start_todayplan_outwarehouse_car"
            label="实际出库(辆)">
             <template slot-scope="scope">
               {{scope.row.start_todayplan_outwarehouse_car?scope.row.start_todayplan_outwarehouse_car:'--'}}
            </template>
          </el-table-column>
          <el-table-column
            prop="outwarehouse_finish_reat"
            label="出库进度">
             <template slot-scope="scope">
               {{scope.row.outwarehouse_finish_reat?scope.row.outwarehouse_finish_reat:'--'}}
            </template>
          </el-table-column>
          <el-table-column
            prop="outwarehouse_plan_reat"
            label="出库及时率">
             <template slot-scope="scope">
               {{scope.row.outwarehouse_plan_reat?scope.row.outwarehouse_plan_reat:'--'}}
            </template>
          </el-table-column>
          <el-table-column
            prop="SinkPosition"
            label="库位情况(已用/可用/总数)">
            <template slot-scope="scope">
                 {{scope.row.warehouse_position_orguse?scope.row.warehouse_position_orguse:'--'}}/{{scope.row.warehouse_position_orgleisure?scope.row.warehouse_position_orgleisure:'--'}}/{{scope.row.warehouse_position_orgnum?scope.row.warehouse_position_orgnum:'--'}}
            </template>
          </el-table-column>
          <el-table-column
            prop="warehouse_position_use_rate"
            label="库位利用率">
             <template slot-scope="scope">
               {{scope.row.warehouse_position_use_rate?scope.row.warehouse_position_use_rate.toFixed(2):'--'}}
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 当日仓库计划 -->
    <!-- 异常情况 -->
     <div class="DayInventoryWrap">
      <div class="title helpBox">异常情况<Help :helpText="helpText3" style="color:#fff;z-index:10"></Help></div>
      <div class="dayWrap">
        <div class="dayList">
            <div class="tit">延迟出库数量(辆)</div>
            <div class="delayed-quantity">
              <img src="../../assets/monitoring/delayed.png">
              <span>{{total}}</span>
              <div  style='background: url("../../assets/monitoring/delayed_bg.png")right bottom no-repeat;'></div>
            </div>
            <div class="tit">投资企业</div>
            <div class="InvestmentEnterprise">
              <Empty showEmpty='true' :showEmptys="showEmpty.InvestmentEnterprise"/>
              <InvestmentEnterprise  v-show='showEmpty.InvestmentEnterprise' :InvestmentEnterpriseData="InvestmentEnterpriseData"></InvestmentEnterprise>
            </div>
            <div class="tit">客户</div>
            <div class="InvestmentEnterprise">
              <Empty showEmpty='true' :showEmptys="showEmpty.AbnormalCustomer"/>
              <AbnormalCustomer  v-show='showEmpty.AbnormalCustomer' :AbnormalCustomerData="AbnormalCustomerData"></AbnormalCustomer>
            </div>
            <div class="tit">客户城市</div>
            <div class="dayForm" style="margin-bottom:20px;">
              <Empty showEmpty='true' :showEmptys="showEmpty.AbnormalCity"/>
              <AbnormalCity ref="AbnormalCity" @showEmptyFn="showEmptyFn" :mapQuery="mapQuery" v-show='showEmpty.AbnormalCity'></AbnormalCity>
            </div>
            <div class="tit">客户车品牌</div>
            <div class="dayForm">
              <Empty showEmpty='true' :showEmptys="showEmpty.AbnormalCustomerCar"/>
              <AbnormalCustomerCar ref="AbnormalCustomerCar" :mapQuery="mapQuery" @showEmptyFn="showEmptyFn" v-show='showEmpty.AbnormalCustomerCar'></AbnormalCustomerCar>
            </div>
        </div>
        <div class="dayList">
            <div class="tit">延迟出库天数</div>
            <div class="tabBox">
              <Empty showEmptys='true' :showEmpty="showEmpty.DelayDaysTable"/>
              <DelayDaysTable ref="DelayDaysTable" :mapQuery="mapQuery" @showEmptyFn="showEmptyFn" v-show='showEmpty.DelayDaysTable'></DelayDaysTable>
            </div>
        </div>
      </div>
    </div>
    <!-- 异常情况 -->
  </div>
</template>

<script>
import {getOutTimeOutCarNum,getOutTimeOutCusterFactory,getTranMap,getTranInfo,getTranInfoOutTimeOutCuster,getTranPlanInfo,getTranInfoOrgOutTimeOut,getTranInfoHeader,getTranInfoCustersee} from '../../api/monitor/warehouse'
import {BmlMarkerClusterer} from 'vue-baidu-map'
import echarts from 'echarts'
import Help from '../../components/common/help'
import Empty from '../../components/monitoring/warehouse/empty'
import GacButton from "../../components/common/gac-button-filtrate"
import FilterBox from '../../components/monitoring/warehouse/filter-box'
import VehiclesNumber from '../../components/monitoring/warehouse/vehicles-number'
import Customer from '../../components/monitoring/warehouse/customer'
import CustomerCity from '../../components/monitoring/warehouse/customer-city'
import CommodityCarBrand from '../../components/monitoring/warehouse/commodity-car-brand'
import InvestmentEnterprise from '../../components/monitoring/warehouse/investment-enterprise'
import AbnormalCustomer from '../../components/monitoring/warehouse/abnormal-customer'
import AbnormalCity from '../../components/monitoring/warehouse/abnormal-city'
import AbnormalCustomerCar from '../../components/monitoring/warehouse/abnormal-customer-car'
import DelayDaysTable from '../../components/monitoring/warehouse/delay-days-table'
import BaiduMapWarehouse from '../../components/monitoring/warehouse/baidu-map-warehouse'

export default {
  name: 'warehouse',
  components: {
    BmlMarkerClusterer,
    echarts,
    GacButton,
    FilterBox,
    VehiclesNumber,
    Customer,
    CustomerCity,
    CommodityCarBrand,
    InvestmentEnterprise,
    AbnormalCustomer,
    AbnormalCity,
    AbnormalCustomerCar,
    DelayDaysTable,
    BaiduMapWarehouse,
    Empty,
    Help
  },
  data () {
    return {
      helpText1:'计划出库数量：今日累计计划出库的商品车数量(包括已出库的商品车)；\n实际出库数量：今日累计实际出库的商品车数量；\n出库进度：出库进度 = 今日累计实际出库的商品车数量 / 今日累计计划出库的商品车数量；\n出库及时率：出库及时率=今日按时出库商品车数量/今日已出库商品车总数；\n仓库数量：仓库的数量；\n实际入库数量：累计今日已入库的商品车数量；\n库位利用率：库位利用率=已占用库位数/库位总数;\n库位数量：库位的总数(包括已占用和未占用);\n库位使用数量：仓库已占用的库位数量;\n可用库位数量：仓库未占用的库位数量。',
      helpText2:'当前库存：仓库存放的商品车数量；\n已用库位数：仓库已占用的库位数量；\n可用库位数：仓库未占用的库位数量；\n仓库数量：仓库的数量；\n库位数量：库位的总数(包括已占用和未占用)；\n库位利用率：库位利用率=已占用库位数/库位总数；\n实际入库数量：累计今日已入库的商品车数量;\n实际出库数量：累计今日已出库的商品车数量。',
      helpText3:'延迟出库天数：今日已出库的商品车中，超过计划出库日期的天数排名；\n延迟出库数量：今日已出库的商品车中，超过计划出库日期的商品车数量。',
      total:'_ _',
      showEmpty:{
         VehiclesNumber:true,
         Customer:true,
         CustomerCity:true,
         CommodityCarBrand:true,
         DelayDaysTable:true,
         InvestmentEnterprise:true,
         AbnormalCustomer:true,
         AbnormalCity:true,
         AbnormalCustomerCar:true,
         BaiduMapWarehouse:false
      },//空数据占位图开关
      FilterShow : false,
      // 地图
      markers : [
        // {
        //   lng: 116.4990408066,
        //   lat:39.7747847172,
        //   text:'122121'
        // },
        // {
        //    lng: 116,
        //   lat:39.7747847172,
        //   text:'sad几点上课'
        // },
        // {
        //   lng: 116.4990408066,
        //   lat:39.7747847172,
        //   text:'122121'
        // },
        // {
        //    lng: 116.066,
        //   lat:39.7747847172,
        //   text:'122121'
        // },
        // {
        //   lng: 116.7,
        //   lat:39.7747847172,
        //   text:'122121'
        // },
        // {
        //   lng: 102, 
        //   lat:45,
        //   text:'122121'
        // }
        // {
        //   url:'/img/ic_warehouse_2@2x.png',
        //   car_brand_name: null,
// factory_city_name: null,
// inoutwarehouse: 12,
// org_name: null,
// warehouse_lat: "3.51",
// showFlag:false,
// warehouse_lng: "121.46",
// warehouse_name: "xxx库位0"
//         },
//             {
//           url:'/img/ic_warehouse_2@2x.png',
//           car_brand_name: null,
// factory_city_name: null,
// inoutwarehouse: 2323,
// org_name: null,
// warehouse_lat: "34.51",
// warehouse_lng: "121.46",
// warehouse_name: "xxx库位0",
// showFlag:false
//         },
      ],
      imgPng:[
        '/img/ic_warehouse_4@2x.png',
        '/img/ic_warehouse_5@2x.png',
        '/img/ic_warehouse_3@2x.png',
        '/img/ic_warehouse_2@2x.png',
        '/img/ic_warehouse_1@2x.png'
      ],
      //地图百分比
      grad:[
        {
          color:'#cb2828',
          name:'库位80%-100%',
        },
         {
          color:'#ef56c5',
          name:'库位60%-80%',
        },
         {
          color:'#8965e5',
          name:'库位40%-60%',
        },
         {
          color:'#55a2f0',
          name:'库位20%-40%',
        },
         {
          color:'#34cd85',
          name:'库位0%-20%',
        },
         {
          color:'#fff',
          name:'闪烁表示有库存变化',
        }

      ],
      // 仓库实时监控
      warehouseData:[
       { 
         warehouse_car_num : "- -",
         item1Name :"当前库存量（辆）",
         warehouse_total: "- -",
         item2Name :"仓库数量（个）",
         warehouse_position_total : "- -",
         item3Name :"库位数量（个）",
         warehouse_position_use: "- -",
         item4Name :"已用库位数（个）",
         warehouse_position_leisure : "- -",
         item5Name :"可用库位数个",
         warehouse_position_use_rate :88,
         item6Name :"库位利用率(%)",
       }
      ],
      // 当日库存看板
      DayPlanData:[
        { 
         plan_allorg_outwarehouse_car : "- -",
         item1Name :"计划出库量（辆）",
         start_todayplan_allorg_outwarehouse_car : "- -",
         item2Name :"实际出库量（辆）",
         outwarehouse_allorg_plan_reat : "- -",
         item3Name :"出库进度（%）",
         outwarehouse_allorg_finish_reat : "- -",
         item4Name :"出库及时率（%）"
       }
      ],
      // 当日仓库计划
      DayPlanTableData:[
                  {
                     code_name: "商贸物流",
                     outwarehouse_finish_reat: 0,
                     outwarehouse_plan_reat: 0,
                     plan_outwarehouse_car: 0,
                     start_todayplan_outwarehouse_car: 0,
                     warehouse_num: 3,
                     start_todayplan_inwarehouse_car:3,
                    warehouse_position_orgleisure: 0,
                     warehouse_position_orgnum: 9,
                     warehouse_position_orguse: 9,
                    warehouse_position_use_rate: 100
                 },
      ],
      // 异常情况 投资企业
      InvestmentEnterpriseData:[
        {
          code_name: "商贸物流",
          org_outtime_carnum:346,
          background:'#db187b'
        },
        {
          code_name: "顺捷物流",
          org_outtime_carnum:300,
          background:'#e96cbc'
        },
        {
          code_name: "商贸物流",
          org_outtime_carnum:200,
          background:'#fea3dd'
        },
        {
          code_name: "日邮物流",
          org_outtime_carnum:100,
          background:'#ffc1e9'
        },
        {
          code_name: "日邮物流",
          org_outtime_carnum:346,
          background:'#ffd9f1'
        }
      ],
      //color
      color:['#db187b','#e96cbc','#fea3dd','#ffc1e9','#ffd9f1'],
      // 异常情况 客户
      AbnormalCustomerData :[
        {
          code_name: "商贸物流",
          factory_outtime_carnum:200,
          background:'#6136e6'
        },
        {
          code_name: "顺捷物流",
          factory_outtime_carnum:300,
          background:'#825fef'
        },
        {
          code_name: "商贸物流",
          factory_outtime_carnum:380,
          background:'#a58df3'
        },
        {
          code_name: "日邮物流",
          factory_outtime_carnum:190,
          background:'#c1b3ee'
        },
        {
          code_name: "日邮物流",
          factory_outtime_carnum:346,
          background:'#ded7f5'
        }
      ],
      //一场 color
      yancolor:['#6136e6','#825fef','#a58df3','#c1b3ee','#ded7f5'],
      //地图条件查询
      mapQuery:{
        key:'',
        org_code:'',
        factory_code:'',
        factory_city_code:'',
        car_brand_code:'',
      }
    }
  },
  created () {
   this.requestList()
  },
  computed: {
  },
  methods: {
    num(val){
      return Number(val)
    },
    //加载数据过时
    showEmptyFn(val){
        this.showEmpty[val.type]=val.show
    },
    //  筛选
    FilterBtn(){
      this.FilterShow =! this.FilterShow
    },
    Filter(data){
      this.FilterShow = data
    },
    //地图条件查询
    mapFN(val){
          //地图
      let obj={wareHouseName:''}
      if(val){
          obj.wareHouseName=val
      }
      getTranMap(obj).then(res=>{
            console.log(res)
        if(res.data.msg==='success'){
         if(res.data.alldata.length<=0){
           this.showEmpty.BaiduMapWarehouse=true
            return;
           }
           this.showEmpty.BaiduMapWarehouse=false
           let totals=this.allTotal(res.data.alldata)
           let arr=res.data.alldata.map(item=>{
             let grden=(Number(item.inoutwarehouse)/Number(this.warehouseData[0].warehouse_position_total))*100
             if(grden>=80){
                   item.url=this.imgPng[0]
             }else if(grden>=60){
                    item.url=this.imgPng[1]
             }else if(grden>=40){
                      item.url=this.imgPng[2]
             }else if(grden>=20){
                    item.url=this.imgPng[3]
             }else if(grden>=0){
                      item.url=this.imgPng[4]
             }
             item.showFlag=false
             item.inoutwarehouse=item.inoutwarehouse.toString()
            return item;
           })
           
         if(arr.length>150){
           let ars=[]
                  ars=arr.slice(0,Math.floor(Math.random()*100)+20)
         this.markers=JSON.parse(JSON.stringify(ars))
         }else{
           this.markers=JSON.parse(JSON.stringify(arr))
         }
         console.log('陈凯')
        console.log(this.markers)
        }
      })
      .catch(err=>{
        this.showEmpty.BaiduMapWarehouse=true
      })
    },
    //数据初始化
    requestList(){
        this.mapFN()
      //仓存总览
      // this.$http({
      //   url: this.$http.adornUrl("/wareHouseLoadMonitor/getWarehousePandect"),
      //   method: "post",
      //   params: this.$http.adornParams({kk:'ioi'})
      // }).then((res) => 
      getTranInfo().then(res=>{
        console.log(res)
        if(res.data.msg=='success'){
          for(let key in res.data.data){
            this.warehouseData[0][key]=res.data.data[key]===null?0:res.data.data[key]
          }
        }
      })
      .catch(err=>{
        this.showEmpty.BaiduMapWarehouse=true
      })
      //当日仓库计划头部菜单
      getTranInfoHeader().then(res=>{
      
         if(res.data.msg==='success'){
           for(let key in res.data.data){
               this.DayPlanData[0][key]=res.data.data[key]
           }
         }
      })
      //当日仓库计划表格
      getTranPlanInfo().then(res=>{
        console.log(res)
        if(res.data.msg==='success'){
          this.DayPlanTableData=res.data.data
        }
      })
      //延迟出库-投资企业
      getTranInfoOrgOutTimeOut().then(res=>{
        console.log(res)
          if(res.data.msg==='success'){
            this.total=res.data.total.outtimeCarTotal
            let arr=[]
            arr=res.data.data.sort((a,b)=>{
               return b.org_outtime_carnum-a.org_outtime_carnum
             })
            this.InvestmentEnterpriseData=arr.map((items,index)=>{
                 items.background=this.color[index]
                 items.org_outtime_carnum===null?items.org_outtime_carnum=0:items.org_outtime_carnum=items.org_outtime_carnum
                 return items;
            })
          }
      })
      .catch(err=>{
        this.showEmpty.InvestmentEnterprise=false
      })
      //延迟出库-客户
      getTranInfoOutTimeOutCuster().then(res=>{
        console.log(res)
        if(res.data.msg==='success'){
          let arr=[]
          arr=res.data.data.sort((a,b)=>{
            return b.factory_outtime_carnum-a.factory_outtime_carnum
          })
          this.AbnormalCustomerData=arr.map((item,index)=>{
          
              item.factory_outtime_carnum===null?item.factory_outtime_carnum=0:item.factory_outtime_carnum=item.factory_outtime_carnum
              item.background=this.yancolor[index]
              return item;
          })
        }
      })
      .catch(err=>{
        this.showEmpty.AbnormalCustomer=false
      })
      
      
    },
    // mapSearch(val){
    //     this.mapQuery.key=val
    //     this.requestList()
    //      this.$refs.VehiclesNumber.requestList()
    //     this.$refs.Customer.requestList()
    //     this.$refs.CustomerCity.requestList()
    //     this.$refs.CommodityCarBrand.requestList()
    //     this.$refs.DelayDaysTable.requestList()
    //     this.$refs.AbnormalCity.requestList()
    //     this.$refs.AbnormalCustomerCar.requestList()
    // },
    //总库数
    allTotal(arr){
       let total=0
       arr.forEach(item=>{
         total=total+parseInt(item.inoutwarehouse)
       })
      return total
    },
    //全局帅选
    FilterSearchs(data){
        return;
         for(let key in data){
            let arr=data[key].split(':')
            let keys=arr[0]
            this.mapQuery[keys]=arr[1]
         }
        this.requestList()
        this.$refs.VehiclesNumber.requestList()
        this.$refs.Customer.requestList()
        this.$refs.CustomerCity.requestList()
        this.$refs.CommodityCarBrand.requestList()
        this.$refs.DelayDaysTable.requestList()
        this.$refs.AbnormalCity.requestList()
        this.$refs.AbnormalCustomerCar.requestList()
    },
  },
  mounted () {
  }
}
</script>

<style lang="scss" scope>
@import url('../../../public/css/reset.css');
.gac {
  position: absolute;
  right: 110px;
  top: 20px;
  z-index: 9999;
}
.contents {
  padding: 20px 20px;
  background-color: #fff;
  .WarehouseMonitoringwrap{
    .title {
      text-align: left;
      font-size: 18px;
      font-weight: bold;
    }
    .baid-map{
      position: relative;
      width: 100%;
      height: 520px;
      margin-top:20px;
      .emptyMap{
          width: 100px;
          text-align: center;
          height: 40px;
          line-height: 40px;
          background-color:#000;
          opacity: 0.8;
          position: absolute;
          left: 50%;
          margin-left:-50px;
          top: 50%;
          z-index: 111;
          color: #fff;
          margin-top: -20px;
      }
      .baid-bottom{
        width: 70%;
        position: absolute;
        bottom: 10px;
        left: 50%;
        margin-left: -35%;
        background-color: #fff;
        height: 60px;
        ul{
          width: 100%;
          margin-top: 20px;
          li{
            width: 15%;
            height: 24px;
            background-color: #fff;;
            display: inline-block;
            border-right: 1px solid #e0e0eb;
            // border-left: 1px solid #ccc;
            line-height: 24px;
            font-size: 12px;
            text-align: center;
            color: #39394d;
            &:first-child{
              margin-left:40px;
              border-left: 1px solid #e0e0eb;
            }
            &:last-child{
              border: none;
            }
          }
          
        }
      }
      .BMap_stdMpCtrl{
        top:auto!important;
        bottom:100px!important;
        .BMap_stdMpZoom{
          position: absolute!important;
          bottom: 0;
        }
      }
      .searchBox{
        position: absolute;
        right: 20px;
        top: 20px;
        height: 44px;
        line-height: 44px;
        width: 280px;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 3px 4px 0 rgba(98, 99, 118, 0.28);
        input,button{
          border: 0;
          outline: 0;
          background: 0;
          height: 100%;
        }
        input{
          width: 210px;
          padding: 0 10px 0 15px;
          color: #babace;
          font-size: 13px;
        }
        button{
          width: 70px;
          color: #fff;
          font-size: 14px;
          background: #d92430;
          cursor: pointer;
        }
      }
    }
    .warehouse-item{
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 96px;
      >div{
        display: flex;
        align-items: center;
        background: #ffe5e5;
        flex-flow: column;
        align-items: baseline;
        justify-content: center;
        padding-left: 10px;
        border-radius:4px; 
        position: relative;
        >.bg-box{
          position: absolute!important;
          width: 100%!important;
          height: 100%!important;
          left: 0;
        }
        .number{
          font-size: 26px;
          color: #39394d;
          padding-bottom: 5px;
        }
        .name{
          font-size: 16px;
          color: #39394d;
        }
      }
      >.item1{
        width: 16%;
      }
      >.item2{
        width: 16%;
      }
      >.itemcss{
        width: 24%;
      }
      >.item3{
        width: 48%;
        padding-left:0;
        display: flex;
        flex-flow: wrap;
        justify-content: flex-start;
        >div{
          display: flex;
          flex-flow: wrap;
          width: 28%;
          height: 100%;
          align-items: flex-start;
          justify-content: center;
          flex-flow: column;
          padding-left: 5%;
          position: relative;
        }
      }
      >.item3>div::before{
        content: '';
        display: block;
        width: 1px;
        height: 34px;
        background: #e8b7b7;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
      }
       >.item3>div:nth-child(3)::before,.item3>div:last-child::before{
         display: none;
       }
      >.item4{
        width: 16%;
        display: flex;
        flex-flow: wrap;
        justify-content: space-around;
        align-items: center;
        >div{
          display: flex;
         flex-flow: column;
        }
        .el-progress__text{display: none;}
      }
    }
    .el-progress-circle svg path:first-child {
      stroke: #ffcfcf !important; //自定义颜色
    }
    .el-progress-circle svg path:last-child{
      stroke-linecap: butt;//去掉圆角
    }
  }
  .DayInventoryWrap{
    .title {
      text-align: left;
      font-size: 18px;
      font-weight: bold;
      line-height: 80px;
      position: relative;
      padding-left: 16px;
    }
    .title::before{
        content: '';
        display: block;
        width: 5px;
        height: 18px;
        background: #d8d8d8;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        left: 0;
    }
    .dayWrap{
      display: flex;
      justify-content: space-between;
      flex-flow: wrap;
      .dayList{
        width: 46%;
        border: 1px solid #babace;
        margin-bottom: 20px;
        padding: 20px;
        .tit{
          font-size: 16px;
          font-weight: bold;
        }
        .dayForm{
          width: 100%;
          height: 250px;
          position: relative;
        }
      }
    }
    .delayed-quantity{
      width: 100%;
      height: 90px;
      background:#fff1f1;
      margin: 20px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      >span{
        font-size: 26px;
        color: #39394d;
        padding-left: 23px;
      }
      >div{
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
      }
    }
    .InvestmentEnterprise{
      width: 100%;
      margin: 20px 0;
    }
    .tabBox{
      margin: 20px 0;
      position: relative;
      height: 100%;
    }
  }
  .DayPlanWrap{
    .DayPlan{
      display: flex;
      justify-content: space-between;
      >div{
        width: 22%;
        height: 96px;
        background: #e5ecff;
        display: flex;
        flex-flow: column;
        justify-content: center;
        padding-left: 10px;
        border-radius: 4px;
        position: relative;
        >.bg-box{
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
        }
        .number{
          font-size: 26px;
          color: #39394d;
          padding-bottom: 5px;
        }
        .name{
          font-size: 16px;
        }
      }
    }
    .DayPlanTable{
      margin-top: 30px;
      .el-table .cell, .el-table th div, .el-table--border td:first-child .cell, .el-table--border th:first-child .cell{
        text-align: center;
      }
      .el-table th .cell{
         font-weight: normal;
         color: #39394d;
         font-size: 12px;
      }
      .el-table__body td .cell{
         color: #39394d;
         font-size: 14px;
      }
    }
  }
}
</style>
<style scoped lang="scss">
.title /deep/ .help-wrap{
  p{
    width: 330px!important;
     line-height: 1.2;
     font-weight: normal;
  }
}
.DayPlanWrap .title /deep/ .help-wrap{
  p{
    width: 570px!important;
     line-height: 1.2;
     font-weight: normal;
     top:23px;
  }
}
.helpBox{display: flex;}
.helpBox /deep/ .help-wrap{
    p{
      width: 470px!important;
       line-height: 1.2;
       font-weight: normal;
       top:23px;
    }
  }
</style>
