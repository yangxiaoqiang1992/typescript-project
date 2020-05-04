import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "../pages/login/index";
import Home from "../pages/Home/index";

const MyRouters = (): JSX.Element => (
  <Router basename="/">
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} ></Route>
  </Router>
);
export = MyRouters;


