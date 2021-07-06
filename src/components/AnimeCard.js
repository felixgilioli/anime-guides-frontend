import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 180,
  },
});

export default function AnimeCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://dg31sz3gwrwan.cloudfront.net/fanart/79824/970356-0-q80.jpg"
        title="Naruto Shippuden Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Naruto Shippuden
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Naruto Shippuden is the continuation of the first part of the Naruto manga, and continues the same story line after spending two and a half years in the Naruto universe.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Summary
        </Button>
        <Button size="small" color="primary">
          Fillers
        </Button>
      </CardActions>
    </Card>
  );
}