import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const PublicRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/signup" component={ Register } />
        <Route path="/signin" component={ Login } />
        <Redirect exact to="/" />
      </Switch>
    </Router>
  );
};
