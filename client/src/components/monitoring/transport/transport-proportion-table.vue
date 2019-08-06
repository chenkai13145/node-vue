<template>
  <div class="capacity-table" v-show="message">
     <div class="capacity-table-bg"></div>
    <div class="table-wrap" style="min-height:82vh;height:auto">
        <div class="tab-tit" style="margin-bottom: 20px;">
           <img src="../../../assets/monitoring/proportion.png" style="width:40px;margin-right:5px;">
           <p>公铁水占比对比</p>
           <span class="el-icon-close" style="margin: -10px 0 0 auto;font-size: 24px;cursor: pointer;" @click="closeBtn"></span>
        </div> 
        <el-tabs class="tabNav" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="公司对比" name="first">
            <el-table
                 :data="tableData"
                 height="60vh"
                 border
                 style="width:100%;"
                 :default-sort = "{prop: 'date', order: 'descending'}">
                  <el-table-column
                     prop="table_name"
                     label="公司">
                  </el-table-column>
                  <el-table-column
                     prop="car"
                     label="陆运"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     label="陆运占比">
                     <template slot-scope="scope">
                        <span style="">{{ !(scope.row.car + scope.row.ship + scope.row.train) ? '0' : Math.round(scope.row.car  / (scope.row.car + scope.row.ship + scope.row.train)* 10000 / 100)}}%</span>
                     </template>
                  </el-table-column>
                  <el-table-column
                     prop="train"
                     label="铁运"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     label="铁运占比">
                     <template slot-scope="scope">
                        <span style="">{{ !(scope.row.car + scope.row.ship + scope.row.train) ? '0' : Math.round(scope.row.train / (scope.row.car + scope.row.ship + scope.row.train) * 10000 / 100)}}%</span>
                     </template>
                  </el-table-column>
                  <el-table-column
                     prop="ship"
                     label="水运"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     label="水运占比">
                     <template slot-scope="scope">
                        <span style="">{{ !(scope.row.car + scope.row.ship + scope.row.train) ? '0' : Math.round(scope.row.ship / (scope.row.car + scope.row.ship + scope.row.train) * 10000 / 100)}}%</span>
                     </template>
                  </el-table-column>
             </el-table>
          </el-tab-pane>
          <el-tab-pane label="客户对比" name="second">
            <el-table
                 :data="tableData"
                 height="60vh"
                 border
                 style="width:100%;"
                 :default-sort = "{prop: 'date', order: 'descending'}">
                  <el-table-column
                     prop="table_name"
                     label="客户">
                  </el-table-column>
                  <el-table-column
                     prop="car"
                     label="陆运"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     label="陆运占比">
                     <template slot-scope="scope">
                        <span style="">{{ !(scope.row.car + scope.row.ship + scope.row.train) ? '0' : Math.round(scope.row.car / (scope.row.car + scope.row.ship + scope.row.train) * 10000 / 100)}}%</span>
                     </template>
                  </el-table-column>
                  <el-table-column
                     prop="train"
                     label="铁运"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     label="铁运占比">
                     <template slot-scope="scope">
                        <span style="">{{ !(scope.row.car + scope.row.ship + scope.row.train) ? '0' : Math.round(scope.row.train / (scope.row.car + scope.row.ship + scope.row.train) * 10000 / 100)}}%</span>
                     </template>
                  </el-table-column>
                  <el-table-column
                     prop="ship"
                     label="水运"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     label="水运占比">
                     <template slot-scope="scope">
                        <span style="">{{ !(scope.row.car + scope.row.ship + scope.row.train) ? '0' : Math.round(scope.row.ship / (scope.row.car + scope.row.ship + scope.row.train) * 10000 / 100)}}%</span>
                     </template>
                  </el-table-column>
             </el-table>
          </el-tab-pane>
          <el-tab-pane label="客户城市对比" name="third">
            <el-table
                 :data="tableData"
                 height="60vh"
                 border
                 style="width:100%;"
                 :default-sort = "{prop: 'date', order: 'descending'}">
                  <el-table-column
                     prop="table_name"
                     label="客户城市">
                  </el-table-column>
                  <el-table-column
                     prop="car"
                     label="陆运"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     label="陆运占比">
                     <template slot-scope="scope">
                        <span style="">{{ !(scope.row.car + scope.row.ship + scope.row.train) ? '0' : Math.round(scope.row.car / (scope.row.car + scope.row.ship + scope.row.train) * 10000 / 100)}}%</span>
                     </template>
                  </el-table-column>
                  <el-table-column
                     prop="train"
                     label="铁运"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     label="铁运占比">
                     <template slot-scope="scope">
                        <span style="">{{ !(scope.row.car + scope.row.ship + scope.row.train) ? '0' : Math.round(scope.row.train / (scope.row.car + scope.row.ship + scope.row.train) * 10000 / 100)}}%</span>
                     </template>
                  </el-table-column>
                  <el-table-column
                     prop="ship"
                     label="水运"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     label="水运占比">
                     <template slot-scope="scope">
                        <span style="">{{ !(scope.row.car + scope.row.ship + scope.row.train) ? '0' : Math.round(scope.row.ship / (scope.row.car + scope.row.ship + scope.row.train) *  10000 / 100)}}%</span>
                     </template>
                  </el-table-column>
             </el-table>
          </el-tab-pane>
          <el-tab-pane label="商品车品牌对比" name="fourth">
            <el-table
                 :data="tableData"
                 height="60vh"
                 border
                 style="width:100%;"
                 :default-sort = "{prop: 'date', order: 'descending'}">
                  <el-table-column
                     prop="table_name"
                     label="商品车品牌">
                  </el-table-column>
                  <el-table-column
                     prop="car"
                     label="陆运"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     label="陆运占比">
                     <template slot-scope="scope">
                        <span style="">{{ !(scope.row.car + scope.row.ship + scope.row.train) ? '0' : Math.round(scope.row.car / (scope.row.car + scope.row.ship + scope.row.train) * 10000 / 100)}}%</span>
                     </template>
                  </el-table-column>
                  <el-table-column
                     prop="train"
                     label="铁运"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     label="铁运占比">
                     <template slot-scope="scope">
                        <span style="">{{ !(scope.row.car + scope.row.ship + scope.row.train) ? '0' : Math.round(scope.row.train / (scope.row.car + scope.row.ship + scope.row.train) * 10000 / 100)}}%</span>
                     </template>
                  </el-table-column>
                  <el-table-column
                     prop="ship"
                     label="水运"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     label="水运占比">
                     <template slot-scope="scope">
                        <span style="">{{ !(scope.row.car + scope.row.ship + scope.row.train) ? '0' : Math.round(scope.row.ship/ (scope.row.car + scope.row.ship + scope.row.train) * 10000 / 100)}}%</span>
                     </template>
                  </el-table-column>
             </el-table>
          </el-tab-pane>
        </el-tabs>
    </div>
  </div>
