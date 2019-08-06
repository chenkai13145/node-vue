<!--
/**
* @name chart
* @module c:\SpeedinessDocument\g7-vue\前端\vuesys\src\components\common\home\chart.vue
* @description 首页图表组件
* @author wind-lc
* @date 2019-06-10
* @param {Object} chartData 图表数据
* @example <Chart :chartData="chartData"></Chart>
*/
-->
<template>
  <div class="chart-wrapper">
    <!-- 头部 -->
    <div class="chart-top">
      <b>{{chartData.name}}</b>
      <Help :helpText="chartData.helptext"></Help>
      <!-- 下拉筛选 -->
      <div v-if="select1">
        <el-select class="investor"
                   @change="selectChange1"
                   v-model="checked[0]"
                   placeholder="请选择">
          <el-option v-for="item in chartData.pulldownList"
                     :key="item.code"
                     :label="item.name"
                     :value="item.code">
          </el-option>
        </el-select>
        <el-select class="investor"
                   v-if="select2"
                   @change="selectChange2"
                   v-model="checked[1]"
                   placeholder="请选择">
          <el-option v-for="item in selectList"
                     :key="item.code"
                     :label="item.name"
                     :value="item.code">
          </el-option>
        </el-select>
      </div>

      <!-- 下拉筛选 -->
      <!-- 日期类型 -->
      <ul class="date-type">
        <li v-for="(item,index) in chartData.dateTypeList"
            :key="index"
            @click="chartData.dateType = item"
            :class="{'active':chartData.dateType === item}">{{item}}</li>
      </ul>
      <!-- 日期类型 -->
    </div>
    <!-- 头部 -->
    <!-- 图表 -->
    <div :id="chartId"
         class="chart-content"></div>
    <!-- 图表 -->
  </div>
