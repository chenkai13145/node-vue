<template>
  <div class="transport-proportion" style="width:298px;height: 28%;">
    <!-- 标题 -->
    <div class="transport-proportion-title">
      <img src="../../../assets/monitoring/ic_Abnormal.png"
           alt="">
      <p>异常事件</p>
      <div style="align-items: center;color: #84849a;font-size:16px;margin-left:2px">
          {{eventsNum}}
          <Help :helpText="helpText2" style="top:-2px;color:#fff;z-index:10"></Help>
      </div>
    </div>
    <!-- 标题 -->
    <!-- 数据量 -->
    <div class="traffic-quantity">
      <ul style="padding: 11px 16px;justify-content: space-between;flex-flow:wrap;border-bottom:0;">
        <li v-for="(item, index) in abnormalEventsData" :key="index" style="width:50%;text-align: left;margin-bottom:10px;">
            <p>{{item.value}}</p>
            <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <!-- 数据量 -->
  </div>
</template>

<script>
import Help from '../../../components/common/help'
export default {
  name: 'abnormal-events',
  components: {
    Help
  },
  props: {
    abnormalEventsData: {
      type: Array,
      required: true
    },
    eventsNum: {
        type:Number
    }
  },
  data () {
    return {
      helpText2:'超时未发：当前未发运的车辆中已经超过计划发运时间的车辆总数;\n超时未到：当前未送达的车辆中已经超过计划送达时间的车辆总数;\n提货晚点：当前未按时到达装车场站的车辆数;\n线路偏移次数：车辆未按照标准线路行驶，偏移超过1KM的次数。',
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
<style lang="scss" scoped>
/deep/ .help-wrap p{
  width: 420px;
  line-height: 1.2;
}
</style>
