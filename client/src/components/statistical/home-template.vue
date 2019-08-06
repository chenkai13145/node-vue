<template>
  <!-- 折线图组件 -->
  <div class="linechart-template">
    <el-row class="height40 linheight40 margintop10 borderbottom paddingbottom">
      <el-col :span="12"
              v-if="brokenlineData.showselect">
        <div class="grid-content bg-purple">
          <span class="disinline">{{ brokenlineData.title }}</span>
          <el-tooltip v-if="brokenlineData.showicon"
                      class="item"
                      effect="dark"
                      :content="brokenlineData.title"
                      placement="right">
            <icon-svg name="helpbig"
                      class="tipicon"></icon-svg>
          </el-tooltip>
        </div>
      </el-col>
      <el-col :span="15"
              v-else>
        <div class="grid-content bg-purple">
          <span class="disinline">{{ brokenlineData.title }}</span>
          <el-tooltip v-if="brokenlineData.showicon"
                      class="item"
                      effect="dark"
                      :content="brokenlineData.title"
                      placement="right">
            <icon-svg name="helpbig"
                      class="tipicon"></icon-svg>
          </el-tooltip>
        </div>
      </el-col>
      <el-col :span="3"
              v-if="brokenlineData.showselect">
        <div class="grid- bg-purple-light">
          <el-select v-model="twooutrate"
                     placeholder="请选择">
            <el-option v-for="item in brokenlineData.twooutrates"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>

      <el-col :span="6"
              style="float:right;">
        <el-row>
          <el-col :span="8"
                  v-for="(item,index) in brokenlineData.brushchoose"
                  :key="index"
                  style="cursor:pointer">
            <div class="grid-content bg-purple textcenter"
                 v-on:click="choose(index)"
                 :class="{ischeck:index==current}">{{ item }}</div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <div class="mod-demo-echarts margintop10">
      <div :id="brokenlineId"
           class="brokenlineId"></div>
    </div>
  </div>
</template>

<script>
var ItemLine = function () {
  return {
    name: '',
    type: 'line',
    smooth: true,
    'seriesLayoutBy': 'row',
    itemStyle: { normal: { label: { show: true } } },
    data: []
  }
}
var SeriesTotal = []
export default {
  name: 'linechart-template', // 标准折线图
  props: {
    brokenlineData: {// 父页面传回的折线图值 接收的数据类型
      type: Object
    }
  },
  data () {
    return {
      brokenline: null, // 折线初始值
      current: 0, // 选中的名称
      twooutrate: '', // 下拉框选中值
      brokenlineId: 'brokenline' + (new Date()).getTime(),
      data: [],
      option: {}
    }
  },
  mounted () {
    this.initbrokenline()
  },
  activated () {
    // 由于给echart添加了resize事件, 在组件激活时需要重新resize绘画一次, 否则出现空白bug
    if (this.brokenline) {
      this.brokenline.resize()
    }
  },
  methods: {
    getvalue () {
      let _this = this
      this.data = this.brokenlineData.data
      SeriesTotal = []
      for (var k in _this.data) {
        // 核心，给series赋值，分开包装的思想。
        var itemLine = new ItemLine()
        itemLine.name = _this.data[k].name
        itemLine.data = _this.data[k].value
        SeriesTotal.push(itemLine)
      }
      this.initbrokenline()
    },
    // 初始化折线图
    initbrokenline () {
      let _self = this
      this.option = {
        color: _self.brokenlineData.thiscolor,
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '3%',
            top: '30px',
            bottom: 50,
            containLabel: true
          },
        legend: {// 展示折线图的数据值(条数)
          orient: 'horizontal', // 'vertical'
          x: '40',
          y: 'bottom',
          data: (() => {
            let legendarr = []
            for (let i = 0; i < _self.data.length; i++) {
              legendarr.push(_self.data[i].name)
            }
            return legendarr
          })()
        },
        toolbox: {
          show: true
        },
        grid: {
          y: '10',
          left: '6%',
          right: '6%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: {// 展示横坐标的数据
          type: 'category',
          boundaryGap: false,
          data: _self.brokenlineData.thisxAxis
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} ' + _self.brokenlineData.thisnum
          }
        },
        series: SeriesTotal
      }
      this.brokenline = this.$echarts.init(document.getElementById(this.brokenlineId))
      this.brokenline.setOption(this.option)
      window.addEventListener('resize', () => {
        this.brokenline.resize()
      })
    },
    choose: function (value) {
      this.current = value
      this.$emit('timeBucket', value)
    }
  },
  watch: {
    brokenlineData: {
      handler (newV, oldV) {
        this.getvalue()
        this.brokenline.setOption(this.option)
      },
      deep: true
    }
  }
}
</script>
<style lang="scss" scoped>
.el-date-editor .el-range-separator {
  width: 10%;
}
.ischeck {
  color: #19678e;
  border-bottom: 4px solid #19678e;
}
.mod-demo-echarts {
  .brokenlineId {
    min-height: 400px;
  }
}
.height40.linheight40.margintop10.borderbottom.paddingbottom {
  .grid-content.bg-purple {
    display: flex;
    align-items: center;
    .tipicon {
      margin-top: 0;
    }
  }
  .grid-content.bg-purple.textcenter,
  .ischeck {
    width: auto;
    justify-content: center;
  }
}
</style>
