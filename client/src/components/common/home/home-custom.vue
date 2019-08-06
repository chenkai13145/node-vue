<!--
/**
* @name home-custom
* @module c:\SpeedinessDocument\g7-vue\前端\vuesys\src\components\common\home\home-custom.vue
* @description 首页自定义筛选图表
* @author wind-lc
* @date 2019-06-09
* @return {Event} chartList   返回图表列表
* @example <HomeCustom @chartList="getChartList"></HomeCustom>
*/
-->
<template>
  <div class="home-custom-button"
       ref="wrapper">
    <!-- 按钮 -->
    <div class="home-custom"
         @click="list = !list">
      <icon-svg name="all"></icon-svg>
      <span>自定义</span>
    </div>
    <!-- 按钮 -->
    <!-- 列表 -->
    <transition name="fade">
      <div class="home-custom-wrapper"
           ref="wrapper"
           v-show="list">
        <div class="home-custom-type"
             v-for="(item,index) in chartType"
             :key="index">
          <p>{{item.name}}</p>
          <ul class="home-custom-type-list">
            <li v-for="(el,key) in item.list"
                :key="key"
                @click="checked(el)">
              <icon-svg :name="el.checkbox ? 'checkbox-on' : 'checkbox-off'"></icon-svg>
              <span>{{el.name}}</span>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <!-- 列表 -->
  </div>
</template>

<script>
export default {
  name: 'home-custom',
  components: {

  },
  data () {
    return {
      // 列表显示隐藏
      list: false,
      // 图表类型
      chartType: [
        {
          name: '运输统计',
          list: [
            {
              name: '运单数',
              checkbox: false
            },
            {
              name: '商品车运量',
              checkbox: false
            },
            {
              name: '公铁水运量占比',
              checkbox: false
            },
            {
              name: '外协陆运运量占比',
              checkbox: false
            }
          ]
        },
        {
          name: '仓储统计',
          list: [
            {
              name: '库存量',
              checkbox: false
            },
            {
              name: '入库量',
              checkbox: false
            },
            {
              name: '出库量',
              checkbox: false
            },
            {
              name: '长库龄商品车数量',
              checkbox: false
            }
          ]
        },
        {
          name: '作业指标分析',
          list: [
            {
              name: '出库及时率',
              checkbox: false
            },
            {
              name: '商品车滞留',
              checkbox: false
            },
            {
              name: '交付及时率',
              checkbox: false
            }
          ]
        },
        {
          name: '线路分析',
          list: [
            {
              name: '线路数',
              checkbox: false
            },
            {
              name: '重复线路',
              checkbox: false
            },
            {
              name: '交付及时率排行',
              checkbox: false
            },
            {
              name: '承运量排行',
              checkbox: false
            },
            {
              name: '运输距离排行',
              checkbox: false
            }
          ]
        },
        {
          name: '运输安全分析',
          list: [
            {
              name: '风险行为统计',
              checkbox: false
            },
            {
              name: '高风险次数与有效干预占比',
              checkbox: false
            },
            {
              name: '危险时段分布',
              checkbox: false
            },
            {
              name: '高风险行为排行',
              checkbox: false
            }
          ]
        },
        {
          name: '资源利用',
          list: [
            {
              name: '投资企业板车使用',
              checkbox: false
            },
            {
              name: '投资企业满板率',
              checkbox: false
            },
            {
              name: '自有车辆利用率',
              checkbox: false
            },
            {
              name: '库位利用率',
              checkbox: false
            }
          ]
        },
        {
          name: '运输数字化',
          list: [
            {
              name: '覆盖趋势指标',
              checkbox: false
            }
          ]
        }
      ],
      // 当前选中项
      checkedList: ['运单数', '公铁水运量占比']
    }
  },
  mounted () {
    this.defaultChecked()
    this.clickoutside()
  },
  methods: {
    // 返回图表列表
    returnChartList () {
      this.$emit('chartList', this.checkedList)
    },
    // 空白部分点击隐藏
    clickoutside () {
      document.addEventListener('click', e => {
        if (!this.$refs.wrapper.contains(e.target)) {
          this.list = false
        }
      })
    },
    // 默认显示图表
    defaultChecked () {
      this.chartType.forEach(item => {
        item.list.forEach(el => {
          this.checkedList.forEach(i => {
            if (i === el.name) {
              el.checkbox = true
            }
          })
        })
      })
      this.returnChartList()
    },
    // 选择显示的图表
    checked (value) {
      value.checkbox = !value.checkbox
      let arr = this.chartType.map(item => {
        return item.list.map(el => {
          if (el.checkbox === true) {
            return el.name
          }
        })
      }).flat().filter(item => item)
      if (arr.length < 2) {
        value.checkbox = !value.checkbox
        arr.push(value.name)
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '<img class="gacg-icon" src="src/icons/svg/icon-alert-hint.svg">至少保留展示2项'
        })
        return false
      }
      if (arr.length > 6) {
        value.checkbox = !value.checkbox
        arr.splice(arr.indexOf(value.name), 1)
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '<img class="gacg-icon" src="src/icons/svg/icon-alert-hint.svg">最多只支持展示6项'
        })
        return false
      }
      this.checkedList = [].concat(arr)
      this.returnChartList()
    }
  }
}
</script>

<style lang="scss">
.home-custom-button {
  width: 88px;
  height: 44px;
  position: relative;
}
.home-custom {
  width: 88px;
  height: 44px;
  background-color: #f2f2f4;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  user-select: none;
  & > .icon-svg {
    font-size: 20px;
  }
  & > span {
    font-size: 14px;
    color: #39394d;
  }
}
.home-custom-wrapper {
  position: absolute;
  top: 64px;
  right: 0;
  width: 588px;
  background-color: #fff;
  box-shadow: 0 0 10px 2px rgba(132, 132, 154, 0.21);
  padding: 10px 16px;
  z-index: 1;
  &::before {
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    background-color: #fff;
    position: absolute;
    top: -8px;
    right: 34px;
    transform: rotate(45deg);
    box-shadow: 0 0 10px 2px rgba(132, 132, 154, 0.21);
  }
  &::after {
    content: '';
    display: block;
    width: 34px;
    height: 14px;
    background-color: #fff;
    position: absolute;
    top: 0;
    right: 24px;
  }
}
.home-custom-type {
  padding-top: 14px;
  p {
    font-size: 14px;
    color: #39394d;
  }
}
.home-custom-type-list {
  margin: 14px 0;
  display: flex;
  li {
    display: flex;
    align-items: center;
    margin-left: 20px;
    cursor: pointer;
    user-select: none;
    .icon-svg {
      font-size: 14px;
      color: #e0e0eb;
      &[class*='checkbox-on'] {
        color: #d92430;
      }
    }
    span {
      margin-left: 7px;
      font-size: 12px;
      color: #39394d;
    }
  }
}
.el-message {
  min-width: auto;
  background-color: #ffffff;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 12px 16px;
  .el-message__content {
    display: flex;
    align-items: center;
  }
  .el-icon-info {
    display: none;
  }
  .gacg-icon {
    width: 14px;
    height: 14px;
    margin-right: 8px;
  }
}
</style>
