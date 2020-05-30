import { Typography, createStyles, Theme, lighten } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import classNames from "classnames";
import React from "react";

function currentYear(): number {
  return new Date().getFullYear();
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: 0,
    },
    footer: {
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[200]
          : theme.palette.grey[800],
      fontSize: "0.9em",
      flexShrink: 0,
      marginTop: "45px",
      padding: "35px 0 36px",
    },
    footerText: {
      paddingLeft: "5%",
    },
    fade: {
      opacity: 0.6,
    },
  })
);

export default function Footer(): JSX.Element {
  const classes = useStyles();

  return (
    <footer>
      <Container maxWidth={false} className={classes.container}>
        <Grid item xs className={classes.footer}>
          <Typography variant="body2" className={classes.footerText}>
            Handcrafted with TypeScript, React, Material-UI, and Gatsby ♥
          </Typography>
          <Typography
            variant="caption"
            className={classNames(classes.footerText, classes.fade)}
          >
            &copy; Morrison Cole {currentYear()}
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
}
