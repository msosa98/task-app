import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { Tasks } from "../pages/Tasks";

export const PrivateRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/tasks" component={ Tasks } />
        <Redirect exact to="/tasks" />
      </Switch>
    </Router>
  );
};
