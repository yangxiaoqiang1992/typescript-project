import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "./assets/css/common.css";
import Routes from "./web/router/router";
import store from "./web/store/index";

import { Button } from "antd";

ReactDOM.render(
  <Provider store={store}>
    <Routes />
    <Button type="primary">按钮</Button>
  </Provider>,
  document.getElementById("root")
);
