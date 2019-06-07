import Vue from 'vue'
import App from './App.vue'
//导入
import axios from 'axios'
//导入路由
import VueRouter from 'vue-router'

//导入饿了么组件
import ElementUI from "element-ui"
import Login from "./pages/Login.vue"

//element的样式
import 'element-ui/lib/theme-chalk/index.css';

//注册饿了么组件
Vue.use(ElementUI)
// 注册路由
Vue.use(VueRouter)
// 配置路由
const routes = [
  {path:'/login',component:Login}
];

const router = new VueRouter({ routes })

Vue.config.productionTip = false
//把axios绑定到原型 实现优化
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


