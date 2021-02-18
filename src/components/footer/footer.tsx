import { Typography, createStyles, Theme } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import classNames from "classnames";
import React from "react";

function currentYear(): number {
  return new Date().getFullYear();
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      gridArea: "footer",
    },
    container: {
      padding: 0,
    },
    footerBackground: {
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[200]
          : theme.palette.grey[800],
      fontSize: "0.9em",
      marginTop: theme.spacing(4),
      padding: theme.spacing(4, 2),
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
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.footerBackground}>
          <Typography variant="body2" className={classes.footerText}>
            Handcrafted with TypeScript, React, Material-UI, and Gatsby ♥
          </Typography>
          <Typography
            variant="caption"
            className={classNames(classes.footerText, classes.fade)}
          >
            &copy; Morrison Cole {currentYear()}
          </Typography>
        </div>
      </div>
    </footer>
  );
}
