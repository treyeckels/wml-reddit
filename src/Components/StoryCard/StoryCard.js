import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TweetEmbed from 'react-tweet-embed';
import blueGrey from '@material-ui/core/colors/blueGrey';

import './StoryCard.css';

const useStyles = makeStyles(theme => ({
  root: {
    border: `1px solid ${blueGrey[100]}`,
    marginBottom: 20,
    padding: 5,
    borderRadius: 5,
    boxShadow:
      '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12)'
  },
  headlineContainer: {
    display: 'flex',
    alignItems: 'flex-start'
  },
  headline: {
    fontSize: '1rem',
    lineHeight: 1.43,
    letterSpacing: '0.01071em'
  },
  media: {
    marginRight: 10
  },
  img: {
    borderRadius: 5,
    width: '100%'
  },
  tweet: {
    display: 'flex',
    justifyContent: 'center'
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}));

const StoryCard = ({ data }) => {
  const classes = useStyles();
  const tweetMatch = data.media_embed.content
    ? data.media_embed.content.match(
        /https:\/\/twitter.com\/.*\/status\/(.*)\?/
      )
    : null;
  const tweetId = tweetMatch && tweetMatch[1] ? tweetMatch[1] : null;
  let date = '';
  try {
    date = new Date(data.created_utc * 1000).toString();
  } catch (e) {
    console.log(`Could not create date because ${e}`);
  }
  return (
    /* <div className={classes.root}>
      {data.thumbnail && !data.media_embed.content ? (
        <div className={classes.media}>
          <img className={classes.img} src={data.thumbnail} alt={data.title} />
        </div>
      ) : (
        ''
      )}
      <div className={classes.headlineContainer}>
        <h2 className={classes.headline}>{data.title}</h2>
      </div>
      {tweetId ? (
        <div className={classes.tweet}>
          <TweetEmbed id={tweetId} />
        </div>
      ) : (
        ''
      )}
    </div>*/
    <Card className={classes.root}>
      <CardHeader title={`Posted by ${data.author}`} subheader={date} />
      <CardActionArea>
        <CardContent>
          <div className={classes.headlineContainer}>
            {data.thumbnail && !data.media_embed.content ? (
              <Avatar className={classes.media} src={data.thumbnail} />
            ) : (
              ''
            )}
            <Typography variant="body2" color="textSecondary" component="p">
              {data.title}
            </Typography>
          </div>
          {tweetId ? (
            <div className={classes.tweet}>
              <TweetEmbed id={tweetId} />
            </div>
          ) : (
            ''
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {data.link_flair_text ? (
          <Chip
            style={{ backgroundColor: data.link_flair_background_color }}
            label={data.link_flair_text}
            className={classes.chip}
          />
        ) : (
          ''
        )}
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default StoryCard;
