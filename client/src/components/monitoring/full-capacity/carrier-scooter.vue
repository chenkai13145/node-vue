
<template>
    <div class="statisticsList">
        <div :id="doughnutId1" class="transport-proportion-doughnut"></div>
        <p class="pieTit" style="display:flex;">承运板车<Help :helpText="helpText2" style="color:#fff;z-index:10"></Help></p>
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
    transportData2: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
    helpText2:'6位半挂车：最大6位板位的半挂板车;\n7位半挂车：最大7位板位的半挂板车;\n8位中置轴车：最大8位板位的中置轴板车。',
    // 环形图
     doughnut: null,
     doughnutId1: 'doughnut' + Math.random().toString(36).substr(2) + Date.now()
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
        color: ['#8960ff', '#c8197a', '#ff74d1'],
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
            this.transportData2.forEach(item => {
              arr.push(item.name)
            })
            return arr
          })(),
          // 图例富文本
          formatter: name => {
            let val
            let total = 0
            let percentage
            this.transportData2.forEach(item => {
              total += item.value
              if (item.name === name) {
                val = item.value
              }
            })
            percentage = (total ? (val / total * 100).toFixed(2) : 0)  + '%'
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
                width: 68
              },
              b: {
                padding:[0,5],
                fontSize: 12,
                color: '#39394D',
                lineHeight: 12,
                // width: 44
              },
              c: {
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
            data: this.transportData2
          }
        ]
      }
      // 实例化环形图
      this.doughnut = echarts.init(document.getElementById(this.doughnutId1))
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
  }
}
</script>

<style lang="scss">
.pieTit{
  margin-left: 5%;
}
</style>
<style lang="scss" scoped>
/deep/ .help-wrap p{
  width:280px;
  line-height: 1.2;
}
</style>
