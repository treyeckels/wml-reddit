import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RailCard from '../../Components/RailCard/RailCard';
import Skeleton from 'react-loading-skeleton';
import StoryCard from '../../Components/StoryCard/StoryCard';

import api from '../../api';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  },
  list: {
    borderLeft: '1px solid black'
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: 600
  }
}));

const User = ({ location }) => {
  const { pathname } = location;
  const classes = useStyles();
  const [user, setUser] = useState({
    name: '',
    icon: '',
    description: ''
  });
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const userPromise = api.getUser(pathname);
    const userComments = api.getUserComments(pathname);
    Promise.all([userPromise, userComments])
      .then(data => {
        const userData = data[0];
        setUser({
          name: userData.data.name,
          icon: userData.data.icon_img,
          description: `
            Link Karma Rating: ${userData.data.link_karma}
            Comment Karma: ${userData.data.comment_karma}
          `
        });
        console.log(data[1]);
        const mapped = data[1].data.children.map(obj => {
          return {
            created_utc: obj.data.created_utc,
            media_embed: {
              content: null
            },
            author: obj.data.author,
            title: obj.data.link_title,
            body: obj.data.body,
            permalink: obj.data.permalink
          };
        });
        setComments(mapped);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={3}>
          <RailCard
            title={`About ${user.name}`}
            description={user.description}
            icon={user.icon}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          {comments.length ? (
            comments.map(item => {
              return <StoryCard key={item.permalink} data={item} />;
            })
          ) : (
            <div style={{ fontSize: 20, lineHeight: 2, height: 100 }}>
              <Skeleton count={100} />
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default User;
