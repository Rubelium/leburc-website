import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { HashRouter } from "react-router-dom";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import ScrollToTop from "./helpers/ScrollToTop";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
