import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { exact: true, path: '/', component: '@/pages/index' },
    { exact: true, path: '/login', component: '@/pages/login/index' },
    { component: '@/pages/404' },
  ],
});
