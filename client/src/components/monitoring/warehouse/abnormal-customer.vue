<template>
    <ul class="table_wrapper" @mouseenter="open" @mouseleave="close">
        <li class="tab1" v-for="(item,index) in arr" :key="index"   :style="{width:item.factory_outtime_carnum/total*100+'%'}">
            <div class="items1" :style="{background:item.background}">{{item.factory_outtime_carnum}}</div>
            <div>{{item.factory_outtime_carnum/total*100<=10?'':item.code_name}}{{(AbnormalCustomerData.length>5 && index==4 && (shi===-1))?'...':''}}{{ ((shi==0?false:true)&&index==shi-1) ? '...':'' }}</div>
        </li>
        <ul class="hover" v-show="shows">
            <h6>客户</h6>
            <li v-for="(item,index) in AbnormalCustomerData" :key="index"><span>{{item.code_name}}</span><span>{{item.factory_outtime_carnum}}</span></li>
        </ul>
    </ul>
</template>

<script>
export default {
  name: 'abnormal-customer',
  props :{
      AbnormalCustomerData :{
        type: Array,
        required: true
      }
  },
  data () {
    return {
        shows:false
    }
  },
  mounted () {
  },
  methods: { 
      open(){
          this.shows=true
      },
      close(){
          this.shows=false
      }
  },
  computed:{
      total(){
          let total = 0;
          this.arr.map((item) => {total += item.factory_outtime_carnum})
          return total
      },
      arr(){
         return this.AbnormalCustomerData.slice(0,5)
      },
      shi(){
         return this.arr.findIndex(item=>{
              return item.factory_outtime_carnum==0
          })
      }
   }
}
</script>

<style lang="scss" scoped>
.table_wrapper{
    width: 100%;
    display: flex;
    position: relative;
    >li{
        >div:first-child{
            width: 100%;
            text-align: center;
            color: #fff;
            line-height: 34px;
            height: 34px;
        }
        >div:last-child{
            width: 100%;
            text-align: center;
            color: #39394d;
            font-size: 10px;
            margin-top: 10px;
        }
    }
    .hover{
        li{
            display: flex;
            justify-content:space-between;
            padding: 4px 0;
        }
        width: 160px;
        padding: 20px;
        background:rgb(57, 57, 77);
        color:#fff;
        position: absolute;
        top: 20px;
        left: 50%;
        margin-left: -50px;
        z-index: 33;
        h6{
            padding: 0;
            margin: 0;
            font-size: 16px;
            padding: 10px 0px;
        }
    }
}
</style>
