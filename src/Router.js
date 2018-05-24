import React from "react";
import { Route, Switch } from "react-router-dom";
// import { AnimatedSwitch } from "react-router-transition";

import Home from "./components/Home";
import Meats from "./components/Meats";
import Veggies from "./components/Veggies";

const Router = props => (
  <Switch>
    <div className="container" onClick={props.divToggleMenu}>
      <Route exact path="/" component={Home} />
      <Route path="/meats" component={Meats} />
      <Route path="/veggies" component={Veggies} />
    </div>
  </Switch>
);

export default Router;
