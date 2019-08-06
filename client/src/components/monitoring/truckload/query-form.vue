<!--
/**
* @name query-form
* @module c:\SpeedinessDocument\vuesys\src\components\monitoring\truckload\query-queryForm.vue
* @description 查询表单
* @author wind-lc
* @date 2019-04-24
* @param {Array} companyList  公司列表
* @param {Array} clientList   客户列表
* @param {Array} waybillStateList   运单状态列表
* @param {Array} waybillPhaseList   运单阶段列表
* @return {Event} query   返回父组件自定义事件
* @example <QueryForm :companyList="companyList"
               :clientList="clientList"
               :waybillStateList="waybillStateList"
               :waybillPhaseList="waybillPhaseList"
               @query="处理函数"></QueryForm>
*/
-->
<template>
  <el-form ref="form" label-position="top" :model="queryForm" label-width="80px" class="query-form">
    <el-row :gutter="20">
      <!-- <el-col :xs="24" :sm="18" :md="6" :lg="3" :xl="3">
        <el-form-item label="客户" prop="client">
          <el-select v-model="queryForm.client" placeholder="请选择">
            <el-option
              v-for="(item,index) in clientList"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col> -->
      <el-col :xs="24" :sm="18" :md="7" :lg="3" :xl="3">
        <el-form-item label="运单号" prop="waybill_id">
          <el-input v-model="queryForm.waybill_id" placeholder="请输入运单号"></el-input>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="18" :md="7" :lg="3" :xl="3">
        <el-form-item label="车牌号" prop="truck_no">
          <el-input v-model="queryForm.truck_no" placeholder="请输入车牌号"></el-input>
        </el-form-item>
      </el-col>

      <el-col :xs="24" :sm="18" :md="6" :lg="3" :xl="3">
        <el-form-item label="运输阶段" prop="way_step">
          <el-select v-model="queryForm.way_step" placeholder="请选择">
            <el-option
              v-for="(item,index) in waybillPhaseList"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="18" :md="6" :lg="3" :xl="3">
        <el-form-item label="异常监控" prop="overtime_info">
          <el-select v-model="queryForm.overtime_info" placeholder="请选择">
            <el-option
              v-for="(item,index) in waybillStateList"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="9" :xl="7">
         <el-form :inline="true" label-position="top"> 
        <el-form-item label="线路" prop="departureCity">
          <el-row :span='24'>
          <el-form-item>
           <el-col style="padding:0;margin:0; width:100%;" :span="10">
            <!-- <el-input placeholder="出发城市" style="width: 100%;padding:0;margin:0;" clearable v-model="queryForm.departureCity"></el-input> -->
            <CitySelect style=" " textVal="出发城市"  @parentFn="getVal" v-model="queryForm.departureCity" ref="city"></CitySelect>
          </el-col>
            </el-form-item>
            <el-form-item>
          <el-col
            class="line"
            :span="4"
            style="padding:0;color:#ccc;width: 42px; !important;margin:0;">-<span v-on:click="replaceFn(replace)"  :class="[replace?'btns-color':'miss']">换</span>-</el-col>
            </el-form-item>
        <el-form-item>
          <el-col style="padding:0;margin:0; width:100%;" :span="10">
            <!-- <el-input style="width: 100%;padding:0;margin:0;" prop="arrivalCity" clearable placeholder="到达城市" v-model="queryForm.arrivalCity"></el-input> -->
            <CitySelect style=""  textVal="到达城市"  @parentFn="getVal2" v-model="queryForm.arrivalCity" ref="city2"></CitySelect>
          </el-col>
        </el-form-item>
          </el-row>
        </el-form-item>
         </el-form>
      </el-col>

      <el-col :xs="24" :sm="18" :md="5" :lg="3" :xl="3">
        <el-form-item style="marginTop:46px">
          <el-button
            type="primary"
            style="background-color: #D92430;border: none; margin-right:10px"
            @click="query"
          >查询</el-button>
          <el-button type="text" style="color:red" @click.native="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import CitySelect from './city-select'
export default {
  name: "query-form",
  components: {
    CitySelect,
  },
  props: {
    // 公司列表
    companyList: {
      type: Array,
      required: true
    },
    // 客户列表
    clientList: {
      type: Array,
      required: true
    },
    // 运单状态列表
    waybillStateList: {
      type: Array,
      required: true
    },
    // 运单阶段列表
    waybillPhaseList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      // 查询表单
      queryForm: {
        // company: "",
        // client: "",
        // trackingNumber: "",
        // licensePlateNumber: "",
        // waybillState: "",
        // waybillPhase: "",
        // departureCity: "",
        // arrivalCity: ""
        waybill_id:'',
        truck_no:'',
        way_step:'',
        overtime_info:'',
        from_addr_city:'',
        to_addr_city:'',
        pagefen:'查询'
      }
    };
  },
  methods: {
    query() {
      this.$emit("query", this.queryForm);
    },
    //重置
    resetForm(formName) {
      console.log(this.$refs[formName])
        this.$refs[formName].resetFields();
      },
      //出发城市
      getVal(value){
            this.queryForm.from_addr_city=value
      },
      //到大城市
      getVal2(value){
            this.queryForm.to_addr_city=value
      },
      //点击互换
      replaceFn(val){
        if(val){
            let aVal=''
            console.log(this.queryForm)
           aVal=this.queryForm.from_addr_city
          //  alert(this.aVal)
           this.queryForm.from_addr_city=this.queryForm.to_addr_city
           this.queryForm.to_addr_city=aVal
           this.$refs.city.replaceCity(this.queryForm.from_addr_city);
           this.$refs.city2.replaceCity(this.queryForm.to_addr_city);
        }
      
        // alert('sssss')
      }
  },
  computed: {
    replace(){
      console.log(this.queryForm.from_addr_city!=''&&this.queryForm.to_addr_city!='')
        return (this.queryForm.from_addr_city!=''&&this.queryForm.to_addr_city!='')
    }
  },
};
</script>

<style lang="scss">
.query-form {
  .el-form-item__label{
      font-family: PingFangSC-Regular;
  color: #39394D;
  font-size: 12px;
  }
  
 .el-input__inner{
   width: 100%;
 }
  padding:0px;
  background-color:#fff;
  // margin: 20px 0 40px 0;
  .miss{
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ccc;
    line-height: 20px;
    color: #000;
    text-align: center;
  }
  .btns-color{
    color: #fff;
    background-color: rgb(70, 68, 68);
     text-align: center;
    line-height: 20px;
    cursor: pointer;
        display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  .el-col-4{
    width: 30px;
  }
}
.el-select {
  width: 100%;
  .el-option {
    width: 100px;
  }
}
</style>
