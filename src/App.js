import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from './Components/AppHeader/AppHeader';
import Landing from './Pages/Landing/Landing';
import MuiAlert from '@material-ui/lab/Alert';
import Post from './Pages/Post/Post';
import Snackbar from '@material-ui/core/Snackbar';
import User from './Pages/User/User';

import './App.css';

class App extends React.Component {
  state = {
    online: navigator.onLine,
    snackBarOpen: false,
    snackBarSeverity: 'success',
    snackBarMessage: 'You are back online.'
  };

  handleConnectionChange = () => {
    this.setState({
      online: navigator.onLine,
      snackBarOpen: true,
      snackBarSeverity: navigator.onLine ? 'success' : 'warning',
      snackBarMessage: navigator.onLine
        ? 'You are back online.'
        : 'You are offline.'
    });
  };

  handleClose = () => {
    this.setState({
      snackBarOpen: false
    });
  };

  componentDidMount() {
    window.addEventListener('online', this.handleConnectionChange);
    window.addEventListener('offline', this.handleConnectionChange);
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        {this.state.online ? (
          ''
        ) : (
          <MuiAlert severity="warning">You are offline.</MuiAlert>
        )}
        <Snackbar
          open={this.state.snackBarOpen}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <MuiAlert
            onClose={this.handleClose}
            severity={this.state.snackBarSeverity}
          >
            {this.state.snackBarMessage}
          </MuiAlert>
        </Snackbar>
        <Router>
          <Switch>
            <Route path="/user" render={props => <User {...props} />} />
            <Route path="/r" render={props => <Post {...props} />} />
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
