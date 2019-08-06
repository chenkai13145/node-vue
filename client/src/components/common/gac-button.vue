<!--
/**
* @name gac-button
* @module c:\SpeedinessDocument\vuesys\src\components\common\gac-button.vue
* @description 按钮
* @author wind-lc
* @date 2019-05-14
* @param {String} type  按钮类型(对比：contrast，查看： look)
* @example <GacButton type="look">查看超时</GacButton>
*/
-->
<template>
  <button class="gac-button"
          :class="'gac-button-' + type"
          ref="button">
    <icon-svg v-if="type === 'contrast'"
              name="contrast"></icon-svg>
    <span>
      <slot></slot>
    </span>
    <icon-svg v-if="type === 'contrast'"
              name="arrow-5-right"></icon-svg>
    <icon-svg v-if="type === 'look'"
              name="arrow-6-right"></icon-svg>
  </button>
</template>

<script>
export default {
  name: 'gac-button',
  components: {

  },
  data () {
    return {
      type: ''
    }
  },
  mounted () {
    this.type = this.$refs.button.getAttribute('type')
  }
}
</script>

<style lang="scss">
$color-3: #d92430;
.gac-button {
  outline: none;
  background-color: #fff;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  padding: 0 4px;
  cursor: pointer;
}
.gac-button-contrast {
  border: 1px solid $color-3;
  color: $color-3;
  span {
    margin: 0 3px;
    font-size: 12px;
  }
  svg:nth-of-type(1) {
    height: 12px;
    width: 12px;
  }
  svg:nth-of-type(2) {
    height: 8px;
    width: 8px;
  }
}
.gac-button-look {
  border: 1px solid #babace;
  color: #39394d;
  span {
    font-size: 12px;
    margin: 0 2px;
  }
  svg {
    height: 8px;
    width: 8px;
  }
}
</style>
