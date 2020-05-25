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
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { Star } from "@material-ui/icons";
import { graphql, PageProps } from "gatsby";
import React from "react";
import SEO from "../components/seo";
import { SoftwareQuery } from "../../types/graphql-types";

const styles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(3),
    },
    body: {
      marginTop: theme.spacing(2),
    },
    announcementContainer: {
      width: "60%",
    },
    announcement: {
      padding: theme.spacing(2),
    },
    table: {
      minWidth: 650,
    },
  })
);

interface SoftwareProps {
  data: SoftwareQuery;
}

export default function Software({
  data,
  location,
}: SoftwareProps & PageProps): JSX.Element {
  const classes = styles();
  const repositories = data.allGithubData?.edges?.flatMap(
    ({ node }) => node.rawResult?.data?.viewer?.repositories?.nodes
  );

  const listItems2020 = data.softwareJson?._2020.map((item) => (
    <ListItem button key={item}>
      <ListItemIcon>
        <Star />
      </ListItemIcon>
      <ListItemText primary={item} />
    </ListItem>
  ));

  const listItems2019 = data.softwareJson?._2019.map((item) => (
    <ListItem button key={item}>
      <ListItemIcon>
        <Star />
      </ListItemIcon>
      <ListItemText primary={item} />
    </ListItem>
  ));

  return (
    <>
      <SEO title="Software" location={location} />
      <Grid
        container
        className={classes.container}
        alignItems="center"
        justify="center"
        direction="column"
      >
        <Grid item className={classes.announcementContainer}>
          <Paper className={classes.announcement}>
            <Typography variant="h5" align="center">
              Eventually I&apos;ll list my projects here!
            </Typography>
            <Typography variant="body2" align="center" className={classes.body}>
              In the meantime, you can check out my{" "}
              <a href="https://github.com/morrisoncole">GitHub</a> or{" "}
              <a href="https://stackoverflow.com/users/516642/morrison-cole?tab=profile">
                Stack Overflow
              </a>{" "}
              :)
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Project</TableCell>
              <TableCell align="right">Primary Language</TableCell>
              <TableCell align="right">Last Updated</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {repositories.map((repository) => (
              <TableRow key={repository?.name}>
                <TableCell component="th" scope="row">
                  {repository?.name}
                </TableCell>
                <TableCell align="right">
                  {repository?.primaryLanguage?.name ?? "Unknown"}
                </TableCell>
                <TableCell align="right">Unknown</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h5" className={classes.container}>
        2020: New stuff I&apos;ve been learning / using
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
    allGithubData {
      edges {
        node {
          id
          rawResult {
            data {
              viewer {
                repositories {
                  nodes {
                    name
                    url
                    primaryLanguage {
                      name
                    }
                  }
                  totalCount
                }
              }
            }
          }
        }
      }
    }
  }
`;
