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
import Grid from '@material-ui/core/Grid';
import blueGrey from '@material-ui/core/colors/blueGrey';

const SubredditHeader = ({ img, height, title }) => {
  const useStyles = makeStyles(theme => ({
    img: {
      backgroundImage: `url(${img})`,
      backgroundPosition: '50%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100%',
      height
    },
    titleContainer: {
      height: 60,
      backgroundColor: blueGrey[900],
      padding: 10
    }
  }));
  const classes = useStyles();
  return (
    <div>
      <div className={classes.img}></div>
      <div className={classes.titleContainer}>
        <Typography variant="h3" color="textWhite" component="h3">
          {title}
        </Typography>
      </div>
    </div>
  );
};

export default SubredditHeader;
