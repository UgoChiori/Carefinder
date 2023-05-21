import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import Context from "./components/context.tsx";
import { BrowserRouter } from "react-router-dom";




ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Context> */}
    <App />
    {/* </Context> */}
    </BrowserRouter>
    
  </React.StrictMode>
);
