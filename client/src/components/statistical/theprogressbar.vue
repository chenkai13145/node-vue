<template>
	<div class="theprogressbar">
		<div style="padding-left:20px;" class="height40 linheight40 margintop10">
		  <el-col :span="7">
			<div class="grid-content bg-purple">
				<span class="disinline">{{ progressData.title }}</span>
				<el-tooltip
				  v-if="progressData.showicon"
				  class="item"
				  effect="dark"
				  :content="progressData.explain"
				  placement="right"
				>
				  <icon-svg name="help" class="tipicon"></icon-svg>
				</el-tooltip>
			</div>
		  </el-col>
		   <el-col :span="3" style="margin-right:10px">
			<div class="grid- bg-purple-light">
			<el-select v-model="cityOptions" placeholder="请选择" @change="changeSelect">
				<el-option
				v-for="item in progressData.cityOptions"
				:key="item.value"
				:label="item.label"
				:value="item.value"
				></el-option>
			</el-select>
			</div>
		</el-col>
		 <div class="headSelectBox" style="margin: 0;">
            <span class=""  v-for="(item,index) in progressData.brushchoose" :key="index" v-on:click="xuanzhong(index)" :class="{ischeck:index==current}">{{ item }}</span>
        </div>
		</div>
		<!-- 交付及时率具体数据 -->
		<el-col>
			<ol class="data-list" v-for="(items,index) in timelyrate" :key="index">
				<li>
					<i>{{ (index+1) }}.</i>
					<span>{{ items.name }}</span>
					<el-progress :percentage="items.value" :color="progressData.color" :stroke-width="8"></el-progress>
				</li>
			</ol>
		</el-col>
		
	</div>
</template>

<script>
export default {
  name: 'the-progress-bar',
  components: {
  
  },
  props: {
    progressData: {
      type: Object,
      required: true
    },
	successData: {
	  type: Boolean,
	},
  },
  data () {
    return {
		isIndeterminate: true,
		current:1,//选中的名称
		progressId: 'progress' + (new Date()).getTime(),
		timelyrate:[]
    }
  },
//   created() {
// 	  let _this = this
// 		setTimeout(function()  {
// 			_this.handData()
// 		}, 2000)
//   },
  methods: {
	   handData(){
		 this.timelyrate = this.progressData.data
		},
	  xuanzhong:function(value){
	  	this.current=value
		this.$emit('clicktype',value)
	  },
	  changeSelect(value) {
			console.log(value)
			this.$emit('changeSelectTop', value)
    	}
	},
  watch: {
    progressData: {
      handler () {
		//if (this.successData) {
		this.handData()
        //}else{
      	//}
      },
	   deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
	.ischeck{
	  color:#D70110;
	  border-bottom: 4px solid #D70110;
	}
.headSelectBox{
    display: inline-block;
    float: right;
    margin-right: 40px;
	cursor: pointer;
	font-size: 14px;
    color: #39394d;
    span:nth-child(2){
      margin: 0 50px;
    }
}
</style>
