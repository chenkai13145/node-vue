<template>
	<div class="theprogressbar">
		<div style="padding-left:20px;" class="height40 linheight40 margintop10">
		  <el-col :span="12">
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
		 <div class="headSelectBox" style="margin: 0;">
            <span class=""  v-for="(item,index) in progressData.brushchoose" :key="index++" v-on:click="xuanzhong(index)" :class="{ischeck:index==current}">{{ item }}</span>
        </div>
		</div>
		<!-- 交付及时率具体数据 -->
		<el-col>
			<ol v-for="(items,index) in timelyrate" :key="index">
				<li>
					<i>{{ (index+1) }}.</i>
					<span>{{ items.name }}</span>
					<el-progress :percentage="items.value" :color="progressData.color" :stroke-width="8"></el-progress>
				</li>
			</ol>
			<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
			<div style="margin: 15px 0;"></div>
			<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
				<el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
			</el-checkbox-group>
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
		checkAll: false,
		checkedCities: [],
		cities: [],
		isIndeterminate: true,
		current:1,//选中的名称
		progressId: 'progress' + (new Date()).getTime(),
		timelyrate:[],
		company:[],
		selectcheck:'',
	}
  },
  created() {
	  let _this = this
		setTimeout(function()  {
			if(_this.progressData.cityOptions[0])
        		_this.cityOptions = _this.progressData.cityOptions[0].value;
		}, 1000)
  },
  methods: {
	   handData(){
		 this.timelyrate = this.progressData.data;
		 this.checkedCities = this.progressData.checkOptions;
		 this.cities = this.progressData.cityOptions;
		 this.company = this.progressData.company;
		},
		handleCheckAllChange(val) {
			 this.checkedCities = val ? this.progressData.cityOptions : [];
		   this.isIndeterminate = false;
			 if(val == false){this.selectcheck = ''}
			 else{
				 this.selectcheck = '';
				 this.checkedCities.forEach(x=>{  
						this.company.forEach(s=>{  
							if(x == s.name){
								this.selectcheck+= s.code+",";
							}
						});
				 });
				}
				 this.$emit('clickcheck',this.selectcheck)
		 },
		handleCheckedCitiesChange(value) {
		   let checkedCount = value.length;
		   this.checkAll = checkedCount === this.cities.length;
		   this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
			 this.selectcheck = '';
			 this.checkedCities.forEach(x=>{  
					this.company.forEach(s=>{  
						if(x == s.name){
							this.selectcheck+= s.code+",";
						}
					});
			 });
			 this.$emit('clickcheck',this.selectcheck)
		},
	
		xuanzhong:function(value){
			this.current=value
			this.$emit('clicktype',value)
		},
	  	changeSelect(value) {
			this.$emit('changeSelectTop', value)
    	},
	},
  watch: {
    progressData: {
      handler () {
		this.handData()
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
