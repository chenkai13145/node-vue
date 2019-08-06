<template>
  <div id="app">
    <el-row>
    <top-nav></top-nav>
    </el-row>
    <el-row>
    <router-view></router-view>
    </el-row>
  </div>
</template>
<script>
import TopNav from "./views/nav/topnav.vue";
import jwt_decode from 'jwt-decode';

export default {
  data() {
    return {};
  },
  components: {
    topNav: TopNav
  },
  created() {
    if (localStorage.eToken) {
     const decode = jwt_decode(localStorage.eToken);
      this.$store.dispatch("setAuthtoken", !this.isEmpty(decode));
      this.$store.dispatch("setuser", decode);
    }
  },
  methods:{
     isEmpty(value){
              return (value===undefined || value===null ||
                    (typeof value==="object"&&Object.keys(value).length==0) ||
                    (typeof value==="string"&&value.trim().length==0)
              );
      }
  }
};
</script>


<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

</style>
