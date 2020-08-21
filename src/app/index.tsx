import React, { useMemo, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { pages, Page } from "../pages";
import { PUBLIC_URL } from "../constants";

import Navbar from "../components/Navbar";
import NotFoundPage from "../features/NotFound";

import firebase from "firebase/app";
import "firebase/database";
import { firebaseConfig } from "../constants";

import { cvContext, CvContext, initialValue } from "../context";

import "placeholder-loading/dist/css/placeholder-loading.min.css";
import "../assets/css/bootstrap.min.css";

const app = firebase.initializeApp(firebaseConfig);

const App = () => {
  const [cv, setCv] = useState<CvContext>(initialValue);
  const menu_pages = useMemo(
    () => pages.filter((page: Page) => page.showInMenu),
    []
  );
  useEffect(() => {
    app
      .database()
      .ref("PknHdA7ukXRMoaA7czXxbIKs9qJ2")
      .on("value", (snap) => {
        setCv({ ...snap.child("cv").val() });
      });
  }, []);

  if (!cv) return <p>Loading...</p>;

  return (
    <Router>
      <cvContext.Provider value={cv}>
        <Navbar
          title={`${cv?.profile?.firstName} ${cv?.profile?.lastName}`}
          pages={menu_pages}
        />
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
      </cvContext.Provider>
    </Router>
  );
};

export default App;
