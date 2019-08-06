<!--
/**
* @name line-statistics
* @module c:\SpeedinessDocument\vuesys\src\components\monitoring\transport\line-statistics.vue
* @description 线路统计
* @author wind-lc
* @date 2019-05-15
* @param {Object} lineTotalData  线路统计数据
* @example <LineStatistics :lineTotalData="lineTotalData"></LineStatistics>
*/
-->
<template>
  <div class="line-statistics">
    <!-- 标题 -->
    <div class="line-statistics-title">
      <img src="../../../assets/monitoring/ic_tittle_route@2x.png"
           alt="">
      <p>线路统计</p>
      <div>
        <Help :helpText="helpText3"  style="top:-2px;color:#fff;z-index:10"></Help>
      </div>
    </div>
    <!-- 标题 -->
    <!-- 数据量 -->
    <div class="line-statistics-quantity">
      <ul>
        <li>
          <p>{{lineTotalData.total}}</p>
          <span>今日发运线路(次)</span>
        </li>
        <li>
          <p>{{lineTotalData.soleNum}}</p>
          <span>标准线路数(条)</span>
        </li>
      </ul>
      <ul>
        <li>
          <p>{{10}}</p>
          <span>线路偏移(次)</span>
        </li>
        <GacButton type="look" @click.native="toTath">查看偏移</GacButton>
      </ul>
    </div>
    <!-- 数据量 -->
  </div>
</template>

<script>
import Help from '../../../components/common/help'
import GacButton from '../../../components/common/gac-button'
export default {
  name: 'line-statistics',
  components: {
    Help,
    GacButton
  },
  props: {
    lineTotalData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      helpText3: '标准线路数：投资企业已维护的标准线路数量；\n发运线路数：截止目前今日已发生运输的线路数量总和（城市 to 城市 为一条线路）；\n线路偏移数：要求按照标准线路运输的运输任务中，运输车辆偏离标准线路超过1km 的次数。'
    }
  },
  methods:{
     //查看超时页面跳转
    toTath(){
         this.$router.push({path:'/monitoring-exception',query:{name:'线路偏移'}})
    },
  }
}
</script>

<style lang="scss">
$color-1: #39394d;
$color-2: #84849a;
$color-3: #d92430;
.line-statistics {
  background-color: #fff;
  margin-top: 20px;
  box-shadow: 0 3px 4px 0 rgba(98, 99, 118, 0.08);
}
.line-statistics-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  & > {
    img {
      width: 25px;
      height: 25px;
    }
    p {
      font-size: 16px;
      color: $color-1;
      margin-left: 5px;
      letter-spacing: 0.6px;
    }
    div {
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
}
.line-statistics-quantity {
  ul {
    border-bottom: 1px dashed #e0e0eb;
    display: flex;
    padding: 11px 16px;
    align-items: center;
    li {
      width: 50%;
      text-align: left;
      p {
        font-size: 18px;
        color: #1e1c28;
        letter-spacing: 0.67px;
        line-height: 24px;
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
</style>
<style scoped lang="scss">
/deep/ .help-wrap{
  p{
    width: 335px!important;
    line-height: 1.2;
  }
}
</style>
