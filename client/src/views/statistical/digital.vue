<template>
	<!-- 运输数字化 -->
	<div>
		<header style="height: 100%">
			<!-- <h4>
				<span>筛选条件</span>
				<el-button type="primary" size="small" icon="el-icon-message">邮件订阅</el-button>
			</h4>
			<div align="left" class="margintop">
				<form class="form-inline" onsubmit="return false">
					<div class="form-group" style="display: block;">
						日期:
						<el-date-picker
							v-model="timedata"
              format="yyyy-MM-dd" 
              value-format="yyyy-MM-dd"
							type="daterange"
							range-separator="至"
							start-placeholder="开始日期"
							end-placeholder="结束日期">
						</el-date-picker>
						<div class="buttonAn">
							<el-button type="primary" icon="el-icon-search" size="small" @click="search" id="search">查询</el-button>
							<el-button type="primary" size="small" id="" ><a :href="downloadURL">下载明细</a></el-button>
						</div>
					</div>
				</form>
			</div> -->
         <div class="the-head">
	        	<el-row :gutter="24">
	        		<el-col :xs="24":sm="12":md="12":lg="4":xl="4" style="position: relative;top: -6px;">
	        			<h4>筛选条件</h4>
	        		</el-col>
	        		<el-col :xs="24":sm="12":md="12":lg="20":xl="20" style="text-align: right;padding-right:20px;">
	        			<form class="form-inline" onsubmit="return false">
				        	<div class="form-group" style="display: block;">
				        		日期:
				        		<el-date-picker
				        			v-model="timedata"
                      format="yyyy-MM-dd" 
                      value-format="yyyy-MM-dd"
				        			type="daterange"
				        			range-separator="至"
				        			start-placeholder="开始日期"
				        			end-placeholder="结束日期">
				        		</el-date-picker>
				        		<div class="buttonAn">
				        			<el-button type="info" style="height: 35px;" icon="el-icon-search" size="small" @click="search" id="search">查询</el-button>
				        			<el-button type="info" style="height: 35px;" size="small" id="" ><a :href="downloadURL" style="color: #39394d;font-size:12px;">下载明细</a></el-button>
                      <el-button type="info" style="height: 35px;" size="small" icon="el-icon-message">邮件订阅</el-button>
				        		</div>
				        	</div>
				        </form>
	        		</el-col>
	        	</el-row>
	        </div>
		</header>
    <!-- 导航条（锚记） -->
      <ul id="anchornavigation">
	    	<li v-for="(nav, index) in navBox" :key="index" v-on:click="addClass(index)" v-bind:class="{ active:index==current}"><a :href="'#'+nav.id">{{nav.name}}</a></li>
	    </ul>
		<div class="containBox">
			<!-- 数字化覆盖趋势指标 -->
      <div id="tzqybcsy" class="mod-demo-echarts margintop10">
	        <LineChart :brokenlineData="brokenInventory" 
          @warehouseQuery="warehouseQuery"
          @changeSelect="changeSelect"></LineChart>
      </div>
		</div>
	</div>
</template>



