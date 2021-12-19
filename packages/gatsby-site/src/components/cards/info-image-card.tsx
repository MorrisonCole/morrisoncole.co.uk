import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import makeStyles from '@mui/styles/makeStyles';
import Typography from "@mui/material/Typography";
import React from "react";
import { IGatsbyImageData } from "gatsby-plugin-image";
import ComposableGatsbyImage from "../composable/composable-gatsby-image";

const styles = makeStyles({
  card: {},
  image: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
});

interface InfoImageCardProps {
  title: string;
  subtitle1: string;
  text: string;
  actionTitle: string;
  actionHref: string;
  image: IGatsbyImageData;
}

export default function InfoImageCard({
  title,
  subtitle1,
  text,
  actionTitle,
  actionHref,
  image,
}: InfoImageCardProps): JSX.Element {
  const classes = styles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.image}
          component={ComposableGatsbyImage}
          imageSrc={image}
        />
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography gutterBottom color="textSecondary">
            {subtitle1}
            <br />
          </Typography>
          <Typography variant="body2">{text}</Typography>
        </CardContent>
      </CardActionArea>
      {actionTitle ? (
        <CardActions>
          <Button
            size="small"
            color="primary"
            href={actionHref}
            target="_blank"
            rel="noopener"
          >
            {actionTitle}
          </Button>
        </CardActions>
      ) : (
        ""
      )}
    </Card>
  );
}
