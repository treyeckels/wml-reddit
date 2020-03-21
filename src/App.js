import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Landing from './Pages/Landing';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppHeader from './Components/AppHeader/AppHeader';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
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
