<template>
  <div class="capacity-table" v-show="message">
    <div class="capacity-table-bg"></div>
    <div class="table-wrap" style="min-height:82vh;height:auto">
        <div class="tab-tit" style="margin-bottom: 20px;">
           <img src="../../../assets/monitoring/ic_tittle_amount@2x.png" style="width:40px;margin-right:5px;">
           <p>运量统计对比<span style="font-size: 12px;color: #84849a;">（辆）</span></p>
           <span class="el-icon-close" style="margin: -10px 0 0 auto;font-size: 24px;cursor: pointer;" @click="closeBtn"></span>
        </div>
        <el-tabs class="tabNav" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="公司对比" name="first">
            <el-table
                 :data="tableData"
                 height="60vh"
                 border
                 style="width:100%;"
                 :default-sort = "{prop: 'org_name', order: 'descending'}">
                  <el-table-column
                     prop="table_name"
                     label="公司">
                  </el-table-column>
                  <el-table-column
                     prop="plan_num"
                     label="计划运量"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     prop="un_send_num"
                     label="待发运量"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     prop="send_num"
                     label="已发运量"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     prop="online_num"
                     label="在途运量"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     prop="finish_num"
                     label="交付运量"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     label="及时交付运量"
                     sortable>
                     <template slot-scope="scope">
                        <span style="">{{ scope.row.finish_num -  scope.row.overtime_unsend_num}}</span>
                     </template>
                  </el-table-column>
                  <el-table-column
                     label="交付及时率"
                     sortable>
                     <template slot-scope="scope">
                        <span style="">{{ scope.row.finish_num == 0 ? 0 : (scope.row.finish_num -  scope.row.overtime_unsend_num) / scope.row.finish_num }}%</span>
                        <span class="warning">{{ scope.row.warning }}</span>
                     </template>
                  </el-table-column>
                  <el-table-column
                     prop="overtime_unsend_num"
                     label="超时未发"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     prop="overtime_unfinish_num"
                     label="超时未到"
                     sortable>
                  </el-table-column>
                    <el-table-column
                      label="操作">
                      <template slot-scope="scope">
                        <el-button style="border: none;padding: 0;"  @click.native="toTath(scope.$index, scope.row)">查看超时&nbsp;&gt;</el-button>
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
                 :default-sort = "{prop: 'org_name', order: 'descending'}">
                  <el-table-column
                     prop="table_name"
                     label="客户">
                  </el-table-column>
                  <el-table-column
                     prop="plan_num"
                     label="计划运量"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     prop="un_send_num"
                     label="待发运量"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     prop="send_num"
                     label="已发运量"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     prop="online_num"
                     label="在途运量"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     prop="finish_num"
                     label="交付运量"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     label="及时交付运量"
                     sortable>
                     <template slot-scope="scope">
                        <span style="">{{ scope.row.finish_num -  scope.row.overtime_unsend_num}}</span>
                     </template>
                  </el-table-column>
                  <el-table-column
                     label="交付及时率"
                     sortable>
                     <template slot-scope="scope">
                        <span style="">{{ scope.row.finish_num == 0 ? 0 : (scope.row.finish_num -  scope.row.overtime_unsend_num) / scope.row.finish_num }}%</span>
                        <span class="warning">{{ scope.row.warning }}</span>
                     </template>
                  </el-table-column>
                  <el-table-column
                     prop="overtime_unsend_num"
                     label="超时未发"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     prop="overtime_unfinish_num"
                     label="超时未到"
                     sortable>
                  </el-table-column>
                    <el-table-column
                      label="操作">
                      <template slot-scope="scope">
                        <span @click="handleEdit(scope.$index, scope.row)">查看超时&nbsp;&gt;</span>
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
                 :default-sort = "{prop: 'org_name', order: 'descending'}">
                  <el-table-column
                     prop="table_name"
                     label="客户城市">
                  </el-table-column>
                  <el-table-column
                     prop="plan_num"
                     label="计划运量"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     prop="un_send_num"
                     label="待发运量"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     prop="send_num"
                     label="已发运量"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     prop="online_num"
                     label="在途运量"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     prop="finish_num"
                     label="交付运量"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     label="及时交付运量"
                     sortable>
                     <template slot-scope="scope">
                        <span style="">{{ scope.row.finish_num -  scope.row.overtime_unsend_num}}</span>
                     </template>
                  </el-table-column>
                  <el-table-column
                     label="交付及时率"
                     sortable>
                     <template slot-scope="scope">
                        <span style="">{{ scope.row.finish_num == 0 ? 0 : (scope.row.finish_num -  scope.row.overtime_unsend_num) / scope.row.finish_num }}%</span>
                        <span class="warning">{{ scope.row.warning }}</span>
                     </template>
                  </el-table-column>
                  <el-table-column
                     prop="overtime_unsend_num"
                     label="超时未发"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     prop="overtime_unfinish_num"
                     label="超时未到"
                     sortable>
                  </el-table-column>
                    <el-table-column
                      label="操作">
                      <template slot-scope="scope">
                        <span @click="handleEdit(scope.$index, scope.row)">查看超时&nbsp;&gt;</span>
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
                 :default-sort = "{prop: 'org_name', order: 'descending'}">
                  <el-table-column
                     prop="table_name"
                     label="商品车品牌">
                  </el-table-column>
                  <el-table-column
                     prop="plan_num"
                     label="计划运量"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     prop="un_send_num"
                     label="待发运量"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     prop="send_num"
                     label="已发运量"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     prop="online_num"
                     label="在途运量"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     prop="finish_num"
                     label="交付运量"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     label="及时交付运量"
                     sortable>
                     <template slot-scope="scope">
                        <span style="">{{ scope.row.finish_num -  scope.row.overtime_unsend_num}}</span>
                     </template>
                  </el-table-column>
                  <el-table-column
                     label="交付及时率"
                     sortable>
                     <template slot-scope="scope">
                        <span style="">{{ scope.row.finish_num == 0 ? 0 : (scope.row.finish_num -  scope.row.overtime_unsend_num) / scope.row.finish_num }}%</span>
                        <span class="warning">{{ scope.row.warning }}</span>
                     </template>
                  </el-table-column>
                  <el-table-column
                     prop="overtime_unsend_num"
                     label="超时未发"
                     sortable>
                  </el-table-column>
                  <el-table-column
                     prop="overtime_unfinish_num"
                     label="超时未到"
                     sortable>
                  </el-table-column>
                    <el-table-column
                      label="操作">
                      <template slot-scope="scope">
                        <span @click="handleEdit(scope.$index, scope.row)">查看超时&nbsp;&gt;</span>
                      </template>
                    </el-table-column>
             </el-table>
          </el-tab-pane>
        </el-tabs>
    </div>
  </div>
</template>
<script>
  import { getMonitorByGroupOrgCodeData } from '../../../utils/api/monitoring/transport'
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
       this.getMonitorByGroupOrgCodeData()
    },
    methods: {
        //查看超时页面跳转
    toTath(val,index){
         this.$router.push({path:'/monitoring-exception',query:{name:'超时未发，超时未到'}})
         this.message=false
    },
      closeBtn(){
        this.$emit('showTab',false)
      },
      getMonitorByGroupOrgCodeData() {
         var table = {
            table: 'org_code'
         }
         getMonitorByGroupOrgCodeData(table).then(res => {
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
         getMonitorByGroupOrgCodeData(table).then(res => {
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
