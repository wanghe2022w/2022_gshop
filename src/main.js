/**
 入口js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

new Vue({
  el:'#app',
  render:h => h(App),
  router, // 映射路由器,使用上vue-router
  store  // 使用上vuex
})
