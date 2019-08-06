<template>
  <div class="capacity-table" v-show="message">
    <div class="capacity-table-bg"></div>
    <div class="table-wrap">
        <div class="tab-tit" style="margin-bottom: 20px;">
           <img src="../../../assets/monitoring/scooter.png" style="width:40px;margin-right:5px;">
           <p>板车运力统计对比</p>
           <span class="el-icon-close" style="margin: -10px 0 0 auto;font-size: 24px;cursor: pointer;" @click="closeBtn"></span>
        </div> 
        <el-table
            :data="tableData"
            height="90%"
            border
            style="width:100%;"
            :default-sort = "{prop: 'date', order: 'descending'}">
             <el-table-column
              label="">
               <el-table-column
                prop="name"
                label="公司名称">
              </el-table-column>
            </el-table-column>
            <el-table-column label="陆运运力满足度">
               <el-table-column
                label="使用中板位"
                sortable>
                <template slot-scope="scope">
                  <span style="">{{ scope.row.start }}</span>
                  <span class="percent">（{{ scope.row.truckTotal == 0 ? '0' : Math.round(scope.row.start  / scope.row.truckTotal* 10000 / 100)}}%）</span>
                </template>
              </el-table-column>
              <el-table-column
                label="待发板位"
                sortable>
                 <template slot-scope="scope">
                  <span style="">{{ scope.row.plan }}</span>
                  <span class="percent">（{{ scope.row.truckTotal == 0 ? '0' : Math.round(scope.row.plan  / scope.row.truckTotal* 10000 / 100)}}%）</span>
                </template>
              </el-table-column>
              <el-table-column
                label="剩余板位"
                sortable>
                <template slot-scope="scope">
                  <span style="">{{ scope.row.finish }}</span>
                  <span class="percent">（{{ scope.row.truckTotal == 0 ? '0' : Math.round(scope.row.finish  / scope.row.truckTotal* 10000 / 100)}}%）</span>
                </template>
              </el-table-column>
            </el-table-column>

            <el-table-column label="承运板车">
               <el-table-column
                label="6位半挂车"
                sortable>
                <template slot-scope="scope">
                  <span style="">{{ scope.row.amount6 }}</span>
                  <span class="percent">（{{ scope.row.truckTotal == 0 ? '0' : Math.round(scope.row.amount6  / scope.row.truckTotal* 10000 / 100)}}%）</span>
                </template>
              </el-table-column>,
              <el-table-column
                label="7位半挂车"
                sortable>
                <template slot-scope="scope">
                  <span style="">{{ scope.row.amount7 }}</span>
                  <span class="percent">（{{ scope.row.truckTotal == 0 ? '0' : Math.round(scope.row.amount7  / scope.row.truckTotal* 10000 / 100)}}%）</span>
                </template>
              </el-table-column>
              <el-table-column
                label="8位中置轴车"
                sortable>
                <template slot-scope="scope">
                  <span style="">{{ scope.row.amount8 }}</span>
                  <span class="percent">（{{ scope.row.truckTotal == 0 ? '0' : Math.round(scope.row.amount8  / scope.row.truckTotal* 10000 / 100)}}%）</span>
                </template>
              </el-table-column>
            </el-table-column>

            <el-table-column label="自有板车利用情况">
               <el-table-column
                label="使用中自有板车"
                sortable>
                 <template slot-scope="scope">
                  <span style="">{{ scope.row.ownStart }}</span>
                  <span class="percent">（{{ scope.row.ownTotal == 0 ? '0' : Math.round(scope.row.ownStart  / scope.row.ownTotal* 10000 / 100)}}%）</span>
                </template>
              </el-table-column>
              <el-table-column
                label="未使用自有板车"
                sortable>
                <template slot-scope="scope">
                  <span style="">{{ scope.row.ownFinish }}</span>
                  <span class="percent">（{{ scope.row.ownTotal == 0 ? '0' : Math.round(scope.row.ownFinish  / scope.row.ownTotal* 10000 / 100)}}%）</span>
                  <span class="warning">{{ (scope.row.ownTotal == 0 ? '0' : Math.round(scope.row.ownFinish  / scope.row.ownTotal* 10000 / 100)) < 20 ? '偏低' : '' }}</span>
                </template>
              </el-table-column>
            </el-table-column>

            <el-table-column label="运输中外协比例">
               <el-table-column
                prop="outerTotal"
                label="外协板车"
                sortable>
              </el-table-column>
              <el-table-column
                prop="ownTotal"
                label="自有板车">
              </el-table-column>
            </el-table-column>
        </el-table>
    </div>
  </div>
</template>
<script>
  export default {
    props:{
      message: 'message',
      tableData: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        // tableData: [
        //   {
        //   name: '广汽商贸',
        //   syzbwNum:100,
        //   syzbwPercent:'50%',
        //   dfbwNum:200,
        //   dfbwPercent:'10%',
        //   sybwNum:200,
        //   sybwPercent:'10%',
        //   lwbgcNum:200,
        //   lwbgcPercent:'10%',
        //   qwbgcNum:200,
        //   qwbgcPercent:'10%',
        //   bwzzzcNum:200,
        //   bwzzzcPercent:'10%',
        //   syzzybcNum:200,
        //   syzzybcPercent:'10%',
        //   wsyzzybcNum:200,
        //   wsyzzybcPercent:'10%',
        //   warning:'偏低'
        //   }, 
        //   {
        //   name: '广汽商贸',
        //   syzbwNum:100,
        //   syzbwPercent:'50%',
        //   dfbwNum:200,
        //   dfbwPercent:'10%',
        //   sybwNum:200,
        //   sybwPercent:'10%',
        //   lwbgcNum:200,
        //   lwbgcPercent:'10%',
        //   qwbgcNum:200,
        //   qwbgcPercent:'10%',
        //   bwzzzcNum:200,
        //   bwzzzcPercent:'10%',
        //   syzzybcNum:200,
        //   syzzybcPercent:'10%',
        //   wsyzzybcNum:200,
        //   wsyzzybcPercent:'10%',
        //   warning:''
        // }
        // ]
      }
    },
    methods: {
    closeBtn(){
      this.$emit('showTab',false)
    },
    }
  }
</script>
<style lang="scss">
.capacity-table{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    .capacity-table-bg{
       background: #000;
       opacity: 0.65;
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       z-index: -1;
    }
    .table-wrap{
        background: #fff;
        margin: 0 auto;
        width: 80%;
        padding: 20px;
        height: 80%;
        margin-top: 5%;
        .tab-tit{
            display: flex;
            align-items: center;
            p{
              font-size: 18px;
              color: #39394d;
              margin-left: 5px;
              letter-spacing: 0.2px;
            }
        }
        th,td{
            text-align: center;
            color: #39394d;
            .percent{
              color:#84849a;
            }
        }
          .warning{
            width: 37px;
            background:#d92430;
            color: #fff;
            display: block;
            line-height: normal;
           }
    }
}
</style>
