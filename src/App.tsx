import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Exercise from './components/Exercise';

import './styles/main.css';

class App extends React.PureComponent {
	render() {
		return (
      
    <Router>
      <div className="top-menu">
        <Link to="/">Home</Link>
        <Link to="/how-to-use">how to use?</Link>
      </div>
      <Switch>
        <Route path="/exercise">
          <Exercise />
        </Route>
        <Route path="/how-to-use">
          <div>
            <h1>
              how to use Emo2color?
            </h1>
          </div>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
		);
	}
}

export default App;