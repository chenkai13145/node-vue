<template>
  <div class="department">
    <div class="serch">
      <span @click="addDepart">新增部门</span>
      <el-table-column align="right" min-width="500">
        <template>
          <el-input v-model="search" size="mini" placeholder="负责人或部门关键字搜索"/>
        </template>
      </el-table-column>
      <span>搜索</span>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column align="center" label="部门名称" min-width="150" prop="subunit"></el-table-column>
      <el-table-column align="center" label="负责人" min-width="150" prop="principal"></el-table-column>
      <el-table-column align="center" label="部门人数" min-width="150" prop="personcount">
        <template slot-scope="scope">{{scope.row.children.length}}</template>
      </el-table-column>
      <el-table-column align="center" label="部门状态" min-width="150" prop="statu">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.statu == 1 ? 'success' : 'primary'"
            disable-transitions
          >{{scope.row.statu==1 ? '正在运营' : '已被停用'}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column prop="operation" align="center" label="操作" min-width="350">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="departmentEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="primary" @click="checkDepartment(scope.$index, scope.row)">查看</el-button>
          <el-button
            size="mini"
            :type="tableData[scope.$index].statu == 1 ? 'danger' : 'success'"
            @click="handleStatus(scope.$index, scope.row)"
          >{{tableData[scope.$index].statu == 1 ? '禁用' :'启用'}}</el-button>
          <!-- <el-button type="danger" v-if="buttons.status" size="small" @click="handleStatus(scope.$index, scope.row)"
							:id="users[scope.$index].status == 1 ? red : green">{{users[scope.$index].status == 1 ? '停用' :'启用'}}
          </el-button>-->
          <!-- {{users[scope.$index].status == 1 ? '停用' :'启用'}} -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: this.$store.getters.user,
      search: "",
      options: 0
    };
  },
  methods: {
    //添加部门
    addDepart() {
      if (this.user.identification == "manager") {
        this.$router.push({
          path: "/addoffice",
          query: { data: "", methods: "post", msg: "添加部门" }
        });
      } else {
        this.$message({
          type: "error",
          message: "没有权限"
        });
      }
    },
    //启用和禁用xxxx
    handleStatus(a, b) {
      if (this.user.identification == "manager") {
        if (b.statu == 1) {
          b.statu = 0;
          this.$axios.put("/api/department/eidt/" + b._id, b).then(data => {
            if (data.data.success) {
              this.$message({
                type: "success",
                message: "禁用成功"
              });
            }
          });
        } else {
          b.statu = 1;
          this.$axios.put("/api/department/eidt/" + b._id, b).then(data => {
            if (data.data.success) {
              this.$message({
                type: "success",
                message: "启用成功"
              });
            }
          });
        }
      } else {
        this.$message({
          type: "error",
          message: "没有权限"
        });
      }
    },
    //编辑部门信息
    departmentEdit(index, data) {
      if (this.user.identification == "manager") {
        this.$router.push({
          path: "/addoffice",
          query: { data: data, methods: "put", msg: "编辑部门" }
        });
      } else {
        this.$message({
          type: "error",
          message: "没有权限"
        });
      }
    },
    //查看部门信息
    checkDepartment(index, data) {
      this.$router.push({
        path: "/departperson",
        query: { data: data, id: data._id }
      });
    }
  },
  created() {
    this.$axios.get("/api/department/all").then(data => {
      if (data.status == 200) {
        //存储到vuex中
        this.$store.dispatch("getDeMent", data.data);
      }
    });
  },
  computed: {
    tableData() {
     
      return this.$store.state.users.departmentdata.filter(data => {
        return (
          !this.search ||
          data.principal.toLowerCase().includes(this.search.toLowerCase()) ||
          !this.search ||
          data.subunit.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.department {
  margin: 30px 170px;
  .serch {
    line-height: 50px;
    height: 50px;
    border-bottom: 1px solid #d7d7d7;
    display: flex;
    margin-bottom: 20px;
    padding-top:20px !important;
    span{
      
      display: inline-block;
      margin:0 100px 0 10px;
 
      
      cursor: pointer;
    }
    span:hover{
      color: red;
    }
  }
}
</style>
