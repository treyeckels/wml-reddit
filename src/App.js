import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Landing from './Pages/Landing';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
