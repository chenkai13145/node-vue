<template>
	<!-- 柱状图组件 (数据重叠)-->
	<div class="columnar-template">
		<el-row style="padding-left:20px;" class="height40 linheight40 margintop10">
			<el-col :span="4" v-if="columnarData.showicon">
				<div class="grid-content bg-purple">
					<span class="disinline">{{ columnarData.title }}</span>
					<el-tooltip v-if="columnarData.showicon" class="item" effect="dark" :content="columnarData.explain" placement="right">
						<icon-svg name="help" class="tipicon"></icon-svg>
					</el-tooltip>
				</div>
			</el-col>
			<el-col :span="7" v-else>
				<div class="grid-content bg-purple">
					<span class="disinline">{{ columnarData.title }}</span>
					<el-tooltip v-if="columnarData.showicon" class="item" effect="dark" :content="columnarData.explain" placement="right">
						<icon-svg name="help" class="tipicon"></icon-svg>
					</el-tooltip>
				</div>
			</el-col>
			<div class="headSelectBox">
                <span class=""  v-for="(item,index) in columnarData.brushchoose" :key="index++" v-on:click="xuanzhong(index)" :class="{ischeck:index==current}">{{ item }}</span>
            </div>
		</el-row>
		<div class="mod-demo-echarts margintop10">
			<div :id="columnarId" class="columnarId"></div>
		</div>
	</div>
</template>

<script>
import echarts from 'echarts'
export default {
	name: 'columnar-template',//标准柱状图
	props: {
	  columnarData: {//父页面传回的折线图值 接收的数据类型
		  type: Object, 
		  required: true
	  },
	  successData: {
	    type: Boolean,
	  },
	},
	data () {
      return {
		option:{},
		columnar:null,//折线初始值
		current:1,//选中的名称
		outrate:'',//下拉框选中的值
		columnarId: 'columnar'+ (new Date()).getTime(),
		data: this.columnarData.data
		}
    },
    mounted () {
		this.initcolumnar()
    },
    activated () {
      // 由于给echart添加了resize事件, 在组件激活时需要重新resize绘画一次, 否则出现空白bug
      if (this.columnar) {
        this.columnar.resize()
      }
	},
    methods: {
		 // 初始化柱状图
		initcolumnar (){
			let _self = this
			this.option = {
				color:["yellow","red","green","#cc0099","#8796fc","orange"],
				title: {
					text: '',
				},
				tooltip: {
					trigger: 'axis'
				},
                grid: {
                  left: '6%',
                  right: '6%',
                  top: '30px',
                  bottom: 50,
                  containLabel: true
                },
				legend: {},
				toolbox: {
					show: false,
				},
				xAxis:  {//展示横坐标的数据
					type: 'category',
					data:[],
					axisLabel:{
						formatter:function(value){
							return value.split("").join("\n");
						}
					}
				},
				yAxis: [
					{
						type: 'value',
						axisLabel: {
							formatter: '{value} '+_self.columnarData.thisnum
						}
					}
				],
				series: []
			}
			this.columnar = echarts.init(document.getElementById(this.columnarId))
			// 等待加载loading
			this.columnar.showLoading({
			  text: 'loading',
			  color: '#6851e1',
			  textColor: '#c9c9c9',
			  maskColor: '#f0f0f0',
			  zlevel: 0
			})
			window.addEventListener('resize', () => {
				this.columnar.resize()
			}) 
			
		},
		handleSeriesData () {
			this.option.xAxis.data = this.columnarData.thisxAxis
			this.option.series = this.columnarData.data
			this.option.legend = {
			  //展示折线图的数据值(条数)
		      data: (() => {
		        let legends = [];
		        for (let i = 0; i <this.columnarData.data.length; i++) {
						legends.push(this.columnarData.data[i].name);
					}
					return legends;
		      })(),
		      bottom: 0,
		      left: 30,
		      icon: "rect",
		      itemWidth: 10,
		      itemHeight: 10,
		      itemGap: 40
			}
			this.columnar.clear();
			this.columnar.setOption(this.option);
			this.columnar.hideLoading()
		},
		xuanzhong:function(value){
			this.current=value
			this.$emit('clicktype',this.current)
		},
		changeselect: function(event, item) {
			this.$emit('changeselect',event);
		},
	},
	watch: {
	  columnarData: {
	    handler () {
	      if (this.successData) {
			this.handleSeriesData()
	      }else{}
	    },
	    deep: true
	  }
	}
  }
</script>
<style lang="scss" scoped>
.el-date-editor .el-range-separator{width: 10%;}
.ischeck{
  color:red;
  border-bottom: 4px solid red;
  width: 50px;
}
.mod-demo-echarts {
    .columnarId {
      min-height: 400px;
			
    }
}
</style>
