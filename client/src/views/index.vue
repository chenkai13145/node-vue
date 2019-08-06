<template>
    <div class="index">
        
          <NavLeft></NavLeft>
           
           <div class="contants">
          <router-view></router-view>
           </div>
      
    </div>
</template>
<script>
import NavLeft from './nav/leftnav';
export default {
    components:{
        NavLeft
    },
     created(){
  },
}
</script>
<style lang="scss" scoped>
.index{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    .contants{
          overflow-y: scroll;
          height:calc(100vh);
          .gac-button-filtrate{
              display: none !important;
          }
    }
}

</style>

