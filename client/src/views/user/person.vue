<template>
    <div class="person">
         <el-row type="flex" class="row-bg" justify="center">
               <el-col :span="8">
                        <div class="user">
                              <img :src="user.avator">
                        </div>
               </el-col>
               <el-col :span='16' class="ring">
                   <div class="adper">
                        <p><span class="icon-remove_circle_outline"></span>{{user.identification=="manager"?'管理员':'普通员工'}}</p>
                        <p><span class="icon-favorite"></span>{{user.name}}</p>
                        <p class="pass" @click="showword=!showword">修改密码</p>
                        <transition>
                            <pass-word v-show="showword"></pass-word>
                        </transition>
                   </div>
               </el-col>
         </el-row>
    </div>
</template>
<script>
import PassWord from './password'
export default {
    data(){
        return{
            showword:false
        }
    },
    computed:{
        user(){
            return this.$store.getters.user
        }
    },
    created(){
    },
    components:{
        PassWord,
    },
    methods:{
    
    }
}
</script>
<style lang="scss" scoped>
.person{
     margin-top: 40px;
   margin-left: 150px;
   .user{
       text-align: center;
       margin-top:50%;
   }
   .ring{
    background-color:rgba(0, 0, 0,.7 );
    height: 100vh;
   }
   .adper{
       position: absolute;
       top: 50%;
      p{
          padding: 10px;
      }
      .pass{
          color: #fff;
          cursor: pointer;
          text-decoration:underline;
      }
   }
   .v-enter{
         transform: translateX(33px);
         opacity: 0;
   }
   .v-leave-to{
       transform: translateX(-33px);
       opacity: 0;
   }
  .v-enter-active,.v-leave-active{
       transition: 2s;
   }
}
</style>
