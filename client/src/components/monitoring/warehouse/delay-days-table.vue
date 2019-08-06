<template>
<div class="table-style">
<el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      width="60"
      prop="car_vin"
      label="VIN">
    </el-table-column>
     <el-table-column
      width="100"
      prop="factory_name"
      label="客户">
    </el-table-column>
     <el-table-column
      prop="org_name"
      width="100"
      label="投资企业">
    </el-table-column>
    <el-table-column
      label="延迟出库天数"
      class-name="lastTd">
      <template slot-scope="scope">
         <p :style="{width:scope.row.carvin_outtime_daynum/max()*100+'%'}"></p><span>{{scope.row.carvin_outtime_daynum}}</span>
         <div class="line1"><span class="spanval">0</span></div>
         <div class="line2"><span class="spanval">{{numberFn(1/5)}}</span></div>
         <div class="line3"><span class="spanval">{{numberFn(2/5)}}</span></div>
         <div class="line4"><span class="spanval">{{numberFn(3/5)}}</span></div>
         <div class="line5"><span class="spanval">{{numberFn(4/5)}}</span></div>
         <div class="line6"><span class="spanval">{{max()}}</span></div>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>
<script>
import {getOutTimeOutCarVin} from '../../../api/monitor/warehouse'
  export default {
    data() {
      return {
        tableData: [
            {
              car_vin: 2121343,
              factory_name: '广汽传祺',
              org_name : '商贸物流',
              carvin_outtime_daynum: 11
            },
            {
              car_vin: 2121343,
              factory_name: '广汽传祺',
              org_name : '商贸物流',
              carvin_outtime_daynum: 22
            },
            {
              car_vin: 2121343,
              factory_name: '广汽传祺',
              org_name : '商贸物流',
              carvin_outtime_daynum: 18
            },
            {
              car_vin: 2121343,
              factory_name: '广汽传祺',
              org_name : '商贸物流',
              carvin_outtime_daynum: 0
            },
            {
              car_vin: 2121343,
              factory_name: '广汽传祺',
              org_name : '商贸物流',
              carvin_outtime_daynum: 5
            },
            {
              car_vin: 2121343,
              factory_name: '广汽传祺',
              org_name : '商贸物流',
              carvin_outtime_daynum: 10
            },
            {
              car_vin: 2121343,
              factory_name: '广汽传祺',
              org_name : '商贸物流',
              carvin_outtime_daynum: 15
            },
            {
              car_vin: 2121343,
              factory_name: '广汽传祺',
              org_name : '商贸物流',
              carvin_outtime_daynum: 1
            },
            {
              car_vin: 2121343,
              factory_name: '广汽传祺',
              org_name : '商贸物流',
              carvin_outtime_daynum: 3
            }
        ]
      }
    },
     props:{
    mapQuery:{
      type:Object
    }
  },
    created() {
      this.requestList()
    },
    methods: {
      max(){
            let arr=[]
            let maxval=''
             this.tableData.forEach(item=>{
               arr.push(item.carvin_outtime_daynum)
             })
            if(arr.length>0){
             maxval=Math.max.apply(Math,arr);
              return Number(maxval) 
            }
           
      },
      numberFn(val){
        return Math.floor(this.max()*val) 
      },
      requestList(){
        getOutTimeOutCarVin().then(res=>{
          console.log(res)
          if(res.data.msg==='success'){
              this.tableData=res.data.data
          }
        })
        .catch(err=>{
          this.$emit('showEmptyFn',{type:'DelayDaysTable',show:false})
        })
      }
    }
  }
</script>
<style lang="scss">
.table-style {
   .lastTd{
        position: relative;
        .cell{
        display: flex;
        align-items: center;
        flex-flow: wrap;
        >span{
            font-size: 12px;
            color: rgb(86, 102, 234);
            line-height: normal;
            min-width: 30px;
            text-align: right;
        }
        >p{
            height: 14px;
            background: rgb(86, 102, 234);
            position: relative;
            z-index: 9;
        }
        >div{
            width: 1px;
            height: 100%;
            background: #e2e2ec;
            position: absolute;
            top: 0;
        }
        .line1{
            left: 0;
        }
        .line2{
            left:20%;
        }
        .line3{
            left:40%;
        }
        .line4{
            left:60%;
        }
        .line5{
            left:80%;
        }
        .line6{
            left:100%;
        }
        }
   }
   
.el-table{
  overflow: visible!important;
  .cell{
     padding: 0!important;
  }
  th{
    height: 40px!important;
    text-align: center!important;
    color: #3c3c4f!important;
  }
  td{
    height: 90px!important;
    text-align: center!important;
    font-size: 12px;
    color: #39394d!important;
  }
  .el-table__body-wrapper{
      overflow: visible;
  }
  td, th.is-leaf{
    border: 0!important;
  }
}
.el-table::before{
    display: none;
}
.spanval{
    display: none;
  }
.el-table tbody tr:last-child .lastTd{
    .spanval{
       display: inline-block;
       position: absolute;
       bottom: -25px;
       transform: translateX(-50%);
       white-space: nowrap;
       text-align: center;
       color: #aaaab9;
    }
   
}
}
</style>