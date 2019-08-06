<template>
  <!-- 折线图组件 -->
  <div class="linechart-template">
    <el-row style="padding-left:20px;" class="height40 linheight40 margintop10">
      <el-col :span="4" v-if="brokenlineData.showselect">
        <div class="grid-content bg-purple">
          <span class="disinline">{{ brokenlineData.title }}</span>
          <el-tooltip
            v-if="brokenlineData.showicon"
            class="item"
            effect="dark"
            :content="brokenlineData.explain"
            placement="right"
          >
            <icon-svg name="help" class="tipicon"></icon-svg>
          </el-tooltip>
        </div>
      </el-col>
      <el-col :span="4" v-else>
        <div class="grid-content bg-purple">
          <span class="disinline">{{ brokenlineData.title }}</span>
          <el-tooltip
            v-if="brokenlineData.showicon"
            class="item"
            effect="dark"
            :content="brokenlineData.explain"
            placement="right"
          >
            <icon-svg name="help" class="tipicon"></icon-svg>
          </el-tooltip>
        </div>
      </el-col>
      <el-col :span="4" style="margin-right:10px">
        <div class="grid- bg-purple-light">
          <el-select v-model="outrate" placeholder="请选择" @change="changeselect">
            <el-option
              v-for="item in brokenlineData.outrates"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </el-col>

      <el-col :span="4" v-if="brokenlineData.showselect">
        <div class="grid- bg-purple-light">
          <el-select v-model="twooutrate" placeholder="请选择" @change="twochangeselect">
            <el-option
              v-for="item in brokenlineData.twooutrates"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </el-col>

      <!-- <el-col :span="brokenlineData.showselect?11:14">
        <el-row style="position: relative; right: 36px;">
          <el-col
            :span="3"
            :style="'position: absolute;right:-'+ index*50+'px;'"
            v-for="(item,index) in brokenlineData.brushchoose"
            :key="index++"
          >
            <div
              style="width:50px; cursor: pointer;justify-content: center;"
              class="grid-content bg-purple textcenter"
              v-on:click="xuanzhong(index)"
              :class="{ischeck:index==current}"
            >{{ item }}</div>
          </el-col>
        </el-row>
      </el-col> -->
      <div class="headSelectBox">
        <span class=""  v-for="(item,index) in brokenlineData.brushchoose" :key="index++" v-on:click="xuanzhong(index)" :class="{ischeck:index==current}">{{ item }}</span>
      </div>
    </el-row>
    <div class="mod-demo-echarts margintop10">
        <!-- :siler="silder" -->
        <div :id="brokenlineId" class="brokenlineId"></div>
      
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import Empty from "@/components/statistical/empty"
import { getListDayByOrgCode, getListWeekByOrgCode, getListMonthByOrgCode } from '@/utils/api/statistical/digital'
var ItemLine = function() {
  return {
    name: "",
    type: "line",
    smooth: true,
    seriesLayoutBy: "row",
    data: [],
    itemStyle: {
      normal: {
        color: "green",
        lineStyle: {
          color: "red"
        }
      }
    }
  };
};
var SeriesTotal = [];
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
		},
	},
	components:{
	},
  data() {
    return {
      brokenline: null, //折线初始值
      current: 1, //选中的名称
      outrate: "org_code", //下拉框选中的值
      twooutrate: "", //下拉框选中值
			option:{},
      brokenlineId: "brokenline" + new Date().getTime(),
      data: this.brokenlineData.datavalue
    };
  },
  mounted() {
    this.initbrokenline()
    // this.initbrokenline()
    this.getListDayByOrgCode();
  },
 
  activated() {
    // 由于给echart添加了resize事件, 在组件激活时需要重新resize绘画一次, 否则出现空白bug
    if (this.brokenline) {
      this.brokenline.resize();
    }
	},
	
  methods: {
    getvalue() {
      let _this = this;
      SeriesTotal = [];
      for (var k in this.brokenlineData.data) {
        //核心，给series赋值，分开包装的思想。
        var obj = {};
        var itemLine = new ItemLine();
        itemLine.name = this.brokenlineData.data[k].name;
        itemLine.data = this.brokenlineData.data[k].value;
        itemLine.itemStyle.normal.color = _this.brokenlineData.thiscolor[k];
        itemLine.itemStyle.normal.lineStyle.color =
          _this.brokenlineData.thiscolor[k];
        SeriesTotal.push(itemLine);
      }
      this.initbrokenline();
    },
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
      // setTimeout(()=>{
      //   this.brokenline.hideLoading()
      // },4000)
			window.addEventListener("resize", () => {
        this.brokenline.resize();
      });
    },
		handleSeriesData () {
			this.option.xAxis.data = this.brokenlineData.thisxAxis
			this.option.series = this.brokenlineData.datavalue
			if(this.brokenlineData.datavalue.length >= 1){
				this.option.legend = {
				  //展示折线图的数据值(条数)
				    data: (() => {
				      let legends = [];
				      for (let i = 0; i <this.brokenlineData.datavalue.length; i++) {
								legends.push(this.brokenlineData.datavalue[i].name);
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
			}else{
				this.option.legend ={};
			}
			this.brokenline.clear();
			this.brokenline.setOption(this.option);
			this.brokenline.hideLoading()
		},
    xuanzhong: function(value) {
      this.current = value;
		this.$emit('clicktype',this.current)
      let obj={
        current:value,
        type:this.outrate||'',
        org_type:this.twooutrate||''
      }
      this.$emit('clicktypes',obj)
    },
		changeselect: function(event, item) {
			this.$emit('changeselect',event);
		},
		twochangeselect: function(event, item) {
			this.$emit('twochangeselect',event);
		},
  },
	watch: {
	  brokenlineData: {
	    handler () {
	      if (this.successData) {
          this.handleSeriesData();
         console.log(this.brokenlineData.twooutrates)
         
					// this.twooutrate = '';
					//this.twooutrate = this.brokenlineData.twooutrates[0].value;
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
  border-bottom: 4px solid red;
		
	
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
      margin: 0 50px;
    }
}
</style>
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
