<template>
    <div class="personfrm">
        <el-table :data="tabledata" border fit>
        <el-table-column align="center" prop="number" label="员工编号" fixed min-width="100"></el-table-column>
        <el-table-column align="center" prop="name" label="姓名" fixed min-width="100"></el-table-column>
        <el-table-column v-if="statu" align="center" prop="subunit" label="所属部门" min-width="150"></el-table-column>
        <el-table-column align="center" prop="job" :label="statu=='1'?'现任职务':'曾经职务'" min-width="150"></el-table-column>
        <el-table-column align="center" prop="tel" label="手机号" min-width="150"></el-table-column>
        <el-table-column  align="center" prop="email" label="邮箱" min-width="150"></el-table-column>
        <el-table-column  align="center" prop="pair" label="员工状态" min-width="350">
          <template slot-scope="scope">
              <span :class="[statu?'hui':'hong']">{{statu?'上班中':'已离职'}}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
export default {
    create(){
        console.log('l')
    },
    props:["tabledata",'statu']
}
</script>

<style lang="scss" scoped>
    .hui{
        color:olive;
    }
    .hong{
        color: red;
    }
</style>
