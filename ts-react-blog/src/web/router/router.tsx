import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import Header from "../components/Header/index";
import { navLinks } from "../config/index";

const Home = lazy(() => import("../pages/Home/index"));
const Login = lazy(() => import("../pages/Login/index"));

export default (): JSX.Element => (
  <Router>
    <Header navLinks={navLinks} search></Header>
    <Suspense fallback={<Loading size="large" />}>
      <Route path="/" component={Home} exact />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
    </Suspense>
  </Router>
);
