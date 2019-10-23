import Vue from 'vue'
import Router from 'vue-router'
import Indexs from '../views/index'
import Home from '../views/home/home'

//user路由
import Person from '../views/user/person'
import Register from '../views/user/register'
import Login from '../views/user/login'

//profile路由
import HostMoney from '../views/profile/hostmoney'
import ViewSee from '../views/profile/viewsee'

//department路由
import DepartMent from '../views/department/department'
import DepartPerson from '../views/department/departperson'
import AddOffice from '../views/department/addoffice'
import AddPerson from '../views/department/addperson'
import PersonAll from '../views/department/personall'
//monitoringluyou

import Truckload from '../views/monitoring/truckload'
import Warehouse from '../views/monitoring/warehouse'
import Exception from '../views/monitoring/exception'
import fullCapacity from '../views/monitoring/full-capacity'
import Transport from '../views/monitoring/transport'

//statistical路由
import Warehouses from '../views/statistical/warehouse'

Vue.use(Router)
const route=[
  {path:'/monitoring-truckload', name:"整车实时看板",component:Truckload},
  {path:'/monitoring-warehouse', name:"仓库实时监控",component:Warehouse},
  {path:'/monitoring-exception', name:"异常实时监控",component:Exception},
  {path:'/monitoring-transport', name:"运输实时监控",component:Transport},
  {path:'/monitoring-full-capacity', name:"运力实时监控",component:fullCapacity}
]
const statistica=[
  {path:'/statistical-warehouse', name:"仓库统计",component:Warehouses}

]

const router= new Router({
  mode:'history',
  linkActiveClass:'active',
  routes: [
   {
     path:'/register',
     name:"注册",
     component:Register
   },
   {
    path:'/login',
    name:"登录",
    component:Login
  },
  {
    path:'*',
    redirect:'/login',
    component:Login
  },
  {
    path:'/index',
    name:"index",
    redirect:"/home",
    component:Indexs,
    children:[
      {path:'/home', name:"首页",component:Home,},
      {path:'/hostmoney', name:"资金管理",component:HostMoney},
      {path:'/viewsee', name:"资金视图",component:ViewSee},
      {path:'/person', name:"信息管理",component:Person},
      {path:'/department',name:"部门管理",component:DepartMent},
      {path:'/departperson',name:"员工信息",component:DepartPerson},
      {path:'/addoffice',name:"添加部门信息",component:AddOffice},
      {path:'/addperson',name:"添加员工信息",component:AddPerson},
      {path:'/personall',name:"员工信息",component:PersonAll},
      ...route,
      ...statistica
    ]
  }
  ]
})

//路由守卫
router.beforeEach((to,from,next)=>{
      const  isLogin=localStorage.eToken ? true : false;
      if(to.path=='/login' || to.path=='/register'){
        if(isLogin){
          next('/index')
          return;
        }
         next();
         return;
      }
    isLogin ? next() : next('/login')
})

export default router;
