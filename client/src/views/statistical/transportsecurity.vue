<template>
	<!-- 运输安全 -->
	<div>
		<header style="height: 100%">
			<!-- <h4>
				<span>筛选条件</span>
				<el-button type="primary" size="small" icon="el-icon-message">邮件订阅</el-button>
			</h4>
			<div align="left" class="margintop">
				<form class="form-inline" onsubmit="return false">
					<div class="form-group" style="display: block;">
						日期:
						<el-date-picker
							v-model="value1"
							type="daterange"
							range-separator="至"
							start-placeholder="开始日期"
							end-placeholder="结束日期">
						</el-date-picker>
						<div class="buttonAn">
							<el-button type="primary" icon="el-icon-search" size="small" id="search">搜索</el-button>
							<el-button type="primary" size="small" id=""><a :href="downloadURL">下载明细</a></el-button>
						</div>
					</div>
				</form>
			</div> -->
			<div class="the-head">
	        	<el-row :gutter="24">
	        		<el-col :xs="24":sm="12":md="12":lg="4":xl="4" style="position: relative;top: -6px;">
	        			<h4>筛选条件</h4>
	        		</el-col>
	        		<el-col :xs="24":sm="12":md="12":lg="20":xl="20" style="text-align: right;padding-right:20px;">
	        			<form class="form-inline" onsubmit="return false">
				        	<div class="form-group" style="display: block;">
				        		日期:
				        		<el-date-picker
				        			v-model="value1"
				        			type="daterange"
				        			range-separator="至"
				        			start-placeholder="开始日期"
				        			end-placeholder="结束日期">
				        		</el-date-picker>
				        		<div class="buttonAn">
                                    <el-button type="info" style="height: 35px;" icon="el-icon-search" size="small" id="search">查询</el-button>
				        			<el-button type="info" style="height: 35px;" size="small" id="" ><a :href="downloadURL" style="color: #39394d;font-size:12px;">下载明细</a></el-button>
                                    <el-button type="info" style="height: 35px;" size="small" icon="el-icon-message">邮件订阅</el-button>
								</div>
				        	</div>
				        </form>
	        		</el-col>
	        	</el-row>
	        </div>
		</header>
		<!-- 导航条（锚记） -->
        <ul id="anchornavigation">
	    	<li v-for="(nav, index) in navBox" :key="index" v-on:click="addClass(index)" v-bind:class="{ active:index==current}"><a :href="'#'+nav.id">{{nav.name}}</a></li>
	    </ul>
		<div class="containBox">
			<!-- 风险行为统计 -->
			<div id="fxxwtj" class="mod-demo-echarts margintop10">
				<StandardColumnar :standardcolumnarData="riskbehaviors" @riskCheck="riskCheck"></StandardColumnar>
			</div>
			<!-- 高风险次数与有效干预占比 -->
			<div id="gfxcs" class="mod-demo-echarts margintop10">
				<LineChart :brokenlineData="highrisk" @warehouseQuery="warehouseQuery" 
					@changeSelect="changeSelect"></LineChart>
			</div>
			<!-- 危险时段分布 -->
			<div id="wxsd" class="mod-demo-echarts margintop10">
				<StandardColumnar :standardcolumnarData="dangerousbehaviors" @riskCheck="dangerousCheck"></StandardColumnar>
			</div>
			<!--高风险行为次数TOP - 最多-->
			<el-row id="gfxxwcs" class="margintop borderbottom">
			 	<ProgressBar :progressData="highbehavior" @clicktype="clicktype" @changeSelectTop="changeSelectTop"></ProgressBar>
			 </el-row>
		</div>
	</div>
		
  
</template>

