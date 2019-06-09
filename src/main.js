import Vue from 'vue'
import App from './App.vue'
//导入
import axios from 'axios'
//导入路由
import VueRouter from 'vue-router'

//导入饿了么组件
import ElementUI from "element-ui"
//导入页面
import Admin from "./pages/Admin"
import Login from "./pages/Login.vue"
import GoodsList from "./pages/GoodsList.vue"
import CategoryList from "./pages/CategoryList.vue"

//element的样式
import 'element-ui/lib/theme-chalk/index.css';

//注册饿了么组件
Vue.use(ElementUI)
// 注册路由
Vue.use(VueRouter)
// 配置路由
const routes = [{
    path: '/',
    redirect: '/admin/goods-list',
    meta: '首页'
  },
  {
    path: '/login',
    component: Login,
    meta: '登录'
  },
  {
    path: '/admin',
    component: Admin,
    meta: '后台管理',
    children: [{
        path: 'goods-list',
        component: GoodsList,
        meta: '商品列表'
      },
      {
        path: 'category-list',
        component: CategoryList,
        meta: '栏目列表'
      }
    ]
  }
];

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false
//把axios绑定到原型 实现优化
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
  router
}).$mount('#app')