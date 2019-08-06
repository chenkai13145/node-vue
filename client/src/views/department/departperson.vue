<template>
	<div class="departmentIndex">
		<div class="main-content">
			<div class="header">
				<el-button style="margin-right:200px" @click="addperson">新增员工</el-button>
                <div class="button" @click="goback">返回</div>
			</div>
			<div class="PersonCharge">负责人：{{name}}</div>
			<el-table :data="tableData" border fit>
				<el-table-column align="center" prop="number"  label="员工编号" fixed min-width="100">
				</el-table-column>
				<el-table-column align="center" prop="name" label="姓名" fixed min-width="100">
				</el-table-column>
				<el-table-column align="center" prop="subunit" label="部门" min-width="150">
				</el-table-column>
				<el-table-column align="center" prop="job" label="职务" min-width="150">
				</el-table-column>
				<el-table-column align="center" prop="tel" label="手机号" min-width="150">
				</el-table-column>
				<el-table-column align="center" prop="email" label="邮箱" min-width="150">
				</el-table-column>
				<el-table-column align="center" prop="pair" label="操作" min-width="350">
					<template slot-scope="scope">
						<el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
						<el-button type="primary" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
					</template>
				</el-table-column>			
			</el-table>
			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: this.$route.query.data.principal,
				tableData: '',
				currentPage1: 1,
				total:100,
				urlStr:this.$route.fullPath.split('=')[2],
				user:this.$store.getters.user
			}
		},
		created(){
			console.log(this.urlStr)
			 this.$axios.get('/api/department/'+this.urlStr).then(res=>{
				if(res.status==200){
                        let newchildren=res.data.children
			            let arr=[]
						this.name=res.data.principal
			            newchildren.forEach(item => {
			            item.subunit=res.data.subunit
			            arr.push(item)
			             })
			         this.tableData=arr
				}
           
			 })
			
		},
		methods: {
            goback(){
				this.$router.push('/department')
			},
			//新增员工
			addperson(){
				if(this.user.identification=="manager"){
                       this.$router.push({path:'/addperson',query:{name:"添加员工",data:this.$route.query.data,methods:'post',id:this.$route.query.id}})
				}else{
					this.$message({
						type:'error',
						message:'没有权限'
					})
				}
                
			},
		
			//点击编辑对应数据
			handleEdit(index, row) {
				console.log(this.$route.query)
				if(this.user.identification=="manager"){
                        this.$router.push({path:'/addperson',query:{name:"编辑员工",data:row,methods:'put',id:this.$route.query.id,child_id:row._id}})
				}else{
					this.$message({
						type:'error',
						message:'没有权限'
					})
				}
                
			},
			//点击删除对应数据
			handleDelete(index, row) {
				if(this.user.identification=="manager"){
				this.$confirm('数据删除后不可恢复, 是否继续?', '提示', {
					type: 'warning'
				}).then(() => {
					this.$axios.delete('/api/department/children/'+this.urlStr+'/'+row.number).then(res=>{
						if(res.status==200){
							this.$message({
								type:"success",
								message:res.data.msg
							})
							this.tableData.splice(index,1)
						}
					})
				})
				}else{
					this.$message({
						type:'error',
						message:'没有权限'
					})
				}
			},

		},
		mounted() {

		}
	}
</script>

<style lang = "scss" scoped>
    .departmentIndex{
        margin:40px 0 0 150px;
    }
    .button{
				width: 100px;
				height: 28px;
				float: right;
				margin: 11px 36px 0 0;
				border: 1px solid #787878;
				border-radius: 4px;
				text-align: center;
				line-height: 28px;
				font-size: 12px;
			}
    .header{
        margin:10px;
    }
	.page-info{
		padding:30px 0;
	}
	.el-table{
		margin-left: 0;
	}
	.PersonCharge{
		margin: 15px;
	}
</style>