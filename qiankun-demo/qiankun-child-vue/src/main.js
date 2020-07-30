import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false

let instance;

function render(props){
  console.log(props)
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#root')
}
if (window.__POWERED_BY_QIANKUN__) { // 动态添加publicPath
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

export async function bootstrap(props){
  console.log(props)
} 
export async function mount(props){
  render(props)
}
export async function unmount(props){
  console.log(props)
  instance.$destroy()
}