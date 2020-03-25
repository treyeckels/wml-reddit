import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Comment from '../Comment/Comment';

import { Node, getParentNodeById, getNormalizedId } from '../../utilities';
import api from '../../api';
import './CommentTree.css';

/**
 * Reddit API sends the data for child comments structured differently than the initial comments fetch, so here we normalize
 * the data structure into the previous format so that
 * we can reuse the same comment and comment tree components.
 *
 * @param {Array.<Node>} arr The tree of nodes we built
 *  from the flattened comments results.
 */
const mapNodestoComments = arr => {
  return arr.map(node => {
    const data = node.data;
    if (node.children) {
      data.replies = {
        data: {
          children: mapNodestoComments(node.children)
        }
      };
    }
    return { data };
  });
};

const useStyles = makeStyles(theme => ({
  root: {
    borderLeft: '1px solid gray',
    marginTop: theme.spacing(1),
    wordBreak: 'break-word'
  }
}));

const CommentTree = ({ data, rootId, linkId }) => {
  const classes = useStyles();
  const [comments, setComments] = useState(data || []);
  const [children, setChildren] = useState([]);
  useEffect(() => {
    if (!data) {
      return;
    }
    const len = data.length;
    if (len) {
      const maybeMore = data[len - 1];
      if (maybeMore.kind === 'more') {
        setChildren(maybeMore.data.children);
      }
    }

    setComments(data);
  }, [data]);

  const [hasClickedMore, setHasClickedMore] = useState(false);
  useEffect(() => {
    if (!hasClickedMore || !children.length) {
      return;
    }
    api
      .getChildComments(linkId, children)
      .then(arr => {
        if (
          !arr.data ||
          !arr.data.json ||
          !arr.data.json.data ||
          !arr.data.json.data.things
        ) {
          return;
        }
        // The thread child comments Reddit endpoint returns a
        // flattened list of comments with parent IDs. In order
        // to display them in the correct hierarchal order, we
        // build these back up into a tree, which we will
        // recursively iterate over later. Each comment becomes
        // a node in the tree.
        const root = new Node(`${rootId}`, {});
        arr.data.json.data.things.forEach(obj => {
          let id = getNormalizedId(obj.data.id);
          const node = new Node(id, obj.data);
          let parentId = getNormalizedId(obj.data.parent);
          const parentNode = getParentNodeById(root, parentId);
          if (parentNode) {
            parentNode.children.push(node);
          }
        });
        const mapped = mapNodestoComments(root.children);
        let commentsClone = [...comments];
        commentsClone = commentsClone.concat(mapped);
        setComments(commentsClone);
      })
      .catch(err => {
        console.error(err);
      });
  }, [hasClickedMore]);

  const handleMoreComments = () => {
    setHasClickedMore(true);
  };

  return (
    <ul data-testid="comment-tree" className={classes.root}>
      {comments.map(comment => {
        if (comment.kind === 'more' && comment.data.count && !hasClickedMore) {
          return (
            <Button
              data-testid="comment-tree-more-button"
              key={comment.data.id}
              onClick={handleMoreComments}
              color="primary"
            >
              {comment.data.count} more
            </Button>
          );
        }
        return (
          <Comment key={comment.data.id} linkId={linkId} comment={comment} />
        );
      })}
    </ul>
  );
};

export default CommentTree;
