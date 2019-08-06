import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from './request/http.js'
import echarts from 'echarts'
import BaiduMap from 'vue-baidu-map'
import './icons/index'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'YOUR_APP_KEY'
})
Vue.prototype.$echarts = echarts 
Vue.prototype.$axios=axios

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.filter(
  'dates',function(el){
    let date=new Date(el)
    let n=date.getFullYear();
    let y=(date.getMonth()+1).toString().padStart(2,0);
    let r=(date.getDate()).toString().padStart(2,0);
    let s=(date.getHours()).toString().padStart(2,0);
    let f=(date.getMinutes()).toString().padStart(2,0);
    let m=(date.getSeconds()).toString().padStart(2,0);
    return `${n}-${y}-${r} ${s}:${f}:${m}`
}
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
