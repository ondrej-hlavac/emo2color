import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Exercise from "./components/Exercise";
import HowTo from "./components/HowTo";
import TopMenu from "./components/TopMenu/TopMenu";
import Results from "./components/Results";
import { StyledGlobalStyles } from "./components/styled/StyledGlobalStyles";
import ContextProvider from "./context/ContextProvider";

const App = () => {
  return (
    <ContextProvider>
      <StyledGlobalStyles />
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
    </ContextProvider>
  );
};

export default App;
