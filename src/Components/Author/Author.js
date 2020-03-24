import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    fontStyle: 'italic'
  }
}));

const Author = ({ author }) => {
  const classes = useStyles();
  return (
    <p className={classes.root}>
      Posted by <Link to={`/user/${author}`}>{author}</Link>
    </p>
  );
};

export default Author;
