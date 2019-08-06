<template>
	<!-- 柱状图组件 (标准)-->
	<div class="standard-columnar-template">
		<el-row class="height40 linheight40 margintop10 borderbottom paddingbottom">
			<el-col :span="15"  v-if="standardcolumnarData.showselect">
				<div class="grid-content bg-purple">
					<span class="disinline">{{ standardcolumnarData.title }}</span>
					<el-tooltip v-if="standardcolumnarData.showicon" class="item" effect="dark" :content="standardcolumnarData.title" placement="right">
						<icon-svg name="helpbig" class="tipicon"></icon-svg>
					</el-tooltip>
				</div>
			</el-col>
			<el-col :span="18"  v-else>
				<div class="grid-content bg-purple">
					<span class="disinline">{{ standardcolumnarData.title }}</span>
					<el-tooltip v-if="standardcolumnarData.showicon" class="item" effect="dark" :content="standardcolumnarData.title" placement="right">
						<icon-svg name="helpbig" class="tipicon"></icon-svg>
					</el-tooltip>
				</div>
			</el-col>
			<el-col :span="3" v-if="standardcolumnarData.showselect">
				<div class="grid- bg-purple-light">
					<el-select v-model="outrate" placeholder="请选择">
						<el-option
							v-for="item in standardcolumnarData.outrates"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</div>
			</el-col>
		
			
			<el-col :span="6">
				<el-row>
					<el-col :span="8" v-for="(item,index) in standardcolumnarData.brushchoose" :key="index">
						<div class="grid-content bg-purple textcenter" v-on:click="xuanzhong(index)" :class="{ischeck:index==current}">{{ item }}</div>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
		<div class="mod-demo-echarts margintop10">
			<el-card style="background:#fff;">
			  <div :id="standardcolumnarId" class="standardcolumnarId" style="width:100%;"></div>
			</el-card>
		</div>
	</div>
</template>

<script>
import echarts from 'echarts'
import { riskTimeFrame } from '@/utils/api/statistical/transportsecurity'
var ItemBar = function () {
	return {
		name: '',
		type: 'bar',
		data: [],
		barGap:'0',//柱状之间的间隙
		barWidth: 40,//柱状宽度
		itemStyle: {
			normal: {
				label: {
					show: true, //开启显示
					position: 'top', //在上方显示
					textStyle: { //数值样式
						color: 'black',
						fontSize: 16
					}
				}
			}
		}
	}
};

var SeriesTotal=[];
export default {
	name: 'standard-dangerous-template',//标准柱状图
	props: {
		standardcolumnarData: {//父页面传回的折线图值 接收的数据类型
		  type: Object, 
	  }
	},
	data () {
      return {
		standardcolumnar:null,//折线初始值
		current:0,//选中的名称
		outrate:'',//下拉框选中的值
		standardcolumnarId: 'standardcolumnar'+ (new Date()).getTime(),
		data: ''
		}
    },
    created () {
	  	let _this = this
		setTimeout(function()  {
			_this.getvalue();
		}, 2000)
    },
    activated () {
      // 由于给echart添加了resize事件, 在组件激活时需要重新resize绘画一次, 否则出现空白bug
      if (this.standardcolumnar) {
        this.standardcolumnar.resize()
      }
	},
    methods: {
		//风险行为统计
		 getvalue(){
			//  var data = {
			// 	type: 'day'
			// }
			this.initstandardcolumnar()
		}, 
		 // 初始化柱状图
		initstandardcolumnar (){
			let _self = this
			var option;
			SeriesTotal =[];
			for (var k in this.standardcolumnarData.data) {
			//核心，给series赋值，分开包装的思想。
				var itemBar = new ItemBar();
				itemBar.name = this.standardcolumnarData.data[k].name;
				itemBar.data = this.standardcolumnarData.data[k].value;
				SeriesTotal.push(itemBar);
			}
			option = {
				color:_self.standardcolumnarData.thiscolor,
				title: {
					text: '',
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					}
				},
				legend: {//展示柱状图的数据值(条数)
					data: (() => {
					let legendarr = []
					for (let i = 0; i <this.standardcolumnarData.data.length; i++) {
						legendarr.push(this.standardcolumnarData.data[i].name)
					}
					return legendarr
					})(), 
				},
				grid: {
					top : '10%',
					left: '4%',
					right: '4%',
					bottom: '10%',
					containLabel: true
				},
				toolbox: {
					show: true,
					orient: 'vertical',
					left: 'right',
					top: 'center',
					//几种状态的切换
					/* feature: {
						mark: {show: true},
						dataView: {show: true, readOnly: false},
						magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
						restore: {show: true},
						saveAsImage: {show: true}
					} */
				},
				calculable: true,
				xAxis:  {//展示横坐标的数据
					type: 'category',
					axisTick: {show: false},
					data:this.standardcolumnarData.thisxAxis,
					axisLabel:{
						interval: 0
					}
				},
				yAxis: [
					{
						type: 'value',
						axisLabel: {
							formatter: '{value} '+this.standardcolumnarData.thisnum
						}
					}
				],
				dataZoom: [{
					type: 'slider',
					show: true, //flase直接隐藏图形
					xAxisIndex: [0],
					left: '6%', //滚动条靠左侧的百分比
					bottom: -5,
					start: 0,//滚动条的起始位置
					end: 20 //滚动条的截止位置（按比例分割你的柱状图x轴长度）
				}],
				series: SeriesTotal
			}
			_self.standardcolumnar = _self.$echarts.init(document.getElementById(_self.standardcolumnarId))
			_self.standardcolumnar.setOption(option);
			window.addEventListener('resize', () => {
				_self.standardcolumnar.resize()
			}) 
			
			
			
			
		},
		xuanzhong:function(value){
			this.current=value
			this.$emit('dangerousCheck', value)
			let _this = this
			setTimeout(function()  {
				_this.getvalue();
				console.log('危险', _this.standardcolumnarData)
				}, 2000)
			}
	}
  }
</script>
<style lang="scss">
.el-date-editor .el-range-separator{width: 10%;}
.mod-demo-echarts {
    .standardcolumnarId {
      min-height: 400px;
    }
}
.grid-content.bg-purple.textcenter{
	display: block;
	cursor: pointer;
}
</style>
