import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StoreContext, Store } from "./Store";

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={new Store()}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
