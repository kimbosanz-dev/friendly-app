import React from "react";
import ReactDOM from "react-dom";
import './app/layout/styles.css';
import App from "./app/layout/App";

const rootElement = document.getElementById("root");

const render = () => {
  ReactDOM.render(<App />, rootElement);
};

if (module.hot) {
  module.hot.accept("./app/layout/App", () => {
    setTimeout(render);
  });
}

render();
