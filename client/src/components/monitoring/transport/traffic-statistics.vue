<!--
/**
* @name traffic-statistics
* @module c:\SpeedinessDocument\vuesys\src\components\monitoring\transport\traffic-statistics.vue
* @description 运量统计组件
* @author wind-lc
* @date 2019-05-13
* @param {Object} trafficData  运量统计数据量
* @param {Array} deliveryData   交付数据
* @example <TrafficStatistics :trafficData="trafficData" :deliveryData="deliveryData"></TrafficStatistics>
*/
-->
<template>
  <div class="traffic-statistics">
    <!-- 标题 -->
    <div class="traffic-statistics-title">
      <img src="../../../assets/monitoring/ic_tittle_amount@2x.png"
           alt="">
      <p>运量统计</p>
      <div >
        <span>(辆)</span>
        <Help :helpText="helpText1" style="top:-2px;color:#fff;z-index:10"></Help>
      </div>
      <GacButton type="contrast" @click.native="showTable" v-bind:message="showTab">对比</GacButton>
    </div>
    <!-- 标题 -->
    <!-- 数据量 -->
    <div class="traffic-quantity">
      <ul>
        <li>
          <p>{{trafficData.plan_num}}</p>
          <span>计划</span>
        </li>
        <li>
          <p>{{trafficData.un_send_num}}</p>
          <span>待发</span>
        </li>
        <li>
          <p>{{trafficData.send_num}}</p>
          <span>已发</span>
        </li>
        <li>
          <p>{{trafficData.online_num}}</p>
          <span>在途</span>
        </li>
      </ul>
      <ul>
        <li>
          <p>{{trafficData.overtime_unsend_num}}</p>
          <span>超时未发</span>
        </li>
        <li>
          <p>{{trafficData.overtime_unfinish_num}}</p>
          <span>超时未到</span>
        </li>
        <GacButton @click.native="toTath()" type="look"> 查看超时</GacButton>
      </ul>
    </div>
    <!-- 数据量 -->
    <!-- 交付环形图 -->
    <div class="doughnut-wrap">
      <p class="doughnut-title"
         v-show="doughnutTitle">交付及时率&nbsp;{{ratio}}%&nbsp;<span v-show="flicker">偏低</span></p>
      <p class="doughnut-ratio"
         :class="{'doughnut-ratio-flicker': flicker}"
         v-show="doughnutTitle" style="left:0;">
        {{ratio}}%
      </p>
      <div :id="doughnutId"
           class="traffic-statistics-doughnut"></div>
    </div>
    <!-- 交付环形图 -->
    <!--弹窗 运量统计对比 -->
    <TrafficQuantityTable v-show="showTab" v-on:showTab="childVal"></TrafficQuantityTable>
    <!-- 弹窗 运量统计对比 -->
  </div>
</template>

