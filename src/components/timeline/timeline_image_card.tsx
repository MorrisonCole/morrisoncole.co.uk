import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core";

interface TimelineImageCardProps {
  title: string,
  mainLink: string,
  image: string,
  subtitle1: string,
  text: string
}

const styles = makeStyles({
  card: {
    maxWidth: 345
  },
  pos: {
    marginBottom: 12,
  }
});

export default function TimelineImageCardRaw(props: TimelineImageCardProps) {
  const classes = styles();

  return (
      <Card className={classes.card}>
        <CardActionArea href={props.mainLink} target="_blank">
          <CardMedia
              component="img"
              alt={props.title}
              height="140"
              image={props.image}
              title={props.title}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {props.subtitle1}
            </Typography>
            <Typography variant="body2" component="p">
              {props.text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}
