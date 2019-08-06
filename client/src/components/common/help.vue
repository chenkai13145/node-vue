<!--
/**
* @name help
* @module c:\SpeedinessDocument\vuesys\src\components\common\help.vue
* @description 帮助说明文案
* @author wind-lc
* @date 2019-05-14
* @param {String} helpText  文案内容
* @example <Help :helpText="helpText"></Help>
*/
-->
<template>
  <div class="help-wrap"
       @mouseover="help = true"
       @mouseout="help = false">
    <icon-svg name="help"></icon-svg>
    <transition name="fade">
      <p v-show="help"><pre>{{helpText}}</pre></p>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'help',
  components: {

  },
  props: {
    helpText: {
      type: String
    }
  },
  data () {
    return {
      help: false
    }
  }
}
</script>

<style lang="scss">
$color-1: #39394d;
.help-wrap {
  width: 12px;
  height: 12px;
  position: relative;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
  p {
    position: absolute;
    top: -10px;
    left: 25px;
    background-color: $color-1;
    color: #fff;
    font-size: 12px!important;
    padding: 10px;
    width: auto;
    width: 141px;
    z-index: 10;
    line-height: normal;
    &::before {
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      background-color: $color-1;
      transform: rotate(45deg);
      position: absolute;
      top: 12px;
      left: -4px;
    }
    >pre{
      white-space: pre-wrap;
      margin: 0;
    }
  }
}
</style>