<script>
import echarts from 'echarts'
import Help from '../../../components/common/help'
import GacButton from '../../../components/common/gac-button'
import TrafficQuantityTable from '../../../components/monitoring/transport/traffic-quantity-table'
export default {
  name: 'traffic-statistics',
  components: {
    Help,
    GacButton,
    TrafficQuantityTable
  },
  props: {
    trafficData: {
      type: Object,
      required: true
    },
    deliveryData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      // 说明
      helpText1:'计划发运量：计划今日发运的商品车数量(无论是否已经发运);\n待发运量：计划今日发运，当前还未出库的商品车数量;\n已发运量：截止目前今日已发出的商品车数量(无论是否为计划今日发出);\n在途数量：目前在途运输中的商品车数量;\n交付数量：截止目前今日已交付的商品车数量;\n超时未发：超过计划发运时间还未发出的商品车数量;\n超时未到：超过计划到达时间还交付的商品车数量；\n交付及时率：交付及时率=今日按时交付商品车数量/今日已交付商品车总数。',
      // 对比
      showTab:false,
      // 环形图
      doughnut: null,
      doughnutId: 'doughnut' + Math.random().toString(36).substr(2) + Date.now(),
      data: {
        delivery: 0,
        timelyDelivery: 0
      },
      // 交付及时率
      ratio: '',
      // 偏低
      flicker: true,
      // 标题
      doughnutTitle: false,
      // 环形图颜色
      color: [],
      // 环形图配置
      option: null
    }
  },
  mounted () {
    this.dataProcessing()
    this.initDoughnut()
    this.lowWarning()
  },
  activated () {
    // 由于给echart添加了resize事件, 在组件激活时需要重新resize绘画一次, 否则出现空白bug
    if (this.doughnut) {
      this.doughnut.resize()
    }
  },
  methods: {
    //查看超时页面跳转
    toTath(){
         this.$router.push({path:'/monitoring-exception',query:{name:'超时未发,超时未到'}})
    },
    //对比
    showTable(){
      this.showTab =! this.showTab
    },
    childVal (data) {
      this.showTab = data
    },
    // 数据处理
    dataProcessing () {
      this.deliveryData.forEach(item => {
        if (item.name === '交付运量') {
          this.data.delivery = item.value
        }
        if (item.name === '及时交付运量') {
          this.data.timelyDelivery = item.value
        }
      })
      if(this.data.delivery == 0){
        this.ratio = 0
      }else{
        this.ratio = (Math.round(this.data.timelyDelivery / this.data.delivery * 10000) / 100.00)
      }
      this.lowWarning()
    },
    // 偏低警告
    lowWarning () {
      if (this.ratio < 20) {
        this.flicker = true
        this.color = ['#d92430', '#FFD1D7']
      } else {
        this.flicker = false
        this.color = ['#1FAF70', '#C6F0D9']
      }
    },
    // 初始化环形图
    initDoughnut () {
      this.option = {
        backgroundColor: '#fff',
        legend: {
          orient: 'vertical',
          x: '45%',
          y: 'center',
          icon: 'path://M0.5,0.5h9v9h-9V0.5z',
          data: ['交付运量', '及时交付运量'],
          // 图例富文本
          formatter: name => {
            let val
            this.deliveryData.forEach(item => {
              if (item.name === name) {
                val = item.value
              }
            })
            let arr = ['{a|' + name + '}', '{b|' + val + '辆}']
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
                lineHeight: 12
              }
            }
          }
        },
        series: [
          {
            type: 'pie',
            radius: ['50%', '58%'],
            center: ['20%', '50%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            clockwise: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              }
            },
            data: [
              {
                value: this.data.timelyDelivery,
                name: '及时交付运量',
                itemStyle: {
                  normal: {
                    color: this.color[0]
                  }
                }
              },
              {
                value: this.data.delivery - this.data.timelyDelivery,
                itemStyle: {
                  normal: {
                    color: '#fff'
                  }
                }

              }
            ]
          },
          {
            type: 'pie',
            radius: ['67%', '75%'],
            center: ['20%', '50%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            clockwise: false,
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
            data: [
              {
                value: this.data.delivery,
                name: '交付运量',
                itemStyle: {
                  normal: {
                    color: this.color[1]
                  }
                }
              }
            ]
          }
        ]
      }
      // 实例化环形图
      this.doughnut = echarts.init(document.getElementById(this.doughnutId))
      // 等待加载loading
      this.doughnut.showLoading({
        text: 'loading',
        color: '#1FAF70',
        textColor: '#c9c9c9',
        maskColor: '#fff',
        zlevel: 0
      })
      setTimeout(() => {
        this.doughnutTitle = true
        this.doughnut.setOption(this.option)
        this.doughnut.hideLoading()
      }, 2000)
      // 响应屏幕修改
      window.addEventListener('resize', () => {
        this.doughnut.resize()
      })
    }
  },
  watch:{
    deliveryData:{
      handler(newVal,oldVal){
        if(newVal){
           this.dataProcessing()
           this.initDoughnut()
           this.lowWarning()
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
.traffic-statistics {
  width: 298px;
  background-color: #fff;
  box-shadow: 0 3px 4px 0 rgba(98, 99, 118, 0.08);
}
 .doughnut-ratio-flicker{width: 60px;
    text-align: center;
    margin-left: 35px;}
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
  >p {
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
.traffic-quantity {
  ul {
    border-bottom: 1px dashed #e0e0eb;
    display: flex;
    padding: 11px 16px;
    align-items: center;
    li {
      width: 25%;
      text-align: center;
      p {
        font-size: 18px;
        color: #1e1c28;
        letter-spacing: 0.67px;
        line-height: 24px;
        font-weight: 700;
      }
      span {
        font-size: 12px;
        color: #84849a;
        line-height: 24px;
      }
    }
  }
  .gac-button {
    margin-right: 16px;
    margin-left: auto;
  }
}
.traffic-statistics-doughnut {
  height: 112px;
  margin-top: 20px;
}
.doughnut-wrap {
  position: relative;
}
.doughnut-title {
  position: absolute;
  top: 2px;
  right: 20px;
  
  font-size: 15px;
  color: #333;
  letter-spacing: 0.6px;
  line-height: 16px;
  display: flex;
  align-items: center;
  z-index: 9;
  span {
    display: block;
    background-color: $color-3;
    color: #fff;
    padding: 0 4px;
    font-size: 12px;
    margin-left: 4px;
  }
}
.doughnut-ratio {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  color: #47c27d;
  font-size: 14px;
  text-align: center;
  z-index: 9;
}
.doughnut-ratio-flicker {
  color: $color-3;
}
</style>
<style scoped lang="scss">
/deep/ .help-wrap{
  p{
    width: 365px!important;
     line-height: 1.2;
  }
}
</style>

