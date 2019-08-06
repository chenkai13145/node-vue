<template>
  <el-form
    :model="ruleForm2"
    status-icon
    :rules="rules"
    ref="ruleForm2"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="昵称" prop="name">
      <el-input v-model="ruleForm2.name"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="ruleForm2.password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      id: this.$store.getters.user.id,
      ruleForm2: {
        name: "",
        password: ""
      },
      rules: {
        password: [
          {
            min: 4,
            max: 16,
            message: "密码必须4位到16位之间",
            trigger: "blur"
          },
          { required: true, message: "不能为空", trigger: "blur" }
        ],
        name: [
          {
            min: 2,
            max: 16,
            message: "昵称必须2位到16位之间",
            trigger: "blur"
          },
          { required: true, message: "不能为空", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(from) {
      this.$refs[from].validate(valid => {
        if (valid) {
          this.$axios
            .put("/api/users/put/" + this.id, this.ruleForm2)
            .then(res => {
              if (res.data.success) {
                this.$message({
                  message: res.data.msg,
                  type: "success"
                });
                //清除eToken
                if (!localStorage.removeItem("eToken")) {
                  //清除store用户信息
                  this.$store.dispatch("clear");
                  //跳转
                  this.$router.push("/login");
                }
                return;
              }
            })
            .catch(err => console.log(err));
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
