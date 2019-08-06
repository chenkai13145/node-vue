<template>
	<div>
		<el-table :data="dataList"  border  v-loading="dataListLoading" style="width: 100%;">
			<el-table-column prop="id" header-align="center" align="center" width="80" label="ID"></el-table-column>
			<el-table-column prop="dateTime" header-align="center" align="center" label="日期"></el-table-column>
			<el-table-column prop="CustomerCity" header-align="center" align="center" label="客户(城市)"></el-table-column>
			<el-table-column prop="InvestmentEnterprise" header-align="center" align="center" label="投资企业"></el-table-column>
			<el-table-column prop="BrandName" header-align="center" align="center" label="商品车品牌"></el-table-column>
			<el-table-column prop="WarehouseName" header-align="center" align="center" label="仓库名称"></el-table-column>
			<el-table-column prop="receipt" header-align="center" align="center" label="入库量(辆)"></el-table-column>
			<el-table-column prop="outbound" header-align="center" align="center" label="出库量(辆)"></el-table-column>
			<el-table-column prop="inventory" header-align="center" align="center" label="库存量(辆)"></el-table-column>
			<el-table-column prop="strongerNum" header-align="center" align="center" label="总库位数(个)"></el-table-column>
			<el-table-column prop="useNum" header-align="center" align="center" label="使用库位数(个)"></el-table-column>
			<el-table-column prop="useUtilization" header-align="center" align="center" label="库位利用率"></el-table-column>
			<el-table-column prop="longstockNum" header-align="center" align="center" label="长库龄车辆数(辆)"></el-table-column>
		</el-table>
		
		<el-pagination
		  @size-change="sizeChangeHandle"
		  @current-change="currentChangeHandle"
		  :current-page="pageIndex"
		  :page-sizes="[10, 20, 50, 100]"
		  :page-size="pageSize"
		  :total="totalPage"
		  layout="total, sizes, prev, pager, next, jumper">
		</el-pagination>
	</div>
</template>

<script>
export default {
    data () {
      return {
        dataList: [],
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        dataListLoading: false
      }
    },
    activated () {
      this.getDataList()
    },
    methods: {
      // 获取数据列表
      getDataList () {
        this.dataListLoading = true
        this.$http({
          url: this.$http.adornUrl('/sys/config/list'),
          method: 'get',
          params: this.$http.adornParams({
            'page': this.pageIndex,
            'limit': this.pageSize,
            'paramKey': this.dataForm.paramKey
          })
        }).then(({data}) => {
          if (data && data.code === 0) {
            this.dataList = data.page.list
            this.totalPage = data.page.totalCount
          } else {
            this.dataList = []
            this.totalPage = 0
          }
          this.dataListLoading = false
        })
      },
      // 每页数
      sizeChangeHandle (val) {
        this.pageSize = val
        this.pageIndex = 1
        this.getDataList()
      },
      // 当前页
      currentChangeHandle (val) {
        this.pageIndex = val
        this.getDataList()
      }
    }
  }
</script>

<style>
</style>
