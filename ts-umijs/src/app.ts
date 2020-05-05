import { history } from 'umi';
// export function render(oldRender: any) {
//   oldRender();
// }
// export function onRouteChange({ location, routes, action }: any) {
//   console.log(location);
//   console.log(routes);
//   console.log(action);
// }

export const qiankun = new Promise(resolve => {
  resolve({
    lifeCycles: {
      beforeLoad: (props: any) => {
        console.log('beforeLoad:', props);
      },
      beforeMount: (props: any) => {
        console.log('beforeMont:', props);
      },
      afterMount: (props: any) => {
        console.log('afterMount:', props);
      },
      beforeUnmount: (props: any) => {
        console.log('beforeUnmount:', props);
      },
      afterUnmount: (props: any) => {
        console.log('afterUmount:', props);
      },
    },
  });
});
