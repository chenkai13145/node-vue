<template>
	<!-- 工作效率 -->
	<div>
		<header style="height: 100%">
				<thehead :Thehead="Thehead" @clicktimedata="clicktimedata"></thehead>
		</header>
		<ul id="anchornavigation">
			<li v-for="(nav, index) in navBox" :key="index" v-on:click="addClass(index)" v-bind:class="{ active:index==current}"><a :href="'#'+nav.id">{{nav.name}}</a></li>
			<!-- <li><a href="#outbound">出库</a></li>
			<li><a href="#stranded">滞留</a></li>
			<li><a href="#delivery">交付</a></li> -->
		</ul>
		<div class="containBox">
			<div id="outbound">
				<!-- 出库及时率 -->
				<div class="mod-demo-echarts margintop10">
					<LineChart :brokenlineData="timelydelivery" @changeselect="changeboundselect"  @clicktype="clicoutboundtype" :successData="outboundSuccess"></LineChart>
				</div>
				<!-- 出库及时率同期对比 -->
				<div class="mod-demo-echarts margintop10">
					 <LineChart :brokenlineData="timelydeliverydb" @changeselect="changeboundselectdb"  @clicktype="clicoutboundtypedb" :successData="outboundSuccessdb"></LineChart>
				</div>
			</div>
			
			<div id="stranded">
				<!-- 商品车滞留(辆) -->
				<div class="mod-demo-echarts margintop10">
					<LineChart :brokenlineData="goodsstranded" @changeselect="changestranded"  @clicktype="clikstranded" :successData="goodsstrandedSuccess"></LineChart>
				</div>
				<!-- 商品车滞留同期对比 -->
				<div class="mod-demo-echarts margintop10">
					<LineChart :brokenlineData="goodsstrandeddb" @changeselect="changestrandeddb"  @clicktype="clikstrandeddb" :successData="strandedSuccessdb"></LineChart>
				</div>
			</div>
			
			<div id="delivery">
				<!-- 交付及时率 -->
				<div class="mod-demo-echarts margintop10">
					<LineChart :brokenlineData="deliveryrate" @changeselect="changedelivery"  @clicktype="clikdelivery" :successData="deliverySuccess"></LineChart>
				</div>
				<!-- 交付及时率同期对比 -->
				<div class="mod-demo-echarts margintop10">
					 <LineChart :brokenlineData="deliveryratedb" @changeselect="changedeliverydb"  @clicktype="clikdeliverydb" :successData="deliverydbSuccess"></LineChart>
				</div>
				<!-- 延迟交付数量趋势 -->
				<div class="mod-demo-echarts margintop10">
					<LineChart :brokenlineData="delaytrend" @changeselect="changedelaytrend"  @clicktype="clikdelaytrend" :successData="delaytrendSuccess"></LineChart>
				</div>
				<!-- 延迟交付天数T0P10-->
				<div class="mod-demo-echarts">
					 <Linetransverse :transverseData="delaytop10" @clicktype="clikdelaytop10" :successData="delaytop10Success"></Linetransverse>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import thehead from '@/components/statistical/the-head'
