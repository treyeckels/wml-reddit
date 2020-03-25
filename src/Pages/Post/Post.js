import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CommentTree from '../../Components/CommentTree/CommentTree';
import Grid from '@material-ui/core/Grid';
import RailCard from '../../Components/RailCard/RailCard';
import Skeleton from 'react-loading-skeleton';
import Typography from '@material-ui/core/Typography';

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

const Post = ({ location }) => {
  const { pathname } = location;
  const classes = useStyles();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  useEffect(() => {
    api
      .getPost(pathname)
      .then(data => {
        console.log(data);
        const { postData, comments } = data;
        setPost(postData);
        setComments(comments);
      })
      .catch(() => {});
  }, []);

  return (
    <div data-testid="post" className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={8}>
          <Typography variant="body1">
            {post.author ? (
              `Posted by ${post.author} | ${post.ups} upvotes`
            ) : (
              <Skeleton />
            )}
          </Typography>
          <Typography className={classes.title} variant="h2">
            {post.title || <Skeleton />}
          </Typography>
          {comments.length ? (
            <CommentTree data={comments} linkId={post.id} rootId={post.id} />
          ) : (
            <div
              style={{
                fontSize: 20,
                lineHeight: 2,
                height: '100vh',
                overflow: 'auto'
              }}
            >
              <Skeleton count={100} />
            </div>
          )}
        </Grid>
        <Grid item xs={12} sm={3}>
          <RailCard title="About" description="" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Post;
