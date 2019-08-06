<!--
/**
* @name top-filtration
* @module c:\SpeedinessDocument\vuesys\src\components\monitoring\transport\top-filtration.vue
* @description 顶部筛选和搜索
* @author wind-lc
* @date 2019-05-15
* @param {Object} param1  参数说明
* @param {String} param2   参数说明
* @return {Event} query   参数说明
* @example 调用示例
*/
-->
<template>
  <div class="top-filtration">
    <!-- 搜索 -->
    <div class="top-search-wrap" v-show="hideSearch">
      <input type="text"
             placeholder="请输入VIN/业务订单/运单/车牌/车厢号/船名" v-model="searcgVal">
      <button @click="search()">搜索</button>
    </div>
    <!-- 搜索 -->
    <!-- 筛选 -->
    <div @click.stop>
      <GacButtonFiltrate @click.native="FilterBtn"></GacButtonFiltrate>
      <FilterBox id="box" ref="box" v-bind:message="FilterShow" @FilterSearch="FilterSearch" v-if="FilterShow" v-on:FilterShow="Filter"></FilterBox>
    </div>
    <!-- 筛选 -->
  </div>
</template>

<script>
import GacButtonFiltrate from '../../../components/common/gac-button-filtrate'
import FilterBox from '../../../components/monitoring/transport/filter-box'
export default {
  name: 'top-filtration',
  components: {
    GacButtonFiltrate,
    FilterBox
  },
  props: {
    hideSearch: Boolean
  },
  data () {
    return {
      FilterShow: false,
      searcgVal:''
    }
  },
   methods: {
    //  筛选
    FilterBtn(){
      this.FilterShow =! this.FilterShow
    },
    Filter(data){
      this.FilterShow = data
    },
    //搜索
    search(){
         this.$emit('mapSearch',this.searcgVal)
    },
    //
    FilterSearch(data){
      this.$emit("FilterSearchs",data)      
    },
  },
  mounted() {
    document.body.addEventListener('click',()=>{
      this.FilterShow = false
    },false)
  }     
}
</script>

<style lang="scss">
$color-1: #babace;
$color-2: #d92430;
$color-3: #fff;
.top-filtration {
  position: absolute;
  top: 20px;
  right: 105px;
  display: flex;
}
.top-search-wrap {
  width: 382px;
  height: 44px;
  display: flex;
  margin-right: 10px;
  box-shadow: 0 3px 4px 0 rgba(98, 99, 118, 0.08);
  input {
    width: 320px;
    height: 100%;
    border: none;
    outline: none;
    font-size: 14px;
    padding: 0 16px;
    color: #39394d;
  }
  input::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: $color-1;
  }
  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: $color-1;
  }
  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: $color-1;
  }
  input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: $color-1;
  }
  input::-ms-input-placeholder {
    /* Microsoft Edge */
    color: $color-1;
  }
  button {
    width: 72px;
    height: 100%;
    border: none;
    outline: none;
    background-color: $color-2;
    color: $color-3;
    cursor: pointer;
    font-size: 14px;
  }
}
</style>
