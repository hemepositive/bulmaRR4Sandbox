import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "bulma/css/bulma.css";

import Layout from "./components/Layout";

const App = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
