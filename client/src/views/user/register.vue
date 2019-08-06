<template>
  <div class="register">
    <div class="from_container">
      <span class="title">凯子后台管理系统</span>
      <el-form
        :model="register"
        status-icon
        :rules="rules"
        ref="registerFrom"
        label-width="100px"
        class="registerFrom"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="register.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="register.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="register.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="password2">
          <el-input type="password" v-model="register.password2" placeholder="确认密码"></el-input>
        </el-form-item>
        <el-form-item label="选择身份">
          <el-select v-model="register.identification" placeholder="请选择身份">
            <!-- <el-option label="管理员" value="manager"></el-option> -->
            <el-option label="员工" value="employee"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" class="submit_btn" @click="submitFrom('registerFrom')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value !== this.register.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      register: {
        name: "",
        email: "",
        password: "",
        identification: "employee"
      },
      rules: {
        name: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 2, max: 16, message: "长度要在2到16之间", trigger: "blur" }
        ],
        email: [
          {
            type: "email",
            required: true,
            message: "邮箱格式不正确",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 4, max: 16, message: "密码长度4到16位之间" }
        ],
        password2: [
          { required: true, message: "确认密码不能为空", trigger: "blur" },
          { min: 4, max: 16, message: "密码长度4到16位之间" },
          { validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },
  created() {},
  methods: {
    submitFrom(register) {
      this.$refs[register].validate(valid => {
        if (valid) {
          this.$axios.post("/api/users/register", this.register).then(res => {
            if (res.data.success) {
              //注册成功
              this.$message({
                message: res.data.msg,
                type: "success"
              });
              this.$router.push("/login");
            } else {
              if (res.data.trueoff) {
                this.$message({
                  message: res.data,
                  type: "error"
                });
                return;
              }
              this.$message({
                message: res.data.msg,
                type: "error"
              });
            }
          });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.register {
  height: 100vh;
  background: url("../../assets/bg.png") no-repeat;
  background-size: cover;
  .from_container {
    padding: 100px 10px;
    width: 350px;
    margin: auto;
    position: relative;
    .title {
      padding: 20px 10px;
      font-size: 26px;
      position: relative;
      display: inline-block;
      left: 50%;
      transform: translateX(-50%);
    }
    .registerFrom {
      border: 1px solid blue;
      padding: 20px;
      border-radius: 20px 4px 10px 20px;
      box-shadow: 0px 4px 4px rgb(173, 172, 172);
      background: #fff;
    }
  }
}
</style>
