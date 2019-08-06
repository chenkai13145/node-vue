<template>
<div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagedata.currentPage2"
      :page-sizes="pagedata.arr"
      :page-size="pagedata.num"
      :layout="pagedata.layout"
      :total="pagedata.total">
    </el-pagination>
</div>
</template>
<script>
export default {
     methods: {
      handleSizeChange(val) {
          this.$emit('changsize',val)
      },
      handleCurrentChange(val) {
        this.$emit(`changpage`,val)
      }
    },
    data() {
      return {
        // total: 100,//总数
        // currentPage2: 1,//当前页数
        // layout:'total, sizes, prev, pager, next, jumper',
        // num:5,//每页显示数目
        // arr:[5,10,15,20]
      };
    },
    props:["pagedata"],
    created(){
    }
}
</script>
<style lang="scss" scoped>

</style>
