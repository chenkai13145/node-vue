<template>
    <div :id="doughnutId" class="transport-proportion-doughnut" style="width:100%;height:100%"></div>
</template>

<script>
import {getTranInfoHousesee} from '../../../api/monitor/warehouse'
import echarts from 'echarts'
export default {
  name: '',
  data () {
    return {
    // 城市
    cityData :['广州', '上海', '北京', '深圳', '太原', '南京'],
    // 数值
    valueDat :[1000, 2000, 2700, 2900, 1390, 2330, 2220],
    // 环形图
     doughnut: null,
     doughnutId: 'doughnut' + Math.random().toString(36).substr(2) + Date.now()
    }
  },
    activated () {
    // 由于给echart添加了resize事件, 在组件激活时需要重新resize绘画一次, 否则出现空白bug
    if (this.doughnut) {
      this.doughnut.resize()
    }
  },
   props:{
    mapQuery:{
      type:Object
    }
  },
  mounted () {
    this.requestList()
    // this.initDoughnut()
  },
  created() {
  },
  methods: {
    // 初始化环形图
    initDoughnut () {
      let option = {
        backgroundColor: '#fff',
        color: ['#5666ea'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'       // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            y :'25',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : this.cityData,
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                      fontSize:10,
                      color: "#39394d"   //这里用参数代替了
                    }
                },
                // 设置轴线的属性
                 axisLine:{
                     lineStyle:{
                         fontSize:10,
                         color:'#e0e0eb',
                         width:1,//这里是为了突出显示加上的
                     }
                 }
            }
        ],
        yAxis : [
            {
                type : 'value',
                // max : 3000,
                min: 0,
                axisLabel: {
                    show: true,
                    textStyle: {
                      color: "#6f6f7e"   //这里用参数代替了
                    }
                },
                // 设置轴线的属性
                 axisLine:{
                     lineStyle:{
                         color:'#e0e0eb',
                         width:1,//这里是为了突出显示加上的
                     }
                 },
                 splitLine:{  
                    show:true,
                      lineStyle:{
                        color:'#e0e0eb',
                        width: 1
                    }
                 }
            }
        ],
        series : [
            {
                name:'',
                type:'bar',
                barWidth: '14',
                data:this.valueDat,
                itemStyle: {
                   normal: {
                       label: {
                           show: true,//开启显示
                           position: 'top',	//在上方显示
                           textStyle: {	    //数值样式
                               color: '#39394d',
                               fontSize: 12
                           }
                       }
                   }
               }
            }
        ]
      }
      // this.loading()
      setTimeout(() => {
        this.doughnut.hideLoading()
        this.doughnut.setOption(option)
      }, 2000)
     
    },
    loading(){
       // 实例化环形图
      this.doughnut = echarts.init(document.getElementById(this.doughnutId))
      // 等待加载loading
      this.doughnut.showLoading({
        text: 'loading',
        color: '#5566EA',
        textColor: '#c9c9c9',
        maskColor: '#fff',
        zlevel: 0
      })
       // 响应屏幕修改
      window.addEventListener('resize', () => {
        this.doughnut.resize()
      })
    },
    requestList(){
      this.loading()
      getTranInfoHousesee().then(res=>{
        console.log(res)
        if(res.data.msg==='success'){
          let datas=res.data.data.sort((a,b)=>{
            b.warehouse_car_num===null?b.warehouse_car_num=0:b.warehouse_car_num=b.warehouse_car_num
            a.warehouse_car_num===null?a.warehouse_car_num=0:a.warehouse_car_num=a.warehouse_car_num
            return b.warehouse_car_num-a.warehouse_car_num
          })
            this.cityData=datas.map(item=>{
              return item.code_name
            })
            this.valueDat=datas.map(item=>{
              return item.warehouse_car_num===null?0:item.warehouse_car_num
            })
         this.initDoughnut();
        }
      })
      .catch(err=>{
        this.doughnut.hideLoading()
        this.$emit('showEmptyFn',{show:false,type:'VehiclesNumber'})
      })
    }
  }
}
</script>

<style lang="scss">
</style>
