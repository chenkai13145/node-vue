<template>
    <el-row :gutter="12">
  <el-col :span="8" v-for="(item,index) in tabledata" :key="index">
    <el-card shadow="hover">
         <div class="title">
               <div>
                      <p>管理部门</p>
                      <p>{{item.subunit}}</p>
                 </div>
                 <div>
                        <p>负责人</p>
                        <p>{{item.principal}}</p>
                 </div>
               
         </div>
    </el-card>
  </el-col>
  
</el-row>
</template>

<script>
export default {
    data(){
     return{
         kjk:'Jhsjad浇洒较大'
     }
    },
    create(){
        console.log('kkkkkk')
    },
    props:["tabledata"]

}
</script>

<style lang="scss" scoped>
      .title {
         display:flex;
         justify-content: space-around;

      }
      .title div p:first-child{
          color: rgb(138, 136, 136);
          font-size: 13px
      }
      .title div p:last-child{
          padding-top: 6px;
      }
</style>
