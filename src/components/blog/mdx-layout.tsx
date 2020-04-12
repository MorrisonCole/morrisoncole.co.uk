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
    divider: {
      marginTop: spacing(2),
      marginBottom: spacing(2),
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
        h4: (props) => (
          <Typography
            {...props}
            component="h4"
            variant="h4"
            gutterBottom={true}
          />
        ),
        h5: (props) => (
          <Typography
            {...props}
            component="h5"
            variant="h5"
            gutterBottom={true}
          />
        ),
        h6: (props) => (
          <Typography
            {...props}
            component="h6"
            variant="h6"
            gutterBottom={true}
          />
        ),
        p: (props) => <Typography {...props} paragraph={true} />,
        ul: (props) => <Typography {...props} component="ul" />,
        ol: (props) => <Typography {...props} component="ol" />,
        hr: withStyles(styles)(({ classes, ...props }) => (
          <Divider className={classes.divider} {...props} variant="middle" />
        )),
        blockquote: withStyles(styles)(({ classes, ...props }) => (
          <Grid className={classes.blockquoteContainer}>
            <Paper className={classes.blockquote} elevation={3} {...props} />
          </Grid>
        )),
        a: (props) => <Link {...props} target="_blank" rel="noopener" />,
        defaultComponents,
      }}
    >
      {children}
    </MDXProvider>
  );
}
