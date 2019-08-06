<!--
/**
* @name gac-button-a
* @module c:\SpeedinessDocument\vuesys\src\components\common\gac-button-filtrate.vue
* @description 筛选组件
* @author wind-lc
* @date 2019-05-15
* @example 调用示例
*/
-->
<template>
  <div class="gac-button-filtrate">
    <!-- 触发按钮 -->
    <button class="gac-button-filtrate-start">
      <icon-svg name="filtr"></icon-svg>
      <span>筛选</span>
    </button>
    <!-- 触发按钮 -->
  </div>
</template>

<script>
export default {
  name: 'gac-button-filtrate',
  components: {

  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
.gac-button-filtrate {
  height: 44px;
   display: none !important;
}
.gac-button-filtrate-start {
  background-color: #fff;
  outline: none;
  border: none;
  color: #39394d;
  height: 100%;
  font-size: 14px;
  box-shadow: 0 3px 4px 0 rgba(98, 99, 118, 0.08);
  display: flex;
  align-items: center;
  padding: 0 13px;
  cursor: pointer;
  .icon-svg {
    margin-right: 7px;
  }
}
</style>
