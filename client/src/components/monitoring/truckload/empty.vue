<template>
     <div class="empty">
         <div class="box"></div>
         查询无结果，请确认查询条件
     </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
  .empty{
          height: 40vh;
          width: 200px;
          margin: auto;
          text-align: center;
          color: #39394D;
          font-size:14px;
          .box{
             width: 152px;
             height: 100px;
             background: url('/static/img/truckload/box.png') no-repeat;
             background-size: 100% 100%;
             margin:20px auto;
          }
        
      }
</style>

