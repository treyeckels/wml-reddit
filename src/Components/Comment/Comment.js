import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Author from '../Author/Author';
import CommentTree from '../CommentTree/CommentTree';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(1),
    fontSize: '1rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    lineHeight: 1.5,
    letterSpacing: '0.00938em'
  },
  author: {
    fontStyle: 'italic'
  }
}));

const Comment = ({ comment, linkId }) => {
  const classes = useStyles();
  // Reddit's getChildren API does not return an author
  // property for each comment it returns, but it does
  // include the author as a data attirbute in the markup
  // that it returns in the data.content property.
  let author = comment.data.author;
  if (!author && comment.data.content) {
    const matches = comment.data.content.match(/data-author="(.*)"/);
    if (matches && matches.length) {
      author = matches[1];
    }
  }

  return (
    <li data-testid="comment" className={classes.root}>
      {author ? <Author author={author} /> : ''}
      {comment.data.body || comment.data.contentText}
      {comment.data.replies &&
      comment.data.replies.data &&
      comment.data.replies.data.children &&
      comment.data.replies.data.children.length ? (
        <CommentTree
          data={comment.data.replies.data.children}
          rootId={comment.data.id}
          linkId={linkId}
        />
      ) : null}
    </li>
  );
};

export default Comment;
