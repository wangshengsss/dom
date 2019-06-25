import Vue from 'vue'
import Router from 'vue-router'
const index = resolve => require(['@/pages/index'], resolve)
const mobileIndex = resolve => require(['@/pages/mobile-index'], resolve)
// const carType = resolve => require(['@/pages/carType'], resolve)
Vue.use(Router)

export default new Router({
  mode: 'history',
  base:'/h5/',
  routes: [
    {path: '/',name: 'index',component: index},
    {path: '/mobile',name: 'mobileIndex',component: mobileIndex}
  ]
})
