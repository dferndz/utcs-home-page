import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { pages, Page } from "../pages";
import { PUBLIC_URL } from "../constants";

import Navbar from "../components/Navbar";

import "../assets/css/bootstrap.min.css";

const App = () => {
  console.log(PUBLIC_URL);
  return (
    <Router>
      <Navbar />
      <Switch>
        {pages.map((page: Page, key: number) => (
          <Route
            exact={page.exact}
            path={`${PUBLIC_URL}${page.path}`}
            component={page.component}
            key={key}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
