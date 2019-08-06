<!--
/**
* @name truckload-table
* @module c:\SpeedinessDocument\vuesys\src\components\monitoring\truckload\truckload-table.vue
* @description 查询结果表格
* @author wind-lc
* @date 2019-04-26
* @param {Object} param1  参数说明
* @param {String} param2   参数说明
* @return {Event} query   参数说明
* @example 调用示例
*/
-->
<template>
  <div class="table-wrapper">
    <el-table :data="tableData"
              height="500"
              border
              style="width: 100%">
      <el-table-column v-for="(item,index) in tableColumn"
                       :key="index"
                       :prop="item.prop"
                       :label="item.label"
                       :width="itemwidth">
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
import { setInterval } from 'timers'
export default {
  name: 'truckload-table',
  components: {

  },
  mounted () {
    // this.getData()
  },
  data () {
    return {
      // 表头
      tableColumn: [
        {
          prop: 'waybillNumber',
          label: '运单号',
          width: ''
        },
        {
          prop: 'licencePlate',
          label: '车牌',
          width: ''
        },
        {
          prop: 'plateNumber',
          label: '板数（板数/最大板数）',
          width: ''
        },
        {
          prop: 'scheduleDepartureTime',
          label: '计划发车时间',
          width: ''
        },
        {
          prop: 'actualDepartureTime',
          label: '实际发车时间',
          width: ''
        },
        {
          prop: 'monitorPhase',
          label: '监控阶段',
          width: ''
        },
        {
          prop: 'monitorStatus',
          label: '监控状态',
          width: ''
        },
        {
          prop: 'currentPosition',
          label: '当前位置',
          width: ''
        },
        {
          prop: 'tripTime',
          label: '行驶时间',
          width: ''
        },
        {
          prop: 'currentProgress',
          label: '当前进度',
          width: ''
        },
        {
          prop: 'scheduledArrivalTime',
          label: '计划到达时间',
          width: ''
        },
        {
          prop: 'haulageOperator',
          label: '承运公司',
          width: ''
        }
      ],
      // 表格数据
      tableData: [
        {
          waybillNumber: 'qqq',
          licencePlate: 'www',
          plateNumber: 'eee',
          scheduleDepartureTime: 'rrr',
          actualDepartureTime: 'ttt',
          monitorPhase: 'ttt',
          monitorStatus: 'ttt',
          currentPosition: 'ttt',
          tripTime: 'ttt',
          currentProgress: 'ttt',
          scheduledArrivalTime: 'ttt',
          haulageOperator: 'ttt'
        },
        {
          waybillNumber: 'qqq',
          licencePlate: 'www',
          plateNumber: 'eee',
          scheduleDepartureTime: 'rrr',
          actualDepartureTime: 'ttt',
          monitorPhase: 'ttt',
          monitorStatus: 'ttt',
          currentPosition: 'ttt',
          tripTime: 'ttt',
          currentProgress: 'ttt',
          scheduledArrivalTime: 'ttt',
          haulageOperator: 'ttt'
        }
      ]
    }
  },
  methods: {
    getData () {
      let i = 0
      setInterval(() => {
        this.tableData.unshift({
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄' + i++
        })
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
.table-wrapper {
  margin-top: 30px;
}
</style>
