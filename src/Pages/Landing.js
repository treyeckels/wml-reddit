import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import StoryCard from '../Components/StoryCard/StoryCard';
import RailCard from '../Components/RailCard/RailCard';
import SubredditHeader from '../Components/SubredditHeader/SubredditHeader';
import SortBar from '../Components/SortBar/SortBar';
import api from '../api';

const useStyles = makeStyles({
  root: {
    padding: 10
  }
});

const Landing = () => {
  const [data, setData] = useState({});
  const [posts, setPosts] = useState([]);
  const [sortBy, setSortBy] = useState('top');

  useEffect(() => {
    const subReditPromise = api.getSubredit('Coronavirus');
    const postsPromise = api.getSubreditPosts('Coronavirus', sortBy);
    Promise.all([subReditPromise, postsPromise])
      .then(data => {
        setData(data[0]);
        setPosts(data[1]);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    api
      .getSubreditPosts('Coronavirus', sortBy)
      .then(data => {
        setPosts(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [sortBy]);

  const handleSortByChange = type => {
    setSortBy(type);
  };

  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        {posts.length ? (
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <SubredditHeader
                img={data.banner_img}
                height={data.banner_size[1]}
                title={data.display_name}
                icon={data.icon_img}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <SortBar handleSortByChange={handleSortByChange} />
              {posts.map(item => {
                return <StoryCard data={item} />;
              })}
            </Grid>
            <Grid item xs={12} sm={3}>
              <RailCard title="About" description={data.description} />
              <RailCard title="About" />
            </Grid>
          </Grid>
        ) : (
          'Loading'
        )}
      </div>
    </div>
  );
};

export default Landing;
