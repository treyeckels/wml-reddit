import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class Node {
  constructor(id, data) {
    this.data = data;
    this.id = id;
    this.children = [];
  }
}

const getParentNodeById = (root, id) => {
  if (root.id === id) {
    return root;
  }
  const len = root.children.length;
  if (!len) {
    return;
  }
  for (let i = 0; i < len; i++) {
    const node = getParentNodeById(root.children[i], id);
    if (node) {
      return node;
    }
  }
};

const useStyles = makeStyles({
  root: {
    padding: 10
  },
  list: {
    borderLeft: '1px solid black'
  }
});

const CommentMore = ({ comment }) => {
  const classes = useStyles();
  const [comments, setComments] = useState(new Node(null, null));
  const [hasClickedMore, setHasClickedMore] = useState(false);

  useEffect(() => {
    console.log('comment', comment);
    // fetch(
    //   `https://www.reddit.com/api/morechildren?api_type=xml&link_id=t3_fm9ts0&children=${comment.data.children.join()}`
    // )
    if (
      !hasClickedMore ||
      !comment.data ||
      !comment.data.children ||
      !comment.data.children.length
    ) {
      return;
    }
    fetch(
      `https://us-central1-wml-reddit.cloudfunctions.net/getChildren?link_id=t3_fm9ts0&children=${comment.data.children.join()}`
    )
      .then(data => {
        return data.json();
      })
      .then(data => {
        console.log('data', data);
        if (
          data.data &&
          data.data.json &&
          data.data.json.data &&
          data.data.json.data.things &&
          data.data.json.data.things.length
        ) {
          const root = new Node(comment.data.parent_id, comment.data);
          data.data.json.data.things.forEach(obj => {
            const node = new Node(obj.data.id, data);
            const parentNode = getParentNodeById(root, obj.data.parent);
            parentNode.children.push(node);
          });
          debugger;
          setComments(root);
        }
      })
      .catch(err => {
        console.error(err);
      });
  }, [hasClickedMore, comment]);

  const handleMoreComments = () => {
    setHasClickedMore(true);
  };

  const createCommentList = comments => {
    debugger;
    let items = comments.children.map((node, idx) => {
      debugger;
      return (
        <ul>
          <li>
            {node.data.contentText}
            {node.children.length && createCommentList(node)}
          </li>
        </ul>
      );
    });

    return items;
  };

  return (
    <div>
      {comment.data.count ? (
        <ul>
          <li>
            {hasClickedMore && comments.children.length ? (
              createCommentList(comments)
            ) : (
              <Button
                onClick={() => {
                  handleMoreComments();
                }}
                color="primary"
              >
                {comment.data.count} more
              </Button>
            )}
          </li>
        </ul>
      ) : (
        ''
      )}
    </div>
  );
};

export default CommentMore;
