<template>
	<!-- 折线图组件 -->
	<div class="linechart-template">
		<el-row style="padding-left:20px;"  class="height40 linheight40 margintop10">
			<el-col :span="18">
				<div class="grid-content bg-purple">
					<span class="disinline">{{ brokenlineData.title }}</span>
					<el-tooltip v-if="brokenlineData.showicon" class="item" effect="dark" :content="brokenlineData.explain" placement="right">
						<icon-svg name="helpbig" class="tipicon"></icon-svg>
					</el-tooltip>
				</div>
			</el-col>
			<!-- <el-col :span="6">
				<el-row>
					<el-col :span="8" v-for="(item,index) in brokenlineData.brushchoose" :key="index++">
						<div class="grid-content bg-purple textcenter" v-on:click="xuanzhong(index)"  :class="{ischeck:index==current}">{{ item }}</div>
					</el-col>
				</el-row>
			</el-col> -->
			<div class="headSelectBox">
                <span class=""  v-for="(item,index) in brokenlineData.brushchoose" :key="index++" v-on:click="xuanzhong(index)" :class="{ischeck:index==current}">{{ item }}</span>
            </div>
		</el-row>
		<div class="mod-demo-echarts margintop10">
			<div :id="brokenlineId" class="brokenlineId"></div>
		</div>
	</div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "linechart-template", //标准折线图
  props: {
    brokenlineData: {
      //父页面传回的折线图值 接收的数据类型
		type: Object,
		required: true
		},
		successData: {
			type: Boolean,
			required: true
		},
	},
	components:{
	},
  data() {
    return {
      brokenline: null, //折线初始值
      current: 1, //选中的名称
      outrate: "", //下拉框选中的值
      twooutrate: "", //下拉框选中值
		option:{},
      brokenlineId: "brokenline" + new Date().getTime(),
      data: this.brokenlineData.data
    };
  },
  mounted() {
    this.initbrokenline()
  },
  activated() {
    // 由于给echart添加了resize事件, 在组件激活时需要重新resize绘画一次, 否则出现空白bug
    if (this.brokenline) {
      this.brokenline.resize();
    }
	},
	computed: {
	},
  methods: {
    // 初始化折线图
    initbrokenline() {
			let _self = this;
			this.option = {
				color:["yellow","red","green","#cc0099","#8796fc","orange"], //折线图颜色,
        title: {
          text: ""
        },
        tooltip: {
          trigger: "axis"
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
          show: true
        },
        xAxis: {
          //展示横坐标的数据
          type: "category",
          boundaryGap: false,
          data: []
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} " + _self.brokenlineData.thisnum
          }
        },
        series:[]
      };
			this.brokenline = echarts.init(document.getElementById(this.brokenlineId));
			// 等待加载loading
			this.brokenline.showLoading({
			  text: 'loading',
			  color: '#6851e1',
			  textColor: '#c9c9c9',
			  maskColor: '#f0f0f0',
			  zlevel: 0
			})
			window.addEventListener("resize", () => {
        this.brokenline.resize();
      });
    },
		handleSeriesData () {
			this.option.xAxis.data = this.brokenlineData.thisxAxis
			this.option.series = this.brokenlineData.data
			if(this.brokenlineData.data.length > 1){
				this.option.legend = {
				  //展示折线图的数据值(条数)
				    data: (() => {
				      let legends = [];
				      for (let i = 0; i <this.brokenlineData.data.length; i++) {
								legends.push(this.brokenlineData.data[i].name);
							}
							return legends;
				    })(),
				    bottom: 0,
				    left: 30,
				    icon: "rect",
				    itemWidth: 10,
				    itemHeight: 10,
				    itemGap: 40,
						type:'scroll',
						icon: 'path://M240.11292005 230.74396634H775.80207574v535.69023281H240.11292005V230.74396634z',
						textStyle: {
						  fontSize: 14,
						  padding: [2, 0, 0, 0]
						},
				}
			}
			this.brokenline.clear();
			this.brokenline.setOption(this.option);
			this.brokenline.hideLoading()
		},
    xuanzhong: function(value) {
      this.current = value;
	  this.$emit('clicktype',this.current)
    }
  },
	watch: {
	  brokenlineData: {
	    handler () {
	      if (this.successData) {
					console.log(this)
					this.handleSeriesData()
	      }else{
				}
	    },
	    deep: true
	  }
	}
};
</script>
<style lang="scss">
.el-date-editor .el-range-separator {
  width: 10%;
}
.ischeck {
  color: red;
  border-bottom:4px solid red;

		
	
}

.mod-demo-echarts {
  .brokenlineId {
    min-height: 400px;
  }
}

.headSelectBox{
    display: inline-block;
    float: right;
    margin-right: 40px;
	cursor: pointer;
	font-size: 14px;
    color: #39394d;
    span:nth-child(2){
      margin: 0 30px;
    }
}
</style>
