<template>
	<!-- 资源利用 -->
	<div>
		<!-- 头部 -->
		<header style="height: 100%">
			<thehead :Thehead="Thehead" :pickerOptions2="pickerOptions2" @clicktimedata="clicktimedata"></thehead>
		</header>
		<!-- 导航条（锚记） -->
        <ul id="anchornavigation">
	    	<li v-for="(nav, index) in navBox" :key="index" v-on:click="addClass(index)" v-bind:class="{ active:index==current}"><a :href="'#'+nav.id">{{nav.name}}</a></li>
	    </ul>
		<div class="containBox">
			<!-- <div class="overhidden borderbottom paddingbottom5">
				<p class="buttonAn">包含:总车辆</p>
			</div> -->
			<!-- 投资企业板车使用(车) -->
			<div id="tzqybcsy" class="mod-demo-echarts margintop10">
				 <p class="buttonAn" style="margin-right: 40px;width:100%;text-align:right;">包含:总车辆</p>
				 <LineChart1 :brokenlineData="investmentscooter" :successData="carabinerDataSuccess" @clicktype="carabinerclicktype"></LineChart1>
			</div>
			<!-- 投资企业满板率(%)(车) -->
			<div id="tzqymbl" class="mod-demo-echarts margintop10">
				 <LineChart1 :brokenlineData="investmentscooterfull" :successData="boardrateDataSuccess" @clicktype="boardrateclicktype"></LineChart1>
			</div>
			<!-- 自有车辆利用率(%) -->
			<div id="zycllyl" class="mod-demo-echarts margintop10">
				 <LineChart1 :brokenlineData="theirown" :successData="freecarDataSuccess" @clicktype="freecarclicktype"></LineChart1>
			</div>
			<!-- 库位利用率(%) -->
			<div id="cwlyl" class="mod-demo-echarts margintop10">
				 <LineChart1 :brokenlineData="inventoryusing" :successData="locationDataSuccess" @clicktype="locationclicktype"></LineChart1>
			</div>
		</div>
	</div>
</template>

<script>
import thehead from "@/components/statistical/the-head"
import LineChart1 from '@/components/statistical/linechart-template.1'
import { getcarabinerDay,getcarabinerWeek,getcarabinerMouth,getboardrateDay,getboardrateWeek,getboardrateMouth
		,getfreecarDay,getfreecarWeek,getfreecarMouth,getlocationDay,getlocationWeek,getlocationMouth} from '@/utils/api/chart-analysis/resourcesusing'
