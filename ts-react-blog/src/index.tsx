import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "./assets/css/common.css";
import Routes from "./web/router/router";
import store from "./web/store/index";

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