<script>
import LineChart from '@/components/statistical/linechart-cover'
import { getListDayByOrgCode, getListWeekByOrgCode, getListMonthByOrgCode,exportExcel } from '@/utils/api/statistical/digital'
// import { getCompanyList } from '@/utils/api/statistical/transportsecurity'
export default {
  name: '',
  components: {
    LineChart
  },
  data () {
    return {
    // 导航条（锚记）
     current:0,
     navBox: [
       {
         name: '数字化覆盖趋势指标',
         id : 'tzqybcsy'
       }
     ],
		timedata:'',
    downloadURL: '',
    outrate: '',
    indexCount: 0,
		brokenInventory: {
      title:'数字化覆盖趋势指标',
      titles:'安装了相关物联网设备的车辆数',
			showicon:true,//i图标是否显示
			thiscolor:['#FF6A6A','#FFA500', '#8796fc', 'red', 'green', 'yellow'],//折线图颜色
			brushchoose:['按日','按周','按月'],//筛选值
			outrates: [
        {value: 'gnssdevice', label: '车联网设备(定位/轨迹)'},
        {value: 'face', label: '车联网-司机身份识别'},
        {value: 'vedio', label: '可视化-视频监控'},
        {value: 'tired', label: '驾驶安全-人脸识别'},
        {value: 'ADAS', label: '驾驶安全-ADAS'},
        {value: 'can', label: '智能资产-CAN（行车电脑）'}
      ],
			thisnum:'',
			thisxAxis:[],
			data: []
		 }
    }
  },
  mounted () {
	  this.exportExcel()
    this.getCompanyList()
    
  },
  methods: {
    addClass: function(index) {
      this.current = index;
    },
    //下载
	  exportExcel() {
		  exportExcel({}).then(res => {
			  let file = new Blob([res], {type: 'application/vnd.ms-excel'})
			  this.downloadURL = URL.createObjectURL(file)
		  })
    },
    //获取公司列表
		getCompanyList() {
			if(!this.outrate) 
          this.outrate = this.brokenInventory.outrates[0].value;
      this.getListDayByOrgCode()
    },
    //切换公司
    changeSelect(code) {
      this.outrate = code
      if(this.indexCount == 0) {
        this.getListDayByOrgCode()
      } else if(this.indexCount == 1) {
        this.getListWeekByOrgCode()
      } else {
        this.getListMonthByOrgCode()
      }
    },
	  //按日
    getListDayByOrgCode() {
      var code = {
        type: this.outrate,
        startTime: this.timedata[0],
        endTime: this.timedata[1]
      }
      getListDayByOrgCode(code).then(res => {
        this.brokenInventory.data = []
        var thisxAxis = []
        var code_name = []
        var num0 = []
        var num1 = []
        var num2 = []
        var num3 = []
        var num4 = []
        var num5 = []
        if(!res.data || res.data.length == 0) return false
        res.data.forEach(item => {
          thisxAxis.push(item.date)
          code_name.push(item.code_name)
          // num.push(item.num)
          if(item.code_name == '商贸日邮') {
            num0.push(item.num)
          }
          if(item.code_name == '商贸物流') {
            num1.push(item.num)
          }
          if(item.code_name == '商铁物流') {
            num2.push(item.num)
          }
          if(item.code_name == '富田日捆') {
            num3.push(item.num)
          }
          if(item.code_name == '广丰物流') {
            num4.push(item.num)
          }
          if(item.code_name == '顺捷物流') {
            num5.push(item.num)
          }
        });

        this.brokenInventory.thisxAxis = Array.from(new Set(thisxAxis))
        var array = Array.from(new Set(thisxAxis))
        this.brokenInventory.data.push(
          {
            name: '商贸物流',
            value: num0
          },
          {
            name: '商贸物流',
            value: num1
          },
          {
            name: '商铁物流',
            value: num2
          },
          {
            name: '富田日捆',
            value: num3
          },
          {
            name: '广丰物流',
            value: num4
          },
          {
            name: '顺捷物流',
            value: num5
          },
        )
      })
    },
    //按周
    getListWeekByOrgCode() {
       var code = {
        type: this.outrate,
        startTime: this.timedata[0],
        endTime: this.timedata[1]
      }
      getListWeekByOrgCode(code).then(res => {
        this.brokenInventory.data = []
        var thisxAxis = []
        var code_name = []
        var num0 = []
        var num1 = []
        var num2 = []
        var num3 = []
        var num4 = []
        var num5 = []
        if(!res.data || res.data.length == 0) return false
        res.data.forEach(item => {
          thisxAxis.push(item.date)
          code_name.push(item.code_name)
          // num.push(item.num)
          if(item.code_name == '商贸日邮') {
            num0.push(item.num)
          }
          if(item.code_name == '商贸物流') {
            num1.push(item.num)
          }
          if(item.code_name == '商铁物流') {
            num2.push(item.num)
          }
          if(item.code_name == '富田日捆') {
            num3.push(item.num)
          }
          if(item.code_name == '广丰物流') {
            num4.push(item.num)
          }
          if(item.code_name == '顺捷物流') {
            num5.push(item.num)
          }
        });

        this.brokenInventory.thisxAxis = Array.from(new Set(thisxAxis))
        var array = Array.from(new Set(thisxAxis))
        this.brokenInventory.data.push(
          {
            name: '商贸物流',
            value: num0
          },
          {
            name: '商贸物流',
            value: num1
          },
          {
            name: '商铁物流',
            value: num2
          },
          {
            name: '富田日捆',
            value: num3
          },
          {
            name: '广丰物流',
            value: num4
          },
          {
            name: '顺捷物流',
            value: num5
          },
        )
      })
    },
    //按月
    getListMonthByOrgCode() {
       var code = {
        type: this.outrate,
        startTime: this.timedata[0],
        endTime: this.timedata[1]
      }
      getListMonthByOrgCode(code).then(res => {
        this.brokenInventory.data = []
        var thisxAxis = []
        var code_name = []
        var num0 = []
        var num1 = []
        var num2 = []
        var num3 = []
        var num4 = []
        var num5 = []
        if(!res.data || res.data.length == 0) return false
        res.data.forEach(item => {
          thisxAxis.push(item.date)
          code_name.push(item.code_name)
          // num.push(item.num)
          if(item.code_name == '商贸日邮') {
            num0.push(item.num)
          }
          if(item.code_name == '商贸物流') {
            num1.push(item.num)
          }
          if(item.code_name == '商铁物流') {
            num2.push(item.num)
          }
          if(item.code_name == '富田日捆') {
            num3.push(item.num)
          }
          if(item.code_name == '广丰物流') {
            num4.push(item.num)
          }
          if(item.code_name == '顺捷物流') {
            num5.push(item.num)
          }
        });

        this.brokenInventory.thisxAxis = Array.from(new Set(thisxAxis))
        var array = Array.from(new Set(thisxAxis))
        this.brokenInventory.data.push(
          {
            name: '商贸物流',
            value: num0
          },
          {
            name: '商贸物流',
            value: num1
          },
          {
            name: '商铁物流',
            value: num2
          },
          {
            name: '富田日捆',
            value: num3
          },
          {
            name: '广丰物流',
            value: num4
          },
          {
            name: '顺捷物流',
            value: num5
          },
        )
      })
    },
    //数字化-日周月切换
    warehouseQuery(value) {
      this.indexCount = value
      if(value == 0) {
        this.getListDayByOrgCode()
      } else if(value == 1) {
        this.getListWeekByOrgCode()
      } else {
        this.getListMonthByOrgCode()
      }
    },
    //查询
    search () {
      if(this.indexCount == 0) {
        this.getListDayByOrgCode()
      } else if(this.indexCount == 1) {
        this.getListWeekByOrgCode()
      } else {
        this.getListMonthByOrgCode()
      }
    }
  }
}
</script>

