<template>
  <!-- 运输统计 -->
  <div class="transport">
	<!-- 头部 -->
	<header style="height: 100%">
		<thehead :Thehead="Thehead" :pickerOptions2="pickerOptions2" @clicktimedata="clicktimedata"></thehead>
	</header>
    
    <!-- 导航条（锚记） -->
    <ul id="anchornavigation">
		<li v-for="(nav, index) in navBox" :key="index" v-on:click="addClass(index)" v-bind:class="{ active:index==current}"><a :href="'#'+nav.id">{{nav.name}}</a></li>
	</ul>
    <div class="containBox">
      <!-- 运单号 -->
      <div id="yundan" class="mod-demo-echarts margintop10">
          <LineChart :brokenlineData="theawb" @clicktype="clickwaybilltype" :successData="theawbDataSuccess" @changeselect="changewaybillselect"></LineChart>
      </div>
      <!-- 商品车运量 -->
      <div id="shangpin" class="mod-demo-echarts margintop10">
          <LineChart :brokenlineData="forcartraffic" @clicktype="clickforcartype" :successData="forcartrafficDataSuccess" @changeselect="changeforcarselect" @twochangeselect="twochangeforcarselect"></LineChart> 
      </div>
      <!-- 公铁水运量占比 -->
      <div id="gongtieshui" class="mod-demo-echarts margintop10">
          <LineColumnar :columnarData="maleiron" @clicktype="clickmaleirontype" :successData="maleironDataSuccess" @changeselect="changemaleironselect"></LineColumnar>
      </div>
      <!-- 外协陆运运量占比 -->
      <div id="WXLY" class="mod-demo-echarts margintop10">
          <LineColumnar :columnarData="outsourcing"  @clicktype="clickoutsourcingtype" :successData="outsourcingDataSuccess" @changeselect="changeoutsourcingselect"></LineColumnar>
      </div>
      <!-- 商品车运量同期对比 -->
      <div id="SPCY" class="mod-demo-echarts margintop10">
			<LineChart :brokenlineData="forcartrafficdb" @clicktype="clickforcardbtype" :successData="forcartrafficdbDataSuccess" @changeselect="changeforcardbselect" @twochangeselect="twochangeforcardbselect"></LineChart>
		</div>
    </div>
  </div>
</template>

