<template>
    <div style="height:100%; line-height: 100%;" v-show="!showEmpty||!showEmptys">
        <div  class="empty" v-show="!showEmpty"></div>
        <div class="emptys" v-show="!showEmptys">无数据加载</div>
    </div>    
</template>
<script>
export default {
    data(){
           return{

           }
    },
    props: {showEmpty:{
         default: true
    },showEmptys:{
         default: true
    }
    },
    componed:{
        
    },
    created(){
        // alert(this.showEmpty)
        // alert(this.showEmptys)
        // alert(this.showEmptyMap)
    }
}
</script>
<style lang="scss" scoped>
      .empty{
          width: 100px;
          height: 100px;
          line-height: 80px;
          text-align: center;
          position: absolute;
          left: 50%;
          top:50%;
          margin-left: -50px;
          margin-top: -50px;
          background: url('/static/img/truckload/box.png') no-repeat;
          background-size: 100%;
          
      }
      .emptys{
          width: 100%;
          height: 100%;
          text-align: center;
          background-color: rgb(216, 213, 213);
          opacity: 0.6;
              display: flex;
      justify-content: center;
           align-items: center;
           padding: 20px 0;
        //   position: absolute;
        //   left: 50%;
        //   top:50%;
        //   margin-left: -50px;
        //   margin-top: -50px;
        //   background: url('/static/img/truckload/box.png') no-repeat;
        //   background-size: 100%;
          
      }
      
</style>
