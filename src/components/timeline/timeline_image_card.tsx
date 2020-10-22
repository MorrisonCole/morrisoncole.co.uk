import { Grow, makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import Image, { FluidObject } from "gatsby-image";
import { useInView } from "react-intersection-observer";

const styles = makeStyles({
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

  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  if (!visible && inView) {
    setVisible(true);
  }

  return (
    <Grow
      ref={ref}
      in={visible}
      style={{
        transformOrigin: "top left",
        visibility: visible ? "visible" : "hidden",
      }}
      {...{ timeout: 800 }}
    >
      <Card>
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
    </Grow>
  );
}
