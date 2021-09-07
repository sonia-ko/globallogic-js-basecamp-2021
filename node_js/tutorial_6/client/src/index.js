import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Root from "./Root";
import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Root>
      <App />
    </Root>
  </StrictMode>,
  rootElement
);
