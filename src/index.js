import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import RootReducer from "./core/RooReducer";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import App from "./components/App";
const store = createStore(RootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
