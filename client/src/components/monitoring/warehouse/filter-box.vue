
<template>
 <div class="select-wrap" v-if='message'>
     <el-collapse accordion>
      <el-collapse-item>
          <template slot="title">
            <div @click="upDown1" class="upDown">
                <img v-show="!show1" src="static/img/monitoring/ic-selected.png" style="margin-right:10px">
                <img v-show="show1" src="static/img/monitoring/ic-select.png" style="margin-right:10px">
                <span>投资公司</span>
            </div>
          </template>
          <ul class="select-con">
            <li  v-for="(list,index) in org_code" :key="index">
               <label>            
                   <input type="checkbox" v-model="checkedNamesA" :value="list.val">{{ list.name }}        
                </label>    
             </li>
         </ul>
      </el-collapse-item>
      <el-collapse-item>
          <template slot="title">
            <div @click="upDown2" class="upDown">
                <img v-show="!show2" src="static/img/monitoring/ic-selected.png" style="margin-right:10px">
                <img v-show="show2" src="static/img/monitoring/ic-select.png" style="margin-right:10px">
                <span>客户</span>
            </div>
          </template>
          <ul class="select-con">
            <li  v-for="(list,index) in factory_code" :key="index">
               <label>            
                   <input type="checkbox" v-model="checkedNamesB" :value="list.val">{{ list.name }}        
                </label>    
             </li>
         </ul>
      </el-collapse-item>
      <el-collapse-item>
          <template slot="title">
            <div @click="upDown3" class="upDown">
                <img v-show="!show3" src="static/img/monitoring/ic-selected.png" style="margin-right:10px">
                <img v-show="show3" src="static/img/monitoring/ic-select.png" style="margin-right:10px">
                <span>客户城市</span>
            </div>
          </template>
          <ul class="select-con">
            <li  v-for="(list,index) in factory_city_code" :key="index">
               <label>            
                   <input type="checkbox" v-model="checkedNamesC" :value="list.val">{{ list.name }}        
                </label>    
             </li>
         </ul>
      </el-collapse-item>
      <el-collapse-item v-if="$route.path!='/monitoring-full-capacity'">
          <template slot="title">
            <div @click="upDown4" class="upDown">
                <img v-show="!show4" src="static/img/monitoring/ic-selected.png" style="margin-right:10px">
                <img v-show="show4" src="static/img/monitoring/ic-select.png" style="margin-right:10px">
                <span>商业车品牌</span>
            </div>
          </template>
          <ul class="select-con">
            <li  v-for="(list,index) in car_brand_code" :key="index">
               <label>            
                   <input type="checkbox" v-model="checkedNamesD" :value="list.val">{{ list.name }}        
                </label>    
             </li>
         </ul>
      </el-collapse-item>
    </el-collapse>
     <div class="look-header">
         <button class="look-all" @click="lookAll">查看全部</button>
         <button class="look-choice" @click="lookChoice">查看选择</button>
     </div>
  </div>
</template>

