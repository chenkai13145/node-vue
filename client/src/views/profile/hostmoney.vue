<template>
  <div class="hostmoney">
      <!-- 顶部区域 -->
    <el-row class="top">
      <el-col :span="22">
        <div class="block">
          <span class="demonstration">筛选日期时间: </span>
          <el-date-picker
            v-model="value1"
            type="datetime"
            placeholder="选择开始日期时间"
            align="right"
          ></el-date-picker>
        </div>
          <div class="block">
          <span class="demonstration">----</span>
          <el-date-picker
            v-model="value2"
            type="datetime"
            placeholder="选择结束日期时间"
            align="right"
          ></el-date-picker>
        </div>
        <el-button style="margin-left:10px" type="success" @click="filterdate()" :disabled="disabledss">成功按钮</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="dialogVisible()" plain>添加</el-button>
      </el-col>
    </el-row>
    <!-- 内容区域 -->
    <el-table v-if="tableData"  :default-sort ="{prop: 'date', order: 'descending'}" :data="tableData" style="width: 100%">
      <el-table-column label="日期" sortable align="center" prop="date" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{ scope.row.date | dates}}</span>
        </template>
      </el-table-column>
       <el-table-column label="收支类型" align="center" prop="type" width="180">
        <template slot-scope="scope">
         
          <span>{{ scope.row.type }}</span>
        </template>
      </el-table-column>
       <el-table-column label="收支描述" align="center" prop="desribe" width="180">
        <template slot-scope="scope">
         
          <span>{{ scope.row.desribe }}</span>
        </template>
      </el-table-column>
       <el-table-column label="支出" align="center" prop="output" width="180">
        <template slot-scope="scope">
          <span style="color:red">-{{ scope.row.output }}</span>
        </template>
      </el-table-column>
       <el-table-column label="收入" align="center" prop="input" width="180">
        <template slot-scope="scope">
         
          <span style="color:green">{{ scope.row.input }}</span>
        </template>
      </el-table-column>
      <el-table-column label="账户现金" align="center" prop="cash" width="180">
        <template slot-scope="scope">
         
          <span>{{ scope.row.cash }}</span>
        </template>
      </el-table-column>
       <el-table-column label="备注" align="center" prop="remark" width="180">
        <template slot-scope="scope">
         
          <span>{{ scope.row.remark }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
   <!-- 对话框区域 -->
   <dia-log :dialog="dialog" :dataform="dataform" @updata="creat()"></dia-log>
   <!-- 分页 -->
   <page style="position:absolute; left:60%; padding:20px;" :pagedata="pagedata" @changsize="changs" @changpage="changpages"></page>
  </div>
</template>
<script>
import DiaLog from '../../components/moneylog'
import Page from '../../components/page'
export default {
  data() {
    return {
      value2:'',
      value1:'',
      tableData:[],
      alltableData:[],
      alltableDatas:[],
      dialog:{
          show:false,
          title:"",
          trueoff:"add"
      },
       dataform: {
        cash: "",
        output: "",
        input: "",
        desribe: "",
        type: "",
        remark: ""
      },
      pagedata:{
        total: 100,//总数
        currentPage2: 1,//当前页数
        layout:'total, sizes, prev, pager, next, jumper',
        num:5,//每页显示数目
        arr:[5,10,15,20]
      },
      users:this.$store.getters.user
    }
  },
  created() {
   this.creat();
  },
  computed:{
         dialogVisibles(){
             return this.dialogVisible
         },
         disabledss(){
           let disableds=this.value1==''|| this.value2==''||this.value2==null ||this.value1==null
           return disableds
         },
         user(){
           return this.$store.getters.user
         }
  },

  methods:{
      //编辑时修改父传值的值
      handleEdit(index,da2){
        if(this.users.identification=="manager"){
             this.dialog.show=true
             this.dialog.title="修改资金信息"
             this.dataform=da2
             this.dialog.trueoff="edit"
        }else{
          this.$message({
            message:"没有权限",
            type:"error"
          })
           return;
        }
        
      },
      //删除
      handleDelete(index,da2){
          if(this.users.identification=="manager"){
            if(confirm(`确定删除?`)){
                this.$axios.delete('/api/profile/del/'+da2._id).then(res=>{
                  if(res.data.success){
                    this.$message({
                      type:"success",
                      message:res.data.msg
                    })
                    let nums=this.alltableDatas.findIndex(item=>{
                      return da2._id==item._id
                    })
                    let num=this.tableData.findIndex(item=>{
                      return da2._id==item._id
                    })
                    this.tableData.splice(num,1)
                    this.alltableDatas.splice(nums,1)
                    if(this.tableData.length==0){
                      this.meta()
                    }
                    this.pagedata.total=this.alltableDatas.length
                  }
                }) 
            }
          }else{
            this.$message({
            message:"没有权限",
            type:"error"
          })
          return;
        }
      },
      //添加时修改要传的值
      dialogVisible(){
         if(this.users.identification=="manager"){
          this.dialog.show=true
          this.dialog.title="添加资金信息"
          this.dialog.trueoff='add'
         }else{
            this.$message({
            message:"没有权限",
            type:"error"
          })
           return;
         }
      },
      creat(){
        //获取全部数据
        this.$axios.get('/api/profile/all').then(res=>{
        if(res.status==200){
            this.tableData=res.data
            this.alltableData=res.data
            this. alltableDatas=res.data
            //分页初始化
           this.meta()
        }
    })
      // this.$axios.get('https://ditu.amap.com/service/regeo?longitude=121.04925573429551&latitude=31.315590522490712').then(res=>{
      //   console.log(res)
      // })
  },
      //改变一页显示的数目
      changs(val){
         this.tableData=this.alltableData.filter((item,index)=>{
           this.pagedata.num=val
           return index<val
         })
      },
      //跳转你
      changpages(val){
            this.pagedata.currentPage2=val
            this.tableData=this.alltableDatas.filter((item,index)=>{
              let pagecount=val*this.pagedata.num
              let pagemu=(val-1)*this.pagedata.num
              return pagemu<(index+1) && (index+1)<=pagecount
           })
      },
      //时间筛选
      filterdate(){
        const sTime=this.value1.getTime();
        const eTime=this.value2.getTime();
        this.alltableDatas=this.alltableData.filter((item,index)=>{
             let date=new Date(item.date)
             let time=date.getTime()
             return time>=sTime && time<=eTime
        })
        this.meta()
      },

      meta(){
          this.pagedata.total=this.alltableDatas.length
            this.tableData=this.alltableDatas.filter((item,index)=>{
              return index<this.pagedata.num
            })
      }
  },
  components:{
      DiaLog,
      Page,
  }
};
</script>
<style lang="scss" scoped>
.hostmoney{
    margin-top: 60px;
    margin-left: 170px !important;
    background-color: #fff;
    padding: 20px;
    .top{
  
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 24px;
        margin-bottom: 20px;
        background-color: #ccc;
        border: 2px solid #ccc;
        border-radius: 4px;
        // box-sizing: border-box;
        box-sizing: content-box;
         .block{
           display: inline-block !important;
         }
    }
}
</style>
