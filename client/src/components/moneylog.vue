<template>
  <div>
    <el-dialog
      :title="dialog.title"
      :close-on-press-escape="false"
      :visible.sync="dialog.show"
      :close-on-click-modal="true"
    >
      <el-form
        :model="dataform"
        label-width="120px"
        style="margin:10px;width:auto;"
        :rules="rules2"
        ref="datafrom"
      >
        <el-form-item prop="type" label="收支类型:">
          <el-select v-model="dataform.type" placeholder="收支类型">
            <el-option
              :label="item"
              :value="item"
              v-for="(item,index) in  from_list_type"
              :key="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="desribe" label="收支描述:">
          <el-input v-model="dataform.desribe" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="input" label="收入:">
          <el-input type="number" v-model="dataform.input" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="output" label="支出:">
          <el-input type="number" v-model="dataform.output" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="cash" label="账户现金:">
          <el-input type="number" v-model="dataform.cash" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="remark" label="备注:">
          <el-input v-model="dataform.remark" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialog.show = false">取 消</el-button>
        <el-button type="primary" @click="add('datafrom')">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      from_list_type: ["提现", "支付宝", "充值", "微信", "刷卡", "优惠券"],
      rules2: {
        input: [{required:true,message:"不能为空！", trigger: "blur" }],
        output: [{ required:true,message:"不能为空！", trigger: "blur" }],
        cash: [{ required:true,message:"不能为空！", trigger: "blur" }],
        desribe: [{ required:true,message:"不能为空！", trigger: "blur" }],
        remark: [{ required:true,message:"不能为空！", trigger: "blur" }],
        type: [{ required:true,message:"不能为空！", trigger: "blur" }]
      }
    };
  },
  props: ["dialog","dataform"],
  methods: {
    add(from){
     const url=this.dialog.trueoff=="add"?"add":"edit/"+this.dataform._id
     let that=this.$refs[from]
      that.validate((valid) => {
          if (valid) {
            this.$axios.post('/api/profile/'+url,this.dataform)
            .then(res=>{
              if(res.data.success){
                   this.$message({
                     type:"success",
                     message:res.data.msg
                   })
                   this.dialog.show=false;
                   //子向父传值
                   this.$emit('updata',this.dataform)
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
