import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import StoryCard from '../Components/StoryCard/StoryCard';
import RailCard from '../Components/RailCard/RailCard';
import SubredditHeader from '../Components/SubredditHeader/SubredditHeader';
import SortBar from '../Components/SortBar/SortBar';
import LoadingOverlay from 'react-loading-overlay';
import Skeleton from 'react-loading-skeleton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import api from '../api';

const useStyles = makeStyles({
  root: {
    padding: 10
  }
});

const Post = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  useEffect(() => {
    api
      .getPost(
        '/r/Coronavirus/comments/fm2rum/all_people_in_illinois_have_been_ordered_to_stay'
      )
      .then(data => {
        const { postData, comments } = data;
        setPost(postData);
        setComments(comments);
      })
      .catch(() => {});
  }, []);

  const createCommentList = comments => {
    let items = comments.map(comment => {
      console.log(comment);
      if (comment.kind === 'more') {
        return (
          <ul>
            <li>
              <Button color="primary">{comment.data.count} more</Button>
            </li>
          </ul>
        );
      } else {
        return (
          <ul className="border-l pl-6">
            <li>
              {comment.data.body}
              {comment.data.replies &&
                comment.data.replies.data &&
                comment.data.replies.data.children &&
                comment.data.replies.data.children.length &&
                createCommentList(comment.data.replies.data.children)}
            </li>
          </ul>
        );
      }
    });

    return items;
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={8}>
          <Typography variant="body1">{post.title}</Typography>
          {createCommentList(comments)}
        </Grid>
        <Grid item xs={12} sm={3}>
          right col
        </Grid>
      </Grid>
    </div>
  );
};

export default Post;
