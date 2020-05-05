import React from 'react';
import { Prompt, useHistory, useLocation, useRouteMatch, useParams } from 'umi';

export default () => {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  const params = useParams();
  console.log('history', history);
  console.log('location', location);
  console.log('match', match);
  console.log('params', params);

  return (
    <>
      <Prompt message="你确定离开登录页面吗？"></Prompt>
      <div>login</div>
    </>
  );
};
