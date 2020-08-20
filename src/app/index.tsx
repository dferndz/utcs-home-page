import React, { useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { pages, Page } from "../pages";
import { PUBLIC_URL, site } from "../constants";

import Navbar from "../components/Navbar";
import NotFoundPage from "../features/NotFound";

import "placeholder-loading/dist/css/placeholder-loading.min.css";
import "../assets/css/bootstrap.min.css";

const App = () => {
  const menu_pages = useMemo(
    () => pages.filter((page: Page) => page.showInMenu),
    [pages]
  );
  return (
    <Router>
      <Navbar title={site.title} pages={menu_pages} />
      <Switch>
        {pages.map((page: Page, key: number) => (
          <Route
            exact={page.exact}
            path={`${PUBLIC_URL}${page.path}`}
            component={page.component}
            key={key}
          />
        ))}
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
