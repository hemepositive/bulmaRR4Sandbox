import React from "react";
import { Route, Switch } from "react-router-dom";
// import { AnimatedSwitch } from "react-router-transition";

import Home from "./components/Home";
import Meats from "./components/Meats";
import Veggies from "./components/Veggies";
import Cows from "./components/Cows";
import Pigs from "./components/Pigs";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/meats" component={Meats} />
    <Route path="/veggies" component={Veggies} />
    <Route path="/cows" component={Cows} />
    <Route path="/pigs" component={Pigs} />
  </Switch>
);

export default Router;
