import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { LikeContextProvider } from "./context/like-context";

// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <LikeContextProvider>
        <App />
      </LikeContextProvider>
    </Router>
    ,
  </React.StrictMode>
);
