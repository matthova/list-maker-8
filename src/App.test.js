/* global document, it */
import React from "react";
import ReactDOM from "react-dom";
import { StaticRouter } from "react-router-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const appAndRouter = React.createElement(
    StaticRouter,
    { context: {} },
    <App />
  );
  ReactDOM.render(appAndRouter, div);
});
