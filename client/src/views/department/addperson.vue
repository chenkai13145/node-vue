<template>
  <div class="person">
    <div class="return">
      <span>{{this.$route.query.name}}</span>
      <div class="button" @click="goback">返回</div>
    </div>
    <el-form
      :model="ruleForm"
      style="width:400px"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <!-- 部门名称 必填 -->
      <el-form-item label="员工编号：" prop="number">
        <el-input size="small" type="number" v-model="ruleForm.number" placeholder="请输入员工编号"></el-input>
      </el-form-item>
      <el-form-item label="姓名：" prop="name">
        <el-input size="small" v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="电话：" prop="tel">
        <el-input size="small" v-model="ruleForm.tel" placeholder="请输入电话"></el-input>
      </el-form-item>
      <el-form-item label="职位：" prop="job">
        <el-input size="small" v-model="ruleForm.job" placeholder="请输入职位"></el-input>
      </el-form-item>
      <el-form-item label="邮箱：" prop="email">
        <el-input size="small" v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="small" @click="resetForm('ruleForm')">取消</el-button>
        <el-button size="small" type="primary" @click="submitForm('ruleForm')">确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data(){
    return {
      ruleForm: {
        name:this.$route.query.data.name || "",
        number:this.$route.query.data.number || "",
        tel:this.$route.query.data.tel || "",
        job:this.$route.query.data.job || "",
        email:this.$route.query.data.email || ""
      },
      user:this.$store.getters.user,
      id:this.$route.fullPath.split('=')[4].split('&')[0],
      child_id:this.$route.fullPath.split('=')[5],
      rules: {
        number: [
          {
            required: true,
            message:"不能为空",
            trigger: 'blur'
          },
          {
            message:"编号超出范围",
            trigger:'blur'
          }
        ],
        email: [
          {
            type: 'email',
            message:'邮箱格式不正确',
            trigger: 'blur'
          }
        ],
        
        job: [
          {
            required: true,
            message: "职位不能为空",
            trigger: 'blur'
          },
          {
            min: 2,
            max: 16,
            trigger: 'blur'
          }
        ],
        name: [
          {
            required: true,
            message: "负责人不能为空",
            trigger: 'blur'
          },
          {
            min: 2,
            max: 4,
            message: '长度在 2 到 4 个字符',
            trigger: 'blur'
          }
        ],
        tel:[
          {
            required:true,
            message:"不能为空",
            trigger:'blur'
          }
        ]
      }
    }
  },
  methods:{
    goback(){
      console.log(this.$route.query)
      if(this.user.identification=="manager"){
      this.$router.push({path:'/departperson',query:{data:this.$route.query.data,id:this.id}})
      }else{
         this.$message({
          type:'error',
          message:'没有权限'
        })
      }
    },
    //添加提交
    submitForm(labal){	
      if(this.user.identification=="manager"){
      let method=this.$route.query.methods
      if(method=='post'){
              this.$refs[labal].validate((valid)=>{
             if(valid){
                this.$axios.post('/api/department/children/'+this.id,this.ruleForm).then(res=>{
                  if(res.data.success){
                    this.$message({
                      type:'success',
                      message:res.data.msg
                    })
                    this.$router.push({path:'/departperson',query:{data:this.$route.query.data,id:this.$route.query.data._id}})
                  }
                })
             }
           })
      }else if(method=='put'){
          this.$refs[labal].validate(valid=>{
            if(valid){
              this.$axios.put('/api/department/children/'+this.id+'/'+this.child_id,this.ruleForm).then(res=>{
                   if(res.status==200){
                     if(res.data.success){
                       this.$message({
                         type:'success',
                         message:res.data.msg
                       })
                       console.log(this.$route.query.data)
                    this.$router.push({path:'/departperson',query:{data:this.$route.query.data,id:this.id}})
                     }else{
                       this.$message({
                         type:'error',
                         message:res.data.msg
                       })
                     }
                   }
              })
            }
          })
      }
      }else{
        this.$message({
          type:'error',
          message:'没有权限'
        })
      }
    },
    resetForm(formName) {
				this.$refs[formName].resetFields();
			}

  },
 
}
</script>

<style lang="scss" scoped>
.person {
  margin: 40px 0 0 150px;
  .perform {
    width: 400px;
    input {
      border-radius: 4px;
      outline: none;
      display: inline-block;
      padding: 4px 6px;
    }
  }
  .return {
    height: 50px;
    background: #f6f6f6;
    border-bottom: 1px solid #d7d7d7;
    span{
      display:inline-block;
      margin: 10px;
      cursor: pointer;
    }
    .button {
      width: 100px;
      height: 28px;
      float: right;
      margin: 11px 36px 0 0;
      border: 1px solid #787878;
      border-radius: 4px;
      text-align: center;
      line-height: 28px;
      font-size: 12px;
      cursor: pointer;
    }
  }
}
</style>