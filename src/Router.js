import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Meats from "./components/Meats";
import Veggies from "./components/Veggies";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/meats" component={Meats} />
    <Route path="/veggies" component={Veggies} />
  </Switch>
);

export default Router;
