import {
  createStyles,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core"
import { Star } from "@material-ui/icons"
import { graphql } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import { SoftwareQuery } from "../../types/graphql-types"

const styles = makeStyles((theme: Theme) => createStyles({
  container: {
    marginTop: theme.spacing(8),
  },
  body: {
    marginTop: theme.spacing(2),
  },
  announcement: {
    padding: theme.spacing(2),
  },
}));

interface SoftwareProps {
  location: Location;
  data: SoftwareQuery;
}

export default function Software(props: SoftwareProps) {
  const classes = styles();

  const listItems2020 = props.data.softwareJson?._2020?.map((item) => (
    <ListItem button>
      <ListItemIcon>
        <Star/>
      </ListItemIcon>
      <ListItemText primary={item}/>
    </ListItem>
  ))

  const listItems2019 = props.data.softwareJson?._2019?.map((item) => (
    <ListItem button>
      <ListItemIcon>
        <Star/>
      </ListItemIcon>
      <ListItemText primary={item}/>
    </ListItem>
  ))

  return (
    <>
      <SEO title="Software" />
      <Grid
        container
        className={classes.container}
        alignContent="center"
        justify="center"
        direction="column"
      >
        <Paper className={classes.announcement}>
          <Typography variant="h5" align="center">
            Eventually I'll list my projects here!
          </Typography>
          <Typography
            variant="body1"
            align="center"
            className={classes.body}
          >
            In the meantime, you can check out my
            {' '}
            <a href="https://github.com/morrisoncole">GitHub</a>
            {' '}
            or
            {' '}
            <a
              href="https://stackoverflow.com/users/516642/morrison-cole?tab=profile"
            >
              Stack Overflow
            </a>
            {' '}
            :)
          </Typography>
        </Paper>
      </Grid>
      <Typography variant="h5" className={classes.container}>
        2020: New stuff I've been learning / using
      </Typography>
      <Typography variant="subtitle1">(By no means exhaustive ♥)</Typography>
      <List dense>{listItems2020}</List>
      <Typography variant="h5" className={classes.container}>
        2019: Stuff I learned
      </Typography>
      <List dense>{listItems2019}</List>
    </>
  );
}

export const pageQuery = graphql`
  query Software {
    softwareJson {
      _2019
      _2020
    }
  }
`;
