<template>
    <div class="message">
        <div><icon-svg :name="messageText.icons" style="vertical-align: middle; margin-right:4px;" /><span>{{messageText.text}}</span></div>
    </div>
</template>
<script>
export default {
data() {
    return {
    }
},
props:["messageText"]
}
</script>
<style lang="scss" scoped>
.message{
    margin: auto;
    position: absolute;
    left: 50%;
    top:10px;
    transform: translateX(-50%);
    border-radius: 10px;
    div{
        padding: 0px 20px;
        background-color: #fff;
        height: 40px;
        line-height: 40px;
        border: 1px solid #ccc;
        text-align: center;
        box-shadow: 0 0 2px #ccc;
        border-radius: 6px;
        font-size: 14px;
        span{
            display: inline-block;
            height: 30px;
            line-height: 30px;
        }
    }
}
</style>
