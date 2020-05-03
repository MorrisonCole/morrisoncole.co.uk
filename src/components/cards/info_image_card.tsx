import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Image, { FluidObject } from "gatsby-image";

const styles = makeStyles({
  card: {
    maxWidth: 400,
  },
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
  image: FluidObject;
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
        <CardMedia className={classes.image} component={Image} fluid={image} />
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
