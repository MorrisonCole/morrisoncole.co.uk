/* eslint-disable react/display-name */
import { MDXProvider } from "@mdx-js/react";
import React from "react";
import {
  Typography,
  Divider,
  Paper,
  Grid,
  Theme,
  StyleRules,
  createStyles,
  withStyles,
} from "@material-ui/core";
import CustomLink from "./link";
import { preToCodeBlock } from "mdx-utils";
import { Code } from "./code";
import "./mdx-layout.css";

const styles = ({ spacing }: Theme): StyleRules =>
  createStyles({
    blockquoteContainer: {
      padding: spacing(3),
    },
    blockquote: {
      padding: spacing(3),
    },
    divider: {
      marginTop: spacing(2),
      marginBottom: spacing(2),
    },
    ol: {
      marginBottom: spacing(2),
    },
  });

interface Props {
  children: JSX.Element;
}

export default function MDXLayout({ children }: Props): JSX.Element {
  return (
    <MDXProvider
      components={{
        h1: (props): JSX.Element => (
          <Typography
            {...props}
            component="h1"
            variant="h1"
            gutterBottom={true}
          />
        ),
        h2: (props): JSX.Element => (
          <Typography
            {...props}
            component="h2"
            variant="h2"
            gutterBottom={true}
          />
        ),
        h3: (props): JSX.Element => (
          <Typography
            {...props}
            component="h3"
            variant="h3"
            gutterBottom={true}
          />
        ),
        h4: (props): JSX.Element => (
          <Typography
            {...props}
            component="h4"
            variant="h4"
            gutterBottom={true}
          />
        ),
        h5: (props): JSX.Element => (
          <Typography
            {...props}
            component="h5"
            variant="h5"
            gutterBottom={true}
          />
        ),
        h6: (props): JSX.Element => (
          <Typography
            {...props}
            component="h6"
            variant="h6"
            gutterBottom={true}
          />
        ),
        p: (props): JSX.Element => <Typography {...props} paragraph={true} />,
        ul: withStyles(styles)(({ classes, ...props }) => (
          <Typography className={classes.ol} {...props} component="ul" />
        )),
        ol: withStyles(styles)(({ classes, ...props }) => (
          <Typography className={classes.ol} {...props} component="ol" />
        )),
        hr: withStyles(styles)(({ classes, ...props }) => (
          <Divider className={classes.divider} {...props} variant="middle" />
        )),
        blockquote: withStyles(styles)(({ classes, ...props }) => (
          <Grid className={classes.blockquoteContainer}>
            <Paper className={classes.blockquote} elevation={3} {...props} />
          </Grid>
        )),
        a: (props): JSX.Element => <CustomLink {...props}></CustomLink>,
        pre: (preProps) => {
          const props = preToCodeBlock(preProps);
          if (props) {
            return <Code {...props} />;
          } else {
            return <pre {...preProps} />;
          }
        },
        Grid,
      }}
    >
      {children}
    </MDXProvider>
  );
}