<script>
import LineChart from '@/components/statistical/linechart-cover'
import StandardColumnar from '@/components/statistical/standard-histogram-template'
// import StandardDangerous from '@/components/statistical/standard-dangerous-template'
import ProgressBar from '@/components/statistical/theprogressbar'//进度条
import { countRiskBehaviour,riskTimeFrame, highRiskMeddle, getCompanyList, highRiskMost, downloadDetail } from '@/utils/api/statistical/transportsecurity'
export default {
	name: '',
	components: {
	     LineChart,
		 StandardColumnar,
		//  StandardDangerous,
		 ProgressBar
	 },
    data () {
      return {
		// 导航条（锚记）
        current:0,
        navBox: [
          {
            name: '风险行为统计',
            id : 'fxxwtj'
          },
          {
            name: '高风险次数与有效干预占比',
            id : 'gfxcs'
          },
          {
            name: '危险时段分布',
            id : 'wxsd'
          },{
			name: '高风险行为次数',
            id : 'gfxxwcs'
		  }
        ],
		value1: '',
		options: [{
		  value: '选项1',
		  label: '黄金糕'
		}, {
		  value: '选项2',
		  label: '双皮奶'
		}, {
		  value: '选项3',
		  label: '蚵仔煎'
		}, {
		  value: '选项4',
		  label: '龙须面'
		}, {
		  value: '选项5',
		  label: '北京烤鸭'
		}],
		forcars: [{
		  value: '顺捷物流',
		  label: '顺捷物流'
		}, {
		  value: '商贸物流',
		  label: '商贸物流'
		}, {
		  value: '广汽商贸',
		  label: '广汽商贸'
		}],
		value: '',
		downloadURL: '',
		//风险行为统计
		riskbehaviors: {
			title:'风险行为统计',
			showicon:true,//i图标是否显示
			showselect:false,//是否显示下拉框
			brushchoose:['昨日','上周','上月'],//筛选值
			thiscolor:['#FF6A6A','#FFA500', '#8796fc', 'red', 'green', 'yellow'],
			thisnum:'',
			thisxAxis:[],
			data: []
		},
		// 高风险次数与有效干预占比
		highrisk: {
			title:'高风险次数与有效干预占比',
			showicon:true,//i图标是否显示
			showselect:false,//是否显示第二个下拉框筛选
			brushchoose:['按日','按周','按月'],//筛选值
			outrates: [//下拉框数据
			],
			thiscolor:['#330033','#330099'],
			thisnum:'%',
			thisxAxis:[],
			data: [
			  {
				name:'千公里高风险次数',
				value: []
			  },
			   {
				name: '千公里高风险有效干预',
				value: []
			   }
			]
		},
		outrate: '',
		highriskType: '1',
		//危险时段分布
		dangerousbehaviors: {
			title:'危险时段分布',
			showicon:true,//i图标是否显示
			showselect:false,//是否显示下拉框
			brushchoose:['昨日','上周','上月'],//筛选值
			thiscolor:['#FF6A6A','#FFA500', '#8796fc', 'red', 'green', 'yellow'],
			thisnum:'',
			thisxAxis:['0点', '1点', '2点', '3点', '4点'],
			data: []
		},
		//高风险行为次数TOP - 最多
		highbehavior: {
			title:'高风险行为次数TOP - 最多',
			brushchoose:['昨日','上周','上月'],//筛选值
			cityOptions:[],
			color:'#ff3366',
			data: [],
		},
		cityOptions: '',
		highriskTypeTop: '1'//高风险类型
      }
	},
    created () {
		this.getCompanyList()
		var data = {type: '1'}
		this.riskTimeFrame(data)
		this.countRiskBehaviour(data)
		this.highRiskMost('1')
	},
	mounted() {
		this.downloadDetail()
	},
    methods: {
		// miaodian
		addClass: function(index) {
            this.current = index;
        },
		//下载明细
		downloadDetail() {
			downloadDetail({}).then(res => {
			  let file = new Blob([res], {type: 'application/vnd.ms-excel'})
			  this.downloadURL = URL.createObjectURL(file)
		  	})
		},
		//风险行为统计
		countRiskBehaviour(data) {
			let _this = this
			countRiskBehaviour(data).then(res => {
				var riskbehaviors = []
				var thisxAxis = []
				_this.riskbehaviors.data = []
				_this.riskbehaviors.thisxAxis = []
				if(!res.data || res.data.length == 0) return false
				res.data.forEach(item => {
					var d = {
						name: item.code_name,
						value: [item.event_by ? item.event_by : 0, item.event_cdpl ? item.event_cdpl : 0, 
								item.event_cjgj ? item.event_cjgj : 0,item.event_cy ? item.event_cy : 0,
								item.event_dhq ? item.event_dhq : 0,item.event_pfdt ? item.event_pfdt : 0,
								item.event_pzyj ? item.event_pzyj : 0,item.event_tljk ? item.event_tljk : 0,
								item.event_wsj ? item.event_wsj : 0,item.event_zylfs ? item.event_zylfs : 0]
					}
					riskbehaviors.push(d)
					if(thisxAxis.length == 0) {
						item.value.forEach(data => {
							thisxAxis.push(data.risk_descr)
						})
					} 
				});
				_this.riskbehaviors.data = riskbehaviors
				_this.riskbehaviors.thisxAxis = thisxAxis
				console.log('riskbehaviors',_this.riskbehaviors)
			})
		},
		//危险时段分布
		riskTimeFrame(data) {
			let _this = this
			riskTimeFrame(data).then(res => {
				var riskbehaviors = []
				var thisxAxis = []
				_this.dangerousbehaviors.data = []
				if(!res.data || res.data.length == 0) return false
				res.data.forEach(item => {
					var d = {
						name: item.code_name,
						value: [item.numbers_hour_00 ? item.numbers_hour_00 : 0,item.numbers_hour_01 ? item.numbers_hour_01 : 0, 
								item.numbers_hour_02 ? item.numbers_hour_02 : 0,item.numbers_hour_03 ? item.numbers_hour_03 : 0,
								item.numbers_hour_04 ? item.numbers_hour_04 : 0,item.numbers_hour_05 ? item.numbers_hour_05 : 0,
								item.numbers_hour_06 ? item.numbers_hour_06 : 0,item.numbers_hour_07 ? item.numbers_hour_07 : 0,
								item.numbers_hour_08 ? item.numbers_hour_08 : 0,item.numbers_hour_09 ? item.numbers_hour_09 : 0,
								item.numbers_hour_10 ? item.numbers_hour_10 : 0,item.numbers_hour_11 ? item.numbers_hour_11 : 0,
								item.numbers_hour_12 ? item.numbers_hour_12 : 0,item.numbers_hour_13 ? item.numbers_hour_13 : 0,
								item.numbers_hour_14 ? item.numbers_hour_14 : 0,item.numbers_hour_15 ? item.numbers_hour_15 : 0,
								item.numbers_hour_16 ? item.numbers_hour_16 : 0,item.numbers_hour_17 ? item.numbers_hour_17 : 0,
								item.numbers_hour_18 ? item.numbers_hour_18 : 0,item.numbers_hour_19 ? item.numbers_hour_19 : 0,
								item.numbers_hour_20 ? item.numbers_hour_20 : 0,item.numbers_hour_21 ? item.numbers_hour_21 : 0,
								item.numbers_hour_22 ? item.numbers_hour_22 : 0,item.numbers_hour_23 ? item.numbers_hour_23 : 0]
					}
					riskbehaviors.push(d)
				});
				_this.dangerousbehaviors.data = riskbehaviors
				thisxAxis = ['0点', '1点', '2点', '3点', '4点', '5点', '6点', '7点', '8点', '9点', '2点'
					,'10点', '11点', '12点', '13点', '14点', '15点', '16点', '17点', '18点', '19点', '20点', '21点', '22点', '23点']
				_this.dangerousbehaviors.thisxAxis = thisxAxis
			})
		},
		//获取公司列表
		getCompanyList() {
			let _this = this
			getCompanyList({}).then(res => {
				_this.highrisk.outrates = []
				_this.highbehavior.cityOptions = []
				if(!res.data || res.data.length == 0) return
				res.data.forEach(item => {
					item.data.forEach(d => {
						_this.highrisk.outrates.push(
							{value: d.code, label: d.name}
						)
						_this.highbehavior.cityOptions.push(
							{value: d.code, label: d.name}
						)
					})
					
				})
				if(!_this.outrate) 
					_this.outrate = _this.highrisk.outrates[0].value;
				if(!_this.cityOptions) 
					_this.cityOptions = _this.highbehavior.cityOptions[0].value;

				this.highRiskMeddle()
			})
		},
		changeSelect(code) {
			this.outrate = code
			this.highRiskMeddle()
		},
		//高风险次数与有效干预占比-按日
		highRiskMeddle() {
			var data = {
				code: this.outrate,
				type: this.highriskType
			}
			highRiskMeddle(data).then(res => {
				var riskday = []
				var percentage = []
				var high_risk_count = []
				this.highrisk.thisxAxis = []
				this.highrisk.data = []
				if(!res.data || res.data.length == 0) return
				res.data.forEach(item => {
					riskday.push(item.riskday)
					percentage.push(item.percentage)
					high_risk_count.push(item.high_risk_count)
				})
				this.highrisk.thisxAxis = riskday
				this.highrisk.data[0].value = percentage
				this.highrisk.data[1].value = high_risk_count
			})
		},
		//高风险次数与有效干预占比-切换
		warehouseQuery(value) {
			if(value == 0) {
				this.highriskType = '1'
				this.highRiskMeddle()
			} else if(value == 1) {
				this.highriskType = '2'
				this.highRiskMeddle()
			} else {
				this.highriskType = '3'
				this.highRiskMeddle()
			}
		},
		//风险行为统计-切换
		riskCheck(value) {
			var data
			if(value == 0) {
				data = {type: '1'}
				this.countRiskBehaviour(data)
			} else if(value == 1) {
				data = {type: '2'}
				this.countRiskBehaviour(data)
			} else {
				data = {type: '3'}
				this.countRiskBehaviour(data)
			}
		},
		//危险时段分布-切换
		dangerousCheck(value) {
			var data
			if(value == 0) {
				data = {type: '1'}
				this.riskTimeFrame(data)
			} else if(value == 1) {
				data = {type: '2'}
				this.riskTimeFrame(data)
			} else {
				data = {type: '3'}
				this.riskTimeFrame(data)
			}
		},
		changeSelectTop(code) {
			this.cityOptions = code
			this.highRiskMost()
		},
		//高风险行为次数TOP - 最多
		highRiskMost() {
			var data = {
				type: this.highriskTypeTop,
				code: this.cityOptions
			}
			highRiskMost(data).then(res => {
				var riskData = []
				this.highbehavior.data = []
				if(!res.data || res.data.length == 0) return
				res.data.forEach((item, index) => {
					riskData.push({
						value: index == 0 ? 100 : (item.num ? (Math.round((item.num/res.data[0].num * 100) * 100) / 100) : 0),
						name: item.carnum + '(' + item.code_name + (item.belong ? ' - ' + item.belong : '') + ')'
					})
				})
				this.highbehavior.data = riskData
			})
		},
		//高风险行为次数TOP - 最多 - 天/周/月 切换
		clicktype(index) {
			if(index == 0) {
				this.highriskTypeTop = '1'
				this.highRiskMost()
			} else if(index == 1) {
				this.highriskTypeTop = '2'
				this.highRiskMost()
			} else {
				this.highriskTypeTop = '3'
				this.highRiskMost()
			}
			// this.highRiskMost(index)
		}
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
.buttonAn a {color: #fff;}
.el-date-editor.el-input__inner {width: auto}
</style>
<style lang="scss" scoped>
	.the-head h4{margin-bottom: 0;margin-top: 1rem;}
	/deep/ .the-head .el-date-editor.el-input, .el-date-editor.el-input__inner{width: 30%;}
	.form-inline /deep/ button{margin-left: 10px;}
	/deep/ .el-button--info{background: #f3f3f4;color: #39394d;border: 0;}
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
  }
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
