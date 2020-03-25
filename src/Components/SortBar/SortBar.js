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

  const data = [
    {
      id: 'hot',
      title: `What's Hot`,
      icon: <WhatshotIcon />
    },
    {
      id: 'new',
      title: `What's New`,
      icon: <NewReleasesIcon />
    },
    {
      id: 'controversial',
      title: `Controversial`,
      icon: <SportsKabaddiIcon />
    },
    {
      id: 'top',
      title: `Top News`,
      icon: <EqualizerIcon />
    },
    {
      id: 'rising',
      title: `Trending`,
      icon: <TrendingUpIcon />
    }
  ];

  return (
    <Paper data-testid="sort-bar" className={classes.root} elevation={2}>
      {data.map(obj => {
        return (
          <Tooltip key={obj.id} title={`Sort by ${obj.title}`}>
            <IconButton
              className={sortBy === obj.id ? classes.active : ''}
              onClick={() => {
                handleSortByChange(obj.id);
              }}
              aria-label={`Sort by ${obj.title}`}
            >
              {obj.icon}
            </IconButton>
          </Tooltip>
        );
      })}
    </Paper>
  );
};

export default SortBar;
