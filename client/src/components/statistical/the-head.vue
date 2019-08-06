<template>
	<div class="the-head">
		<el-row :gutter="24">
			<el-col :xs="24":sm="12":md="12":lg="4":xl="4" style="position: relative;top: -6px;">
				<h4>{{ Thehead }}</h4>
			</el-col>
			<el-col :xs="24":sm="12":md="12":lg="20":xl="20" style="text-align: right;padding-right:20px;">
				<form class="form-inline">
					<el-date-picker
						v-model="timedata"
						type="daterange"
						align="right"
						unlink-panels
						value-format="yyyy-MM-dd"
						range-separator="-"
						start-placeholder="开始日期"
						end-placeholder="结束日期"
						:picker-options="pickerOptions2">
					</el-date-picker>
					<el-button type="info" style="height: 35px;" size="small" @click="chenckEmail" icon="el-icon-message">{{email?'已订阅':'邮件订阅'}}</el-button>
					<el-button type="info" style="height: 35px;" size="small" @click="download"><icon-svg name="btn-download"/>下载</el-button>
					<!-- <el-button type="info"  style="height: 35px;" size="small" @click.native="changedate"><icon-svg name="filtr"/> 筛选</el-button> -->
				</form>
			</el-col>
		</el-row>
		<Messages v-show="mesTextoffs" :messageText="mesTextoff"></Messages>
	</div>
</template>

<script>
import Messages from '@/components/statistical/message'
import { truncate } from 'fs';
import { setTimeout } from 'timers';
import  {Mixin} from '@/components/statistical/xls.js'
export default {
	mixins: [Mixin],
	name: 'the-head',//图表分析头部
	props: {
	  Thehead: {//父页面传回的折线图值 接收的数据类型
		  type: String, 
	  },
	  pickerOptions2:{
		  type: Object,
		  }
	},
	components:{
      Messages
	},
	data(){
		 return {timedata:'',email:false,mesTextoff:{text:'',megOff:false,icons:''} }
	},
	
	methods: {
		//日期选择功能
		changedate(){
			if(this.formatTime(30)){
			     this.mesTextoff.icons="warn-alert"
				 this.mesTextoff.megOff=true
				 this.mesTextoff.text="最长查询范围30天"
			 }else{
				 this.$emit('pikerTimer',this.timedata)
			 }
		},
		//邮箱功能
		chenckEmail(){
		   this.email=!this.email
		   if(this.email){
			    this.mesTextoff.icons="alert-success"
			    this.mesTextoff.megOff=true
				this.mesTextoff.text="订阅成功"
		   }else{
			     this.mesTextoff.icons="alert-success"
			     this.mesTextoff.megOff=true
				 this.mesTextoff.text="已取消订阅"
		   }
		},
		//下载
		download(){
			 if(this.formatTime(90)){
			    this.mesTextoff.icons="warn-alert"
				 this.mesTextoff.megOff=true
				 this.mesTextoff.text="下载所选时间段不能超过100天！"
			 }else{
				 this.tableToExcel()
			 }
		},
		//时间范围过滤
		formatTime(day){
			if(!this.timedata)return;
			 let start=new Date(this.timedata[0]).getTime()
			 let end=new Date(this.timedata[1]).getTime()
			 let calc=end-start
			 return calc>(24 * 60 * 60 * 1000)*day
		},
		
	},
	computed: {
		mesTextoffs(){
			if(this.mesTextoff.megOff){
                 setTimeout(()=>{
                    this.mesTextoff.megOff=false
				 },3000)
			}
		    return this.mesTextoff.megOff
		}
	},
	watch: {
		timedata(newVal, oldVal) {
			var startData ="",endData="";
			if(this.timedata != null){
				startData = this.timedata[0];
				endData = this.timedata[1];
			}
			var datatime = {
				startData:startData,
				endData:endData
			}
			this.$emit('clicktimedata',datatime);
		}
	}
}
</script>

<style scoped>
	.the-head h4{margin-bottom: 0;margin-top: 1rem;}
	/deep/ .the-head .el-date-editor.el-input, .el-date-editor.el-input__inner{width: 30%;}
	.form-inline /deep/ button{margin-left: 10px;}
	/deep/ .el-button--info{background: #f3f3f4;color: #39394d;border: 0;}
</style>
