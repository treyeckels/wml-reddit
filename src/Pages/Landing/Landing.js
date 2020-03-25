import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RailCard from '../../Components/RailCard/RailCard';
import Skeleton from 'react-loading-skeleton';
import SortBar from '../../Components/SortBar/SortBar';
import StoryCard from '../../Components/StoryCard/StoryCard';
import SubredditHeader from '../../Components/SubredditHeader/SubredditHeader';

import api from '../../api';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  }
}));

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
    setPosts([]);
    setSortBy(type);
  };

  const classes = useStyles();
  return (
    <div>
      <div data-testid="landing" className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <SubredditHeader
              img={data.banner_img}
              height={200}
              title={data.display_name}
              icon={data.icon_img}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <SortBar handleSortByChange={handleSortByChange} sortBy={sortBy} />
            {posts.length ? (
              posts.map(item => {
                return <StoryCard key={item.permalink} data={item} />;
              })
            ) : (
              <div style={{ fontSize: 20, lineHeight: 2, height: 100 }}>
                <Skeleton count={100} />
              </div>
            )}
          </Grid>
          <Grid item xs={12} sm={3}>
            <RailCard title="About" description={data.description} />
            <RailCard title="About" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Landing;
