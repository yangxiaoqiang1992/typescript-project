import { history } from 'umi';
export function render(oldRender: any) {
  oldRender();
}
export function onRouteChange({ location, routes, action }: any) {
  console.log(location);
  console.log(routes);
  console.log(action);
}
