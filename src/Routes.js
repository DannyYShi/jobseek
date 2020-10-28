import { Route, Switch } from "react-router-dom";
import React from "react";
import LandingPage from "./pages/LandingPage";
import App from "./App";

export default function Routes() {
  return (
    <div className="app-routes">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/app">
          <App />
        </Route>
      </Switch>
    </div>
  );
}
