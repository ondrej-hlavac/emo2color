import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Exercise from './components/Exercise';
import HowTo from './components/HowTo';

import './styles/main.css';

const App = () => {
  return (
    <Router>
      <div className="top-menu">
        <Link to="/">
          <svg height="100" width="100">
            <circle cx="22" cy="22" r="20" stroke="white" strokeWidth="3" fill="tomato" />
          </svg> 
        </Link>
        <Link to="/how-to-use">how to use?</Link>
      </div>
      <Switch>
        <Route path="/exercise">
          <Exercise />
        </Route>
        <Route path="/how-to-use">
          <HowTo />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;