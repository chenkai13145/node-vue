<template>
  <div class="login">
    <div class="from_container">
      <span class="title">凯云后台管理系统</span>
      <el-form
        :model="login"
        :rules="rules2"
        ref="login"
        label-width="100px"
        class="loginFrom"
      >
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="login.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="login.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <div class="row">
        <el-form-item class="btns">
          <el-button type="primary" class="submit_btn" @click="submitFrom('login')">登录</el-button>
        </el-form-item>
        <div class="tiparea">
            <p>还没有账号?现在<router-link to="/register">注册</router-link></p>
        </div>
        </div>
      </el-form>
    </div>
    <div class="login_meng" v-if="trunof">
     <div class="img_login">
         <cap-tcha @loginFn="loginFn"></cap-tcha>
     </div>
    </div>
  </div>
</template>
<script>
import jwt_decode from 'jwt-decode';
import CapTcha from './model/captcha'

export default {
  data() {
    return {
      login: {
        email: "",
        password: ""
      },
      rules2:{
        email: [{ type:"email",required:true,message:"邮箱格式不合法", trigger: "blur" }],
        password: [{required:true,message:"密码不能为空", trigger: "blur" },{min:4,max:16,message:"密码长度4到16位之间",trigger:"blur"}]
      },
      trunof:false
    };
  },
  methods:{
      submitFrom(loginFrom){
         this.$refs[loginFrom].validate(valid=>{
             if(valid){
                 this.trunof=true
             }
         })
      },
      isEmpty(value){
              return (value===undefined || value===null ||
                    (typeof value==="object"&&Object.keys(value).length==0) ||
                    (typeof value==="string"&&value.trim().length==0)
              );
      },
      loginFn(){
        this.trunof=false
           const data=this.login
                 this.$axios.post('/api/users/login',data)
                            .then(res=>{
                               if(res.data.success){
                                   //登录成功
                                   this.$message({
                                       message:res.data.msg,
                                       type:"success"
                                   })
                                   const {token}=res.data;
                                   localStorage.setItem('eToken',token);
                                   //解析token
                                   const decode=jwt_decode(token)
                                   
                                   //token存储到vuex
                                   this.$store.dispatch('setAuthtoken',!this.isEmpty(decode));
                                   this.$store.dispatch('setuser',decode);
            // console.log(this.$router)
                                   this.$router.push('/index')
                               }else{
                                   //登录失败
                                   this.$message({
                                       message:res.data.msg,
                                       type:"error"
                                   })
                               }
                            })
      }
  },
  components:{
    CapTcha,
  },
  created(){
     
  },
  computed:{
    // trunof(){
      
    // }
  }
};
</script>
<style lang="scss" scoped>
.login {
  height: 100vh;
  background: url("../../assets/bg.png") no-repeat;
  background-size: cover;
  .login_meng{
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    background: rgba(0,0,0,.7);
     .img_login{
         position: absolute;
         top:30%;
         left: 50%;
         transform: translateX(-50%);
  }
  }
 
  .loginFrom{
      position: relative;
    
  }
  
  .from_container {
    padding: 100px 10px;
    width: 350px;
    margin: auto;
    position: relative;
    .title {
      padding: 20px 10px;
      font-size: 26px;
      position: relative;
      display: inline-block;
      left: 50%;
      transform: translateX(-50%);
    }
   
    .row{
        display: flex;
        justify-content:space-between;
         .tiparea{
        font-size: 10px;
        display: inline;
        padding-top: 10px;
        a{
            color: blue;
        }
       }

    }
  }
}
</style>