let monthDate =[];
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
	    LineChart1
	},
    data () {
      return {
		  // 导航条（锚记）
                current:0,
                navBox: [
                  {
                    name: '投资企业板车使用',
                    id : 'tzqybcsy'
                  },
                  {
                    name: '投资企业满板率',
                    id : 'tzqymbl'
                  },
                  {
                    name: '自有车辆利用率',
                    id : 'zycllyl'
                  },
                  {
                    name: '库位利用率',
                    id : 'cwlyl'
				  }
                ],
		  datatime:'',
		  Thehead: "资源利用",
		  startData:'',
		  endData:'',
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
		  // 投资企业板车使用（车)
		  investmentscooter: {
			title:'投资企业板车使用（车)',
			showicon:true,//i图标是否显示
			explain:'有任务的板车数量',
			brushchoose:['按日','按周','按月'],//筛选值
		  	thiscolor: ["yellow","red","green","#98199171","#8796fc","orange"], //折线图颜色
		  	thisnum:'',
		  	thisxAxis:[],
		  	data: []
		  },
		  carabinerDataSuccess:false,
		  //投资企业满板率(%)
		  investmentscooterfull: {
			title:'投资企业满板率(%)',
			explain:'平均每辆出发板车的满板率，满板率=实际装载数量/最大装载量',
			showicon:true,//i图标是否显示
			brushchoose:['按日','按周','按月'],//筛选值
			thiscolor: ["yellow","red","green","#98199171","#8796fc","orange"], //折线图颜色
		  	thisnum:'%',
		  	thisxAxis:[],
		  	data: []
		  },
		  boardrateDataSuccess:false,
		  //自有车辆利用率(%)
			theirown: {
				title:'自有车辆利用率(%)',
				explain:'自有车辆任务天数/统计周期天数)*100% 的加权平均值',
				showicon:true,//i图标是否显示
				brushchoose:['按日','按周','按月'],//筛选值
				thiscolor: ["yellow","red","green","#98199171","#8796fc","orange"], //折线图颜色
				thisnum:'%',
				thisxAxis:[],
				data: []
			  },
			 freecarDataSuccess:false,
		  //库位利用率(%)
		  inventoryusing: {
			title:'库位利用率(%)',
			explain:'库位利用率=已占用库位数/库位总数',
			showicon:true,//i图标是否显示
			brushchoose:['按日','按周','按月'],//筛选值
		  	thiscolor: ["yellow","red","green","#98199171","#8796fc","orange"], //折线图颜色
		  	thisnum:'%',
		  	thisxAxis:[],
		  	data: []
		  },
		  locationDataSuccess:false,
		}
    },
    methods: {
		// miaodian
		addClass: function(index) {
            this.current = index;
        },
		 // 获取投资企业板车使用(按日)
		getcarabinerDay(starttime,endtime){
			getcarabinerDay({
				starttime:starttime,
				endtime:endtime
			}).then(res => {
				var dataname =[];
				var datanames =[];
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
				this.investmentscooter.thisxAxis = monthDate;
				this.investmentscooter.data = [];
				for(var i=0;i<datanames.length;i++){
						var datavalue =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
						for(var j=0;j<res.data.length;j++){
							if(datanames[i] == res.data[j].code_name){
								codename = res.data[j].code_name;
								for(var k=0;k<monthDate.length;k++){
									if(monthDate[k] == res.data[j].date){
										datavalue[k] = res.data[j].num
									}
								}
						}
					}
					this.investmentscooter.data.push({
						'name':codename,
						 type:'line',
						 smooth:true,
						 stack: '总量',
						'data':datavalue,
					})
				}
				this.carabinerDataSuccess = true;
			}).catch(error => {
			  console.log(error)
			})
		},
		// 获取投资企业板车使用(按周)
		getcarabinerWeek(starttime,endtime){
			getcarabinerWeek({
				starttime:starttime,
				endtime:endtime
			}).then(res => {
				var datweek =[];
				var newdatweek =[];
				/* 遍历出周数 */
				for(var i=0;i<res.data.length;i++){
					datweek.push(res.data[i].date);
				}
				/* 周数去重 */
				var datavalue = [];
				for(var j = 0; j < datweek.length; j++){
					if(newdatweek.indexOf(datweek[j]) == -1){
					   newdatweek.push(datweek[j]);
					   datavalue.push(0);
					}
				}
				this.investmentscooter.thisxAxis = newdatweek;
				var dataname =[];
				var datanames =[];
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
				this.investmentscooter.data = [];
				for(var i=0;i<datanames.length;i++){
					var newarrs =[];
					for(var j=0;j<res.data.length;j++){
						if(datanames[i] == res.data[j].code_name){
							codename = res.data[j].code_name;
							for(var k=0;k<newdatweek.length;k++){
								if(newdatweek[k] == res.data[j].date){
									newarrs.push(res.data[j].num);
								}
							}
						}
					}
					this.investmentscooter.data.push({
						'name':codename,
						 type:'line',
						 smooth:true,
						 stack: '总量',
						'data':newarrs,
					})
					this.carabinerDataSuccess = true;
				}
			}).catch(error => {
			  console.log(error)
			})
		},
		// 获取投资企业板车使用(按月)
		getcarabinerMouth(starttime,endtime){
			getcarabinerMouth({
				starttime:starttime,
				endtime:endtime
			}).then(res => {
				var datweek =[];
				var newdatweek =[];
				/* 遍历出周数 */
				for(var i=0;i<res.data.length;i++){
					datweek.push(res.data[i].date);
				}
				/* 周数去重 */
				var datavalue = [];
				for(var j = 0; j < datweek.length; j++){
					if(newdatweek.indexOf(datweek[j]) == -1){
					   newdatweek.push(datweek[j]);
					   datavalue.push(0);
					}
				}
				this.investmentscooter.thisxAxis = newdatweek;
				var dataname =[];
				var datanames =[];
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
				this.investmentscooter.data = [];
				for(var i=0;i<datanames.length;i++){
					var newarrs =[];
					for(var j=0;j<res.data.length;j++){
						if(datanames[i] == res.data[j].code_name){
							codename = res.data[j].code_name;
							for(var k=0;k<newdatweek.length;k++){
								if(newdatweek[k] == res.data[j].date){
									newarrs.push(res.data[j].num);
								}
							}
						}
					}
					this.investmentscooter.data.push({
						'name':codename,
						 type:'line',
						 smooth:true,
						 stack: '总量',
						'data':newarrs,
					})
					this.carabinerDataSuccess = true;
				}
			}).catch(error => {
			  console.log(error)
			})
		},
		// 投资企业满板率(按日)
		getboardrateDay(starttime,endtime){
			getboardrateDay({
				starttime:starttime,
				endtime:endtime
			}).then(res => {
				var dataname =[];
				var datanames =[];
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
				this.investmentscooterfull.thisxAxis = monthDate;
				this.investmentscooterfull.data = [];
				for(var i=0;i<datanames.length;i++){
						var datavalue =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
						for(var j=0;j<res.data.length;j++){
							if(datanames[i] == res.data[j].code_name){
								codename = res.data[j].code_name;
								for(var k=0;k<monthDate.length;k++){
									if(monthDate[k] == res.data[j].date){
										datavalue[k] = res.data[j].num
									}
								}
						}
					}
					this.investmentscooterfull.data.push({
						'name':codename,
						 type:'line',
						 smooth:true,
						 stack: '总量',
						'data':datavalue,
					})
				}
				this.boardrateDataSuccess = true;
			}).catch(error => {
			  console.log(error)
			})
		},
		// 投资企业满板率(按周)
		getboardrateWeek(starttime,endtime){
			getboardrateWeek({
				starttime:starttime,
				endtime:endtime
			}).then(res => {
				var datweek =[];
				var newdatweek =[];
				/* 遍历出周数 */
				for(var i=0;i<res.data.length;i++){
					datweek.push(res.data[i].date);
				}
				/* 周数去重 */
				var datavalue = [];
				for(var j = 0; j < datweek.length; j++){
					if(newdatweek.indexOf(datweek[j]) == -1){
					   newdatweek.push(datweek[j]);
					   datavalue.push(0);
					}
				}
				this.investmentscooterfull.thisxAxis = newdatweek;
				var dataname =[];
				var datanames =[];
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
				this.investmentscooterfull.data = [];
				for(var i=0;i<datanames.length;i++){
					var newarrs =[];
					for(var j=0;j<res.data.length;j++){
						if(datanames[i] == res.data[j].code_name){
							codename = res.data[j].code_name;
							for(var k=0;k<newdatweek.length;k++){
								if(newdatweek[k] == res.data[j].date){
									newarrs.push(res.data[j].num);
								}
							}
						}
					}
					this.investmentscooterfull.data.push({
						'name':codename,
						 type:'line',
						 smooth:true,
						 stack: '总量',
						'data':newarrs,
					})
					this.boardrateDataSuccess = true;
				}
			}).catch(error => {
			  console.log(error)
			})
		},
		// 投资企业满板率(按月)
		getboardrateMouth(starttime,endtime){
			getboardrateMouth({
				starttime:starttime,
				endtime:endtime
			}).then(res => {
				var datweek =[];
				var newdatweek =[];
				/* 遍历出周数 */
				for(var i=0;i<res.data.length;i++){
					datweek.push(res.data[i].date);
				}
				/* 周数去重 */
				var datavalue = [];
				for(var j = 0; j < datweek.length; j++){
					if(newdatweek.indexOf(datweek[j]) == -1){
					   newdatweek.push(datweek[j]);
					   datavalue.push(0);
					}
				}
				this.investmentscooterfull.thisxAxis = newdatweek;
				var dataname =[];
				var datanames =[];
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
				this.investmentscooterfull.data = [];
				for(var i=0;i<datanames.length;i++){
					var newarrs =[];
					for(var j=0;j<res.data.length;j++){
						if(datanames[i] == res.data[j].code_name){
							codename = res.data[j].code_name;
							for(var k=0;k<newdatweek.length;k++){
								if(newdatweek[k] == res.data[j].date){
									newarrs.push(res.data[j].num);
								}
							}
						}
					}
					this.investmentscooterfull.data.push({
						'name':codename,
						 type:'line',
						 smooth:true,
						 stack: '总量',
						'data':newarrs,
					})
					this.boardrateDataSuccess = true;
				}
			}).catch(error => {
			  console.log(error)
			})
		},
		 // 获取自有车使用率(按日)
		getfreecarDay(starttime,endtime){
			getfreecarDay({
				starttime:starttime,
				endtime:endtime
			}).then(res => {
				var dataname =[];
				var datanames =[];
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
				this.theirown.thisxAxis = monthDate;
				this.theirown.data = [];
				for(var i=0;i<datanames.length;i++){
						var datavalue =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
						for(var j=0;j<res.data.length;j++){
							if(datanames[i] == res.data[j].code_name){
								codename = res.data[j].code_name;
								for(var k=0;k<monthDate.length;k++){
									if(monthDate[k] == res.data[j].date){
										datavalue[k] = res.data[j].num
									}
								}
						}
					}
					this.theirown.data.push({
						'name':codename,
						 type:'line',
						 smooth:true,
						 stack: '总量',
						'data':datavalue,
					})
				}
				this.freecarDataSuccess = true;
			}).catch(error => {
			  console.log(error)
			})
		},
		// 获取自有车使用率(按周)
		getfreecarWeek(starttime,endtime){
			getfreecarWeek({
				starttime:starttime,
				endtime:endtime
			}).then(res => {
				var datweek =[];
				var newdatweek =[];
				/* 遍历出周数 */
				for(var i=0;i<res.data.length;i++){
					datweek.push(res.data[i].date);
				}
				/* 周数去重 */
				var datavalue = [];
				for(var j = 0; j < datweek.length; j++){
					if(newdatweek.indexOf(datweek[j]) == -1){
					   newdatweek.push(datweek[j]);
					   datavalue.push(0);
					}
				}
				this.theirown.thisxAxis = newdatweek;
				var dataname =[];
				var datanames =[];
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
				this.theirown.data = [];
				for(var i=0;i<datanames.length;i++){
					var newarrs =[];
					for(var j=0;j<res.data.length;j++){
						if(datanames[i] == res.data[j].code_name){
							codename = res.data[j].code_name;
							for(var k=0;k<newdatweek.length;k++){
								if(newdatweek[k] == res.data[j].date){
									newarrs.push(res.data[j].num);
								}
							}
						}
					}
					this.theirown.data.push({
						'name':codename,
						 type:'line',
						 smooth:true,
						 stack: '总量',
						'data':newarrs,
					})
					this.freecarDataSuccess = true;
				}
			}).catch(error => {
			  console.log(error)
			})
		},
		// 获取自有车使用率(按月)
		getfreecarMouth(starttime,endtime){
			getfreecarMouth({
				starttime:starttime,
				endtime:endtime
			}).then(res => {
				var datweek =[];
				var newdatweek =[];
				/* 遍历出周数 */
				for(var i=0;i<res.data.length;i++){
					datweek.push(res.data[i].date);
				}
				/* 周数去重 */
				var datavalue = [];
				for(var j = 0; j < datweek.length; j++){
					if(newdatweek.indexOf(datweek[j]) == -1){
					   newdatweek.push(datweek[j]);
					   datavalue.push(0);
					}
				}
				this.theirown.thisxAxis = newdatweek;
				var dataname =[];
				var datanames =[];
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
				this.theirown.data = [];
				for(var i=0;i<datanames.length;i++){
					var newarrs =[];
					for(var j=0;j<res.data.length;j++){
						if(datanames[i] == res.data[j].code_name){
							codename = res.data[j].code_name;
							for(var k=0;k<newdatweek.length;k++){
								if(newdatweek[k] == res.data[j].date){
									newarrs.push(res.data[j].num);
								}
							}
						}
					}
					this.theirown.data.push({
						'name':codename,
						 type:'line',
						 smooth:true,
						 stack: '总量',
						'data':newarrs,
					})
					this.freecarDataSuccess = true;
				}
			}).catch(error => {
			  console.log(error)
			})
		},
		 // 获取库位利用率(按日)
		getlocationDay(starttime,endtime){
			getlocationDay({
				starttime:starttime,
				endtime:endtime
			}).then(res => {
				var dataname =[];
				var datanames =[];
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
				this.inventoryusing.thisxAxis = monthDate;
				this.inventoryusing.data = [];
				for(var i=0;i<datanames.length;i++){
						var datavalue =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
						for(var j=0;j<res.data.length;j++){
							if(datanames[i] == res.data[j].code_name){
								codename = res.data[j].code_name;
								for(var k=0;k<monthDate.length;k++){
									if(monthDate[k] == res.data[j].date){
										datavalue[k] = res.data[j].num
									}
								}
						}
					}
					this.inventoryusing.data.push({
						'name':codename,
						 type:'line',
						 smooth:true,
						 stack: '总量',
						'data':datavalue,
					})
				}
				this.locationDataSuccess = true;
			}).catch(error => {
			  console.log(error)
			})
		},
		// 获取库位利用率(按周)
		getlocationWeek(starttime,endtime){
			getlocationWeek({
				starttime:starttime,
				endtime:endtime
			}).then(res => {
				var datweek =[];
				var newdatweek =[];
				/* 遍历出周数 */
				for(var i=0;i<res.data.length;i++){
					datweek.push(res.data[i].date);
				}
				/* 周数去重 */
				var datavalue = [];
				for(var j = 0; j < datweek.length; j++){
					if(newdatweek.indexOf(datweek[j]) == -1){
					   newdatweek.push(datweek[j]);
					   datavalue.push(0);
					}
				}
				this.inventoryusing.thisxAxis = newdatweek;
				var dataname =[];
				var datanames =[];
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
				this.inventoryusing.data = [];
				for(var i=0;i<datanames.length;i++){
					var newarrs =[]; 
					for(var j=0;j<res.data.length;j++){
						if(datanames[i] == res.data[j].code_name){
							codename = res.data[j].code_name;
							for(var k=0;k<newdatweek.length;k++){
								if(newdatweek[k] == res.data[j].date){
									 newarrs.push(res.data[j].num);
								}
							}
						}
					}
					this.inventoryusing.data.push({
						'name':codename,
						 type:'line',
						 smooth:true,
						 stack: '总量',
						'data':newarrs,
					})
					this.locationDataSuccess = true;
				}
			}).catch(error => {
			  console.log(error)
			})
		},
		// 获取库位利用率(按月)
		getlocationMouth(starttime,endtime){
			getlocationMouth({
				starttime:starttime,
				endtime:endtime
			}).then(res => {
				var datweek =[];
				var newdatweek =[];
				/* 遍历出周数 */
				for(var i=0;i<res.data.length;i++){
					datweek.push(res.data[i].date);
				}
				/* 周数去重 */
				var datavalue = [];
				for(var j = 0; j < datweek.length; j++){
					if(newdatweek.indexOf(datweek[j]) == -1){
					   newdatweek.push(datweek[j]);
					   datavalue.push(0);
					}
				}
				this.inventoryusing.thisxAxis = newdatweek;
				var dataname =[];
				var datanames =[];
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
				this.inventoryusing.data = [];
				for(var i=0;i<datanames.length;i++){
					var newarrs =[];
					for(var j=0;j<res.data.length;j++){
						if(datanames[i] == res.data[j].code_name){
							codename = res.data[j].code_name;
							for(var k=0;k<newdatweek.length;k++){
								if(newdatweek[k] == res.data[j].date){
									newarrs.push(res.data[j].num);
								}
							}
						}
					}
					this.inventoryusing.data.push({
						'name':codename,
						 type:'line',
						 smooth:true,
						 stack: '总量',
						'data':newarrs,
					})
					this.locationDataSuccess = true;
				}
			}).catch(error => {
			  console.log(error)
			})
		},
		
		// 获取投资企业板车使用(筛选)
		carabinerclicktype(value){
			if(value == 1){
				this.getcarabinerDay(this.startData,this.endData);
			}else if(value == 2){
				this.getcarabinerWeek(this.startData,this.endData);
			}else if(value == 3){
				this.getcarabinerMouth(this.startData,this.endData);
			}
		},
		// 获取投资企业满板率(筛选)
		boardrateclicktype(value){
			if(value == 1){
				this.getboardrateDay(this.startData,this.endData);
			}else if(value == 2){
				this.getboardrateWeek(this.startData,this.endData);
			}else if(value == 3){
				this.getboardrateMouth(this.startData,this.endData);
			}
		},
		// 获取自有车使用率(筛选)
		freecarclicktype(value){
			if(value == 1){
				this.getfreecarDay(this.startData,this.endData);
			}else if(value == 2){
				this.getfreecarWeek(this.startData,this.endData);
			}else if(value == 3){
				this.getfreecarMouth(this.startData,this.endData);
			}
		},
		// 获取库位利用率(筛选)
		locationclicktype(value){
			if(value == 1){
				this.getlocationDay(this.startData,this.endData);
			}else if(value == 2){
				this.getlocationWeek(this.startData,this.endData);
			}else if(value == 3){
				this.getlocationMouth(this.startData,this.endData);
			}
		},
		//头部日期改变之后
	  	clicktimedata(valuetime){
	  		this.startData = valuetime.startData;
	  		this.endData = valuetime.endData;
	  	}	
	},
	mounted() {
		this.getcarabinerDay(this.startData,this.endData);
		this.getboardrateDay(this.startData,this.endData);
		this.getfreecarDay(this.startData,this.endData);
		this.getlocationDay(this.startData,this.endData);
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
      padding: 10px 0;
      margin: 0 20px 30px 0;
      border: 1px solid #e0e0eb;
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