</template>
<script>
import Help from '@/components/common/help'
import {
  queryWaybillCount,
  queryCarTransport,
  queryCarUseTypeShippingCount,
  queryLandfactorCount,
  getWareHouseNum,
  getInWareHouseNum,
  getOutWareHouseNum,
  getLongTimeWareHouseCar,
  queryOutgoingRate,
  queryRetentionCount,
  queryTimelyDeliveryRate,
  queryCircuitNumber,
  queryLineRepeat,
  countRiskBehaviour,
  highRiskMeddle,
  riskTimeFrame,
  highRiskMost,
  getTruckNumByOrgCode,
  getTruckNumWeekByOrgCode,
  getTruckNumMouthByOrgCode,
  getTruckUsageRateByOrgCode,
  getTruckUsageRateWeekByOrgCode,
  getTruckUsageRateMouthByOrgCode,
  getTruckOwnRateByOrgCode,
  getTruckOwnRateWeekByOrgCode,
  getTruckOwnRateMouthByOrgCode,
  getWarehouseUsageRateDayByOrgCode,
  getWarehouseUsageRateWeekByOrgCode,
  getWarehouseUsageRatemouthByOrgCode,
  getListDayByOrgCode,
  getListWeekByOrgCode,
  getListMonthByOrgCode
} from '@//utils/api/home/home'
export default {
  name: 'chart',
  components: {
    Help
  },
  props: {
    chartData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      // 下拉选中项
      checked: [],
      selectList: [],
      select1: false,
      select2: false,
      // 日期类型code
      dateTypeCode: 0,
      // 图表
      chart: null,
      // 图表id
      chartId: 'chart' + Math.random().toString(36).substr(2) + Date.now(),
      // 图表配置项
      optino: {}
    }
  },
  mounted () {
    this.initSelect()
    this.connectorEnumerate(this.chartData.name)
    if (this.chartData.type === 'line') {
      this.initLineOption()
    }
    if (this.chartData.type === 'bar1' || this.chartData.type === 'bar2') {
      this.initBarOption()
    }
    this.initChart()
  },
  methods: {
    // 默认选中第一项
    initSelect () {
      if (this.chartData.pulldownList) {
        this.checked[0] = this.chartData.pulldownList[0].code
        this.select1 = true
        if (this.chartData.pulldownList[0].data) {
          this.checked[1] = this.chartData.pulldownList[0].data[0].code
          this.selectList = this.chartData.pulldownList[0].data
          this.select2 = true
        }
      }
    },
    // 筛选改变
    selectChange1 (v) {
      this.chartData.pulldownList.forEach(item => {
        if (item.code === v) {
          this.selectList = item.data
          this.checked[1] = item.data[0].code
        }
      })
      this.checked[0] = v
    },
    selectChange2 (v) {
      this.checked[1] = v
    },
    // 初始化折线图表配置
    initLineOption () {
      this.option = {
        color: ['#6BC31D', '#D057E9', '#D70110', '#62C7AB', '#8998FF', '#FFBA3D'],
        tooltip: {
          trigger: 'axis',
          confine: true,
          backgroundColor: '#45455A',
          extraCssText: 'box-shadow: 0 5px 10px rgba(69, 69, 90, 0.5);',
          axisPointer: {
            crossStyle: {
              color: 'red'
            }
          },
          formatter: params => {
            let html = `<div class="tooltip"><p>${params[0].name}</p><ul class="tooltip-list">`
            params.forEach(item => {
              html += `<li> 
                        <div>${item.marker}${item.seriesName}</div> 
                        <div>${item.value}</div>
                      </li>`
            })
            html += `</ul></div>`
            return html
          }
        },
        legend: {
          top: 'bottom',
          left: 'left',
          icon: 'path://M240.11292005 230.74396634H775.80207574v535.69023281H240.11292005V230.74396634z',
          data: [],
          textStyle: {
            fontSize: 14,
            padding: [2, 0, 0, 0]
          }
        },
        grid: {
          top: '3%',
          left: '3%',
          right: '4%',
          bottom: '12%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#BABACE'
            }
          },
          axisTick: {
            alignWithLabel: true,
            interval: 0,
            lineStyle: {
              color: '#BABACE'
            },
            inside: true
          },
          axisLabel: {
            color: '#84849A'
          },
          data: []
        },
        yAxis: {
          type: 'value',
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            color: '#84849A'
          }
        },
        series: []
      }
    },
    // 初始化柱形图表配置
    initBarOption () {
      let color = []
      let dataZoom = []
      let bottom = ''
      if (this.chartData.type === 'bar1') {
        color = ['#5666EA', '#45C9AE', ' #FFB676', '#D56CD9']
        bottom = '12%'
      } else {
        color = ['#DA5666', '#D057E9', ' #B0E352', '#62C7AB', '#5666EA', '#FFBA3D']
        bottom = '12%'
      }
      if (this.chartData.dataZoom) {
        dataZoom = [
          {
            type: 'slider',
            bottom: '12%',
            end: 50
          }
        ]
        bottom = '25%'
      }
      this.option = {
        color: color,
        tooltip: {
          trigger: 'axis',
          confine: true,
          axisPointer: {
            type: 'none'
          },
          backgroundColor: '#45455A',
          extraCssText: 'box-shadow: 0 5px 10px rgba(69, 69, 90, 0.5);',
          formatter: params => {
            let html = `<div class="tooltip"><p>${params[0].name}</p><ul class="tooltip-list">`
            params.forEach(item => {
              html += `<li> 
                        <div>${item.marker}${item.seriesName}</div> 
                        <div>${item.value}</div>
                      </li>`
            })
            html += `</ul></div>`
            return html
          }
        },
        dataZoom: dataZoom,
        legend: {
          top: 'bottom',
          left: 'left',
          icon: 'path://M240.11292005 230.74396634H775.80207574v535.69023281H240.11292005V230.74396634z',
          data: [],
          textStyle: {
            fontSize: 14,
            padding: [2, 0, 0, 0]
          }
        },
        grid: {
          top: '3%',
          left: '3%',
          right: '4%',
          bottom: bottom,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#BABACE'
            }
          },
          axisTick: { show: false },
          axisLabel: {
            color: '#84849A'
          },
          data: []
        },
        yAxis: {
          type: 'value',
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            color: '#84849A'
          }
        },
        series: []
      }
    },
    // 初始化图表
    initChart () {
      // 实例化图表
      this.chart = this.$echarts.init(document.getElementById(this.chartId))
      this.chart.showLoading({
        text: 'loading',
        color: '#d70110',
        textColor: '#39394d',
        maskColor: '#fff',
        zlevel: 1
      })
      // 响应屏幕修改
      window.addEventListener('resize', () => {
        this.chart.resize()
      })
    },
    // MHY接口数据处理方式1
    handleMHY1Connector (fun) {
      // 调用接口
      fun({
        startTime: this.chartData.startTime,
        endTime: this.chartData.endTime,
        code: this.checked.join(','),
        type: this.dateTypeCode
      }).then(res => {
        if (res.msg === 'success') {
          // 图例
          let legend = []
          // X轴
          let xAxis = []
          // 数据
          let series = []
          res.data.forEach(item => {
            legend.push(item.code_name)
            xAxis.push(item.createtime)
          })
          legend = [...new Set(legend)]
          xAxis = [...new Set(xAxis)]
          legend.forEach(item => {
            series.push(
              {
                name: item,
                type: 'line',
                smooth: true,
                symbol: 'none',
                data: xAxis.map(item => 0)
              }
            )
          })
          series.forEach(item => {
            res.data.forEach(el => {
              if (item.name === el.code_name) {
                item.data.map((i, index) => {
                  if (el.createtime === xAxis[index]) {
                    item.data[index] = el.one_day_sum
                  }
                })
              }
            })
          })
          this.option.legend.data = legend
          this.option.xAxis.data = xAxis
          this.option.series = series
          this.chart.setOption(this.option)
          this.chart.hideLoading()
        }
      }).catch(error => {
        console.log(error)
      })
    },
    // MHY接口数据处理方式2
    handleMHY2Connector (fun) {
      fun({
        startTime: this.chartData.startTime,
        endTime: this.chartData.endTime,
        code: this.checked.join(','),
        type: this.dateTypeCode
      }).then(res => {
        if (res.msg === 'success') {
          // 图例
          let legend = ['陆运', '铁运', '水运']
          // X轴
          let xAxis = []
          // 数据
          let series = []
          res.data.forEach(item => {
            xAxis.push(item.code_name)
            // 计算百分比
            let count = item.type_land_sum + item.type_railway_sum + item.type_sea_sum
            item.type_land_sum = item.type_land_sum === 0 ? 0 : parseFloat((item.type_land_sum * 100 / count).toFixed(2))
            item.type_railway_sum = item.type_railway_sum === 0 ? 0 : parseFloat((item.type_railway_sum * 100 / count).toFixed(2))
            item.type_sea_sum = item.type_sea_sum === 0 ? 0 : parseFloat((item.type_sea_sum * 100 / count).toFixed(2))
          })
          xAxis = [...new Set(xAxis)]
          legend.forEach(item => {
            series.push({
              name: item,
              type: 'bar',
              barWidth: 10,
              stack: '总量',
              data: res.data.map(el => {
                if (item === '陆运') {
                  return el.type_land_sum
                }
                if (item === '铁运') {
                  return el.type_railway_sum
                }
                if (item === '水运') {
                  return el.type_sea_sum
                }
              })
            })
          })
          this.option.legend.data = legend
          this.option.xAxis.data = xAxis
          this.option.series = series
          this.chart.setOption(this.option)
          this.chart.hideLoading()
        }
      }).catch(error => {
        console.log(error)
      })
    },
    // MHY接口数据处理方式3
    handleMHY3Connector (fun) {
      fun({
        startTime: this.chartData.startTime,
        endTime: this.chartData.endTime,
        code: this.checked.join(','),
        type: this.dateTypeCode
      }).then(res => {
        if (res.msg === 'success') {
          // 图例
          let legend = []
          // X轴
          let xAxis = []
          // 数据
          let series = []
          let lengCode = []
          let len = res.data.length - 1
          for (let item in res.data[len]) {
            legend.push(res.data[len][item])
            lengCode.push(item)
          }
          res.data.forEach(item => {
            xAxis.push(item.address)
          })
          xAxis = xAxis.slice(0, -1)
          xAxis = xAxis.map(item => {
            return item.replace(/[-]/g, '\n-\n')
          })
          legend.forEach(item => {
            series.push(
              {
                name: item,
                type: 'bar',
                barWidth: 10,
                stack: '总量',
                data: lengCode.map(item => item)
              }
            )
          })
          series.forEach(item => {
            res.data.forEach(element => {
              lengCode.forEach((el, index) => {
                if (item.data[index] === el) {
                  item.data[index] = element[el]
                }
              })
            })
          })
          console.log(xAxis)
          this.option.legend.data = legend
          this.option.xAxis.data = xAxis
          this.option.series = series
          this.chart.setOption(this.option)
          this.chart.hideLoading()
        }
      }).catch(error => {
        console.log(error)
      })
    },
    // LJL接口数据处理
    handleLJLConnector (fun) {
      fun({
        startTime: this.chartData.startTime,
        endTime: this.chartData.endTime,
        code: this.checked.join(','),
        type: this.dateTypeCode
      }).then(res => {
        if (res.msg === 'success') {
          // 图例
          let legend = []
          // X轴
          let xAxis = []
          // 数据
          let series = []
          res.data.forEach(item => {
            legend.push(item.code_name)
            xAxis.push(item.date)
          })
          legend = [...new Set(legend)]
          xAxis = [...new Set(xAxis)]
          legend.forEach(item => {
            series.push(
              {
                name: item,
                type: 'line',
                smooth: true,
                symbol: 'none',
                data: xAxis.map(item => 0)
              }
            )
          })
          series.forEach(item => {
            res.data.forEach(el => {
              if (item.name === el.code_name) {
                item.data.map((i, index) => {
                  if (el.date === xAxis[index]) {
                    item.data[index] = el.num
                  }
                })
              }
            })
          })
          this.option.legend.data = legend
          this.option.xAxis.data = xAxis
          this.option.series = series
          this.chart.setOption(this.option)
          this.chart.hideLoading()
        }
      }).catch(error => {
        console.log(error)
      })
    },
    // XX接口数据处理方式1
    handleXX1Connector (fun) {
      fun({
        startTime: this.chartData.startTime,
        endTime: this.chartData.endTime,
        timeType: this.dateTypeCode,
        type: this.checked.join(',')
      }).then(res => {
        if (res.msg === 'success') {
          // 图例
          let legend = []
          // X轴
          let xAxis = []
          // 数据
          let series = []
          res.data.forEach(item => {
            legend.push(item.code_name)
            xAxis.push(item.date)
          })
          legend = [...new Set(legend)]
          xAxis = [...new Set(xAxis)]
          legend.forEach(item => {
            series.push(
              {
                name: item,
                type: 'line',
                smooth: true,
                symbol: 'none',
                data: xAxis.map(item => 0)
              }
            )
          })
          series.forEach(item => {
            res.data.forEach(el => {
              if (item.name === el.code_name) {
                item.data.map((i, index) => {
                  if (el.date === xAxis[index]) {
                    item.data[index] = el.warehouse_car_num ? el.warehouse_car_num : 0
                  }
                })
              }
            })
          })
          this.option.legend.data = legend
          this.option.xAxis.data = xAxis
          this.option.series = series
          this.chart.setOption(this.option)
          this.chart.hideLoading()
        }
      }).catch(error => {
        console.log(error)
      })
    },
    // XX接口数据处理方式2
    handleXX2Connector (fun) {
      fun({
        startTime: this.chartData.startTime,
        endTime: this.chartData.endTime,
        timeType: this.dateTypeCode,
        type: this.checked.join(',')
      }).then(res => {
        if (res.msg === 'success') {
          // 图例
          let legend = []
          // X轴
          let xAxis = []
          // 数据
          let series = []
          res.data.forEach(item => {
            legend.push(item.code_name)
            xAxis.push(item.date)
          })
          legend = [...new Set(legend)]
          xAxis = [...new Set(xAxis)]
          legend.forEach(item => {
            series.push(
              {
                name: item,
                type: 'bar',
                barWidth: 10,
                data: xAxis.map(item => 0)
              }
            )
          })
          series.forEach(item => {
            res.data.forEach(el => {
              if (item.name === el.code_name) {
                item.data.map((i, index) => {
                  if (el.date === xAxis[index]) {
                    item.data[index] = el.longtime_warehouse_car_num ? el.longtime_warehouse_car_num : 0
                  }
                })
              }
            })
          })
          this.option.legend.data = legend
          this.option.xAxis.data = xAxis
          this.option.series = series
          this.chart.setOption(this.option)
          this.chart.hideLoading()
        }
      }).catch(error => {
        console.log(error)
      })
    },
    // yxl接口数据处理方式1
    handleYXL1Connector (fun) {
      fun({
        // startTime: this.chartData.startTime,
        // endTime: this.chartData.endTime,
        // code: this.checked.join(','),
        type: this.dateTypeCode
      }).then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
    },
    // yxl接口数据处理方式2
    handleYXL2Connector (fun) {
      fun({
        startTime: this.chartData.startTime,
        endTime: this.chartData.endTime,
        code: this.checked.join(','),
        type: this.dateTypeCode
      }).then(res => {
        if (res.msg === 'success') {
          // 图例
          let legend = []
          // X轴
          let xAxis = []
          let xAxisCode = []
          // 数据
          let series = []
          res.data[0].value.forEach(item => {
            xAxis.push(item.risk_descr)
            xAxisCode.push(item.risk_type)
          })
          res.data.forEach(item => {
            legend.push(item.code_name)
          })
          legend = [...new Set(legend)]
          legend.forEach(item => {
            series.push(
              {
                name: item,
                type: 'bar',
                barWidth: 10,
                data: xAxis.map(item => 0)
              }
            )
          })
          series.forEach(item => {
            res.data.forEach(el => {
              if (item.name === el.code_name) {
                xAxisCode.forEach((i, index) => {
                  item.data[index] = el[i]
                })
              }
            })
          })
          this.option.legend.data = legend
          this.option.xAxis.data = xAxis
          this.option.series = series
          this.chart.setOption(this.option)
          this.chart.hideLoading()
        }
      }).catch(error => {
        console.log(error)
      })
    },
    // yxl接口数据处理方式3
    handleYXL3Connector (fun) {
      fun({
        startTime: this.chartData.startTime,
        endTime: this.chartData.endTime,
        code: this.checked.join(','),
        type: this.dateTypeCode
      }).then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
    },
    // 数据对应接口枚举,
    connectorEnumerate (name) {
      let connectorList = [
        /* ------------------------ 运输统计(mhy) ------------------------ */
        {
          name: '运单数',
          connector: queryWaybillCount,
          author: 'mhy',
          method: 1
        },
        {
          name: '商品车运量',
          connector: queryCarTransport,
          author: 'mhy',
          method: 1
        },
        {
          name: '公铁水运量占比',
          connector: queryCarUseTypeShippingCount,
          author: 'mhy',
          method: 2
        },
        {
          name: '外协陆运运量占比',
          connector: queryLandfactorCount,
          author: 'mhy',
          method: 2
        },
        /* ------------------------ 运输统计(mhy) ------------------------ */
        /* ------------------------ 仓储统计(xx) ------------------------ */
        {
          name: '库存量',
          connector: getWareHouseNum,
          author: 'xx',
          method: 1
        },
        {
          name: '入库量',
          connector: getInWareHouseNum,
          author: 'xx',
          method: 1
        },
        {
          name: '出库量',
          connector: getOutWareHouseNum,
          author: 'xx',
          method: 1
        },
        {
          name: '长库龄商品车数量',
          connector: getLongTimeWareHouseCar,
          author: 'xx',
          method: 2
        },
        /* ------------------------ 仓储统计(xx) ------------------------ */
        /* ------------------------ 作业指标分析(mhy) ------------------------ */
        {
          name: '出库及时率',
          connector: queryOutgoingRate,
          author: 'mhy',
          method: 1
        },
        {
          name: '商品车滞留',
          connector: queryRetentionCount,
          author: 'mhy',
          method: 1
        },
        {
          name: '交付及时率',
          connector: queryTimelyDeliveryRate,
          author: 'mhy',
          method: 1
        },
        /* ------------------------ 作业指标分析(mhy) ------------------------ */
        /* ------------------------ 线路分析(mhy) ------------------------ */
        {
          name: '线路数',
          connector: queryCircuitNumber,
          author: 'mhy',
          method: 1
        },
        {
          name: '重复线路',
          connector: queryLineRepeat,
          author: 'mhy',
          method: 3
        },
        /* ------------------------ 线路分析(mhy) ------------------------ */
        /* ------------------------ 运输安全分析(yxl) ------------------------ */
        {
          name: '风险行为统计',
          connector: countRiskBehaviour,
          author: 'yxl',
          method: 2
        },
        {
          name: '高风险次数与有效干预占比',
          connector: highRiskMeddle,
          author: 'yxl',
          method: 1
        },
        {
          name: '危险时段分布',
          connector: riskTimeFrame,
          author: 'yxl',
          method: 3
        },
        /* ------------------------ 运输安全分析(yxl) ------------------------ */
        /* ------------------------ 资源利用(ljl) ------------------------ */
        {
          name: '投资企业板车使用',
          connector: [getTruckNumByOrgCode, getTruckNumWeekByOrgCode, getTruckNumMouthByOrgCode],
          author: 'ljl',
          method: 1
        },
        {
          name: '投资企业满板率',
          connector: [getTruckUsageRateByOrgCode, getTruckUsageRateWeekByOrgCode, getTruckUsageRateMouthByOrgCode],
          author: 'ljl',
          method: 1
        },
        {
          name: '自有车辆利用率',
          connector: [getTruckOwnRateByOrgCode, getTruckOwnRateWeekByOrgCode, getTruckOwnRateMouthByOrgCode],
          author: 'ljl',
          method: 1
        },
        {
          name: '库位利用率',
          connector: [getWarehouseUsageRateDayByOrgCode, getWarehouseUsageRateWeekByOrgCode, getWarehouseUsageRatemouthByOrgCode],
          author: 'ljl',
          method: 1
        },
        /* ------------------------ 资源利用(ljl) ------------------------ */
        /* ------------------------ 运输数字化(ljl) ------------------------ */
        {
          name: '覆盖趋势指标',
          connector: [getListDayByOrgCode, getListWeekByOrgCode, getListMonthByOrgCode],
          author: 'ljl',
          method: 2
        }
        /* ------------------------ 运输数字化(ljl) ------------------------ */
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
      // 许爽
      if (obj.author === 'xx') {
        obj.method === 1 ? this.handleXX1Connector(obj.connector) : this.handleXX2Connector(obj.connector)
      }
      // 余锡林
      if (obj.author === 'yxl') {
        switch (obj.method) {
          case 1:
            this.handleYXL1Connector(obj.connector)
            break
          case 2:
            this.handleYXL2Connector(obj.connector)
            break
          case 3:
            this.handleYXL3Connector(obj.connector)
            break
          case 4:
            this.handleYXL4Connector(obj.connector)
            break
        }
      }
      // 李俊林
      if (obj.author === 'ljl') {
        this.handleLJLConnector(obj.connector[this.dateTypeCode - 1])
      }
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
        if (item.name === this.chartData.dateType) {
          this.dateTypeCode = item.code
        }
      })
    },
    // 日期类型创建X轴
    createxAxis () {
      // this.chartData.dateType
      let xAxis = []
      switch (this.chartData.dateType) {
        case 1:
          for (let i = 0; i < 23; i++) {
            xAxis.push(i + '点')
          }
          break
        case 2:

          break
        case 3:

          break
      }
      return xAxis
    }
  },
  watch: {
    chartData: {
      handler (newV, oldV) {
        this.chart.showLoading({
          text: 'loading',
          color: '#d70110',
          textColor: '#39394d',
          maskColor: '#fff',
          zlevel: 1
        })
        this.connectorEnumerate(this.chartData.name)
      },
      deep: true
    }
  }
}
</script>

