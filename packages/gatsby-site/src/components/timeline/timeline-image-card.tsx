import { Grow } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { useInView } from "react-intersection-observer";
import ComposableGatsbyImage from "../composable/composable-gatsby-image";

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
  image: IGatsbyImageData;
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
            component={ComposableGatsbyImage}
            imageSrc={image}
            title={title}
            src=""
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
