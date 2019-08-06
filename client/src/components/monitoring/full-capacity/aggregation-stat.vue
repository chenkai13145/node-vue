<template>
     <div class="AggregationStatBox">
        <div class="statL">
          <i style="background:#008cff;"></i>聚合状态
        </div>
        <div class="statR">
          <b></b>
          <span><i style="background: #1FAF70;"></i>行使</span>
          <span><i style="background: #369BE9;"></i>静止</span>
          <span><i style="background: #B3AEC7;"></i>离线</span>
        </div>
      </div>
</template>

<script>
export default {
  name: 'aggregation-stat',
  components: {
  },
  props: {
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.AggregationStatBox{
  position: absolute;
  bottom:36px;
  left:0;
  right: 0;
  margin: auto;
  height: 36px;
  width: 329px;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: PingFangSC-Regular;
  font-size: 13px;
  color: #39394D;
  letter-spacing: 0;
  box-shadow: 0 3px 4px 0 rgba(98,99,118,0.08);
  i{
    display:inline-block;
    width: 6px;
    height: 6px;
    border-radius: 999px;
    margin: 0 6px 0 26px;
  }
  .statL{
    display: flex;
    align-items: center;
  }
  .statR{
    display: flex;
    position: relative;
    span{
      display: flex;
      align-items: center;
    }
    b{
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 1px;
        height: 20px;
        background: #E0E0EB;
        margin: auto;
    }
  }
}
</style>

