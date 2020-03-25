import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import grey from '@material-ui/core/colors/grey';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: grey[900]
  },
  title: {
    flexGrow: 1
  }
}));

const AppHeader = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          WML Reddit App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
