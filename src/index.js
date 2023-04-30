import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./components/App.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);
root.render(<App callback={() => console.log("rendered")} />);