</template>
<script>
  import { getWayBillByOrderOrgCodeData } from '../../../utils/api/monitoring/transport'
  export default {
    props:['message'],
    data() {
      return {
        showTab:true,
        activeName: 'first',
        tableData: []
      }
    },
    mounted() {
       this.getWayBillByOrderOrgCodeData()
    },
    methods: {
      closeBtn(){
        this.$emit('showTab',false)
      },
      getWayBillByOrderOrgCodeData() {
         var table = {
            table: 'org_code'
         }
         getWayBillByOrderOrgCodeData(table).then(res => {
            this.tableData = res.monitor
         }).catch(error => {
            console.log(error)
         })
      },
      handleClick(tab, event) {
        console.log(tab, event)
        var table
        if(tab.name == 'first') {
          table = {
            table: 'org_code'
          }
        } else if(tab.name == 'second') {
          table = {
            table: 'factory_code'
          }
        } else if(tab.name == 'third') {
          table = {
            table: 'factory_city_code'
          }
        } else if(tab.name == 'fourth') {
          table = {
            table: 'car_brand_code'
          }
        }
         getWayBillByOrderOrgCodeData(table).then(res => {
            this.tableData = res.monitor
            console.log(this.tableData)
         }).catch(error => {
            console.log(error)
         })
      },
      handleEdit(index, row) {
        console.log(index, row)
      }
    }
  }
</script>
<style lang="scss">
.el-tabs__active-bar {
   width: 56px;
}
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
        height: 82vh;
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
        .tabNav{
          .el-tabs__header.is-top{
            width: 420px;
            margin: 0 auto 20px;
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
            display: inline-block;
            line-height: normal;
           }
    }
}
</style>
