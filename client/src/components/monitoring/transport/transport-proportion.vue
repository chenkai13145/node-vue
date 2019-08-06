<!--
/**
* @name transport-proportion
* @module c:\SpeedinessDocument\vuesys\src\components\monitoring\transport\transport-proportion.vue
* @description 公铁水占比
* @author wind-lc
* @date 2019-05-14
* @param {Array} transportData  公铁水数据
* @example <TransportProportion :transportData="transportData"></TransportProportion>
*/
-->
<template>
  <div class="transport-proportion">
    <!-- 标题 -->
    <div class="transport-proportion-title">
      <img src="../../../assets/monitoring/ic_tittle_percentage@2x.png"
           alt="">
      <p>公铁水占比</p>
      <div>
        <Help :helpText="helpText2"  style="top:-2px;color:#fff;z-index:10"></Help>
      </div>
      <GacButton type="contrast"  @click.native="showTable" v-bind:message="showTab">对比</GacButton>
    </div>
    <!-- 标题 -->
    <!-- 公铁水环形图 -->
    <div :id="doughnutId"
         class="transport-proportion-doughnut">
    </div>
    <!-- 公铁水环形图 -->
    <!-- 公铁水对比弹窗 -->
    <TransportProportionTable v-show="showTab" v-on:showTab="childVal"></TransportProportionTable>
    <!-- 公铁水对比弹窗 -->
  </div>
</template>

<script>
import echarts from 'echarts'
import Help from '../../../components/common/help'
import GacButton from '../../../components/common/gac-button'
import TransportProportionTable from '../../../components/monitoring/transport/transport-proportion-table'
export default {
  name: 'transport-proportion',
  components: {
    Help,
    GacButton,
    TransportProportionTable
  },
  props: {
    transportData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      // 说明
      helpText2: '陆运：使用陆运方式运输的商品车；\n水运：使用水运方式运输的商品车；\n铁运：使用铁运方式运输的商品车。',
      //对比
      showTab:false,
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
    // 对比
    showTable () {
      this.showTab =! this.showTab
    },
    childVal (data) {
      this.showTab = data
    },
    // 初始化环形图
    initDoughnut () {
      let option = {
        backgroundColor: '#fff',
        color: ['#FFCC74', '#DA5666', '#5566EA'],
        legend: {
          orient: 'vertical',
          x: '40%',
          y: 'center',
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
            percentage = val == 0 ? '0%' : (val / total * 100).toFixed(2) + '%'
            let arr = ['{a|' + name + '}', '{b|' + percentage + '}', '{c|' + val + '}辆']
            return arr.join('')
          },
          textStyle: {
            rich: {
              a: {
                color: '#84849A',
                fontSize: 12,
                lineHeight: 12,
                width: 35
              },
              b: {
                fontSize: 12,
                color: '#39394D',
                lineHeight: 12,
                width: 50
              },
              c: {
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
    }
  },
  watch:{
    transportData:{
      handler(newVal,oldVal){
        if(newVal){
          this.initDoughnut()
        }
      }
    }
  }
}
</script>

<style lang="scss">
$color-1: #39394d;
$color-2: #84849a;
$color-3: #d92430;
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
</style>
<style scoped lang="scss">
/deep/ .help-wrap{
  p{
    width: 255px!important;
     line-height: 1.2;
  }
}
</style>
