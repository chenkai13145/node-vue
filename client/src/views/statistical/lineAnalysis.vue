<template>
	<!-- 线路分析 -->
	<div>
		<header style="height: 100%">
			<thehead :Thehead="Thehead"></thehead>
		</header>
		<!-- 导航条（锚记） -->
        <ul id="anchornavigation">
	    	<li v-for="(nav, index) in navBox" :key="index" v-on:click="addClass(index)" v-bind:class="{ active:index==current}"><a :href="'#'+nav.id">{{nav.name}}</a></li>
	    </ul>
		<div class="containBox">
			<!-- 线路数 -->
			<div id="lineNumber" class="mod-demo-echarts margintop10">
				<LineChart1 :brokenlineData="numberlines" @clicktype="clicknumbertype" :successData="numberDataSuccess"></LineChart1>
			</div>
			<!-- 堆叠条形图 -->
			<div id="chongfuxianlu" class="mod-demo-echarts margintop10">
				 <LineColumnar1 :columnarData="delaytop20" :successData="delaytop20DataSuccess" @clicktype="clickdelaytop20type"></LineColumnar1>
			</div>
			<div id="jiaofu" class="mod-demo-echarts margintop10">
				<!-- 交付及时率top分析图 -->
		        <el-row class="borderbottom">
		        	<el-col :span="12" class="backwhite">
		        		<ProgressBar :progressData="optimallist"  @clicktype="clickoptimaltype" :successData="optimalDataSuccess" @clickcheck="checkoptimal"></ProgressBar>
		        	</el-col>
		        	<el-col :span="12" class="backwhite">
		        		<ProgressBar :progressData="worstlist" @clicktype="clickworsttype" :successData="worstDataSuccess" @clickcheck="checkworst"></ProgressBar>
		        	</el-col>
		        </el-row>
			</div>
			<div id="cyl" class="mod-demo-echarts margintop10">
				<!-- 承运量分析图 -->
		        <el-row class="borderbottom">
		        	<el-col :span="12" class="backwhite">
		        		<ProgressBar :progressData="carriermorelist" @clicktype="clickmosttype" :successData="mostDataSuccess" @clickcheck="checkmost"></ProgressBar>
		        	</el-col>
		        	<el-col :span="12" class="backwhite">
		        		<ProgressBar :progressData="carrierlesslist" @clicktype="clickminimumtype" :successData="minimumDataSuccess" @clickcheck="checkminimum"></ProgressBar>
		        	</el-col>	
		        </el-row>
			</div>
			<div id="ysjl" class="mod-demo-echarts margintop10">
            <!-- 运输距离 -->
		        <el-row class="borderbottom">
		        	<el-col :span="12" class="backwhite">
		        		<ProgressBar :progressData="transportmorelist" @clicktype="clicklongesttype" :successData="longestDataSuccess" @clickcheck="checklongest"></ProgressBar>
		        	</el-col>	
		        	<el-col :span="12" class="backwhite">
		        		<ProgressBar :progressData="transportlesslist" @clicktype="clickshortesttype" :successData="shortestDataSuccess" @clickcheck="checkshortest"></ProgressBar>
		        	</el-col>	
		        </el-row>
			</div>
		</div>
	</div>
		
  
</template>

