<template>
    <!--底部提示-->
    <div class="bottomTisi">
        <div class="bottom-left">
            <span></span>
            {{juheStatus}}
        </div>
        <div class="bottom-right">
            <div v-for="(item, index) in tipStatus" :key="index">
            <span :class="index==0 ? 'green': (index == 1 ? 'blue' : 'gray')"></span>
            {{item}}
            </div>
        </div>
    </div>
    <!--底部提示-->
</template>

<script>
export default {
    name: 'bottomTip',
    props: {
        tipStatus: {
            type: Array,
            required: true
        },
        juheStatus: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.bottomTisi {
  position: absolute;
  bottom: 36px;
  background-color: #fff;
  display: flex;
  padding: 9px 39px;
  font-size: 13px;
  border: 0 solid #E4E5EC;
  box-shadow: 0 3px 4px 0 rgba(98,99,118,0.08);
  left: 48%;
  span {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background-color: #DA4F61;
    margin-right: 7px;
  }
  .bottom-left {
    padding-right: 26px;
    border-right: 1px solid #E0E0EB;
  }
  .bottom-right {
    display: flex;
    div {
      margin-left: 26px;
      .green {background-color: #1FAF70;}
      .blue {background-color: #369BE9;}
      .gray {background-color: #B3AEC7;}
    }
  }
}
</style>