<style lang="scss">
.chart-wrapper {
  padding: 15px;
  background-color: #ffffff;
  height: 100%;
}
.chart-top {
  display: flex;
  align-items: center;
  height: 32px;
  b {
    margin-right: 12px;
  }
  .investor {
    width: 140px;
    height: 32px;
    margin-left: 30px;
  }
  // element select样式修改
  .el-select:hover .el-input__inner,
  .el-select .el-input.is-focus .el-input__inner,
  .el-select .el-input__inner:focus {
    border: 1px solid #e0e0eb !important;
    border-radius: 0;
    width: 140px;
    height: 32px;
  }
  .el-input__inner {
    width: 140px;
    height: 32px;
    border-radius: 0;
    font-size: 12px;
    color: #39394d;
    padding-left: 12px;
  }
}
.el-select-dropdown__list {
  padding: 0;
  background: #ffffff;
  border: none;
  box-shadow: 0 3px 7px 0 rgba(131, 131, 152, 0.59);
}
.el-select-dropdown__item {
  height: 32px;
  font-size: 12px;
  color: #39394d;
  padding: 0 12px;
}
.el-select-dropdown__item.selected {
  color: #39394d;
  font-weight: normal;
}
.popper__arrow {
  display: none !important;
}
// element select样式修改

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
.chart-content {
  height: calc(100% - 72px);
  margin-top: 40px;
}
.tooltip {
  width: 177px;
  padding: 5px 10px;
  & > p {
    font-size: 16px;
    color: #babace;
  }
}
.tooltip-list {
  padding-top: 10px;
  li {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    div {
      color: #f2f2f4;
    }
  }
}
</style>
