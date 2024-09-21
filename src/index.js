import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./i18n.js";

ReactDOM.render(
  <BrowserRouter basename="/react-app">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
