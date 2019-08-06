<template>
    <!-- 陆运运力满足 -->
  <div class="traffic-statistics">
    <!-- 标题 -->
    <div class="traffic-statistics-title">
      <img src="../../../assets/monitoring/ic_tittle_amount@2x.png"
           alt="">
      <p style="display: flex;">板车运力统计</p>
      <GacButton type="contrast" style="margin-left:auto;" @click.native="showTable" v-bind:message="showTab">对比</GacButton>
    </div>
    <div class="doughnut-wrap" style="position: relative;">
      <div :id="doughnutId"
         class="transport-proportion-doughnut">
      </div>
      <span class="pdBox" v-show="pdShow">偏低</span>
      <p class="pieTit" style="display: flex;">陆运运力满足度<Help :helpText="helpText1" style="color:#fff;z-index:10"></Help></p>
    </div>
    <!-- 弹窗 板车运力统计对比 -->
    <CapacityComparisonTable v-show="showTab" v-on:showTab="childVal" :tableData="tableData"></CapacityComparisonTable>
    <!-- 弹窗 板车运力统计对比 -->
  </div>
</template>

<script>
import echarts from 'echarts'
import Help from '@/components/common/help'
import GacButton from '@/components/common/gac-button'
import CapacityComparisonTable from '@/components/monitoring/full-capacity/capacity-comparison-table'
import {getTruckUseByOrgCodeData} from '@/utils/api/monitoring/full-capacity'
import { relative } from 'path';
import { type } from 'os';
export default {
  name: 'transport-proportion',
  components: {
    Help,
    GacButton,
    CapacityComparisonTable
  },
  props: {
    transportData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      pdShow:false,
      showTab:false,
      tableData: [],
       // 说明
      helpText1:'使用中板位：运输在途板车的已使用板位;\n待发板位：计划出发板车的预计占用板位;\n剩余板位：空闲大板车的可用板位。',
      // helpText2:'总运力数：标检过的板车总数，包括自有和外协板车;\n自有运力：标检过的自有板车总数;\n外协运力：标检过的外协板车总数;\n无任务运力：标检过的板车中，当前无任务的板车数量;\n有任务运力：标检过的板车中，当前任务中的板车数量;\n对比：标检过的外协板车与自有板车的比。',
      // 环形图
      doughnut: null,
      doughnutId: 'doughnut' + Math.random().toString(36).substr(2) + Date.now()
    }
  },
  mounted () {
    this.initDoughnut()
  },
  activated () {
    // 由于给echart添加了resize事件, 在组件激活时需要重新resize绘画一次, 否则出现空白bug
    if (this.doughnut) {
      this.doughnut.resize()
    }
  },
  methods: {
    // 初始化环形图
    initDoughnut () {
      console.log('transportData',this.transportData)
      let option = {
        backgroundColor: '#fff',
        color: ['#5666ea', '#b0bfff', '#d42727'],
        legend: {
          orient: 'vertical',
          x: '40%',
          y: 'center',
          height:"100%",
          itemWidth: 9,
          itemHeight: 9,
          icon: 'path://M0.5,0.5h9v9h-9V0.5z',
          selectedMode:false,// 取消图例上的点击事件
          // 图例数据
          data: (() => {
            let arr = []
            this.transportData.forEach(item => {
              arr.push(item.name)
            })
            return arr
          })(),
          // 图例富文本
          formatter: name => {
            let val
            let total = 0
            let percentage
            this.transportData.forEach(item => {
              total += item.value
              if (item.name === name) {
                val = item.value
              }
            })
            percentage = (total ? (val / total * 100).toFixed(2) : 0) + '%'
            // percentage = '13%'
            let percentageNum = parseInt(percentage)
            if(percentageNum <= 20 && name == '剩余板位'){
              this.pdShow = true 
            }else{
              this.pdShow = false 
            }
            let arr = ['{a|' + name + '}', '{b|' + percentage + '}','{c|' + val + '}辆']
            return arr.join('')
          },
          textStyle: {
            rich: {
              a: {
                color: '#84849A',
                fontSize: 12,
                lineHeight: 12,
                width: 65
              },
              b: {
                fontSize: 12,
                color: '#39394D',
                lineHeight: 12
                // width: 45
              },
              c: {
                padding:[0,0,0,3],
                fontSize: 12,
                color: '#39394D',
                lineHeight: 12
              }
            }
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['20%', '50%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.transportData
          }
        ]
      }
      // 实例化环形图
      this.doughnut = echarts.init(document.getElementById(this.doughnutId))
      // 等待加载loading
      this.doughnut.showLoading({
        text: 'loading',
        color: '#5566EA',
        textColor: '#c9c9c9',
        maskColor: '#fff',
        zlevel: 0
      })
      setTimeout(() => {
        this.doughnut.hideLoading()
        this.doughnut.setOption(option)
      }, 2000)
      // 响应屏幕修改
      window.addEventListener('resize', () => {
        this.doughnut.resize()
      })
    },
    // 对比
    showTable () {
      this.showTab =! this.showTab
      if(this.showTab) {
        var value = {
          table: 'org_code'
        }
        getTruckUseByOrgCodeData(value).then(res => {
          this.tableData = res.data
        })
      }
    },
    childVal (data) {
      this.showTab = data
    }
  }
}
</script>

<style lang="scss">
$color-1: #39394d;
$color-2: #84849a;
$color-3: #d92430;
.traffic-statistics {
  width: 298px;
  background-color: #fff;
  box-shadow: 0 3px 4px 0 rgba(98, 99, 118, 0.08);
}
.traffic-statistics-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  padding-bottom: 10px;
  & > img {
    width: 25px;
    height: 25px;
  }
  &>p {
    font-size: 16px;
    color: $color-1;
    margin-left: 5px;
    letter-spacing: 0.6px;
  }
  & > div {
    height: 16px;
    display: flex;
    align-items: flex-end;
    margin-left: 0;
    margin-right: auto;
    span {
      font-size: 12px;
      color: $color-2;
    }
    svg {
      margin-left: 3px;
    }
  }
}
.transport-proportion {
  background-color: #fff;
  margin-top: 20px;
  box-shadow: 0 3px 4px 0 rgba(98, 99, 118, 0.08);
}
.transport-proportion-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  & > img {
    width: 25px;
    height: 25px;
  }
  & > p {
    font-size: 16px;
    color: $color-1;
    margin-left: 5px;
    letter-spacing: 0.6px;
  }
  & > div {
    height: 16px;
    display: flex;
    align-items: flex-end;
    margin-left: 0;
    margin-right: auto;
    svg {
      margin-left: 3px;
    }
  }
}
.transport-proportion-doughnut {
  height: 131px;
}
.doughnut-wrap{
  background: #fff;
 .pieTit{
    padding-bottom: 20px;
    margin-left: 5%;
    font-size: 12px;
    color: #84849A;
  }
}
</style>
<style lang="scss" scoped>
/deep/ .help-wrap p{
  width: 316px;
  line-height: 1.2;
}
.pdBox{
  font-size: 10px;
  color: #fff;
  background:#d42727;
  padding: 1px;
  position: absolute;
  bottom: 57px;
  right: 68px;
}
</style>


