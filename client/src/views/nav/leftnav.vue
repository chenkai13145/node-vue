<template>
<el-row class="menu_page">
  
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
     <el-menu-item index="0">
        <i class="el-icon-menu"></i>
        <span slot="title"><router-link tag='span' style="vertical-align: unset;" to='/home'>首页  </router-link></span>
      </el-menu-item>
      <el-submenu :index="index+''" v-for="(item,index) in items" :key="index">
        <template slot="title">
           <span :class="item.icon"></span>
          <span>{{item.name}}</span>
        </template>

        <el-menu-item-group v-for="(it,indexs) in item.children" :key="indexs">
         <el-menu-item :index="(indexs+1)+''"><router-link tag="span" :to="it.path">{{it.name}}</router-link> </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>

</el-row>
</template>
<script>
 import '../../common/css/icon.css';
export default {
 
  data() {
    return {
          items:[
            {
              name:"资金管理",
              path:'fund',
              icon:"icon-add_circle",
              children:[
                {path:'hostmoney',name:'资金流水'},
                {path:'viewsee',name:'资金视图'}
              ]
            },
            {
              name:"部门管理",
              path:'fund',
              icon:"icon-add_circle",
              children:[
                {path:'department',name:'部门信息'},
                {path:'personall',name:'员工信息'}
              ]
            },
             {
              name:"信息管理",
              icon:"icon-check_circle",
              path:'info',
              children:[
                {path:'person',name:'个人信息'}
              ]
            },
             {
              name:"仓库监控",
              icon:"icon-check_circle",
              path:'info',
              children:[
                {path:'monitoring-truckload',name:'整车实时看板'},
                {path:'monitoring-exception',name:'异常实时监控'},
                {path:'monitoring-transport',name:'运输实时监控'},
                {path:'monitoring-warehouse',name:'仓库实时监控'},
                {path:'monitoring-full-capacity',name:'运力实时监控'}
              ]
            },
             {
              name:"图表分析",
              icon:"icon-check_circle",
              path:'info',
              children:[
                {path:'statistical-warehouse',name:'仓库统计'},
              
              ]
            },
          ]
    };
  },
  created(){
     
  },
   methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>
<style lang="scss" scoped>
.menu_page{
  width: 150px !important;
}
.el-menu-vertical-demo{
    width: 150px;
    height:calc(100vh);
    min-height: 400px;
    position: fixed;
    left: 0;
    top:40px;
    border: none;
    .el-submenu .el-menu-item{
      min-width: 60px;
    }
    .el-menu-item{
      text-decoration: none;

    }
          .el-submenu__title * {
    vertical-align: unset;
}
    .el-menu-item{
      color: #fff !important;
    }
    .active{
      color: rgb(255, 208, 75) !important;
    }
  
}

</style>
