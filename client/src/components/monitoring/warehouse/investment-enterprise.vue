<template>
    <ul class="table_wrapper" @mouseenter="open" @mouseleave="close">
        <li class="tab1" v-for="(item,index) in arr" :key="index"   :style="{width:item.org_outtime_carnum/total*100+'%'}">
            <div class="items1" :style="{background:item.background}">{{item.org_outtime_carnum}}</div>
            <div>{{item.code_name}}{{InvestmentEnterpriseData.length>5&&index==4 && (shi===-1)?'...':''}}{{ (shi==0?false:true)&&index===shi-1 ? '...':'' }}</div>
        </li>
        <ul class="hover" v-show="shows">
            <h6>投资企业</h6>
            <li v-for="(item,index) in InvestmentEnterpriseData" :key="index"><span>{{item.code_name}}</span><span>{{item.org_outtime_carnum}}</span></li>
        </ul>
    </ul>
</template>

<script>
export default {
  name: 'investment-enterprise',
  props :{
      InvestmentEnterpriseData:{
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
          this.arr.map((item) => {total += item.org_outtime_carnum})
          return total
      },
       arr(){
         return this.InvestmentEnterpriseData.slice(0,5)
      },
      shi(){
         return this.arr.findIndex(item=>{
              return item.org_outtime_carnum==0
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
        left: 50%;
        margin-left: -50px;
        z-index: 33;
        top: 20px;
        h6{
            padding: 0;
            margin: 0;
            font-size: 16px;
            padding: 10px 0px;
        }
    }
}
</style>
