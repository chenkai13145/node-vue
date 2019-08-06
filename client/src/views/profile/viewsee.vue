<template>
  <div class="viewsee">
    <el-row class="text-center">欢迎来到资金视图</el-row>
    <el-row type="flex" class="row-bg" justify="center" :gutter="24"> 
      <el-col class="center" :span="12">
        <el-card>
        <div class="leftMycharts" id="myChart" :style="{width: '100%',  height: '300px'}"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
        <div id="myCharts" :style="{width: '100%', height: '300px'}"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center" :gutter="24">
      <el-col class="center" :span="12">
        <el-card>
         <div class="leftMycharts" id="myChartss" :style="{width: '100%',  height: '300px'}"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
        <div id="myChartsss" :style="{width: '100%', height: '300px'}"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datafiles: null,
      count: [],
      output: [],
      input: [],
      cash: []
    };
  },
  created() {
    this.chushihua();
  },
  activated() {
    // 由于给echart添加了resize事件, 在组件激活时需要重新resize绘画一次, 否则出现空白bug
    if (this.brokenline) {
        myChart.resize();
    }
  },
  mounted() {},
  methods: {

    //饼图
    pei() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
       
        title: {
          text: "收支类型的比列",
          left: "center",
          top: 20,
          textStyle: {
            color: "red"
          }
        },
        toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
          }
         },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: "使用次数",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data:this.count.map(item=>{
            //      [
            //   { value: this.count[0].counts, name: this.count[0].name },
            //   { value: this.count[1].counts, name: this.count[1].name },
            //   { value: this.count[2].counts, name: this.count[2].name },
            //   { value: this.count[3].counts, name: this.count[3].name },
            //   { value: this.count[4].counts, name: this.count[4].name },
            //   { value: this.count[5].counts, name: this.count[5].name }
            // ].sort(function(a, b) {
            //   return a.value - b.value;
            // }),
             return {value:item.counts,name:item.name}
            }),
            roseType: "radius",
            label: {
              normal: {
                textStyle: {
                  color: "red"
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: "red"
                },
                smooth: 0.2,
                length: 10,
                length2: 20
              }
            },
            itemStyle: {
              normal: {
                color: "#c23531",
                shadowBlur: 200,
                shadowColor: "#fff"
              }
            },

            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function(idx) {
              return Math.random() * 200;
            }
          }
        ]
      });
       window.addEventListener("resize", () => {
        myChart.resize();
      });
    },

    //支出z柱图
    outputs() {
      let myChart = this.$echarts.init(document.getElementById("myCharts"));
      //绘制图表
        myChart.setOption({
         color: ["#3398DB"],
          tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
          },
           toolbox: {
          show: true,
          feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
           },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: this.output.map(item=>{
            //  [
            //   this.output[0].name,
            //   this.output[1].name,
            //   this.output[2].name,
            //   this.output[3].name,
            //   this.output[4].name,
            //   this.output[5].name
            // ],
            return item.name
            }),
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "支出金钱",
            type: "bar",
            barWidth: "60%",
            data: this.output.map(item=>{
              return item.output
            })
            
              // this.output[0].output,
              // this.output[1].output,
              // this.output[2].output,
              // this.output[3].output,
            //   // this.output[4].output,
            //   // this.output[5].output
            // ]
          }
        ]
      });
       window.addEventListener("resize", () => {
        myChart.resize();
      });
    },

    //input 主图
    inputs() {
      let myChart = this.$echarts.init(document.getElementById("myChartss"));
      //绘制图表
      myChart.setOption({
        color: ["#000"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
           toolbox: {
          show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: this.input.map(item=>{
              return item.name
            }),
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "收入金钱",
            type: "bar",
            barWidth: "60%",
            data: this.input.map(item=>{
              return item.input
            })
          }
        ]
      });
       window.addEventListener("resize", () => {
        myChart.resize();
      });
    },

    //三合一
    cashs() {
       let myChart = this.$echarts.init(document.getElementById("myChartsss"));
      //绘制图表
      myChart.setOption({
        title: {
          text: "支出收入与账户",
          subtext: "数据来自管理员操作"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
          toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
          }
         },
        legend: {
          data: ["2011年", "2012年"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: "category",
          data: this.cash.map(item=>{
            return item.name
          })
          // [this.cash[0].name, this.cash[1].name, this.cash[2].name, this.cash[3].name, this.cash[4].name, this.cash[5].name]
        },
        series: [
          {
            name: "收入",
            type: "bar",
            data: this.input.map(item=>{
              return item.input
            })
            // [this.input[0].input, this.input[1].input, this.input[2].input, this.input[3].input, this.input[4].input, this.input[5].input]
          },
          {
            name: "支出",
            type: "bar",
            data: this.output.map(item=>{
              return item.output
            })
            // [this.output[0].output, this.output[1].output, this.output[2].output, this.output[3].output, this.output[4].output, this.output[5].output]
          },
           {
            name: "账号现金",
            type: "bar",
            data:this.cash.map(item=>{
              return item.cash
            }) 
            // [this.cash[0].cash, this.cash[1].cash, this.cash[2].cash, this.cash[3].cash, this.cash[4].cash, this.cash[5].cash]
          }
        ]
      });
       window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    //数据处理的封装
    acifen(data, datatype) {
      let obj = {};
      let arr = [];
      data.forEach(item => {
        if (obj[item.type]) {
          arr.some((it, index) => {
            if (it.name == item.type) {
              if (datatype == "count") {
                arr[index].counts = arr[index].counts + 1;
                return true;
              }
              arr[index][datatype] =
                Number(arr[index][datatype]) + Number(item.output);
              return true;
            }
          });
        } else {
          if (datatype == "count") {
            let obj2 = {};
            obj[item.type] = 1;
            obj2.name = item.type;
            obj2.counts = 1;
            arr.push(obj2);
          } else {
            let obj2 = {};
            obj[item.type] = 1;
            obj2.name = item.type;
            obj2[datatype] = Number(item[datatype]);
            arr.push(obj2);
          }
        }
      });
      this[datatype] = arr;
      console.log(this)
    },
    
    async chushihua() {
      await this.$axios
        .get("/api/profile/all")
        .then(res => {
          return res.data;
        })
        .then(data => {
          this.datafiles = data;
          this.acifen(data, "count");
          this.acifen(data, "output");
          this.acifen(data, "input");
          this.acifen(data, "cash");
        });
      await this.pei();
      await this.outputs();
      await this.inputs();
      await this.cashs();
    },
    
  }
};
</script>
<style lang="scss" scoped>
.viewsee {
  margin: 40px 170px;
 .row-bg{
   margin-bottom: 20px;
   margin-left: 40px;
 }
  .text-center {
    text-align: center;
    font-size: 30px;
    text-shadow: 4px 4px 2px #ccc;
    padding: 10px;
  }
}
</style>
