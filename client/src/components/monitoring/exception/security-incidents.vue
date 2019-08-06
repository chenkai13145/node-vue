<template>
  <div class="transport-proportion" style="width:298px;height: 50%;">
    <!-- 标题 -->
    <div class="transport-proportion-title">
      <img src="../../../assets/monitoring/ic_Security.png"
           alt="">
      <p>安全事件</p>
      <div style="align-items: center;color: #84849a;font-size:16px;margin:0 auto 0 2px">
          {{SecurityIncidentsNum}}
          <Help :helpText="helpText2"  style="top:-2px;color:#fff;z-index:10"></Help>
      </div>
      <span class="percentBtn" @click="percentBtn">
           <img src="../../../assets/monitoring/ic_percent.png" v-show="btnShow">
           <img src="../../../assets/monitoring/ic_menu.png" v-show="!btnShow">
      </span>
    </div>
    <!-- 标题 -->
    <!-- 数据量 -->
    <div class="incidents-wrap" v-show="btnShow">
        <!-- 疲劳驾驶 -->
        <div class="traffic-quantity">
          <p class="SecurityIncidentsTitle">疲劳驾驶</p>
          <ul style="padding: 11px 16px;justify-content: space-between;flex-flow:wrap;border-bottom:0;">
            <li v-for="(item, index) in FatigueDrivingData" :key="index" style="width:50%;text-align: left;margin-bottom:10px;">
                <p>{{item.value}}</p>
                <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
    
        <!-- 路况报警 -->
        <div class="traffic-quantity">
          <p class="SecurityIncidentsTitle">路况报警</p>
          <ul style="padding: 11px 16px;justify-content: space-between;flex-flow:wrap;border-bottom:0;">
            <li v-for="(item, index) in RoadAlarmData" :key="index" style="width:50%;text-align: left;margin-bottom:10px;">
                <p>{{item.value}}</p>
                <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
    
        <!-- 不良习惯 -->
        <div class="traffic-quantity">
          <p class="SecurityIncidentsTitle">不良习惯</p>
          <ul style="padding: 11px 16px;justify-content: space-between;flex-flow:wrap;border-bottom:0;">
            <li v-for="(item, index) in BadHabitsData" :key="index" style="width:50%;text-align: left;margin-bottom:10px;">
                <p>{{item.value}}</p>
                <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
    
        <!-- 违规 -->
        <div class="traffic-quantity">
          <p class="SecurityIncidentsTitle">违规</p>
          <ul style="padding: 11px 16px;justify-content: space-between;flex-flow:wrap;border-bottom:0;">
            <li v-for="(item, index) in ViolationData" :key="index" style="width:50%;text-align: left;margin-bottom:10px;">
                <p>{{item.value}}</p>
                <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
    </div>
    <!-- 数据量 -->
    <div class="incidents-wrap precent-wrap"  v-show="!btnShow">
        <div :id="doughnutId" class="transport-proportion-doughnut" style="width:266px;height:30vh;">
        </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import Help from '../../../components/common/help'
export default {
  name: 'security-incidents',
  components: {
    Help
  },
  props: {
    //安全事件
    FatigueDrivingData: {
      type: Array,
      required: true
    },
     RoadAlarmData: {
      type: Array,
      required: true
    },
     BadHabitsData: {
      type: Array,
      required: true
    },
     ViolationData: {
      type: Array,
      required: true
    },
    SecurityIncidentsNum: {
        type:Number
    },
    // 安全事件百分比
    securityPercentData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
        // 说明
        helpText2: '疲劳驾驶：疲劳驾驶相关事件总和；\n路况报警：路况报警相关事件总和；\n不良习惯：不良习惯相关事件总和；\n违规驾驶：违规驾驶相关事件总和。',
        // 安全事件百分比
        btnShow: true,
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
      percentBtn(){
          this.btnShow =! this.btnShow
      },
    // 初始化环形图
    initDoughnut () {
      let option = {
        backgroundColor: '#fff',
        color: ['#7d8bff', '#58b1e6', '#ffcc74' , '#da5666'],
        legend: {
          orient: 'vertical',
          x: '5%',
          y: 'bottom',
          itemWidth: 9,
          itemHeight: 9,
          selectedMode:false,// 取消图例上的点击事件
          icon: 'path://M0.5,0.5h9v9h-9V0.5z',
          // 图例数据
          data: (() => {
            let arr = []
            this.securityPercentData.forEach(item => {
              arr.push(item.name)
            })
            return arr
          })(),
          // 图例富文本
          formatter: name => {
            let val
            let total = 0
            let percentage
            this.securityPercentData.forEach(item => {
              total += item.value
              if (item.name === name) {
                val = item.value
              }
            })
            percentage =(val ===0|| total===0)?0+'%':(val / total * 100).toFixed(2) + '%'
            let arr = ['{a|' + name + '}', '{b|' + percentage + '}', '{c|' + val + '}次']
            return arr.join('')
          },
          textStyle: {
            rich: {
              a: {
                color: '#84849A',
                fontSize: 12,
                lineHeight: 12,
                width: 80
              },
              b: {
                fontSize: 12,
                color: '#39394D',
                lineHeight: 12,
                width: 80
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
            radius: ['30%', '50%'],
            center: ['50%', '30%'],
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
            data: this.securityPercentData
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
    securityPercentData:{
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
.SecurityIncidentsTitle{
    margin-left: 16px;
    font-size:16px;
    color:#1e1c28;
    position: relative;
    padding: 0 0 5px 5px;
}
.SecurityIncidentsTitle::after{
      content: '';
      display: block;
      width: 2px;
      height: 12px;
      background: #e02633;
      position: absolute;
      top: 0;
      bottom: 5px;
      left: 0px;
      margin: auto;
    }
    .incidents-wrap{
        height: 83%;
        max-height: 83%;
        overflow-y: auto;
    }
    .percentBtn{
        cursor: pointer;
        img{
            width: 25px;
        }
    }
    .precent-wrap{
        padding: 0px 16px;
    }
</style>
<style lang="scss" scoped>
/deep/ .help-wrap p{
  width: 245px;
  line-height: 1.2;
}
</style>