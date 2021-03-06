import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./styles/global.css";

import { BrowserRouter } from "react-router-dom";

import Provider from "./providers";

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
