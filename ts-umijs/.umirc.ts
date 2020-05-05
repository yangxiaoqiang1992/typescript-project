import { defineConfig } from 'umi';

export default defineConfig({
  history: { type: 'hash' }, //nginx部署用hash模式，否则页面找不到路由
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { exact: true, path: '/', component: '@/pages/index' },
    { exact: true, path: '/login', component: '@/pages/login/index' },
    { component: '@/pages/404' },
  ],
});
