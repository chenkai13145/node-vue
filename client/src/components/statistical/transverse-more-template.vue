<template>
	<!-- 柱状图组件 (数据横向)-->
	<div class="columnar-transverse-template">
		<el-row style="padding-left:20px;"  class="height40 linheight40 margintop10">
			<el-col :span="18">
				<div class="grid-content bg-purple">
					<span class="w30 disinline">{{ transverseData.title }}</span>
					<el-tooltip v-if="transverseData.showicon" class="item" effect="dark" :content="transverseData.title" placement="right">
						<icon-svg name="helpbig" class="tipicon"></icon-svg>
					</el-tooltip>
				</div>
			</el-col>
			<!-- <el-col :span="6">
				<el-row>
					<el-col :span="8" v-for="(item,index) in transverseData.brushchoose" :key="index++">
						<div class="grid-content bg-purple textcenter" v-on:click="xuanzhong(index)" :class="{ischeck:index==current}">{{ item }}</div>
					</el-col>
				</el-row>
			</el-col> -->
			<div class="headSelectBox">
                <span class=""  v-for="(item,index) in transverseData.brushchoose" :key="index++" v-on:click="xuanzhong(index)" :class="{ischeck:index==current}">{{ item }}</span>
            </div>
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
		itemStyle: {
			normal: {
				label: {
					//show: true, //开启显示
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
		current:1,//选中的名称
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
				tooltip : {
					trigger: 'axis',
					axisPointer : {            // 坐标轴指示器，坐标轴触发有效
						type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				grid: {
					top: '5%',
					left: '6%',
					right: '6%',
					bottom: '10%',
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
						data: _self.transverseData.thisyAxis,
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
.ischeck{
	  color:#D70110;
	  border-bottom: 4px solid #D70110;
	}
.headSelectBox{
    display: inline-block;
    float: right;
    margin-right: 40px;
	cursor: pointer;
	font-size: 14px;
    color: #39394d;
    span:nth-child(2){
      margin: 0 50px;
    }
}
</style>
