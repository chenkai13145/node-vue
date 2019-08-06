<template>
  <div class="traffic-statistics" style="height: 18%;">
    <!-- 标题 -->
    <div class="traffic-statistics-title">
      <img src="../../../assets/monitoring/ic_Exception.png"
           style="height:auto;">
      <p>设备异常</p>
      <div style="align-items: center;color: #84849a;font-size:16px;margin-left:2px">
        {{exceptionNum}}
         <!-- <Help :helpText="helpText2" style="top:-2px;color:#fff;z-index:10"></Help> -->
      </div>
    </div>
    <!-- 标题 -->
    <!-- 数据量 -->
    <div class="traffic-quantity">
      <ul  style="padding: 11px 16px;justify-content: space-between;flex-flow:wrap;border-bottom:0;margin-bottom:10px;">
        <li style="width:50%;text-align: left;">
          <p>{{exceptionData.OffLine}}</p>
          <span>离线（次）</span>
        </li>
        <li style="width:50%">
          <p>{{exceptionData.Weakignal}}</p>
          <span>信号弱（次）</span>
        </li>
      </ul>
    </div>
    <!-- 数据量 -->
  </div>
</template>

<script>
import Help from '../../../components/common/help'
export default {
  name: 'equipment-exception',
  components: {
    Help
  },
  props: {
    exceptionData: {
      type: Object,
      required: true
    },
    exceptionNum: {
        type:Number
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    
  },
  methods: {
    
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
.traffic-quantity {
  ul {
    border-bottom: 1px dashed #e0e0eb;
    display: flex;
    padding: 11px 16px;
    align-items: center;
    li {
      width: 25%;
      text-align: left;
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
  font-size: 14px;
  color: #39394d;
  letter-spacing: 0.6px;
  line-height: 16px;
  display: flex;
  align-items: center;
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
  left: 12%;
  top: 50%;
  transform: translateY(-50%);
  color: #1faf70;
  font-size: 14px;
  text-align: center;
}
.doughnut-ratio-flicker {
  color: $color-3;
}
</style>