import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import ReactMarkdown from 'react-markdown';
import Skeleton from 'react-loading-skeleton';

const useStyles = makeStyles(theme => ({
  root: {
    border: `1px solid ${blueGrey[100]}`,
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
    borderRadius: 5,
    boxShadow:
      '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12)'
  }
}));

const RailCard = ({ description, title, icon }) => {
  const classes = useStyles();

  return (
    <Card data-testid="rail-card" className={classes.root}>
      <CardHeader
        title={title || <Skeleton />}
        avatar={<Avatar src={icon}></Avatar>}
      />
      <CardActionArea>
        <CardContent>
          {description ? (
            <ReactMarkdown source={description} />
          ) : (
            <Skeleton count={10} />
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RailCard;
