<template>
	<div class="main-content">
		<div class="return">
		    <span>{{this.$route.query.msg}}</span>
			<div class="button" @click="goback">返回</div>
		</div>
		<div class="addEdit">
			<el-form :model="ruleForm" style="width:400px" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<!-- 部门名称 必填 -->
				<el-form-item label="部门名称：" prop="subunit">
					<el-input size= "small" v-model="ruleForm.subunit" placeholder="请输入部门名称"></el-input>
				</el-form-item>
				<el-form-item label="负责人" prop="principal">
					<el-input size= "small" v-model="ruleForm.principal" placeholder="请输入负责人"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button size= "small" @click="resetForm('ruleForm')">取消</el-button>
					<el-button size= "small" type="primary" @click="submitForm('ruleForm')">确认</el-button>

				</el-form-item>
			</el-form>

		</div>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
                    subunit:this.$route.query.data.subunit || '',
                    principal:this.$route.query.data.principal || ''
				},
				rules: {
					subunit: [{
							required: true,
							message: '部门名称不能为空',
							trigger: 'blur'
						},
						{
							min: 1,
							max: 20,
							message: '长度在 1 到 20 个字符',
							trigger: 'blur'
						}
					],
					principal: [{
							required: true,
							message: '负责人不能为空',
							trigger: 'blur'
						},
						{
							min: 2,
							max: 4,
							message: '长度在 2 到 4 个字符',
							trigger: 'blur'
						}
					]
				}
			}
		},
		methods: {
			goback(){
				this.$router.go(-1)
			},
			submitForm(formName) {
				this.$refs.ruleForm.validate((valid) => {
					if(valid) {
						let method=this.$route.query.methods
						if(method=='post'){
                            this.$axios.post('/api/department/add',this.ruleForm).then(datas=>{
                            if(datas.data.success){
                                this.$message({
                                    type:'success',
                                    message:datas.data.msg
                                })
                                this.$router.push('/department')
                            }else{
                                this.$message({
                                    type:'error',
                                    message:datas.data.msg
                                })
                            }
                        })
						}else if(method=='put'){
							let depdata=this.$route.query.data
							for(let key in this.ruleForm){
                                depdata[key]=this.ruleForm[key]
							}
							
							this.$axios.put('/api/department/eidt/'+this.$route.query.data._id,depdata).then(datas=>{
							if(datas.data.success){
                                this.$message({
                                    type:'success',
                                    message:'编辑成功'
                                })
                                this.$router.push('/department')
                            }else{
                                this.$message({
                                    type:'error',
                                    message:'编辑失败'
                                })
                            }
                        })
						}
					
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}

		},
		created(){
			console.log(this.ruleForm)
		}
	}
</script>
<style lang="scss" scoped>
	.main-content {
		width: 1000px;
		height: 100%;
		border: 1px solid #d7d7d7;
		margin-left:150px;
		margin-top: 40px;
		.return {
			height: 50px;
			background: #f6f6f6;
			border-bottom: 1px solid #d7d7d7;
			span{
				display: inline-block;
				margin: 10px;
				cursor: pointer;
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
				cursor: pointer;
			}
		}
		.addEdit {
			width: 600px;
			height: 550px;
			margin: 40px 0 0 100px;
			
		}
	}
</style>