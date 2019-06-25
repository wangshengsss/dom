// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'; 
import 'element-ui/lib/theme-chalk/index.css';
// import '../h5/static/util/fix-screen.js'
import  { ToastPlugin,AlertPlugin,LoadingPlugin  } from 'vux'
import BaiduMap from 'vue-baidu-map'
import $ from 'jquery'
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(LoadingPlugin)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(BaiduMap, {
  ak: 'BN1bXXigqIG2sPObLUVpZ67OQccucmrI'
})
// Vue.config.productionTip = false
// var JIM = new JMessage();
// window.JIM = new JMessage({
//     debug : true
// });
Vue.http.interceptors.push((request, next)=> {//拦截器
  next((res)=>{
    // if(res.data.status == 401){
    //   router.push('/login')
    // }
  })
})
/* eslint-disable no-new */
var vm = new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')



