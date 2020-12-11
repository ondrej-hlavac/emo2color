import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Exercise from "./components/Exercise";
import HowTo from "./components/HowTo";
import TopMenu from "./components/TopMenu/TopMenu";
import Results from "./components/Results";

import "./styles/main.css";

const App = () => {
  return (
    <Router>
      <TopMenu />
      <Switch>
        <Route path="/exercise">
          <Exercise />
        </Route>
        <Route path="/how-to-use">
          <HowTo />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
