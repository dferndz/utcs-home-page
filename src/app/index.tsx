import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { pages, Page } from "../pages";

import Navbar from "../components/Navbar";

import "../assets/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        {pages.map((page: Page, key: number) => (
          <Route
            exact={page.exact}
            path={page.path}
            component={page.component}
            key={key}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
