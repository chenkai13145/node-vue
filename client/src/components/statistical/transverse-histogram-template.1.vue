<template>
	<!-- 柱状图组件 (数据横向)-->
	<div class="columnar-transverse-template">
		<el-row class="height40 linheight40 margintop10 borderbottom paddingbottom">
			<el-col :span="18">
				<div class="grid-content bg-purple">
					<span class="disinline">{{ transverseData.title }}</span>
					<el-tooltip
					  v-if="transverseData.showicon"
					  class="item"
					  effect="dark"
					  :content="transverseData.explain"
					  placement="right"
					>
					  <icon-svg name="help" class="tipicon"></icon-svg>
					</el-tooltip>
				</div>
			</el-col>
			
			<div class="headSelectBox">
			  <span class=""  v-for="(item,index) in transverseData.brushchoose" :key="index++" v-on:click="xuanzhong(index)" :class="{ischeck:index==current}">{{ item }}</span>
			</div>
			
		</el-row>
		<div class="table-style">
			<el-table
				:data="tableData"
				style="width: 100%">
				<el-table-column
				  prop="car_vin"
				  label="VIN">
				</el-table-column>
				 <el-table-column
				  prop="factory_name"
				  label="客户">
				</el-table-column>
				 <el-table-column
				  prop="org_name"
				  label="投资企业">
				</el-table-column>
				<el-table-column
				  label="延迟出库天数"
				  width="480"
				  class-name="lastTd">
				  <template slot-scope="scope">
					 <p :style="{width:scope.row.carvin_outtime_daynum/max()*100+'%'}"></p><span>{{scope.row.carvin_outtime_daynum}}</span>
					 <div class="line1"><span class="spanval">0</span></div>
					 <div class="line2"><span class="spanval">{{numberFn(1/5)}}</span></div>
					 <div class="line3"><span class="spanval">{{numberFn(2/5)}}</span></div>
					 <div class="line4"><span class="spanval">{{numberFn(3/5)}}</span></div>
					 <div class="line5"><span class="spanval">{{numberFn(4/5)}}</span></div>
					 <div class="line6"><span class="spanval">{{max()}}</span></div>
				  </template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
export default {
	name: 'columnar-transverse-template',
	props: {
	  transverseData: {//父页面传回的折线图值 接收的数据类型
		  type: Object, 
	  },
	  successData: {
	    type: Boolean,
	  },
	},
	data () {
      return {
		transverse:null,//折线初始值
		current:1,//选中的名称
		outrate:'',//下拉框选中的值
		transverseId: 'transverse'+ (new Date()).getTime(),
		tableData: []
		}
    },
    methods: {
		max(){
		   let arr=[]
		   let maxval=''
			this.tableData.forEach(item=>{
			  arr.push(item.carvin_outtime_daynum)
			})
		   if(arr.length>0){
			maxval=Math.max.apply(Math,arr);
			 return Number(maxval) 
		   }
		},
		numberFn(val){
		  return Math.floor(this.max()*val) 
		},
		handleSeriesData () {
			this.tableData = this.transverseData.data;
		},
		xuanzhong:function(value){
			this.current=value;
			this.$emit('clicktype',this.current)
		},
		
	},
	watch: {
	  transverseData: {
	    handler () {
	      if (this.successData) {
				this.handleSeriesData();
	      }else{}
	    },
	    deep: true
	  }
	}
  }
</script>
<style lang="scss">
.table-style {
	margin-top: 10px;
   .lastTd{
        position: relative;
        .cell{
        display: flex;
        align-items: center;
        flex-flow: wrap;
        >span{
            color:green;
            line-height: normal;
            min-width: 30px;
            text-align: right;
        }
        >p{
            height: 25px;
            background: green;
            position: relative;
            z-index: 9;
        }
        >div{
            width: 1px;
            height: 100%;
            background: #e2e2ec;
            position: absolute;
            top: 0;
        }
        .line1{
            left: 0;
        }
        .line2{
            left:20%;
        }
        .line3{
            left:40%;
        }
        .line4{
            left:60%;
        }
        .line5{
            left:80%;
        }
        .line6{
            left:100%;
        }
        }
   }
   
.el-table{
  overflow: visible!important;
  .cell{
     padding: 0!important;
  }
  th{
    height: 40px!important;
    text-align: center!important;
    color: #3c3c4f!important;
  }
  td{
    height: 50px!important;
    text-align: center!important;
    color: #3c3c4f!important;
  }
  .el-table__body-wrapper{
      overflow: visible;
  }
  td, th.is-leaf{
    border: 0!important;
  }
}
.el-table::before{
    display: none;
}
.spanval{
    display: none;
  }
.el-table tbody tr:last-child .lastTd{
    .spanval{
       display: inline-block;
       position: absolute;
       bottom: -25px;
       transform: translateX(-50%);
       white-space: nowrap;
       text-align: center;
       color: #aaaab9;
    }
   
}
}
</style>
