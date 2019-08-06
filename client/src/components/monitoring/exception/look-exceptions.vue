<template>
  <div class="look-wrap" @click.stop>
    <div  @click="toggleShow" style="display:flex;align-items: center;justify-content: space-between;width: 100%;">
        <span class="look-title">查看</span>
        <span class="look-con">
            <span v-show="all">查看全部</span><span v-show="!all" v-for="item in checkedNames">{{item.name}}&nbsp;&nbsp;</span>
        </span>
        <img :class="{ 'arrow-arond': hide}" src="../../../assets/large-screen/arrow.png">
    </div>
    <div v-show="hide" class="select-wrap">
     <div class="select">
         <div class="select-title">
            <img src="../../../assets/monitoring/ic_Exception.png" style="height:auto;">
            <span>设备异常</span>
         </div>
         <ul class="select-con">
             <li  v-for="(list,index) in exceptionData" :key="index">
               <label>            
                   <input type="checkbox" v-model="checkedNames" :value="list.name">{{ list.name }}        
                </label>    
             </li>
         </ul>
     </div>
     <div class="select">
         <div class="select-title">
            <img src="../../../assets/monitoring/ic_Abnormal.png" style="height:auto;">
            <span>异常事件</span>
         </div>
         <ul class="select-con">
            <li  v-for="(list,index) in abnormalEventsData" :key="index">
               <label>            
                   <input type="checkbox" v-model="checkedNames" :value="list.name">{{ list.name }}        
                </label>    
             </li>
         </ul>
     </div>
     <div class="select select-security">
         <div class="select-title">
            <img src="../../../assets/monitoring/ic_Security.png" style="height:auto;">
            <span>安全事件</span>
         </div>
         <ul class="select-con">
             <p>疲劳驾驶</p>
             <li  v-for="(list,index) in FatigueDrivingData" :key="index">
               <label>            
                   <input type="checkbox" v-model="checkedNames" :value="list">{{ list.name }}        
                </label>    
             </li>
         </ul>
         <ul class="select-con">
             <p>路况报警</p>
             <li  v-for="(list,index) in RoadAlarmData" :key="index">
               <label>            
                   <input type="checkbox" v-model="checkedNames" :value="list">{{ list.name }}        
                </label>    
             </li>
         </ul>
         <ul class="select-con">
             <p>不良习惯</p>
             <li  v-for="(list,index) in BadHabitsData" :key="index">
               <label>            
                   <input type="checkbox" v-model="checkedNames" :value="list">{{ list.name }}        
                </label>    
             </li>
         </ul>
         <ul class="select-con">
             <p>违规</p>
             <li  v-for="(list,index) in ViolationData" :key="index">
               <label>            
                   <input type="checkbox" v-model="checkedNames" :value="list">{{ list.name }}        
                </label>    
             </li>
         </ul>
     </div>
     <div class="look-header">
         <button class="look-all" @click="lookAll">查看全部</button>
         <button class="look-choice" @click="lookChoice">查看选择</button>
     </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  name: 'look-exceptions',
  components: {
  },
  data () {
    return {
      all: false,
      checkedNames:[],
      // 复选框数据
      exceptionData: [
            {id:1, name:'离线'},
            {id:2, name:'信号弱'}
      ],
      abnormalEventsData: [
            {id:3, name:'超时未发'},
            {id:4, name:'超时未到'},
            {id:5, name:'提货晚点'},
            {id:6, name:'线路偏移'}
      ],
      FatigueDrivingData: [
            {id:41003, name:'注意力分散'},
            {id:41002, name:'打哈欠'},
            {id:41001, name:'闭眼'},
            {id:41009, name:'频繁低头'}
      ],
      RoadAlarmData: [
        {id: 30000,name: '碰撞'},
        {id: 30002,name: '车道偏离'},
        {id: 30005,name: '车距过近'}
      ],
      // 不良习惯
      BadHabitsData: [
        // {id: 14,name: '左顾右盼'},
        {id: 10091,name: '急刹车'},
        {id: 41023,name: '玩手机'}
      ],
      // 违规
      ViolationData: [
        {id: 41006,name: '脱离监控'},
        {id: 41005,name: '抽烟'},
        {id: 11011,name: '超速'},
        {id: 50002,name: '未登签'},
        {id: 11000,name: '停车超时'}
      ],
      hide: false
    }
  },
  methods: {
    toggleShow () {
        this.hide =! this.hide
    },
    lookAll () {
        var listArrA=[]
        for(var i=0;i<this.exceptionData.length;i++){
            listArrA.push(this.exceptionData[i].name)
        }
        var listArrB=[]
        for(var i=0;i<this.abnormalEventsData.length;i++){
            listArrB.push(this.abnormalEventsData[i].name)
        }
        var listArrC=[]
        for(var i=0;i<this.FatigueDrivingData.length;i++){
            listArrC.push(this.FatigueDrivingData[i].name)
        }
        var listArrD=[]
        for(var i=0;i<this.RoadAlarmData.length;i++){
            listArrD.push(this.RoadAlarmData[i].name)
        }
        var listArrE=[]
        for(var i=0;i<this.BadHabitsData.length;i++){
            listArrE.push(this.BadHabitsData[i].name)
        }
        var listArrF=[]
        for(var i=0;i<this.ViolationData.length;i++){
            listArrF.push(this.ViolationData[i].name)
        }
        var listArr = listArrA.concat(listArrB, listArrC,listArrD,listArrE,listArrF)
        this.checkedNames = listArr
        this.all = true
        this.hide = false
    },
    lookChoice(){
      var checkedList = this.checkedNames.length
      var allCheckedList  = this.exceptionData.length +  this.abnormalEventsData.length +  this.FatigueDrivingData.length + this.RoadAlarmData.length + this.BadHabitsData.length + this.ViolationData.length
      if(checkedList === allCheckedList){
         this.all = true
      }else{
         this.all = false
      }
      this.hide = false
      let checkedNames = []
      this.checkedNames.forEach(item => {
          checkedNames.push(item.id)
      })
    this.$emit('lookExceptions',checkedNames.join(','))
    }
  },
  mounted() {
    document.body.addEventListener('click',()=>{
      this.hide = false
    },false)
  },
  watch: {
    checkedNames: function (newQuestion, oldQuestion) {
        var checkedList = this.checkedNames.length
        var allCheckedList  = this.exceptionData.length +  this.abnormalEventsData.length +  this.FatigueDrivingData.length + this.RoadAlarmData.length + this.BadHabitsData.length + this.ViolationData.length
        if(checkedList === allCheckedList){
           this.all = true
        }else{
           this.all = false
        }
    }
  }
}
</script>

