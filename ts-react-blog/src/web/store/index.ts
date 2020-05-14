import React from "react";
import { createStore, compose } from "redux";
import reducers from "./reducers";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());
export default store;
