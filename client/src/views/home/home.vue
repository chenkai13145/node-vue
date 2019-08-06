<template>
    <div class="home">
            <div class="container">
                <div class="cals">
                 <h1 class="title">web在线</h1>
                 <p class="lead">专注于web前端,用心学习,不断完善提高自己</p>
                 </div>
            </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

.home{
    background: url('../../assets/showcase.png') no-repeat;
    
    height: 100%;
    margin-top: 40px;
    margin-left: 150px;
    
    background-size: 100% 100%;
    .container{
        width: 100%;
        height: 100%;
        text-align: center;
        background-color: rgba(0, 0, 0,0.7 );
        position: relative;
        .cals{
            position: absolute;
            top:100px;
            left: 50%;
            transform: translateX(-50%);
        }
        .title{
            color: #fff;
            text-align: center;
            padding: 10px 0;
        }
        .lead{
             color: #fff;
            padding: 10px 0;
        }
    }
}
</style>
