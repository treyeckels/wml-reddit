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
import grey from '@material-ui/core/colors/grey';

const SubredditHeader = ({ img, height, title }) => {
  const useStyles = makeStyles(theme => ({
    img: {
      backgroundImage: img
        ? `url(${img})`
        : 'linear-gradient(rgba(0,0,0,1), rgba(255,255,255,1))',
      backgroundPosition: '50%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100%',
      height,
      position: 'relative'
    },
    titleContainer: {
      height: 70,
      backgroundColor: grey[100],
      //padding: 10,
      position: 'absolute',
      bottom: 0,
      width: '100%',
      opacity: 0.8
    },
    title: {
      padding: theme.spacing(1)
    }
  }));
  const classes = useStyles();
  return (
    <div>
      <div className={classes.img}>
        <div className={classes.titleContainer}>
          <Typography
            className={classes.title}
            variant="h3"
            color="textWhite"
            component="h3"
          >
            {title}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default SubredditHeader;
