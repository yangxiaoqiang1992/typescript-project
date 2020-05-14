import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/index"));
const Login = lazy(() => import("../pages/Login/index"));

export default (): JSX.Element => (
  <Router>
    <Suspense fallback={"正在加载中"}>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
    </Suspense>
  </Router>
);
