<template>
  <div class="departmentIndex">
    <div class="main-content">
      <div class="header">
        <div class="button" @click="goback">返回</div>
      </div>
      <el-table :data="all" border fit>
        <el-table-column align="center" prop="number" label="员工编号" fixed min-width="100"></el-table-column>
        <el-table-column align="center" prop="name" label="姓名" fixed min-width="100"></el-table-column>
        <el-table-column align="center" prop="subunit" label="所属部门" min-width="150"></el-table-column>
        <el-table-column align="center" prop="job" label="职务" min-width="150"></el-table-column>
        <el-table-column align="center" prop="tel" label="手机号" min-width="150"></el-table-column>
        <el-table-column align="center" prop="email" label="邮箱" min-width="150"></el-table-column>
        <el-table-column align="center" prop="pair" label="员工状态" min-width="350">
          <template slot-scope="scope">
              <span>{{scope.row.statu?"在线":'已离职'}}</span>
          </template>
        </el-table-column>
      </el-table>
   

  <el-tabs  v-model="activeName"  @tab-click="handleClick">
    <el-tab-pane label="上班人员">
        <personfrm :tabledata="tableData" :statu='1'></personfrm>
    </el-tab-pane>
    <el-tab-pane label="离职人员" name="second">
       <personfrm :tabledata="tableDatas" :statu='0'></personfrm>
    </el-tab-pane>
    <el-tab-pane label="部门负责人" name="third">
       <fromalert :tabledata="tableperson"></fromalert>
    </el-tab-pane>
    
  </el-tabs>
    </div>
  </div>
</template>

<script>
import personfrm from './compoent/personfrm'
import fromalert from './compoent/fromalert'
export default {
  data() {
    return {
      activeName: 'second',
      tableData: [],//上
      tableDatas:[],//下
      tableperson:[],
      all:[],
      currentPage1: 1,
      total: 100,
      user: this.$store.getters.user
    };
  },
  created() {
    this.$axios.get("/api/department/all").then(res => {
      if (res.status == 200) {
        let newdata = res.data;
        let arr = [];
        
        //对数据条件的获取
        newdata.forEach(newdatas => {
          if (newdatas.children.length > 0 && newdatas.statu=="1") {
            let { subunit } = newdatas;
            let newchildren = newdatas.children;
            newchildren.forEach(item => {
              item.subunit = subunit;
              arr.push(item);
            });
          }
        });

        this.tableData = arr;


       let arrrrr=[]
       newdata.forEach(newdatas => {
          if (newdatas.children.length > 0) {
            let { subunit } = newdatas;
            let newchildren = newdatas.children;
            newchildren.forEach(item => {
              item.subunit = subunit;
              item.statu=Number(newdatas.statu) 
              arrrrr.push(item);
            });
          }
        });
       this.all=arrrrr

        let arrr=[]
        newdata.forEach(newdatas => {
          if (newdatas.children.length > 0 && newdatas.statu=="0") {
            let { subunit } = newdatas;
            let newchildren = newdatas.children;
            newchildren.forEach(item => {
              item.subunit = subunit;
              arrr.push(item);
            });
          }
        });

        this.tableDatas = arrr;

       let arrrr=[]
       newdata.forEach(newdatas => {
          if (newdatas.children.length > 0) {
            let obj={}
            obj.principal=newdatas.principal
            obj.subunit=newdatas.subunit
            arrrr.push(obj)
          }
        });

        this.tableperson=arrrr
      }
    });
  },
  components:{
   personfrm,
   fromalert
  },
  methods: {
    goback() {
      this.$router.push("/department");
    },
   handleClick(tab, event) {
        console.log(tab, event);
      }
   },
}
</script>

<style lang = "scss" scoped>
.departmentIndex {
  margin: 40px 0 0 170px;
}
.button {
  width: 100px;
  height: 28px;
  float: right;
  margin: 11px 36px 0 0;
  border: 1px solid #787878;
  border-radius: 4px;
  text-align: center;
  line-height: 28px;
  font-size: 12px;
  margin-bottom: 10px;
}
.header {
  margin: 10px;
}
.page-info {
  padding: 30px 0;
}
.el-table {
  margin-left: 0;
}
.PersonCharge {
  margin: 15px;
}
</style>