<script>
import thehead from '@/components/statistical/the-head'
import LineColumnar1 from "@/components/statistical/histogram-template.1"
import LineChart1 from '@/components/statistical/linechart-template.1'//折线图
import Linetransverse from '@/components/statistical/transverse-more-template'//柱状图横向
import ProgressBar from '@/components/statistical/theprogressbar.1'//进度条
import { getcompany } from '@/utils/api/chart-analysis/transport'
import { getNumberlines,getdelaytop20,getTimelytimal,getTimelypoor,getransportlongest,getransportshortest,getcarriermost,getcarrierminimum } from '@/utils/api/chart-analysis/lineAnalysis'
let monthDate =[];
let arr =[];
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
	name: '',
	components: {
		thehead,
		LineChart1,
		LineColumnar1,
		Linetransverse,
		ProgressBar
	},
    data () {
      return {
		  // 导航条（锚记）
                current:0,
                navBox: [
                  {
                    name: '线路数',
                    id : 'lineNumber'
                  },
                  {
                    name: '重复线路',
                    id : 'chongfuxianlu'
                  },
                  {
                    name: '交付及时率',
                    id : 'jiaofu'
                  },
                  {
                    name: '承运量',
                    id : 'cyl'
				  },
				  {
					name: '运输距离',
                    id : 'ysjl'
				  }
                ],
				numberlinestype:1,//线路数type
				delaytop20type:1,
				delaytop20DataSuccess:false,//重复路线20
				optimaltype:1,//交互及时率最优top10
				optimalDataSuccess:false,
				optimalcheck:'',
				poortype:1,//交互及时率最差top10
				worstDataSuccess:false,
				worstcheck:'',
				longesttype:1,//运输距离最长top10
				longestDataSuccess:false,
				longescheck:'',
				shortesttype:1,//运输距离最短top10
				shortestDataSuccess:false,
				shortestcheck:'',
				mosttype:1,//承运量最多top10
				mostDataSuccess:false,
				mostcheck:'',
				minimumtype:1,//承运量最少top10
				minimumDataSuccess:false,
				minimumcheck:'',
				startData:'', //头部时间 开始
				endData:'',//头部时间 结束
				Thehead:'路线分析',
				//线路数
				numberlines: {
					title:'线路数',
					explain:"已维护到TMS系统的标准线路数量",
					showicon:true,//i图标是否显示
					thiscolor:['yellow','green'],//折线图颜色
					brushchoose:['昨日','上周','上月'],//筛选值
					outrates: [],
					thiscolor:['yellow','green'],
					thisnum:'',
					thisxAxis:[],
					data: []
				},
				numberDataSuccess:false,
				//重复线路(前20条)
				delaytop20: {
					title: "重复线路",
					explain:"不同投资企业之间，发运城市-收货城市 完全一致的线路",
					showicon: true, //i图标是否显示
					brushchoose:['昨日','上周','上月'],//筛选值
					outrates: [],
					thiscolor: ["yellow","red","green","#98199171","#8796fc","orange"],
					thisnum: " ",
					thisxAxis: [],
					data: []
				 },
				//交付及时率最优TOP10
				optimallist: {
					title:'交付及时率最优TOP10',
					explain:"交付及时率=按时交付商品车数量/已交付商品车总数 (线路维度)",
					showicon:true,//i图标是否显示
					brushchoose:['昨日','上周','上月'],//筛选值
					cityOptions:[],
					checkOptions:[],
					companys:[],
					selectcompanys:'',
					color:'#ff3366',
					data: [],
				},
				//交付及时率最差TOP10
				worstlist: {
					title:'交付及时率最差TOP10',
					explain:"交付及时率=按时交付商品车数量/已交付商品车总数 (线路维度)",
					showicon:true,//i图标是否显示
					brushchoose:['昨日','上周','上月'],//筛选值
					cityOptions:[],
					checkOptions:[],
					companys:[],
					color:'#219DEF',
					data: [],
				},
				
				//承运量最多TOP10
				carriermorelist: {
					title:'承运量最多TOP10',
					explain:"已发运的商品车数量(线路维度)",
					showicon:true,//i图标是否显示
					brushchoose:['昨日','上周','上月'],//筛选值
					cityOptions:[],
					checkOptions:[],
					companys:[],
					color:'#ff3366',
					data: [],
				},
				//承运量最少TOP10
				carrierlesslist: {
					title:'承运量最少TOP10',
					explain:"已发运的商品车数量(线路维度)",
					showicon:true,//i图标是否显示
					brushchoose:['昨日','上周','上月'],//筛选值
					cityOptions:[],
					checkOptions:[],
					companys:[],
					color:'#219DEF',
					data: [],
				},
				//运输距离最长TOP10
				transportmorelist: {
					title:'运输距离最长TOP10',
					explain:"发运城市-收货城市 的推荐线路的距离",
					showicon:true,//i图标是否显示
					brushchoose:['昨日','上周','上月'],//筛选值
					cityOptions:[],
					checkOptions:[],
					color:'#98199171',
					data: [],
				},
				//运输距离最短TOP10
				transportlesslist: {
					title:'运输距离最短TOP10',
					explain:"发运城市-收货城市 的推荐线路的距离",
					showicon:true,//i图标是否显示
					brushchoose:['昨日','上周','上月'],//筛选值
					cityOptions:[],
					checkOptions:[],
					companys:[],
					color:'#8796fc',
					data: [],
				},
      }
    },
    methods: {
		addClass: function(index) {
            this.current = index;
        },
		//线路数
		getNumberlines(numberlinestype,starttime,endtime){
			getNumberlines({
				type:numberlinestype,
				starttime:starttime,
				endtime:endtime
			}).then(res => {
				var dataname =[];
				var datanames =[];
				if(this.numberlinestype == 1){
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
					this.numberlines.thisxAxis = monthDate;
					this.numberlines.data = [];
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
						this.numberlines.data.push({
							'name':codename,
							 type:'line',
							 smooth:true,
							'data':datavalue,
						})
						this.numberDataSuccess = true;
					}
				}else if(this.numberlinestype == 2){
					this.numberlines.data = [];
					var newaxis = res.data;
					newaxis = newaxis.pop();
					newaxis = newaxis.weekDates;
					newaxis.reverse();
					this.numberlines.thisxAxis = newaxis;
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
						this.numberlines.data.push({
							'name':res.data[i].code_name,
							 type:'line',
							 smooth:true,
							'data':seriesvalue,
						})
						this.theawbDataSuccess = true;
					}
				}else{
					this.numberlines.data = [];
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
					this.numberlines.thisxAxis= dataArr; 
					
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
						this.numberlines.data.push({
							'name':res.data[i].code_name,
							 type:'line',
							 smooth:true,
							'data':seriesvalue,
						})
					}
				}
				this.numberDataSuccess = true;
			}).catch(error => {
			  console.log(error)
			})
		},
		 // 获取重复路线前20
		getdelaytop20(delaytop20type,starttime,endtime){
			getdelaytop20({
				type:delaytop20type,
				starttime:starttime,
				endtime:endtime
			}).then(res => {
				this.delaytop20.data=[];
				var datanames=[];//x轴
				var FNL=[];//富田日捆
				var GBL=[];//商贸物流
				var GNL=[];//商贸日邮
				var GRTL=[];//商铁物流
				var GTT=[];//广丰物流
				var HSL=[];//顺捷物流
				for(var i=0;i<res.data.length-1;i++){
					datanames.push(res.data[i].address);
					FNL.push(res.data[i].FNL);
					GBL.push(res.data[i].GBL);
					GNL.push(res.data[i].GNL);
					GRTL.push(res.data[i].GRTL);
					GTT.push(res.data[i].GTT);
					HSL.push(res.data[i].HSL);
				}
				this.delaytop20.data.push({
					'name':'富田日捆',
					'data':FNL,
					'type': 'bar',
					'stack': '总量',
					'smooth': false,
					'barWidth': 20,//柱状宽度
				})
				this.delaytop20.data.push({
					'name':'商贸物流',
					'data':GBL,
					'type': 'bar',
					'stack': '总量',
					'smooth': false,
					'barWidth': 20,//柱状宽度
				})
				this.delaytop20.data.push({
					'name':'商贸日邮',
					'data':GNL,
					'type': 'bar',
					'stack': '总量',
					'smooth': false,
					'barWidth': 20,//柱状宽度
				})
				this.delaytop20.data.push({
					'name':'商铁物流',
					'data':GRTL,
					'type': 'bar',
					'stack': '总量',
					'smooth': false,
					'barWidth': 20,//柱状宽度
				})
				this.delaytop20.data.push({
					'name':'广丰物流',
					'data':GTT,
					'type': 'bar',
					'stack': '总量',
					'smooth': false,
					'barWidth': 20,//柱状宽度
				})
				this.delaytop20.data.push({
					'name':'顺捷物流',
					'data':HSL,
					'type': 'bar',
					'stack': '总量',
					'smooth': false,
					'barWidth': 20,//柱状宽度
				})
				this.delaytop20.thisxAxis = datanames;
				this.delaytop20DataSuccess = true;
			}).catch(error => {
			  console.log(error)
			})
		},
		
		
		//交付及时率最优top10
		getTimelytimal(optimaltype,starttime,endtime,orgCode){
			getTimelytimal({
				type:optimaltype,
				starttime:starttime,
				endtime:endtime,
				orgCode:orgCode,
			}).then(res => {
				var datavalue=[];
				for(var i=0;i<res.data.length;i++){
						var num = res.data[i].promptness*100;
						num = parseInt(num);
						if(num > 100){num = 100}
						if(isNaN(num)){
							num = 0;
						}
						datavalue.push({
							value: num,
							name: res.data[i].code_name+"("+res.data[i].code+")"
						})
					}
					this.optimallist.data = datavalue;
					this.optimalDataSuccess = true;
					
			}).catch(error => {
			  console.log(error)
			})
		},
		//交付及时率最差top10
		getTimelypoor(poortype,starttime,endtime,orgCode){
			getTimelypoor({
				type:poortype,
				starttime:starttime,
				endtime:endtime,
				orgCode:orgCode,
			}).then(res => {
				var datavalue=[];
				for(var i=0;i<res.data.length;i++){
						var num = res.data[i].promptness*100;
						num = parseInt(num);
						if(num > 100){num = 100}
						if(isNaN(num)){
							num = 0;
						}
						datavalue.push({
							value: num,
							name: res.data[i].code_name+"("+res.data[i].code+")"
						})
					}
					this.worstlist.data = datavalue;
					this.worstDataSuccess = true;
					
			}).catch(error => {
			  console.log(error)
			})
		},
		
		
			//运输距离最长top10
	  	getransportlongest(longesttype,starttime,endtime,orgCode){
	  		getransportlongest({
	  			type:longesttype,
	  			starttime:starttime,
	  			endtime:endtime,
				orgCode:orgCode,
	  		}).then(res => {
	  			var totalnum = 0;
					var datavalue=[];
					for(var i=0;i<res.data.length;i++){
						totalnum += res.data[i].distance;
					}
					
				for(var i=0;i<res.data.length;i++){
						var num = res.data[i].distance/totalnum;
						num = num*100;
						num = parseInt(num);
						if(isNaN(num)){
							num = 0;
						}
						datavalue.push({
							value: num,
							name: res.data[i].code_name+"("+res.data[i].code+")"
						})
					}
					this.transportmorelist.data = datavalue;
					this.longestDataSuccess = true;
					
	  		}).catch(error => {
	  		  console.log(error)
	  		})
	  	},
			//运输距离最短top10
			getransportshortest(shortesttype,starttime,endtime,orgCode){
				getransportshortest({
					type:shortesttype,
					starttime:starttime,
					endtime:endtime,
					orgCode:orgCode,
				}).then(res => {
					var totalnum = 0;
					var datavalue=[];
					for(var i=0;i<res.data.length;i++){
						totalnum += res.data[i].distance;
					}
					
					for(var i=0;i<res.data.length;i++){
						var num = res.data[i].distance/totalnum;
						num = num*100;
						num = parseInt(num);
						if(isNaN(num)){
							num = 0;
						}
						datavalue.push({
							value: num,
							name: res.data[i].code_name+"("+res.data[i].code+")"
						})
					}
					this.transportlesslist.data = datavalue;
					this.shortestDataSuccess = true;
					
				}).catch(error => {
				  console.log(error)
				})
			},
			//承运量最多top10
			getcarriermost(mosttype,starttime,endtime,orgCode){
				getcarriermost({
					type:mosttype,
					starttime:starttime,
					endtime:endtime,
					orgCode:orgCode,
				}).then(res => {
					var totalnum = 0;
					var datavalue=[];
					for(var i=0;i<res.data.length;i++){
						totalnum += res.data[i].car_num;
					}
					
				for(var i=0;i<res.data.length;i++){
						var num = res.data[i].car_num/totalnum;
						num = num*100;
						num = parseInt(num);
						if(isNaN(num)){
							num = 0;
						}
						datavalue.push({
							value: num,
							name: res.data[i].code_name+"("+res.data[i].code+")"
						})
					}
					this.carriermorelist.data = datavalue;
					this.mostDataSuccess = true;
					
				}).catch(error => {
				  console.log(error)
				})
			},
			//承运量最少top10
			getcarrierminimum(minimumtype,starttime,endtime,orgCode){
				getcarrierminimum({
					type:minimumtype,
					starttime:starttime,
					endtime:endtime,
					orgCode:orgCode,
				}).then(res => {
					var totalnum = 0;
					var datavalue=[];
					for(var i=0;i<res.data.length;i++){
						totalnum += res.data[i].car_num;
					}
					for(var i=0;i<res.data.length;i++){
						var num = res.data[i].car_num/totalnum;
						num = num*100;
						num = parseInt(num);
						if(isNaN(num)){
							num = 0;
						}
						datavalue.push({
							value: num,
							name: res.data[i].code_name+"("+res.data[i].code+")"
						})
					}
					this.carrierlesslist.data = datavalue;
					this.minimumDataSuccess = true;
					
				}).catch(error => {
				  console.log(error)
				})
			},
			//线路数的日 周 月事件
			clicknumbertype(valuetype){
				this.numberlinestype = valuetype;
				this.getNumberlines(this.numberlinestype,this.startData,this.endData);
			},
			//重复路线的日 周 月事件
			clickdelaytop20type(valuetype){
				this.delaytop20type = valuetype;
				this.getdelaytop20(this.delaytop20type,this.startData,this.endData);
			},
			//及时率交互最优的日 周 月事件
			clickoptimaltype(valuetype){
				this.optimaltype = valuetype;
				this.getTimelytimal(this.optimaltype,this.startData,this.endData,this.optimalcheck);
			},
			//及时率交互最差的日 周 月事件
			clickworsttype(valuetype){
				this.poortype = valuetype;
				this.getTimelypoor(this.poortype,this.startData,this.endData);
			},
			//运输距离最长的日 周 月事件
			clicklongesttype(valuetype){
				this.longesttype = valuetype;
				this.getransportlongest(this.longesttype,this.startData,this.endData);
			},
			//运输距离最短的日 周 月事件
			clickshortesttype(valuetype){
				this.shortesttype = valuetype;
				this.getransportshortest(this.shortesttype,this.startData,this.endData);
			},
			//承运量最多的日 周 月事件
			clickmosttype(valuetype){
				this.mosttype = valuetype;
				this.getcarriermost(this.mosttype,this.startData,this.endData);
			},
			//承运量最少的日 周 月事件
			clickminimumtype(valuetype){
				this.minimumtype = valuetype;
				this.getcarrierminimum(this.minimumtype,this.startData,this.endData);
			},
			
			
			//及时率交互最优的复选框事件
			checkoptimal(valuecheck){
				this.optimalcheck = valuecheck;
				valuecheck = valuecheck.split(",");
				var newarr =[];
				valuecheck.forEach(x=>{  
					arr.forEach(s=>{  
						if(x == s.code){
							newarr.push(s.name);
						}
					});
				});
				this.optimallist.checkOptions = newarr;
				this.getTimelytimal(this.optimaltype,this.startData,this.endData,this.optimalcheck);
			},
			//及时率交互最差的复选框事件
			checkworst(valuecheck){
				this.worstcheck = valuecheck;
				valuecheck = valuecheck.split(",");
				var newarr =[];
				valuecheck.forEach(x=>{  
					arr.forEach(s=>{  
						if(x == s.code){
							newarr.push(s.name);
						}
					});
				});
				this.worstlist.checkOptions = newarr;
				this.getTimelypoor(this.poortype,this.startData,this.endData,this.worstcheck);
			},
			//承运量最多的复选框事件
			checkmost(valuecheck){
				this.mostcheck = valuecheck;
				valuecheck = valuecheck.split(",");
				var newarr =[];
				valuecheck.forEach(x=>{  
					arr.forEach(s=>{  
						if(x == s.code){
							newarr.push(s.name);
						}
					});
				});
				this.carriermorelist.checkOptions = newarr;
				this.getcarriermost(this.mosttype,this.startData,this.endData,this.mostcheck);
			},
			//承运量最少的复选框事件
			minimumcheck(valuecheck){
				this.checkminimum = valuecheck;
				valuecheck = valuecheck.split(",");
				var newarr =[];
				valuecheck.forEach(x=>{  
					arr.forEach(s=>{  
						if(x == s.code){
							newarr.push(s.name);
						}
					});
				});
				this.carrierlesslist.checkOptions = newarr;
				this.getcarrierminimum(this.minimumtype,this.startData,this.endData,this.checkminimum);
			},
			//运输距离最长的复选框事件
			checklongest(valuecheck){
				this.longescheck = valuecheck;
				valuecheck = valuecheck.split(",");
				var newarr =[];
				valuecheck.forEach(x=>{  
					arr.forEach(s=>{  
						if(x == s.code){
							newarr.push(s.name);
						}
					});
				});
				this.transportmorelist.checkOptions = newarr;
				this.getransportlongest(this.longesttype,this.startData,this.endData,this.longescheck);
			},
			
			
			//运输距离最短的复选框事件
			checkshortest(valuecheck){
				this.shortestcheck = valuecheck;
				valuecheck = valuecheck.split(",");
				var newarr =[];
				valuecheck.forEach(x=>{  
					arr.forEach(s=>{  
						if(x == s.code){
							newarr.push(s.name);
						}
					});
				});
				this.transportlesslist.checkOptions = newarr;
				this.getransportshortest(this.shortesttype,this.startData,this.endData,this.shortestcheck);
			},
			
			
			
			
			//投资公司下拉
			 getcompany(){
				var logistics=[];
				var code='';
				getcompany({}).then(res => {
					for(var i=0;i<res.data.length;i++){
						if(res.data[i].code == "org_code"){
							arr = res.data[i].data;
							for(var j=0;j<arr.length;j++){
								logistics.push(arr[j].name);
								code+= arr[j].code+",";
							}
						}
					}
					//需要的复选框数据
					this.optimallist.cityOptions = logistics;
					this.worstlist.cityOptions = logistics;
					this.carriermorelist.cityOptions = logistics;
					this.carrierlesslist.cityOptions = logistics;
					this.transportmorelist.cityOptions = logistics;
					this.transportlesslist.cityOptions = logistics;
					//选中的复选框数据
					this.optimallist.checkOptions = logistics;
					this.worstlist.checkOptions = logistics;
					this.carriermorelist.checkOptions = logistics;
					this.carrierlesslist.checkOptions = logistics;
					this.transportmorelist.checkOptions = logistics;
					this.transportlesslist.checkOptions = logistics;
					//选中的复选框数据
					this.optimallist.company = arr;
					this.worstlist.company = arr;
					this.carriermorelist.company = arr;
					this.carrierlesslist.company = arr;
					this.transportmorelist.company = arr;
					this.transportlesslist.company = arr;
					//默认传给后台复选框的值
					this.optimalcheck = code;
					this.worstcheck = code;
					this.mostcheck = code;
					this.checkminimum = code;
					this.longescheck = code;
					this.shortestcheck = code;
					
					this.getNumberlines(this.numberlinestype,this.startData,this.endData);
					this.getdelaytop20(this.delaytop20type,this.startData,this.endData);
					this.getTimelytimal(this.optimaltype,this.startData,this.endData,this.optimalcheck);
					this.getransportlongest(this.longesttype,this.startData,this.endData,this.longescheck);
					this.getransportshortest(this.shortesttype,this.startData,this.endData,this.shortestcheck);
					this.getcarriermost(this.mosttype,this.startData,this.endData,this.mostcheck);
					this.getcarrierminimum(this.minimumtype,this.startData,this.endData,this.checkminimum);
					this.getTimelypoor(this.poortype,this.startData,this.endData,this.worstcheck); 
				}).catch(error => {
				  console.log(error)
				})
			} 
    },
		 mounted() {
			this.getcompany();
			
			
		},
  }
</script>

<style lang="scss">
@import url("../../../../static/css/style.css");
.el-date-editor .el-range-separator{width: 10%;}
.mod-demo-echarts {
    .chart-box {
      min-height: 400px;
    }
}

</style>
<style lang="scss" scoped>
.containBox {
    margin-left: 10%;
    position: absolute;
    left: 0;
    right: 0;
    top: 90px;
    overflow: auto;
    bottom: 1px;
    > div {
      background: #fff;
      margin: 0 20px 30px 0;
    }
    .height40.linheight40.margintop10 {
      .el-col.el-col-14 {
        float: right;
        .el-row {
          display: flex;
          justify-content: flex-end;
          position: static !important;
          right: 0 !important;
          .el-col.el-col-3 {
            position: static !important;
            right: 0 !important;
          }
        }
      }
    }
  }
#anchornavigation {
    width: 80px;
    padding: 10px 0;
    background: #fff;
    margin-left: 2%;
    border: 1px solid #e0e0eb;
    box-shadow: 0 3px 4px 0 rgba(98, 99, 118, 0.08);
    li {
	  height: auto;
	  width: 99%;
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
