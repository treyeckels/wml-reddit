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
import blueGrey from '@material-ui/core/colors/blueGrey';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2)
  }
}));

const SortBar = ({ handleSortByChange }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={2}>
      <Tooltip title="Sort by What's Hot">
        <IconButton aria-label="Sort by What's Hot">
          <WhatshotIcon
            onClick={() => {
              handleSortByChange('hot');
            }}
            className={classes.icon}
          />
        </IconButton>
      </Tooltip>
      <Tooltip title="Sort by What's New">
        <IconButton aria-label="Sort by What's New">
          <NewReleasesIcon
            onClick={() => {
              handleSortByChange('new');
            }}
            className={classes.icon}
          />
        </IconButton>
      </Tooltip>
      <Tooltip title="Sort by Controversial">
        <IconButton aria-label="Sort by Controversial">
          <SportsKabaddiIcon
            onClick={() => {
              handleSortByChange('controversial');
            }}
            className={classes.icon}
          />
        </IconButton>
      </Tooltip>
      <Tooltip title="Sort by Top News">
        <IconButton aria-label="Sort by Top News">
          <EqualizerIcon
            onClick={() => {
              handleSortByChange('top');
            }}
            className={classes.icon}
          />
        </IconButton>
      </Tooltip>
      <Tooltip title="Sort by Trending">
        <IconButton aria-label="Sort by Trending">
          <TrendingUpIcon
            onClick={() => {
              handleSortByChange('rising');
            }}
            className={classes.icon}
          />
        </IconButton>
      </Tooltip>
    </Paper>
  );
};

export default SortBar;
