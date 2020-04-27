import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "../pages/login/index";

const routes = (
  <BrowserRouter basename="/">
    <Route path="login" component={Login} exact></Route>
  </BrowserRouter>
);

export default routes;