<style lang="scss">
@import url("../../../../static/css/style.css");
.buttonAn a {color: #fff;}
.el-date-editor.el-input__inner {width: auto}
</style>
<style lang="scss" scoped>
	.the-head h4{margin-bottom: 0;margin-top: 1rem;}
	/deep/ .the-head .el-date-editor.el-input, .el-date-editor.el-input__inner{width: 30%;}
	.form-inline /deep/ button{margin-left: 10px;}
	/deep/ .el-button--info{background: #f3f3f4;color: #39394d;border: 0;}
	.containBox {
    margin-left: 10%;
    position: absolute;
    left: 0;
    right: 0;
    top: 90px;
    overflow: auto;
    bottom: 1px;
    > div {
      background: #fff;
      padding: 10px 0;
      margin: 0 20px 30px 0;
      border: 1px solid #e0e0eb;
    }
  }
#anchornavigation {
    width: 80px;
    padding: 10px 0;
    background: #fff;
    margin-left: 2%;
    border: 1px solid #e0e0eb;
    box-shadow: 0 3px 4px 0 rgba(98, 99, 118, 0.08);
    li {
      height: auto;
      line-height: normal;
      padding: 10px 9px;
	    width: 99%;
      a {
        font-size: 13px;
        color: #84849a;
        text-align: center;
        display: block;
      }
    }
    .active a {
      color: #da212d;
    }
  }
</style>
