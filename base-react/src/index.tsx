import React from "react";
import ReactDOM from "react-dom/client";
import "./style/reset.css";
import "./style/global.css";
import reportWebVitals from "./reportWebVitals";
import { registerMicroApps, start } from "qiankun";
import Router from "./router";

registerMicroApps([
  {
    name: "react app 18",
    entry: "//localhost:11111",
    container: "#mini-react18",
    activeRule: "/workbench/mini-react18",
  },
  {
    name: "vue app 2",
    entry: "//localhost:11112",
    container: "#mini-vue2",
    activeRule: "/workbench/mini-vue2",
  },
]);
// 启动 qiankun
start();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
