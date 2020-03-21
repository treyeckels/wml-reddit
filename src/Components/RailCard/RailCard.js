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
const ReactMarkdown = require('react-markdown');

const useStyles = makeStyles(theme => ({
  root: {
    border: `1px solid ${blueGrey[100]}`,
    marginBottom: 20,
    padding: 5,
    borderRadius: 5,
    boxShadow:
      '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12)'
  }
}));

const RailCard = ({ description, title, icon }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={title} avatar={<Avatar src={icon}></Avatar>} />
      <CardActionArea>
        <CardContent>
          <ReactMarkdown source={description} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RailCard;