<script>
export default {
  name: 'look-exceptions',
  components: {
  },
  props:["message"],
  data () {
    return {
      show1: true,
      show2: true,
      show3: true,
      show4: true,
      checkedNamesA:[],
      checkedNamesB:[],
      checkedNamesC:[],
      checkedNamesD:[],
      // 复选框数据
      // 投资公司
      org_code: [
            {val:'GBL',name:'商贸物流'},
            {val:'HSL',name:'顺捷物流'},
            {val:'GNL',name:'商贸日邮'},
            {val:'GTT',name:'广丰物流'},
            {val:'FNL',name:'富田日捆'},
           {val:'GRTL',name:'商铁物流'}
      ],
      factory_code: [
            {val:'GQCQ',name:'广汽传祺'},
            {val:'GQFK',name:'广汽菲克'},
            {val:'GQSL',name:'广汽三菱'},
            {val:'GTMC',name:'广汽丰田'},
            {val:'GQBT',name:'广汽本田'},
           {val:'GQXNY',name:'广汽新能源'}
      ],
      factory_city_code: [
            {val:'GQCQGZ',name:'广州'},
            {val:'GQCQHZ',name:'杭州'},
            {val:'GQCQYC',name:'宜昌'},
            {val:'GQCQWLMQ',name:'乌鲁木齐'},
            {val:'GQFKGZ',name:'广州'},
            {val:'GQFKCS',name:'长沙'}
      ],
      car_brand_code: [
        {val:'GQCQ',name: '广汽传祺'},
        {val:'GQFK',name: '广汽菲克'},
        {val:'GQSL',name: '广汽三菱'},
        {val:'GQTOYOTA',name: '广汽丰田'},
        {val:'YQTOYOTA',name: '一汽丰田'},
        {val:'TOYOTA',name: '进口丰田'},
        {val:'LEXUS',name: '雷克萨斯'},
        {val:'GQBT',name: '广汽本田'},
        {val:'JKBT',name: '进口本田'},
        {val:'GQOG',name: '广汽讴歌'},
        {val:'GQXNY',name: '广汽新能源'}
      ]
    }
  },
  mounted () {
  },
  methods: {
    upDown1(){
        this.show1 = !this.show1
        this.show2 = true
        this.show3 = true
        this.show4 = true
    },
     upDown2(){
        this.show2 = !this.show2
        this.show1 = true
        this.show3 = true
        this.show4 = true
    },
     upDown3(){
        this.show3 = !this.show3
        this.show2 = true
        this.show1 = true
        this.show4 = true
    },
     upDown4(){
        this.show4 = !this.show4
        this.show2 = true
        this.show3 = true
        this.show1 = true
    },
    toggleShow () {
        this.hide =! this.hide
    },
    lookAll () {
        let listArrA = "org_code:"
        for(var i=0;i<this.org_code.length;i++){
            this.checkedNamesA.push(this.org_code[i].val)
        }
        listArrA += this.checkedNamesA
        console.log(listArrA)


        let listArrB = "factory_code:"
        for(var i=0;i<this.factory_code.length;i++){
            this.checkedNamesB.push(this.factory_code[i].val)
        }
        listArrB += this.checkedNamesB
        console.log(listArrB)

        let listArrC = "factory_city_code:"
        for(var i=0;i<this.factory_city_code.length;i++){
            this.checkedNamesC.push(this.factory_city_code[i].val)
        }
        listArrC += this.checkedNamesC
        console.log(listArrC)

        let listArrD = "car_brand_code:"
        for(var i=0;i<this.car_brand_code.length;i++){
            this.checkedNamesD.push(this.car_brand_code[i].val)
        }
        listArrD += this.checkedNamesD
        console.log(listArrD)
        // let obj={
        //     listArrA,
        //     listArrB,
        //     listArrC,
        //     listArrD
        // }
        // console.log(obj)
        this.$emit('FilterShow',false)
        // this.$emit('FilterSearch',obj)
    },
    lookChoice(){
      let listArrA = "org_code:"
      listArrA += this.checkedNamesA
      console.log(listArrA)
      
      let listArrB = "factory_code:"
      listArrB += this.checkedNamesB
      console.log(listArrB)

      let listArrC = "factory_city_code:"
      listArrC += this.checkedNamesC
      console.log(listArrC)

      let listArrD = "car_brand_code:"
      listArrD += this.checkedNamesD
      console.log(listArrD)
       let obj={
            listArrA,
            listArrB,
            listArrC,
            listArrD
        }
        console.log(obj)
        this.$emit('FilterShow',false)
        this.$emit('FilterSearch',obj)

     
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
.select-wrap{
      position: absolute;
      width: 260px;
      background: #fff;
      top: 60px;
      right: -80px;
      padding: 10px 16px;
      z-index: 9999;
      box-shadow: 0 3px 4px 0 rgba(98, 99, 118, 0.28);
      .upDown{
          display: flex;
          align-items: center;
          img{
              margin-top: -3px;
          }
      }
      .select-con{
          padding: 0px 10px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          li{
              width: 50%;
              line-height: 24px;
              font-size: 14px;
              line-height: 35px;
              label{
                  display: flex;
                  align-items: center;
                  cursor: pointer;
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
          padding: 20px 0 15px;
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
      /deep/ .el-collapse-item__arrow.el-icon-arrow-right{
          display: none!important;
      }
     /deep/ .el-collapse-item__header,/deep/ .el-collapse,/deep/ .el-collapse-item__wrap{
          border: 0;
      }
      /deep/ .el-collapse-item__content{
          padding-bottom: 0;
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




</style>