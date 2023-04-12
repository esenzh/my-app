import React from "react";
import ReactDOM from "react-dom/client";
import { createClient, KameleoonProvider } from "@kameleoon/react-sdk";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const client = createClient("dhqz9s1tb6");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <KameleoonProvider client={client}>
      <App />
    </KameleoonProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
