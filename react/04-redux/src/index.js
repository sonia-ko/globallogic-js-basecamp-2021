import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StrictMode } from "react";
import Root from "./components/root";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Root>
      <App />
    </Root>
  </StrictMode>,
  rootElement
);

serviceWorker.unregister();
