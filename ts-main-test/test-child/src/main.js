import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import singleSpaVue from "single-spa-vue";

const appOptions = {
  router,
  render: (h) => h(App),
};
const vuelifeCirles = singleSpaVue({
  Vue,
  appOptions,
});

Vue.config.productionTip = false;
console.log(vuelifeCirles);
export const bootstrap = vuelifeCirles.bootstrap;
export const mount = vuelifeCirles.mount;
export const unmount = vuelifeCirles.unmount;
export default vuelifeCirles;

// new Vue({
//   router,
//   render: (h) => h(App),
// }).$mount("#app");
