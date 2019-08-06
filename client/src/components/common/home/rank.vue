<!--
/**
* @name rank
* @module c:\SpeedinessDocument\g7-vue\前端\vuesys\src\components\common\home\rank.vue
* @description 首页排行榜组件
* @author wind-lc
* @date 2019-06-15
* @param {Object} rankData  排行榜数据
* @example <Rank :rankData="rankData"></Rank>
*/
-->
<template>
  <div class="rank-wrapper">
    <!-- 头部 -->
    <div class="rank-top">
      <b>{{rankData.name}}</b>
      <Help :helpText="rankData.helptext"></Help>
      <!-- 日期类型 -->
      <ul class="date-type">
        <li v-for="(item,index) in rankData.dateTypeList"
            :key="index"
            @click="rankData.dateType = item"
            :class="{'active':rankData.dateType === item}">{{item}}</li>
      </ul>
      <!-- 日期类型 -->
    </div>
    <!-- 头部 -->
    <!-- 排行榜 -->
    <ul class="rank-list">
      <li v-if="rankData.type === 'ratio'"
          v-for="(item,index) in rank"
          :key="index">
        <span :class="'top-'+ (index + 1)">{{index + 1}}</span>
        <div class="rank-wrap">
          <p>{{item.name}}</p>
          <div class="rank-content">
            <div :style="{'background-color':rankData.color,'width':item.value + '%'}"></div>
          </div>
        </div>
        <b>{{item.value}}%</b>
      </li>
      <li v-if="rankData.type === 'value'"
          v-for="(item,index) in rank"
          :key="index">
        <span :class="'top-'+ (index + 1)">{{index + 1}}</span>
        <div class="rank-wrap">
          <p>{{item.name}}</p>
          <div class="rank-content">
            <div :style="{'background-color':rankData.color,'width':item.width + '%'}"></div>
          </div>
        </div>
        <b :style="{'width':valueWidth +'px'}">{{item.value}}</b>
      </li>
    </ul>
    <!-- 排行榜 -->
  </div>
</template>