<style lang="scss" scoped>
$color-1: #d92430;
.look-wrap {
  position: absolute;
  top: 20px;
  left: 328px;
  height: 44px;
  background: #fff;
  box-shadow: 0 3px 4px 0 rgba(98, 99, 118, 0.08);
  display: flex;
  align-items: center;
  padding: 0 10px;
  max-width: 300px;
  min-width: 150px;
  align-items: center;
  cursor: pointer;
  .select-wrap{
      position: absolute;
      width: 600px;
      background: #fff;
      top: 60px;
      left: 0px;
      padding: 10px 16px;
      z-index: 9999;
      .select{
          padding-bottom: 15px;
          .select-title{
              display: flex;
              align-items: center;
              img{
                  width: 25px;
                  margin-right: 5px;
              }
              p{
                font-size: 18px;
                color: #1e1c28;
                letter-spacing: 0.67px;
                line-height: 24px;
              }
          }
          .select-con{
              padding: 10px 20px;
              display: flex;
              flex-wrap: wrap;
              li{
                  width: 25%;
                  line-height: 24px;
                  font-size: 14px;
                  label{
                      display: flex;
                      align-items: center;
                      cursor: pointer;
                  }
              }
          }
      }
      .select-security{
          display: flex;
          flex-flow: wrap;
          .select-title{
              width: 100%;
          }
          .select-con{
              width: 25%;
              p{
                  padding: 5px 0 10px;
                  font-size: 14px;
                  color: #84849a;
              }
              p,li{
                  min-width: 100%;
              }
          }
      }
      .look-header{
          padding: 15px 0;
          border-top:1px solid #e0e0eb; 
          display: flex;
          justify-content: flex-end;
          button{
             width: 100px;
             height: 30px;
             border: 1px solid #d92430;
             background: #fff; 
             cursor: pointer;
          }
          .look-all{
              color: #da2733;
          }
          .look-choice{
              background: #da2733;
              color: #fff;
              margin-left: 20px; 
          }
      }
  }
  .look-title{
      white-space: nowrap;
      font-size: 14px;
      color: #84849a;
  }
  .look-con{
    padding-left: 10px;
    max-width: 200px;
    margin-right: auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #1e1c28;
  }
  .arrow-arond{
      transform:rotate(180deg);
  }
}
</style>
