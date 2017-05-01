// src/main.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

/*引入组件*/
import App from './App'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.css'
import store from './store'
import TimeEntries from './components/TimeEntries.vue'

/*开启路由*/
Vue.use(VueRouter)
Vue.use(VueResource)

/*路由组件*/
const routes = [{
  path : '/',
  component : Home
},{
  path : '/home',
  component : Home
},{
  path : '/time-entries',
  component : TimeEntries,
  children : [{
    path : 'log-time',
    // 懒加载
    component : resolve => require(['./components/LogTime.vue'],resolve),
  }]
}];

/*路由对象*/
const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
// 实例化我们的Vue
var app = new Vue({
  el: '#app',
  router,
  store,
  ...App,
});