import LineChart from '@/components/statistical/linechart-template'
import Linetransverse from '@/components/statistical/transverse-histogram-template.1'
import { getoutboundrate,getoutboundratedb,getstrandedforcar,getstrandedforcardb,getdeliveryrate,getdeliveryratedb,getdelaydelivery,getdelaydeliverytop } from '@/utils/api/chart-analysis/homework'
import { getcompany } from '@/utils/api/chart-analysis/transport'
let monthDate =[];
let company =[];//投资公司下拉
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
	  LineChart,
	  Linetransverse
	},
    data () {
      return {
		startData:'',
		endData:'',
		// 导航条（锚记）
        current:0,
        navBox: [
          {
            name: '出库',
            id : 'outbound'
          },
          {
            name: '滞留',
            id : 'stranded'
          },
          {
            name: '交付',
            id : 'delivery'
          }
        ],
			datatime: '',
			delaynum:'',
			Thehead:'作业指标',
			outboundratetype:1,//出库及时率type
			outboundrateselect:'org_code',//出库及时率下拉选择
			outboundratetypedb:1,//出库及时率同期对比type
			outboundrateselectdb:'org_code',//出库及时率同期对比下拉选择
			strandedtype:1,//商品车滞留type
			strandedselect:'org_code',//商品车滞留下拉选择
			strandedtypedb:1,//商品车滞留同期对比type
			strandedselectdb:'org_code',//商品车同期对比下拉选择
			deliverytype:1,//交付及时率对比type
			deliveryselect:'org_code',//交付及时率下拉选择
			deliverytypedb:1,//交付及时率同期对比type
			deliveryselectdb:'org_code',//交付及时率同期对比下拉选择
			deliverytrendtype:1,//延迟交付数量趋势type
			deliverytrendselect:'org_code',//延迟交付数量趋势(辆)下拉选择
			delaytop10select:1,//延迟交付天数T0P10

		// 出库及时率
		timelydelivery: {
			title:'出库及时率(%)',
			showicon:true,//i图标是否显示
			explain:"出库及时率=按时出库商品车数量/已出库商品车总数",
			thiscolor: ["yellow","red","green","#98199171","#8796fc","orange"], //折线图颜色
			brushchoose:['按日','按周','按月'],//筛选值
			outrates: [],
			thisnum:'%',
			thisxAxis:[],
			datavalue: []
		},
		outboundSuccess:false,
		// 出库及时率同期对比
		timelydeliverydb: {
			title:'出库及时率同期比(%)',
			showicon:true,//i图标是否显示
			explain:"出库及时率=按时出库商品车数量/已出库商品车总数",
			thiscolor: ["yellow","red","green","#98199171","#8796fc","orange"], //折线图颜色
			brushchoose:['按日','按周','按月'],//筛选值
			outrates: [],
			thisnum:'',
			thisxAxis:[],
			data: [],
		},
		outboundSuccessdb:false,
		// 商品车滞留
		goodsstranded: {
			title:'商品车滞留(辆)',
			showicon:true,//i图标是否显示
			explain:"超过计划出库时间的已出库商品车数量",
			thiscolor: ["yellow","red","green","#98199171","#8796fc","orange"], //折线图颜色
			brushchoose:['按日','按周','按月'],//筛选值
			outrates: [],
			thisnum:'辆',
			thisxAxis:[],
			datavalue: []
		},
		goodsstrandedSuccess:false,
		// 商品车滞留同期对比
		goodsstrandeddb: {
			title:'商品车滞留同期比(辆)',
			showicon:true,//i图标是否显示
			explain:"超过计划出库时间的已出库商品车数量",
			thiscolor: ["yellow","red","green","#98199171","#8796fc","orange"], //折线图颜色
			brushchoose:['按日','按周','按月'],//筛选值
			outrates: [],
			thisnum:'辆',
			thisxAxis:[],
			data: []
		},
		strandedSuccessdb:false,
		// 交付及时率
		deliveryrate: {
			title:'交付及时率(%)',
			showicon:true,//i图标是否显示
			explain:"交付及时率=按时交付商品车数量/已交付商品车总数",
			thiscolor: ["yellow","red","green","#98199171","#8796fc","orange"], //折线图颜色
			brushchoose:['按日','按周','按月'],//筛选值
			outrates: [],
			thisnum:'',
			thisxAxis:[],
			datavalue: []
		},
		deliverySuccess:false,
		// 交付及时率同期对比
		deliveryratedb: {
			title:'交付及时率同期比(辆)',
			showicon:true,//i图标是否显示
			explain:"交付及时率=按时交付商品车数量/已交付商品车总数",
			thiscolor: ["yellow","red","green","#98199171","#8796fc","orange"], //折线图颜色
			brushchoose:['按日','按周','按月'],//筛选值
			outrates: [],
			thisnum:'辆',
			thisxAxis:[],
			data: []
		},
		deliverydbSuccess:false,
		// 延迟交付数量趋势
		delaytrend: {
			title:'延迟交付数量趋势(辆)',
			showicon:true,//i图标是否显示
			explain:"超过计划交付日期的商品车数量",
			thiscolor: ["yellow","red","green","#98199171","#8796fc","orange"], //折线图颜色
			brushchoose:['按日','按周','按月'],//筛选值
			outrates: [],
			thisnum:'',
			thisxAxis:[],
			datavalue: []
		},
		delaytrendSuccess:false,
		//延迟交付天数T0P10
		delaytop10: {
			title:'延迟交付天数T0P10',
			showicon:true,//i图标是否显示
			explain:"延迟交付天数=实际交付日期 - 计划交付日期",
			brushchoose:['按日','按周','按月'],//筛选值
			thiscolor:['green'],
			data: []
		},
		delaytop10Success:false,
      }
    },
    methods: {
		   addClass:function(index){this.current=index},
			//出库及时率
			getoutboundrate(outboundratetype,changeselect,starttime,endtime){
				getoutboundrate({
					type:outboundratetype,
					table:changeselect,
					starttime:starttime,
					endtime:endtime
				}).then(res => {
					var dataname =[];
					var datanames =[];
					if(this.outboundratetype == 1){
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
						this.timelydelivery.thisxAxis = monthDate;
						this.timelydelivery.datavalue = [];
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
							this.timelydelivery.datavalue.push({
								'name':codename,
								 type:'line',
								 smooth:true,
								'data':datavalue,
							})
							this.outboundSuccess = true;
						}
					}else if(this.outboundratetype == 2){
						this.timelydelivery.datavalue = [];
						var newaxis = res.data;
						newaxis = newaxis.pop();
						newaxis = newaxis.weekDates;
						newaxis.reverse();
						this.timelydelivery.thisxAxis = newaxis;
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
							this.timelydelivery.datavalue.push({
								'name':res.data[i].code_name,
								 type:'line',
								 smooth:true,
								'data':seriesvalue,
							})
						}
						this.outboundSuccess = true;
					}else{
						this.timelydelivery.datavalue = [];
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
						this.timelydelivery.thisxAxis= dataArr; 
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
							this.timelydelivery.datavalue.push({
								'name':res.data[i].code_name,
								 type:'line',
								 smooth:true,
								'data':seriesvalue,
							})
						}
						this.outboundSuccess = true;
				}
				}).catch(error => {
				  console.log(error)
				})
			},
			//出库及时率同期对比
			getoutboundratedb(outboundratetypedb,changeselectdb,starttime,endtime){
				getoutboundratedb({
					type:outboundratetypedb,
					table:changeselectdb,
					starttime:starttime,
					endtime:endtime
				}).then(res => {
					var datanames =[];
					var datavalue=[];
					var over=[];
					var now=[];
					if(this.outboundratetypedb == 1){
							this.timelydeliverydb.datavalue =[];
							for(var i=0;i<res.data.length;i++){
								datanames.push(res.data[i].code_name);
								over.push(res.data[i].car_num_over);
								now.push(res.data[i].car_num_now);
							}
							this.timelydeliverydb.datavalue.push({
								name:'昨日',
								type:'line',
								smooth:true,
								'data':over,
							})
							this.timelydeliverydb.datavalue.push({
								name:'今日',
								type:'line',
								smooth:true,
								'data':now,
							})
							this.timelydeliverydb.thisxAxis = datanames;
					}else if(this.outboundratetypedb == 2){
							this.timelydeliverydb.datavalue =[];
							for(var i=0;i<res.data.length;i++){
								datanames.push(res.data[i].code_name);
								over.push(res.data[i].car_num_over);
								now.push(res.data[i].car_num_now);
							}
							this.timelydeliverydb.datavalue.push({
								name:'上周',
								type:'line',
								smooth:true,
								'data':over,
							})
							this.timelydeliverydb.datavalue.push({
								name:'本周',
								type:'line',
								smooth:true,
								'data':now,
							})
							this.timelydeliverydb.thisxAxis = datanames;
					}else{
							this.timelydeliverydb.datavalue =[];
							for(var i=0;i<res.data.length;i++){
								datanames.push(res.data[i].code_name);
								over.push(res.data[i].car_num_over);
								now.push(res.data[i].car_num_now);
							}
							this.timelydeliverydb.datavalue.push({
								name:'上月',
								type:'line',
								smooth:true,
								'data':over,
							})
							this.timelydeliverydb.datavalue.push({
								name:'本月',
								type:'line',
								smooth:true,
								'data':now,
							})
							this.timelydeliverydb.thisxAxis = datanames;
					}
					this.outboundSuccessdb = true;
					
				}).catch(error => {
				  console.log(error)
				})
			},
			//商品车滞留
			getstrandedforcar(strandedtype,strandedselect,starttime,endtime){
				getstrandedforcar({
					type:strandedtype,
					table:strandedselect,
					starttime:starttime,
					endtime:endtime
				}).then(res => {
					var dataname =[];
					var datanames =[];
					if(this.strandedtype == 2){
						this.goodsstranded.datavalue = [];
						var newaxis = res.data;
						newaxis = newaxis.pop();
						newaxis = newaxis.weekDates;
						newaxis.reverse();
						this.goodsstranded.thisxAxis = newaxis;
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
							this.goodsstranded.datavalue.push({
								'name':res.data[i].code_name,
								 type:'line',
								 smooth:true,
								'data':seriesvalue,
							})
						}
					}else if(this.strandedtype == 1){
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
						this.goodsstranded.thisxAxis = monthDate;
						this.goodsstranded.datavalue = [];
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
							this.goodsstranded.datavalue.push({
								'name':codename,
								 type:'line',
								 smooth:true,
								'data':datavalue,
							})
							this.outboundSuccess = true;
						}
					}else{
						this.goodsstranded.datavalue = [];
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
						this.goodsstranded.thisxAxis= dataArr; 
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
							this.goodsstranded.datavalue.push({
								'name':res.data[i].code_name,
								 type:'line',
								 smooth:true,
								'data':seriesvalue,
							})
						}
					}
					this.goodsstrandedSuccess = true;
				}).catch(error => {
				  console.log(error)
				})
			},
			//商品车同期对比
			getstrandedforcardb(strandedtypedb,strandedselectdb,starttime,endtime){
				getstrandedforcardb({
					type:strandedtypedb,
					table:strandedselectdb,
					synchronization:"aaa",
					starttime:starttime,
					endtime:endtime
				}).then(res => {
					var datanames =[];
					var datavalue=[];
					var over=[];
					var now=[];
					if(this.strandedtypedb == 1){
							this.goodsstrandeddb.datavalue =[];
							for(var i=0;i<res.data.length;i++){
								datanames.push(res.data[i].code_name);
								over.push(res.data[i].car_num_over);
								now.push(res.data[i].car_num_now);
							}
							this.goodsstrandeddb.datavalue.push({
								name:'昨日',
								type:'line',
								smooth:true,
								'data':over,
							})
							this.goodsstrandeddb.datavalue.push({
								name:'今日',
								type:'line',
								smooth:true,
								'data':now,
							})
							this.goodsstrandeddb.thisxAxis = datanames;
					}else if(this.strandedtypedb == 2){
							this.goodsstrandeddb.datavalue =[];
							for(var i=0;i<res.data.length;i++){
								datanames.push(res.data[i].code_name);
								over.push(res.data[i].car_num_over);
								now.push(res.data[i].car_num_now);
							}
							this.goodsstrandeddb.datavalue.push({
								name:'上周',
								type:'line',
								smooth:true,
								'data':over,
							})
							this.goodsstrandeddb.datavalue.push({
								name:'本周',
								type:'line',
								smooth:true,
								'data':now,
							})
							this.goodsstrandeddb.thisxAxis = datanames;
					}else{
							this.goodsstrandeddb.datavalue =[];
							for(var i=0;i<res.data.length;i++){
								datanames.push(res.data[i].code_name);
								over.push(res.data[i].car_num_over);
								now.push(res.data[i].car_num_now);
							}
							this.goodsstrandeddb.datavalue.push({
								name:'上月',
								type:'line',
								smooth:true,
								'data':over,
							})
							this.goodsstrandeddb.datavalue.push({
								name:'本月',
								type:'line',
								smooth:true,
								'data':now,
							})
							this.goodsstrandeddb.thisxAxis = datanames;
					}
					this.strandedSuccessdb = true;
					
				}).catch(error => {
				  console.log(error)
				})
			},
			//交付及时率
			getdeliveryrate(deliverytype,deliveryselect,starttime,endtime){
				getdeliveryrate({
					type:deliverytype,
					table:deliveryselect,
					starttime:starttime,
					endtime:endtime
				}).then(res => {
					var dataname =[];
					var datanames =[];
					if(this.deliverytype == 1){
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
						this.deliveryrate.thisxAxis = monthDate;
						this.deliveryrate.datavalue = [];
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
							this.deliveryrate.datavalue.push({
								'name':codename,
								 type:'line',
								 smooth:true,
								'data':datavalue,
							})
							this.deliverySuccess = true;
						}
					}else if(this.deliverytype == 2){
						this.deliveryrate.datavalue = [];
						var newaxis = res.data;
						newaxis = newaxis.pop();
						newaxis = newaxis.weekDates;
						newaxis.reverse();
						this.deliveryrate.thisxAxis = newaxis;
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
							this.deliveryrate.datavalue.push({
								'name':res.data[i].code_name,
								 type:'line',
								 smooth:true,
								'data':seriesvalue,
							})
						}
					}else{
						this.deliveryrate.datavalue = [];
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
						this.deliveryrate.thisxAxis= dataArr; 
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
							this.deliveryrate.datavalue.push({
								'name':res.data[i].code_name,
								 type:'line',
								 smooth:true,
								'data':seriesvalue,
							})
						}
					}
					this.deliverySuccess=true;
				}).catch(error => {
				  console.log(error)
				})
			},
			//交付及时率同对比
			getdeliveryratedb(deliverytypedb,deliveryselectdb,starttime,endtime){
				getdeliveryratedb({
					type:deliverytypedb,
					table:deliveryselectdb,
					starttime:starttime,
					endtime:endtime
				}).then(res => {
					var datanames =[];
					var datavalue=[];
					var over=[];
					var now=[];
					if(this.deliverytypedb == 1){
							this.deliveryratedb.datavalue =[];
							for(var i=0;i<res.data.length;i++){
								datanames.push(res.data[i].code_name);
								over.push(res.data[i].car_num_over);
								now.push(res.data[i].car_num_now);
							}
							this.deliveryratedb.datavalue.push({
								name:'昨日',
								type:'line',
								smooth:true,
								'data':over,
							})
							this.deliveryratedb.datavalue.push({
								name:'今日',
								type:'line',
								smooth:true,
								'data':now,
							})
							this.deliveryratedb.thisxAxis = datanames;
					}else if(this.deliverytypedb == 2){
							this.deliveryratedb.datavalue =[];
							for(var i=0;i<res.data.length;i++){
								datanames.push(res.data[i].code_name);
								over.push(res.data[i].car_num_over);
								now.push(res.data[i].car_num_now);
							}
							this.deliveryratedb.datavalue.push({
								name:'上周',
								type:'line',
								smooth:true,
								'data':over,
							})
							this.deliveryratedb.datavalue.push({
								name:'本周',
								type:'line',
								smooth:true,
								'data':now,
							})
							this.deliveryratedb.thisxAxis = datanames;
					}else{
							this.deliveryratedb.datavalue =[];
							for(var i=0;i<res.data.length;i++){
								datanames.push(res.data[i].code_name);
								over.push(res.data[i].car_num_over);
								now.push(res.data[i].car_num_now);
							}
							this.deliveryratedb.datavalue.push({
								name:'上月',
								type:'line',
								smooth:true,
								'data':over,
							})
							this.deliveryratedb.datavalue.push({
								name:'本月',
								type:'line',
								smooth:true,
								'data':now,
							})
							this.deliveryratedb.thisxAxis = datanames;
					}
					this.deliverydbSuccess = true;
					
				}).catch(error => {
				  console.log(error)
				})
			},
			//延迟交付数量趋势
			getdelaydelivery(deliverytrendtype,deliverytrendselect,starttime,endtime){
				getdelaydelivery({
					type:deliverytrendtype,
					table:deliverytrendselect,
					starttime:starttime,
					endtime:endtime
				}).then(res => {
					var dataname =[];
					var datanames =[];
					if(this.deliverytrendtype == 1){
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
						this.delaytrend.thisxAxis = monthDate;
						this.delaytrend.datavalue = [];
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
							this.delaytrend.datavalue.push({
								'name':codename,
								 type:'line',
								 smooth:true,
								'data':datavalue,
							})
						}
						this.delaytrendSuccess = true;
					}else if(this.deliverytrendtype == 2){
						this.delaytrend.datavalue = [];
						var newaxis = res.data;
						newaxis = newaxis.pop();
						newaxis = newaxis.weekDates;
						newaxis.reverse();
						this.delaytrend.thisxAxis = newaxis;
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
							this.delaytrend.datavalue.push({
								'name':res.data[i].code_name,
								 type:'line',
								 smooth:true,
								'data':seriesvalue,
							})
						}
						this.delaytrendSuccess = true;
					}else{
						this.delaytrend.datavalue = [];
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
						this.delaytrend.thisxAxis= dataArr; 
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
							this.delaytrend.datavalue.push({
								'name':res.data[i].code_name,
								 type:'line',
								 smooth:true,
								'data':seriesvalue,
							})
						}
						this.delaytrendSuccess = true;
				}
				}).catch(error => {
				  console.log(error)
				})
			},
			
			//延迟交付天数T0P10
			getdelaydeliverytop(delaytop10select,starttime,endtime){
				getdelaydeliverytop({
					type:delaytop10select,
					starttime:starttime,
					endtime:endtime
				}).then(res => {
					var datavalue =[];
					for(var i=0;i<res.data.length;i++){
						datavalue.push({
							car_vin: res.data[i].car_vin,
							factory_name: res.data[i].car_type,
							org_name : res.data[i].org_code,
							carvin_outtime_daynum: res.data[i].delay_day,
						})
					}
					this.delaytop10.data = datavalue;
					this.delaytop10Success = true;
				}).catch(error => {
				  console.log(error)
				})
			},
			
			//出库及时率的日 周 月事件
			clicoutboundtype(valuetype){
				this.outboundratetype = valuetype;
				this.getoutboundrate(this.outboundratetype,this.outboundrateselect,this.startData,this.endData);
			},
			//出库及时率的下拉选择事件
			changeboundselect(valuetype){
				this.outboundrateselect = valuetype;
				this.getoutboundrate(this.outboundratetype,this.outboundrateselect,this.startData,this.endData);
			},
			//出库及时率同期对比的日 周 月事件
			clicoutboundtypedb(valuetype){
				this.outboundratetypedb = valuetype;
				this.getoutboundratedb(this.outboundratetypedb,this.outboundrateselectdb,this.startData,this.endData);
			},
			//出库及时率的下拉选择事件
			changeboundselectdb(valuetype){
				this.outboundrateselectdb = valuetype;
				this.getoutboundratedb(this.outboundratetypedb,this.outboundrateselectdb,this.startData,this.endData);
			},
			//商品车滞留的日 周 月事件
			clikstranded(valuetype){
				this.strandedtype = valuetype;
				this.getstrandedforcar(this.strandedtype,this.strandedselect,this.startData,this.endData);
			},
			//商品车滞留的下拉选择事件
			changestranded(valuetype){
				this.strandedselect = valuetype;
				this.getstrandedforcar(this.strandedtype,this.strandedselect,this.startData,this.endData);
			},
			//商品车滞留同期对比的日 周 月事件
			clikstrandeddb(valuetype){
				this.strandedtypedb = valuetype;
				this.getstrandedforcardb(this.strandedtypedb,this.strandedselectdb,this.startData,this.endData);
			},
			//商品车滞留同期对比的下拉选择事件
			changestrandeddb(valuetype){
				this.strandedselectdb = valuetype;
				this.getstrandedforcardb(this.strandedtypedb,this.strandedselectdb,this.startData,this.endData);
			},
			//交付及时率的日 周 月事件
			changedelivery(valuetype){
				this.deliveryselect = valuetype;
				this.getdeliveryrate(this.deliverytype,this.deliveryselect,this.startData,this.endData);
			},
			//交付及时率下拉选择事件
			clikdelivery(valuetype){
				this.deliverytype = valuetype;
				this.getdeliveryrate(this.deliverytype,this.deliveryselect,this.startData,this.endData);
			},
			//交付及时率同期对比的日 周 月事件
			clikdeliverydb(valuetype){
				this.deliverytypedb = valuetype;
				this.getdeliveryratedb(this.deliverytypedb,this.deliveryselectdb,this.startData,this.endData);
			},
			//交付及时率同期对比下拉选择事件
			 changedeliverydb(valuetype){
				this.deliveryselectdb = valuetype;
				this.getdeliveryratedb(this.deliverytypedb,this.deliveryselectdb,this.startData,this.endData);
			},
			//延迟交付数量趋势的日 周 月事件
			clikdelaytrend(valuetype){
				this.deliverytrendtype = valuetype;
				this.getdelaydelivery(this.deliverytrendtype,this.deliverytrendselect,this.startData,this.endData);
			},
			//延迟交付数量趋势的下拉选择事件
			 changedelaytrend(valuetype){
				this.deliverytrendselect = valuetype;
				this.getdelaydelivery(this.deliverytrendtype,this.deliverytrendselect,this.startData,this.endData);
			},
			//延迟交付天数T0P10的日 周 月事件
			 clikdelaytop10(valuetype){
				this.delaytop10select = valuetype;
				this.getdelaydeliverytop(this.delaytop10select,this.startData,this.endData);
			},
			//头部日期改变之后
			clicktimedata(valuetime){
				this.startData = valuetime.startData;
				this.endData = valuetime.endData;
				this.getoutboundrate(this.outboundratetype,this.outboundrateselect,this.startData,this.endData);
				this.getoutboundratedb(this.outboundratetypedb,this.outboundrateselectdb,this.startData,this.endData);
				this.getstrandedforcar(this.strandedtype,this.strandedselect,this.startData,this.endData);
				this.getstrandedforcardb(this.strandedtypedb,this.strandedselectdb,this.startData,this.endData);
				this.getdeliveryrate(this.deliverytype,this.deliveryselect,this.startData,this.endData);
				this.getdelaydelivery(this.deliverytrendtype,this.deliverytrendselect,this.startData,this.endData);
				this.getdeliveryratedb(this.deliverytypedb,this.deliveryselectdb,this.startData,this.endData);
				this.getdelaydeliverytop(this.delaytop10select,this.startData,this.endData);
			},
			//投资公司下拉
			getcompany(){
				getcompany({}).then(res => {
					for(var i=0;i<res.data.length;i++){
						company.push({
							value:res.data[i].code,
							label:res.data[i].name
						})
					}
					this.timelydelivery.outrates = company;
					this.timelydeliverydb.outrates = company;
					this.goodsstranded.outrates = company;
					this.goodsstrandeddb.outrates = company;
					this.deliveryrate.outrates = company;
					this.deliveryratedb.outrates = company;
					this.delaytrend.outrates = company;
				}).catch(error => {
				  console.log(error)
				})
			}
    },
		mounted() {
			this.getcompany();	
			this.getoutboundrate(this.outboundratetype,this.outboundrateselect,this.startData,this.endData);
			this.getoutboundratedb(this.outboundratetypedb,this.outboundrateselectdb,this.startData,this.endData);
			this.getstrandedforcar(this.strandedtype,this.strandedselect,this.startData,this.endData);
			this.getstrandedforcardb(this.strandedtypedb,this.strandedselectdb,this.startData,this.endData);
			this.getdeliveryrate(this.deliverytype,this.deliveryselect,this.startData,this.endData);
			this.getdelaydelivery(this.deliverytrendtype,this.deliverytrendselect,this.startData,this.endData);
			this.getdeliveryratedb(this.deliverytypedb,this.deliveryselectdb,this.startData,this.endData);
			this.getdelaydeliverytop(this.delaytop10select,this.startData,this.endData);
		},
	  addClass:function(index){this.current=index},
   
  }
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
      height: auto;
      line-height: normal;
	  padding: 10px 9px;
	  width: 99%;
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
