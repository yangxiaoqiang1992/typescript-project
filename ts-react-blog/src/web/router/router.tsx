import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import Header, { navType } from "../components/Header/index";

const Home = lazy(() => import("../pages/Home/index"));
const Login = lazy(() => import("../pages/Login/index"));
const navLinks: navType[] = [
  {
    name: "首页",
    to: "/home",
  },
  {
    name: "最新",
    to: "/news",
  },
];
export default (): JSX.Element => (
  <Router>
    <Header navLinks={navLinks}></Header>
    <Suspense fallback={<Loading size="large" />}>
      <Route path="/" component={Home} exact />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
    </Suspense>
  </Router>
);
