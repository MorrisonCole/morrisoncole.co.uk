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
  Link,
} from "@material-ui/core";
import { defaultComponents } from "./default-components";

const styles = ({ spacing }: Theme): StyleRules =>
  createStyles({
    blockquoteContainer: {
      padding: spacing(3),
    },
    blockquote: {
      padding: spacing(3),
    },
  });

export default function MDXLayout({
  children,
}: {
  children: JSX.Element[];
}): JSX.Element {
  return (
    <MDXProvider
      components={{
        h1: (props) => (
          <Typography
            {...props}
            component="h1"
            variant="h1"
            gutterBottom={true}
          />
        ),
        h2: (props) => (
          <Typography
            {...props}
            component="h2"
            variant="h2"
            gutterBottom={true}
          />
        ),
        h3: (props) => (
          <Typography
            {...props}
            component="h3"
            variant="h3"
            gutterBottom={true}
          />
        ),
        p: (props) => <Typography {...props} paragraph={true} />,
        hr: Divider,
        blockquote: withStyles(styles)(({ classes, ...props }) => (
          <Grid className={classes.blockquoteContainer}>
            <Paper className={classes.blockquote} elevation={3} {...props} />
          </Grid>
        )),
        a: (props) => <Link {...props} target="_blank" rel="noreferrer noopener"/>,
        defaultComponents,
      }}
    >
      {children}
    </MDXProvider>
  );
}
