<template>
  <div>
    <ul class="map-icon-switch"
        :class="{'map-icon-switch-full-screen': getScreen}">
      <li v-for="(item,index) in mapIcon"
          :key="index"
          :class="{'active': item.active}"
          @click="handleSwitch(index)">
        <icon-svg :name="item.icon"></icon-svg>
        <span>{{item.name}}</span>
      </li>
    </ul>
    <div class="top-filtration">
      <!-- 搜索 -->
      <div class="top-search-wrap" v-show="hideSearch">
        <input type="text"
              placeholder="请输入VIN/业务订单/运单/车牌/车厢号/船名" v-model="searcgVal">
        <img src="../../../assets/monitoring/ic_cleanall.png" v-if="searcgVal" @click="clean" class="cleanBtn">
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GacButtonFiltrate from '@/components/common/gac-button-filtrate'
import FilterBox from '@/components/monitoring/transport/filter-box'
export default {
  name: 'map-icon-switch',
  components: {
    GacButtonFiltrate,
    FilterBox
  },
  props: {
    defaultMapTab: {
      type: String,
      required: true
    },
    hideSearch: Boolean
  },
  data () {
    return {
      FilterShow: false,
      searcgVal: '',
      count: '',
      mapIcon: [
        {
          name: '全部',
          icon: 'maptab-all',
          active: false
        },
        {
          name: '有任务',
          icon: 'task-be',
          active: false
        },
        {
          name: '无任务',
          icon: 'task-notbe',
          active: false
        }
      ]
    }
  },
  mounted () {
    this.mapIcon.forEach(item => {
      if (item.name === this.defaultMapTab) {
        item.active = true
      }
    });
    document.body.addEventListener('click',()=>{
      this.FilterShow = false
    },false)
  },
  methods: {
    handleSwitch (index) {
      let _this = this
      this.mapIcon.forEach((item, i) => {
        if (i === index) {
          item.active = true
          _this.count=''
           if(item.name==='有任务'){
             _this.count=1
          }
           if(item.name==='无任务'){
             _this.count=0
          }
          this.$emit('mapTab',  _this.count, this.searcgVal)
        } else {
          item.active = false
        }
      })
    },
    //  筛选
    FilterBtn(){
      this.FilterShow =! this.FilterShow
    },
    Filter(data){
      this.FilterShow = data
    },
    //搜索
    search(){
         this.$emit('mapSearch',this.count,this.searcgVal)
    },
    //
    FilterSearch(data){
      this.$emit("FilterSearchs",data)      
    },
    // 退出搜索
    clean(){
      this.searcgVal = ""
      var count = ""
      this.mapIcon.forEach((item,index)=>{
        if(index===0){
             item.active=true
        }else{
          item.active=false
        }
      })
      this.$emit('mapTab',count, this.searcgVal)
    }
  },
  computed: {
    ...mapGetters(['getScreen'])
  }
}
</script>

<style lang="scss">
$color-1: #babace;
$color-2: #d92430;
$color-3: #fff;
.map-icon-switch {
  position: absolute;
  top: 20px;
  left: 328px;
  width: 294px;
  height: 44px;
  background: #fff;
  box-shadow: 0 3px 4px 0 rgba(98, 99, 118, 0.08);
  display: flex;
  align-items: center;
  li {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    cursor: pointer;
    position: relative;
    .icon-svg {
      color: #39394d;
      font-size: 24px;
    }
    span {
      font-size: 14px;
      color: #84849a;
    }
    &[class~='active'] {
      .icon-svg,
      span {
        color: $color-2;
      }
      &::after {
        content: '';
        display: block;
        width: 22px;
        height: 3px;
        background-color: $color-2;
        position: absolute;
        bottom: 1px;
        left: 50%;
        margin-left: -11px;
      }
    }
  }
}
.map-icon-switch-full-screen {
  left: 358px;
}
.icon-svg__task-notbe,.icon-svg__task-be{
  font-size: 15px!important;
  margin-right: 4px;
}

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
<style lang="scss" scoped>
.top-search-wrap{
  position: relative;
  width: 410px;
  >input{
   width: 330px;
   padding-right: 30px;
  }
  .cleanBtn{
    width: 25px;
    height: 25px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 90px;
    cursor: pointer;
  }
}
</style>
