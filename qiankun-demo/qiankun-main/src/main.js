import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {registerMicroApps,start} from "qiankun";

Vue.config.productionTip = false



registerMicroApps([{
  name:'vueApp',
  entry:'//localhost:8888',
  container:'#vue',
  activeRule:'/vue'
},{
  name:'reactApp',
  entry:'//localhost:3000',
  container:'#react',
  activeRule:'/react'
}])

start({
  prefetch:false
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



