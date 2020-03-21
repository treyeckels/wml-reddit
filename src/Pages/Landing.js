import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import StoryCard from '../Components/StoryCard/StoryCard';
import api from '../api';

const useStyles = makeStyles({
  root: {}
});

const Landing = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .getSubredit('Coronavirus')
      .then(data => {
        console.log(data);
        setData(data);
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          Heading
        </Grid>
        <Grid item xs={12} sm={8}>
          {data.map(item => {
            return <StoryCard data={item} />;
          })}
        </Grid>
        <Grid item xs={12} sm={3}>
          right rail
        </Grid>
      </Grid>
    </div>
  );
};

export default Landing;
