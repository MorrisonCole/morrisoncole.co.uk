import React from "react";
import SEO from "../components/seo";
import {
  Grid,
  Paper,
  Typography,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { PageProps } from "gatsby";

const styles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(8),
    },
    alert: {
      marginTop: theme.spacing(2),
    },
    announcement: {
      padding: theme.spacing(2),
    },
  })
);

export default function NotFoundPage({ location }: PageProps): JSX.Element {
  const classes = styles();

  return (
    <div>
      <SEO title="404: Not Found" location={location} />
      <Grid
        container
        className={classes.container}
        alignContent="center"
        justify="center"
        direction="column"
      >
        <Paper className={classes.announcement}>
          <Typography variant="h5" align="center">
            404: Not Found 🚷
          </Typography>
          <Alert severity="error" className={classes.alert}>
            Oh you explorer you! Unfortunately, there&apos;s no page at
            {` ${location.pathname}`}
          </Alert>
        </Paper>
      </Grid>
    </div>
  );
}