<script>
import {jj} from "@/utils/api/statistical/linetemple"
import thehead from "@/components/statistical/the-head"
import LineChart from "@/components/statistical/linechart-template"
import LineChart1 from "@/components/statistical/linechart-template.1"
import LineColumnar from "@/components/statistical/histogram-template"
import { getWaybillnumber,getforcartraffic,getmalemolteniron,getoutsourcing,getforcartrafficdb,getcompany } from '@/utils/api/chart-analysis/transport'
let monthDate =[];
let company =[];//投资公司下拉
let newarr=[];
 for(var i=29;i>=0;i--){
		var day = "-"+i;
		var today = new Date();
		var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
		today.setTime(targetday_milliseconds); //注意，这行是关键代码
		var tYear = today.getFullYear();
		var tMonth = today.getMonth();
		var tDate = today.getDate();
		tMonth = tMonth + 1;
		if(tMonth.toString().length == 1){
			tMonth = "0" + tMonth;
		}
		if(tDate.toString().length == 1){
			tDate = "0" + tDate;
		}
		tDate = tYear+"-"+tMonth+"-"+tDate;
		monthDate.push(tDate);
}
export default {
  name: "",
  components: {
    thehead,
    LineChart,
	LineChart1,
	LineColumnar
  },
  data() {
    return {
		timedata: "", //选择日期
		waybilltype:1,//运单数type
		forcartype:1,//商品车type
		maleirontype:1,//公铁水运量占比type
		outsourcingtype:1,//外协公铁水运量占比type
		forcardbtype:1,//商品车同期对比type
		waybilltype:1,//运单数type
		
		waybillselect:'org_code',//运单数下拉
		forcarselect:'org_code',//商品车下拉第一
		twoforcarselect:'',//商品车下拉第二
		forcartraffictwochangeuccess:false,
		maleironselect:'org_code',//公铁水运量下拉
		outsourcingselect:'org_code',//外协公铁水运量占比下拉
		forcardbselect:'org_code',//商品车同期对比下拉第一
		twoforcardbselect:'',//商品车同期对比下拉第二
		
		startData:'', //头部时间 开始
		endData:'',//头部时间 结束
      pickerOptions2: {
        //日期中的快捷键
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近半年",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 180);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一年",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value: "", //下拉框选中数据
      forcar: "", //下拉框选中数据
      Thehead: "运输统计",
      // 导航条（锚记）
      current:0,
      navBox: [
        {
          name: '运单数',
          id : 'yundan'
        },
        {
          name: '商品车运量',
          id : 'shangpin'
        },
        {
          name: '公铁水占比',
          id : 'gongtieshui'
        },
        {
          name: '外协陆运占比',
          id : 'WXLY'
        },
        {
          name: '商品车运量同期对比',
          id : 'SPCY'
        }
      ],
      theawb: {
        //运单号
        title: "运单数",
		explain:"已发运的运单数量",
        showicon: true, //i图标是否显示
        thiscolor: ["yellow","red","green","#cc0099","#8796fc","orange"], //折线图颜色
        brushchoose: ["按日", "按周", "按月"], //筛选值
        outrates: [],
        thisnum: " ",
        thisxAxis: [],
        datavalue: []
      },
		theawbDataSuccess: false,
      forcartraffic: {
        //商品车运量
		title: "商品车运量",
		explain:"已发运的商品车数量",
		showselect: true, //是否显示第二个下拉框筛选
        showicon: true, //i图标是否显示
        thiscolor: ["yellow","red","green","#98199171","#8796fc"], //折线图颜色
        brushchoose: ["按日", "按周", "按月"], //筛选值
        outrates: [],
		twooutrates: [],
        thisnum: "",
        thisxAxis:[],
        datavalue: []
      },
		forcartrafficDataSuccess: false,
		forcartrafficdb: {
			//商品车运量同期对比
			title: "商品车运量同期对比",
			explain:"已发运的商品车数量",
			showicon: true, //i图标是否显示
			showselect: true, //是否显示第二个下拉框筛选
			brushchoose: ["按日", "按周", "按月"], //筛选值
			outrates: [],
			twooutrates: [],
			thisnum:"",
			thiscolor: ["yellow","red","green","#98199171","#8796fc","orange"], //折线图颜色
			thisxAxis: [],
			datavalue: []
		  },
		forcartrafficdbDataSuccess:false,
		maleiron: {
			//公铁水运量占比
			title: "公铁水运量占比",
			explain:"以公路/铁路/水路方式承运的运单中，已发运的商品车数量(如果一辆商品车分别以公铁水承运1次后送达，公铁水会分别记录1次运输)",
			showicon: true, //i图标是否显示
			brushchoose: ["昨日", "上周", "上月"], //筛选值
			outrates: [],
			thiscolor: ["#45c9ae", "#df6494", "#5666ea"],
			thisnum: " ",
			thisxAxis: [],
			data: []
		 },
		maleironDataSuccess:false,
		outsourcing: {
			//外协陆运运量占比
			title: "外协陆运运量占比",
			explain:"以外协/自有方式发运的商品车数量",
			showicon: true, //i图标是否显示
			brushchoose: ["昨日", "上周", "上月"], //筛选值
			outrates: [],
			thiscolor: ["#45c9ae", "#df6494", "#5666ea"],
			thisnum: " ",
			thisxAxis: [],
			data: []
		},
		outsourcingDataSuccess:false,
    };
  },
  methods: {
	    addClass:function(index){this.current=index},
		 // 获取运单数
		getWaybillnumber(waybilltype,waybillselect,starttime,endtime){
			getWaybillnumber({
				type:waybilltype,
				starttime:starttime,
				table:waybillselect,
				endtime:endtime
			}).then(res => {
				var dataname =[];
				var datanames =[];
				if(this.waybilltype == 1){
					/* 遍历出name */
					for(var i=0;i<res.data.length;i++){
						dataname.push(res.data[i].code_name);
					}
					/* name去重 */
					for(var j = 0; j < dataname.length; j++){
						if(datanames.indexOf(dataname[j]) == -1){
						   datanames.push(dataname[j]);
						}
					}
					/* 对比赋值 */
					var codename="";
					this.theawb.thisxAxis = monthDate;
					this.theawb.datavalue = [];
					for(var i=0;i<datanames.length;i++){
							var datavalue =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
							for(var j=0;j<res.data.length;j++){
								if(datanames[i] == res.data[j].code_name){
									codename = res.data[j].code_name;
									for(var k=0;k<monthDate.length;k++){
										if(monthDate[k] == res.data[j].createtime){
											datavalue[k] = res.data[j].one_day_sum
										}
									}
							}
						}
						this.theawb.datavalue.push({
							'name':codename,
							 type:'line',
							 smooth:true,
							'data':datavalue,
						})
						this.theawbDataSuccess = true;
					}
				}else if(this.waybilltype == 2){
					this.theawb.datavalue = [];
					var newaxis = res.data;
					newaxis = newaxis.pop();
					newaxis = newaxis.weekDates;
					newaxis.reverse();
					this.theawb.thisxAxis = newaxis;
					for(var i=0;i<res.data.length;i++){
						var seriesvalue =[];
						seriesvalue.push(res.data[i].car_num_twelve);
						seriesvalue.push(res.data[i].car_num_eleven);
						seriesvalue.push(res.data[i].car_num_ten);
						seriesvalue.push(res.data[i].car_num_nine);
						seriesvalue.push(res.data[i].car_num_eight);
						seriesvalue.push(res.data[i].car_num_seven);
						seriesvalue.push(res.data[i].car_num_six);
						seriesvalue.push(res.data[i].car_num_five);
						seriesvalue.push(res.data[i].car_num_four);
						seriesvalue.push(res.data[i].car_num_three);
						seriesvalue.push(res.data[i].car_num_two);
						seriesvalue.push(res.data[i].car_num_one);
						this.theawb.datavalue.push({
							'name':res.data[i].code_name,
							 type:'line',
							 smooth:true,
							'data':seriesvalue,
						})
						this.theawbDataSuccess = true;
					}
				}else{
					this.theawb.datavalue = [];
					var dataArr = [];
					var data = new Date();
					var year = data.getFullYear();
					 data.setMonth(data.getMonth() + 1, 1); //获取到当前月份,设置月份
					 for (var i = 0; i < 12; i++) {
						data.setMonth(data.getMonth() - 1); //每次循环一次 月份值减1
						var m = data.getMonth() + 1;
						m = m < 10 ? "0" + m : m;
						dataArr.push(data.getFullYear() + "年" + m +"月");
					 }
					dataArr = dataArr.reverse();
					this.theawb.thisxAxis= dataArr; 
					
					for(var i=0;i<res.data.length;i++){
						var seriesvalue =[];
						seriesvalue.push(res.data[i].car_num_twelve);
						seriesvalue.push(res.data[i].car_num_eleven);
						seriesvalue.push(res.data[i].car_num_ten);
						seriesvalue.push(res.data[i].car_num_nine);
						seriesvalue.push(res.data[i].car_num_eight);
						seriesvalue.push(res.data[i].car_num_seven);
						seriesvalue.push(res.data[i].car_num_six);
						seriesvalue.push(res.data[i].car_num_five);
						seriesvalue.push(res.data[i].car_num_four);
						seriesvalue.push(res.data[i].car_num_three);
						seriesvalue.push(res.data[i].car_num_two);
						seriesvalue.push(res.data[i].car_num_one);
						this.theawb.datavalue.push({
							'name':res.data[i].code_name,
							 type:'line',
							 smooth:true,
							'data':seriesvalue,
						})
						this.theawbDataSuccess = true;
					}
				}
			}).catch(error => {
			  console.log(error)
			})
		},
		 // 获取商品车运量
		getforcartraffic(forcartype,forcarselect,twoforcarselect,starttime,endtime){
			getforcartraffic({
				type:forcartype,
				table:forcarselect,
				orgCode:twoforcarselect,
				starttime:starttime,
				endtime:endtime,
			}).then(res => {
				var dataname =[];
				var datanames =[];
				if(this.forcartype == 1){
					/* 遍历出name */
					for(var i=0;i<res.data.length;i++){
						dataname.push(res.data[i].code_name);
					}
					/* name去重 */
					for(var j = 0; j < dataname.length; j++){
		        if(datanames.indexOf(dataname[j]) == -1){
		           datanames.push(dataname[j]);
		        }
					}
					/* 对比赋值 */
					var codename="";
					this.forcartraffic.thisxAxis = monthDate;
					this.forcartraffic.datavalue = [];
					for(var i=0;i<datanames.length;i++){
						var datavalue =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
						for(var j=0;j<res.data.length;j++){
							if(datanames[i] == res.data[j].code_name){
								codename = res.data[j].code_name;
								for(var k=0;k<monthDate.length;k++){
									if(monthDate[k] == res.data[j].createtime){
										datavalue[k] = res.data[j].one_day_sum
									}
								}
							}
						}
						this.forcartraffic.datavalue.push({
							'name':codename,
							 type:'line',
							 smooth:true,
							'data':datavalue,
						})
					}
				}else if(this.forcartype == 2){
					this.forcartraffic.datavalue = [];
					var newaxis = res.data;
					newaxis = newaxis.pop();
					newaxis = newaxis.weekDates;
					newaxis.reverse();
					this.forcartraffic.thisxAxis = newaxis;
					for(var i=0;i<res.data.length;i++){
						var seriesvalue =[];
						seriesvalue.push(res.data[i].car_num_twelve);
						seriesvalue.push(res.data[i].car_num_eleven);
						seriesvalue.push(res.data[i].car_num_ten);
						seriesvalue.push(res.data[i].car_num_nine);
						seriesvalue.push(res.data[i].car_num_eight);
						seriesvalue.push(res.data[i].car_num_seven);
						seriesvalue.push(res.data[i].car_num_six);
						seriesvalue.push(res.data[i].car_num_five);
						seriesvalue.push(res.data[i].car_num_four);
						seriesvalue.push(res.data[i].car_num_three);
						seriesvalue.push(res.data[i].car_num_two);
						seriesvalue.push(res.data[i].car_num_one);
						this.forcartraffic.datavalue.push({
							'name':res.data[i].code_name,
							 type:'line',
							 smooth:true,
							'data':seriesvalue,
						})
					}
				}else{
					this.forcartraffic.datavalue = [];
					var dataArr = [];
					var data = new Date();
					var year = data.getFullYear();
					 data.setMonth(data.getMonth() + 1, 1); //获取到当前月份,设置月份
					 for (var i = 0; i < 12; i++) {
						data.setMonth(data.getMonth() - 1); //每次循环一次 月份值减1
						var m = data.getMonth() + 1;
						m = m < 10 ? "0" + m : m;
						dataArr.push(data.getFullYear() + "年" + m +"月");
					 }
					dataArr = dataArr.reverse();
					this.forcartraffic.thisxAxis= dataArr; 
					
					for(var i=0;i<res.data.length;i++){
						var seriesvalue =[];
						seriesvalue.push(res.data[i].car_num_twelve);
						seriesvalue.push(res.data[i].car_num_eleven);
						seriesvalue.push(res.data[i].car_num_ten);
						seriesvalue.push(res.data[i].car_num_nine);
						seriesvalue.push(res.data[i].car_num_eight);
						seriesvalue.push(res.data[i].car_num_seven);
						seriesvalue.push(res.data[i].car_num_six);
						seriesvalue.push(res.data[i].car_num_five);
						seriesvalue.push(res.data[i].car_num_four);
						seriesvalue.push(res.data[i].car_num_three);
						seriesvalue.push(res.data[i].car_num_two);
						seriesvalue.push(res.data[i].car_num_one);
						this.forcartraffic.datavalue.push({
							'name':res.data[i].code_name,
							 type:'line',
							 smooth:true,
							'data':seriesvalue,
						})
					}
				}
				this.forcartrafficDataSuccess = true;
			}).catch(error => {
			  console.log(error)
			})
		},
		 // 获取公铁水运量占比
		getmalemolteniron(maleirontype,maleironselect,starttime,endtime){
			getmalemolteniron({
				type:maleirontype,
				table:maleironselect,
				starttime:starttime,
				endtime:endtime
			}).then(res => {
				var seriesname = [];
				var land = [],railway=[],sea=[];
				this.maleiron.data = [];
				for(var i=0;i<res.data.length;i++){
					if(res.data[i].type_land_sum ==  null){res.data[i].type_land_sum = 0}
					if(res.data[i].type_railway_sum ==  null){res.data[i].type_railway_sum = 0}
					if(res.data[i].type_sea_sum ==  null){res.data[i].type_sea_sum = 0}
					land.push(res.data[i].type_land_sum);
					railway.push(res.data[i].type_railway_sum);
					sea.push(res.data[i].type_sea_sum);
					seriesname.push(res.data[i].code_name);
				}
				this.maleiron.data.push({
					'name':'陆运',
					'data':land,
					'type': 'bar',
					'stack': '总量',
					'smooth': false,
					'barWidth': 20,//柱状宽度
					//'itemStyle' : { normal: {label : {show: true}}}
				})
				this.maleiron.data.push({
					'name':'铁运',
					'data':railway,
					'type': 'bar',
					'stack': '总量',
					'smooth': false,
					'barWidth': 20,//柱状宽度
				})
				this.maleiron.data.push({
					'name':'水运',
					'data':sea,
					'type': 'bar',
					'stack': '总量',
					'smooth': false,
					'barWidth': 20,//柱状宽度
				})
				
				this.maleiron.thisxAxis = seriesname;
				this.maleironDataSuccess = true;
			}).catch(error => {
			  console.log(error)
			})
		},
		// 获取外协公铁水运量占比
		getoutsourcing(outsourcingtype,outsourcingselect,starttime,endtime){
			getoutsourcing({
				type:outsourcingtype,
				table:outsourcingselect,
				starttime:starttime,
				endtime:endtime
			}).then(res => {
				var seriesname = [];
				var land = [],railway=[],sea=[];
				this.outsourcing.data = [];
				for(var i=0;i<res.data.length;i++){
					if(res.data[i].type_land_sum ==  null){res.data[i].type_land_sum = 0}
					if(res.data[i].type_railway_sum ==  null){res.data[i].type_railway_sum = 0}
					if(res.data[i].type_sea_sum ==  null){res.data[i].type_sea_sum = 0}
					land.push(res.data[i].type_land_sum);
					railway.push(res.data[i].type_railway_sum);
					sea.push(res.data[i].type_sea_sum);
					seriesname.push(res.data[i].code_name);
				}
				this.outsourcing.data.push({
					'name':'陆运',
					'data':land,
					'type': 'bar',
					'stack': '总量',
					'smooth': false,
					'barWidth': 20,//柱状宽度
					//'itemStyle' : { normal: {label : {show: true}}}
				})
				this.outsourcing.data.push({
					'name':'铁运',
					'data':railway,
					'type': 'bar',
					'stack': '总量',
					'smooth': false,
					'barWidth': 20,//柱状宽度
				})
				this.outsourcing.data.push({
					'name':'水运',
					'data':sea,
					'type': 'bar',
					'stack': '总量',
					'smooth': false,
					'barWidth': 20,//柱状宽度
				})
				
				this.outsourcing.thisxAxis = seriesname;
				this.outsourcingDataSuccess = true;
			}).catch(error => {
			  console.log(error)
			})
		},
		 // 获取商品车同期对比运量
		getforcartrafficdb(forcardbtype,forcardbselect,twoforcardbselect,starttime,endtime){
			getforcartrafficdb({
				type:forcardbtype,
				table:forcardbselect,
				orgCode:twoforcardbselect,
				starttime:starttime,
				endtime:endtime
			}).then(res => {
				this.forcartrafficdb.datavalue =[];
				var over=[];
				var now=[];
				var datanames =[];
				var datavalue=[];
				if(this.forcardbtype == 1){
					for(var i=0;i<res.data.length;i++){
						datanames.push(res.data[i].code_name);
						over.push(res.data[i].car_num_over);
						now.push(res.data[i].car_num_now);
					}
					this.forcartrafficdb.datavalue.push({
						name:'昨日',
						type:'line',
						smooth:true,
						'data':over,
					})
					this.forcartrafficdb.datavalue.push({
						name:'今日',
						type:'line',
						smooth:true,
						'data':now,
					})
					this.forcartrafficdb.thisxAxis = datanames;
				}else if(this.forcardbtype == 2){
					for(var i=0;i<res.data.length;i++){
						datanames.push(res.data[i].code_name);
						over.push(res.data[i].car_num_over);
						now.push(res.data[i].car_num_now);
					}
					this.forcartrafficdb.datavalue.push({
						name:'上周',
						type:'line',
						smooth:true,
						'data':over,
					})
					this.forcartrafficdb.datavalue.push({
						name:'本周',
						type:'line',
						smooth:true,
						'data':now,
					})
					this.forcartrafficdb.thisxAxis = datanames;
				}else{
					for(var i=0;i<res.data.length;i++){
						datanames.push(res.data[i].code_name);
						over.push(res.data[i].car_num_over);
						now.push(res.data[i].car_num_now);
					}
					this.forcartrafficdb.datavalue.push({
						name:'上月',
						type:'line',
						smooth:true,
						'data':over,
					})
					this.forcartrafficdb.datavalue.push({
						name:'本月',
						type:'line',
						smooth:true,
						'data':now,
					})
					this.forcartrafficdb.thisxAxis = datanames;
				}
				this.forcartrafficdbDataSuccess = true;
			}).catch(error => {
			  console.log(error)
			})
		},
		//运单数的日 周 月事件
		clickwaybilltype(valuetype){
			this.waybilltype = valuetype;
			this.getWaybillnumber(this.waybilltype,this.waybillselect,this.startData,this.endData);
		},
		//商品车的日 周 月事件
		clickforcartype(valuetype){
			this.forcartype = valuetype;
			this.getforcartraffic(this.forcartype,this.forcarselect,this.twoforcarselect,this.startData,this.endData);
		},
		//公铁水运量占比的日 周 月事件
		clickmaleirontype(valuetype){
			this.maleirontype = valuetype;
			this.getmalemolteniron(this.maleirontype,this.maleironselect,this.startData,this.endData);
		},
		//外协陆铁水运量占比的日 周 月事件
		clickoutsourcingtype(valuetype){
			this.outsourcingtype = valuetype;
			this.getoutsourcing(this.outsourcingtype,this.outsourcingselect,this.startData,this.endData);
		},
		//商品车同期对比的日 周 月事件
		clickforcardbtype(valuetype){
			this.forcardbtype = valuetype;
			this.getforcartrafficdb(this.forcardbtype,this.forcardbselect,this.twoforcardbselect,this.startData,this.endData);
		},
		
		//运单数的下拉框事件
		changewaybillselect (valuetype){
			this.waybillselect = valuetype;
			this.getWaybillnumber(this.waybilltype,this.waybillselect,this.startData,this.endData);
		},
		//商品车的下拉框事件
		changeforcarselect (valuetype){
			this.forcarselect = valuetype;
			this.forcartraffic.twooutrates = [];
			for(var i=0;i<newarr.length;i++){
				if(newarr[i].code == valuetype){
					var arr =[];
					arr = newarr[i].data;
					for(var j=0;j<arr.length;j++){
						//this.twoforcarselect = arr[0].code;
						this.forcartraffic.twooutrates.push({
							value:arr[j].code,
							label:arr[j].name
						})
					}
				}
			}
			this.getforcartraffic(this.forcartype,this.forcarselect,this.twoforcarselect,this.startData,this.endData);
		},
		//商品车的第二个下拉框事件
		twochangeforcarselect (valuetype){
			this.twoforcarselect = valuetype;
			this.getforcartraffic(this.forcartype,this.forcarselect,this.twoforcarselect,this.startData,this.endData);
		},
		//公铁水下拉框事件
		changemaleironselect(valuetype){
			this.maleironselect = valuetype;
			this.getmalemolteniron(this.maleirontype,this.maleironselect,this.startData,this.endData);
		},
		//外协陆运占比
		changeoutsourcingselect(valuetype){
			this.outsourcingselect = valuetype;
			this.getoutsourcing(this.outsourcingtype,this.outsourcingselect,this.startData,this.endData);
		},
		//商品车同期对比的下拉框事件
		changeforcardbselect (valuetype){
			this.forcardbselect = valuetype;
			this.forcartrafficdb.twooutrates = [];
			for(var i=0;i<newarr.length;i++){
				if(newarr[i].code == valuetype){
					var arr =[];
					arr = newarr[i].data;
					for(var j=0;j<arr.length;j++){
						//this.twoforcardbselect = arr[0].code;
						this.forcartrafficdb.twooutrates.push({
							value:arr[j].code,
							label:arr[j].name
						})
					}
				}
			}
			this.getforcartrafficdb(this.forcardbtype,this.forcardbselect,this.twoforcardbselect,this.startData,this.endData);
		},
		//商品车同期对比的第二个下拉框事件
		twochangeforcardbselect (valuetype){
			this.twoforcardbselect = valuetype;
			this.getforcartrafficdb(this.forcardbtype,this.forcardbselect,this.twoforcardbselect,this.startData,this.endData);
		},
		
		//头部日期改变之后
		clicktimedata(valuetime){
			this.startData = valuetime.startData;
			this.endData = valuetime.endData;
			this.getWaybillnumber(this.waybilltype,this.waybillselect,this.startData,this.endData);
			this.getforcartraffic(this.forcartype,this.forcarselect,this.twoforcarselect,this.startData,this.endData);
			this.getmalemolteniron(this.maleirontype,this.maleironselect,this.startData,this.endData);
			this.getoutsourcing(this.outsourcingtype,this.outsourcingselect,this.startData,this.endData);
			this.getforcartrafficdb(this.forcardbtype,this.forcardbselect,this.twoforcardbselect,this.startData,this.endData);
		},
		//投资公司下拉
		 getcompany(){
			 var logistics=[];
			getcompany({}).then(res => {
				newarr = res.data;
				for(var i=0;i<res.data.length;i++){
					company.push({
						value:res.data[i].code,
						label:res.data[i].name
					})
					if(res.data[i].code == "org_code"){
						var arr =[];
						arr = res.data[i].data;
						for(var j=0;j<arr.length;j++){
							logistics.push({
								value:arr[j].code,
								label:arr[j].name
							})
						}
					}
				}
				this.theawb.outrates = company;
				this.forcartraffic.outrates = company;
				this.forcartraffic.twooutrates = logistics;
				this.forcartrafficdb.outrates = company;
				this.forcartrafficdb.twooutrates = logistics;
				this.maleiron.outrates = company;
				this.outsourcing.outrates = company;
			}).catch(error => {
			  console.log(error)
			})
		} 
			
	},
	mounted() {
		localStorage.setItem('router',this.$route.fullPath);
		this.getcompany();
		this.getWaybillnumber(this.waybilltype,this.waybillselect,this.startData,this.endData);
		this.getforcartraffic(this.forcartype,this.forcarselect,this.twoforcarselect,this.startData,this.endData);
		this.getmalemolteniron(this.maleirontype,this.maleironselect,this.startData,this.endData);
		this.getoutsourcing(this.outsourcingtype,this.outsourcingselect,this.startData,this.endData);
		this.getforcartrafficdb(this.forcardbtype,this.forcardbselect,this.twoforcardbselect,this.startData,this.endData); 
	},

	watch: {
		$route( to , from ){   
       if(from.path==='/statistical-transport'){
              localStorage.removeItem('router')
			 }else if(to.path==='/statistical-transport'){
         localStorage.setItem('router',this.$route.fullPath)
        // to , from 分别表示从哪跳转到哪，都是一个对象
        // to.path  ( 表示的是要跳转到的路由的地址 eg: /home );
     }
	},
	}
};
</script>

<style lang="scss">
@import url("../../../../static/css/style.css");
.el-date-editor .el-range-separator {
  width: 10%;

}
.mod-demo-echarts {
  .chart-box {
    min-height: 400px;
  }
}
.containBox{
  margin-left: 10%;
  position: absolute;
  left: 0;
  right: 0;
  top: 90px;
  overflow: auto;
  bottom: 1px;
  padding: 0 20px!important;
  border: 0!important;
  background: none!important;
  	>div{
			background: #fff;
			padding: 10px 0;
			margin:0 20px 30px 0;
			border: 1px solid #e0e0eb;
		}
  .right-bar {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border: 1px solid #e0e0eb;
    padding: 20px;
    margin: 20px 10px;
  }
}
</style>
<style lang="scss" scoped>
#anchornavigation {
    width: 80px;
    padding: 10px 0;
    background: #fff;
    margin-left: 2%;
    border: 1px solid #e0e0eb;
    box-shadow: 0 3px 4px 0 rgba(98, 99, 118, 0.08);
    li {
	  width: 99%;
      height: auto;
      line-height: normal;
      padding: 10px 9px;
      a {
        font-size: 13px;
        color: #84849a;
        text-align: center;
        display: block;
      }
    }
    .active a {
      color: #da212d;
    }
  }
</style>

