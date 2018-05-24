import React from "react";
import { render } from "react-dom";

import "bulma/css/bulma.css";

import Layout from "./components/Layout";

const App = () => (
  <div>
    <Layout />
  </div>
);

render(<App />, document.getElementById("root"));
