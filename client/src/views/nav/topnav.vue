<template>
  <div class="header">
    <div class="lefttop">
      <img v-if="this.$store.getters.isAuthtoken" class="logo" src="../../assets/logo.png">
      <span>管理系统MT</span>
    </div>
    <ul v-show="!this.$store.getters.isAuthtoken">
      <router-link tag="li" to="/login">登录</router-link>
      <router-link tag="li" to="/register">注册</router-link>
    </ul>
   
    <el-dropdown class="user" v-if="user" v-show="this.$store.getters.isAuthtoken" >
        <span class="el-dropdown-link">
            <img class="avator" :src="user.avator">
             欢迎<span>{{user.name}}</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
         <router-link tag='span' to="/person"><el-dropdown-item>个人信息</el-dropdown-item></router-link>
          <el-dropdown-item v-on:click.native="Cancel()">注销</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
  
  </div>
</template>
<script>
export default {
    computed:{
        user(){
            return this.$store.getters.user
        }
    },
    methods:{
        Cancel(){
          //清除eToken
           if(!localStorage.removeItem('eToken')){
              //清除store用户信息
               this.$store.dispatch('clear')
               //跳转
               this.$router.push('/login')
           }
        }
    }
    
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 40px;
  background-color: #545c64;
  color: #fff;
  position: fixed;
  z-index: 10;
  .user{
      float:right !important ;
      padding-top: 10px;
      color: #fff;
      .avator{
          width: 24px;
          height: 24px;
          border-radius: 50%;
          vertical-align:middle;
      }
      .el-dropdown-link{
        span{
          color: blue !important;
        }
      }
  }
  .user:hover{
      outline: none;
  }

  ul {
    padding: 10px;
    float: right;
    li {
      display: inline-block;
      margin: 0 16px;
      cursor: pointer;
    }
  }
  .lefttop {
    padding-top: 10px;
    margin-left: 10%;
    display: inline-block;
    span {
      display: inline-block;
      letter-spacing: 4px;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
     
    }
    .logo {
      width: 20px;
      height: 20px;
      vertical-align: middle;
    }
  }
}
</style>
