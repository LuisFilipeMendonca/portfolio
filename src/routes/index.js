import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import ProjectsPage from "../pages/Projects";

const routes = () => {
  return (
    <Switch>
      <Route path="/about" component={AboutPage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default routes;
