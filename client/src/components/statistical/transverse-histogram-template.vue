<template>
	<!-- 柱状图组件 (数据横向)-->
	<div class="columnar-transverse-template">
		<el-row class="height40 linheight40 margintop10 borderbottom paddingbottom">
			<el-col :span="18">
				<div class="grid-content bg-purple">
					<span class="w30 disinline">{{ transverseData.title }}</span>
				</div>
			</el-col>
			<el-col :span="6">
				<el-row>
					<el-col :span="8" v-for="(item,index) in transverseData.brushchoose" :key="index">
						<div class="grid-content bg-purple textcenter" v-on:click="xuanzhong(index)" :class="{ischeck:index==current}">{{ item }}</div>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
		<div class="mod-demo-echarts margintop10">
			<div :id="transverseId" class="transverseId"></div>
		</div>
	</div>
</template>

<script>
import echarts from 'echarts'
var ItemBar = function () {
	return {
		name: '',
		type:'bar',
		barWidth : 30,//柱图宽度
		stack: '总量',
		smooth: true,
		itemStyle: {
			normal: {
				label: {
					show: true, //开启显示
					position: 'right',
					textStyle: { //数值样式
						color: 'green',
						fontSize: 14
					}
				}
			}
		},
		data: []
	}
};

var SeriesTotal=[];
export default {
	name: 'columnar-transverse-template',
	props: {
	  transverseData: {//父页面传回的折线图值 接收的数据类型
		  type: Object, 
	  }
	},
	data () {
      return {
		transverse:null,//折线初始值
		current:4,//选中的名称
		outrate:'',//下拉框选中的值
		transverseId: 'transverse'+ (new Date()).getTime(),
		data: this.transverseData.data
		}
    },
    mounted () {
      this.getvalue()
    },
    activated () {
      // 由于给echart添加了resize事件, 在组件激活时需要重新resize绘画一次, 否则出现空白bug
      if (this.transverse) {
        this.transverse.resize()
      }
	},
    methods: {
		 getvalue(){
			let _this = this
			SeriesTotal =[];
			for (var k in _this.data) {
			 //核心，给series赋值，分开包装的思想。
				var itemBar = new ItemBar();
				itemBar.name = _this.data[k].name;
				itemBar.data = _this.data[k].value;
				SeriesTotal.push(itemBar);
			}
			this.initcolumnar()
		}, 
		 // 初始化柱状图
		initcolumnar (){
			let _self = this
			let option = {
				color:_self.transverseData.thiscolor,
				title: {
					text: '',
				},
				tooltip: {
					trigger: 'axis'
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				legend: {//展示柱状图的数据值(条数)
					 data: (() => {
					  let legendarr = []
					  for (let i = 0; i <_self.data.length; i++) {
						legendarr.push(_self.data[i].name)
					  }
					  return legendarr
					})(), 
				},
				toolbox: {
					show: true,
				},
				xAxis:  {//展示横坐标的数据
					type : 'value',
				},
				yAxis: [
					{
						type : 'category',
						data: (() => {
						  let yaxisarr = []
						  for (let i = 0; i <_self.transverseData.delays.length; i++) {
							  var name = _self.transverseData.delays[i].VIN+'  '+_self.transverseData.delays[i].customer+'  '+_self.transverseData.delays[i].company;
							yaxisarr.push(name)
						  }
						  return yaxisarr
						})(), 
						nameTextStyle: {
							color:'red'
						}
					}
				],
				series: SeriesTotal
			}
			this.transverse = echarts.init(document.getElementById(this.transverseId))
			this.transverse.setOption(option);
			window.addEventListener('resize', () => {
				this.transverse.resize()
			}) 
			
		},
		xuanzhong:function(value){
			this.current=value
		}
	}
  }
</script>
<style lang="scss">
.el-date-editor .el-range-separator{width: 10%;}
.mod-demo-echarts {
    .transverseId {
      min-height: 400px;
    }
}
</style>
