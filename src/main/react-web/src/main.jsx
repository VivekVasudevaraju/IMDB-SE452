import React from "react";
import ReactDOM from "react-dom/client";
import { RequestProvider } from "react-request-hook";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import App from "./App";
import "./index.css";

const axiosInstance = axios.create({
  baseURL: "/",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RequestProvider value={axiosInstance}>
      <Router>
        <App />
      </Router>
    </RequestProvider>
  </React.StrictMode>
);
