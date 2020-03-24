import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import IconButton from '@material-ui/core/IconButton';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import orange from '@material-ui/core/colors/orange';
import Paper from '@material-ui/core/Paper';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';
import Tooltip from '@material-ui/core/Tooltip';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2)
  },
  active: {
    color: orange[900]
  }
}));

const SortBar = ({ handleSortByChange, sortBy }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={2}>
      <Tooltip title="Sort by What's Hot">
        <IconButton
          onClick={() => {
            handleSortByChange('hot');
          }}
          aria-label="Sort by What's Hot"
        >
          <WhatshotIcon className={sortBy === 'hot' ? classes.active : ''} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Sort by What's New">
        <IconButton
          onClick={() => {
            handleSortByChange('new');
          }}
          aria-label="Sort by What's New"
        >
          <NewReleasesIcon className={sortBy === 'new' ? classes.active : ''} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Sort by Controversial">
        <IconButton
          onClick={() => {
            handleSortByChange('controversial');
          }}
          aria-label="Sort by Controversial"
        >
          <SportsKabaddiIcon
            className={sortBy === 'controversial' ? classes.active : ''}
          />
        </IconButton>
      </Tooltip>
      <Tooltip title="Sort by Top News">
        <IconButton
          onClick={() => {
            handleSortByChange('top');
          }}
          aria-label="Sort by Top News"
        >
          <EqualizerIcon className={sortBy === 'top' ? classes.active : ''} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Sort by Trending">
        <IconButton
          onClick={() => {
            handleSortByChange('rising');
          }}
          aria-label="Sort by Trending"
        >
          <TrendingUpIcon
            className={sortBy === 'rising' ? classes.active : ''}
          />
        </IconButton>
      </Tooltip>
    </Paper>
  );
};

export default SortBar;
