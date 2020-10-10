import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Image, { FluidObject } from "gatsby-image";

const styles = makeStyles({
  card: {
    maxWidth: 345,
  },
  cardImage: {
    maxHeight: 200,
  },
  pos: {
    marginBottom: 12,
  },
});

interface TimelineImageCardProps {
  title: string;
  mainLink: string;
  image: FluidObject;
  subtitle1: string;
  text: string;
}

export default function TimelineImageCardRaw({
  title,
  mainLink,
  image,
  subtitle1,
  text,
}: TimelineImageCardProps): JSX.Element {
  const classes = styles();

  return (
    <Card className={classes.card}>
      <CardActionArea href={mainLink} target="_blank" rel="noopener">
        <CardMedia
          className={classes.cardImage}
          component={Image}
          fluid={image}
          alt={title}
          title={title}
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {subtitle1}
          </Typography>
          <Typography variant="body2" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
