import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "~/shared/services/i18n";
import GlobalStyle from "~/shared/theme/GlobalStyle";
import { App } from "./app";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />

      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
