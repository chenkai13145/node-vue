<template>
    <div class="statisticsList">
        <div :id="doughnutId3" class="transport-proportion-doughnut"></div>
        <p class="pieTit" style="margin-left: 2%;display:flex;">自有板车利用情况<Help :helpText="helpText1" style="color:#fff;z-index:10"></Help></p>
    </div>
</template>

<script>
import echarts from 'echarts'
import Help from '@/components/common/help'
import GacButton from '@/components/common/gac-button'
export default {
  name: '',
  components: {
    Help,
    GacButton
  },
  props: {
    transportData3: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
    helpText1:'未使用：自有板车中，当前无任务的板车数量；\n使用中：自有板车中，当前任务中的板车数量。',
    // 环形图
     doughnut: null,
     doughnutId3: 'doughnut' + Math.random().toString(36).substr(2) + Date.now()
    }
  },
    activated () {
    // 由于给echart添加了resize事件, 在组件激活时需要重新resize绘画一次, 否则出现空白bug
    if (this.doughnut) {
      this.doughnut.resize()
    }
  },
  mounted () {
      this.initDoughnut();
     
  },
  methods: {
    // 初始化环形图  陆运运力
    initDoughnut () {
      let option = {
        backgroundColor: '#fff',
        color: ['#5666ea','#dbdfff'],
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
            this.transportData3.forEach(item => {
              arr.push(item.name)
            })
            return arr
          })(),
          // 图例富文本
          formatter: name => {
            let val
            let total = 0
            let percentage
            this.transportData3.forEach(item => {
              total += item.value
              if (item.name === name) {
                val = item.value
              }
            })
            percentage = (total ? (val / total * 100).toFixed(2) : 0) + '%'
            // // percentage = '15.5%'
            // let percentageNum = parseInt(percentage)
            // if(percentageNum < 10){
            //   let arr = ['{a|' + name + '}', '{b|' + percentage + '}','{d|偏低}','{c|' + val + '}辆']
            //   return arr.join('')
            // }else{
            //   let arr = ['{a|' + name + '}', '{b|' + percentage + '}','{c|' + val + '}辆']
            //   return arr.join('')
            // }
            let arr = ['{a|' + name + '}', '{b|' + percentage + '}', '{c|' + val + '}辆']
            return arr.join('')
          },
          textStyle: {
            rich: {
              a: {
                color: '#84849A',
                fontSize: 12,
                lineHeight: 12,
                width: 50
              },
              b: {
                padding:[0,5],
                fontSize: 12,
                color: '#39394D',
                lineHeight: 12,
                // width: 50
              },
              c: {
                // padding:[0,0,0,3],
                fontSize: 12,
                color: '#39394D',
                lineHeight: 12
              },
              d:{
                padding:[2,0],
                fontSize: 12,
                color: '#fff',
                backgroundColor:'#d42727',
                lineHeight: 12
              }
            }
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius : '70%',
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
            data: this.transportData3
          }
        ]
      }
      // 实例化环形图
      this.doughnut = echarts.init(document.getElementById(this.doughnutId3))
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
    transportData3:{
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
.statisticsList{
  background: #fff;
 .pieTit{
    padding-bottom: 20px;
    font-size: 14px;
    color: #5566EA;
    margin-left: 10%;
  }
}
</style>
<style lang="scss" scoped>
/deep/ .help-wrap p{
  width: 316px;
  line-height: 1.2;
}
</style>
