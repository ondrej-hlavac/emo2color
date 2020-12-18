import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "components/Home";
import Exercise from "components/Exercise";
import HowTo from "components/HowTo";
import TopMenu from "components/TopMenu/TopMenu";
import Results from "components/Results";
import { StyledGlobalStyles } from "components/styled/StyledGlobalStyles";
import ContextProvider from "context/ContextProvider";
import { routes } from "./routes";
import BottomNavigation from "components/BottomNavigation";

const App = () => {
  return (
    <ContextProvider>
      <StyledGlobalStyles />
      <Router>
        <TopMenu />
        <Switch>
          <Route path={routes.EXERCISE}>
            <Exercise />
          </Route>
          <Route path={routes.HOWTO}>
            <HowTo />
          </Route>
          <Route path={routes.RESULTS}>
            <Results />
          </Route>
          <Route path={routes.HOME}>
            <Home />
          </Route>
        </Switch>
        <BottomNavigation />
      </Router>
    </ContextProvider>
  );
};

export default App;