<script>
import Help from '@/components/common/help'
import {
  queryDelayToptenMax,
  queryDelayToptenMin,
  queryCarriageCapacityMax,
  queryCarriageCapacityMin,
  queryLineDistance,
  queryLineDistanceMin
} from '@//utils/api/home/home'
export default {
  name: 'rank',
  components: {
    Help
  },
  props: {
    rankData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      rank: [],
      valueWidth: 40
    }
  },
  mounted () {
    this.connectorEnumerate(this.rankData.name)
  },
  methods: {
    // 计算百分比
    computedRatio () {
      let total = Number(this.rank[0].value)
      this.rank.forEach(item => {
        let ratio = (Number(item.value) * 100 / total).toFixed(2)
        item.width = ratio > 100 ? 100 : ratio
      })
    },
    // 日期类型code枚举
    dateTypeCodeEnumerate () {
      let codeList = [
        {
          name: '按日',
          code: 1
        },
        {
          name: '按周',
          code: 2
        },
        {
          name: '按月',
          code: 3
        },
        {
          name: '昨日',
          code: 1
        },
        {
          name: '上周',
          code: 2
        },
        {
          name: '上月',
          code: 3
        }
      ]
      codeList.forEach(item => {
        if (item.name === this.rankData.dateType) {
          this.dateTypeCode = item.code
        }
      })
    },
    // 数据对应接口枚举,
    connectorEnumerate (name) {
      let connectorList = [
        {
          name: '交付及时率最优TOP10',
          connector: queryDelayToptenMax,
          author: 'mhy',
          method: 1
        },
        {
          name: '交付及时率最差TOP10',
          connector: queryDelayToptenMin,
          author: 'mhy',
          method: 1
        },
        {
          name: '承运量最多TOP10',
          connector: queryCarriageCapacityMax,
          author: 'mhy',
          method: 2
        },
        {
          name: '承运量最少TOP10',
          connector: queryCarriageCapacityMin,
          author: 'mhy',
          method: 2
        },
        {
          name: '运输距离最长TOP10',
          connector: queryLineDistance,
          author: 'mhy',
          method: 3
        },
        {
          name: '运输距离最短TOP10',
          connector: queryLineDistanceMin,
          author: 'mhy',
          method: 3
        }
      ]
      let obj = {}
      connectorList.forEach(item => {
        if (item.name === name) {
          obj = item
        }
      })
      // 日期类型转换
      this.dateTypeCodeEnumerate()
      // 牟虹宇
      if (obj.author === 'mhy') {
        switch (obj.method) {
          case 1:
            this.handleMHY1Connector(obj.connector)
            break
          case 2:
            this.handleMHY2Connector(obj.connector)
            break
          case 3:
            this.handleMHY3Connector(obj.connector)
            break
        }
      }
      // 余锡林
      if (obj.author === 'yxl') {

      }
    },
    // 牟虹宇处理数据方式1
    handleMHY1Connector (fun) {
      fun({
        startTime: this.rankData.startTime,
        endTime: this.rankData.endTime,
        type: this.dateTypeCode
      }).then(res => {
        if (res.msg === 'success') {
          res.data.forEach(item => {
            this.rank.push({
              name: item.code_name,
              value: item.promptness > 100 ? 100 : item.promptness
            })
          })
        }
      }).catch(error => {
        console.log(error)
      })
    },
    // 牟虹宇处理数据方式2
    handleMHY2Connector (fun) {
      fun({
        startTime: this.rankData.startTime,
        endTime: this.rankData.endTime,
        type: this.dateTypeCode
      }).then(res => {
        if (res.msg === 'success') {
          res.data.forEach(item => {
            this.rank.push({
              name: item.code_name,
              value: item.car_num > 100 ? 100 : item.car_num
            })
          })
        }
      }).catch(error => {
        console.log(error)
      })
    },
    // 牟虹宇处理数据方式3
    handleMHY3Connector (fun) {
      fun({
        startTime: this.rankData.startTime,
        endTime: this.rankData.endTime,
        type: this.dateTypeCode
      }).then(res => {
        if (res.msg === 'success') {
          let value = []
          res.data.forEach(item => {
            this.rank.push({
              name: item.code_name,
              value: item.distance
            })
            value.push(item.distance)
          })
          this.computedRatio()
          let len = Math.max(...value).toString().length
          this.valueWidth = len * 10
        }
      }).catch(error => {
        console.log(error)
      })
    },
    // 余锡林处理数据
    handleYXLConnector (fun) {

    }
  }

}
</script>

<style lang="scss">
.rank-wrapper {
  padding: 15px;
  background-color: #ffffff;
}
.rank-top {
  display: flex;
  align-items: center;
  height: 32px;
  b {
    margin-right: 12px;
  }
}
.date-type {
  display: flex;
  margin-left: auto;
  margin-right: 0;
  li {
    font-size: 14px;
    color: #39394d;
    position: relative;
    height: 26px;
    margin: 0 25px;
    cursor: pointer;
    user-select: none;
    &[class~='active'] {
      color: #d70110;
      &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 20px;
        height: 4px;
        background-color: #d70110;
      }
    }
  }
}
.rank-list {
  margin-top: 40px;
  li {
    display: flex;
    align-items: center;
    & > span {
      width: 24px;
      height: 24px;
      color: #babace;
      text-align: center;
      line-height: 24px;
      border-radius: 50%;
      &[class~='top-1'] {
        background-color: rgba(57, 57, 77, 1);
        color: #fff;
      }
      &[class~='top-2'] {
        background-color: rgba(57, 57, 77, 0.8);
        color: #fff;
      }
      &[class~='top-3'] {
        background-color: rgba(57, 57, 77, 0.5);
        color: #fff;
      }
    }
    .rank-wrap {
      flex: 1;
      height: 55px;
      margin-left: 15px;
      margin-right: 33px;
      p {
        font-size: 16px;
        color: #39394d;
        margin-bottom: 10px;
      }
      .rank-content {
        width: 100%;
        height: 6px;
        background-color: #f2f2f4;
        position: relative;
        div {
          position: absolute;
          top: 0;
          left: 0;
          height: 6px;
        }
      }
    }
    b {
      font-size: 18px;
      color: #39394d;
      margin-left: auto;
      text-align: right;
    }
  }
}
</style>
