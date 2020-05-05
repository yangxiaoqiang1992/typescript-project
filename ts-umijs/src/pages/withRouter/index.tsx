import { withRouter, history } from 'umi';
import React from 'react';
export default withRouter(({ history, location, match }) => {
  return (
    <>
      <div>history:{history}</div>
      <div>location:{location.pathname}</div>
      <div>location:{match}</div>
    </>
  );
});
