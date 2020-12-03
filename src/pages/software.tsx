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
import CustomLink from "../components/blog/link";

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
    paper: {
      padding: theme.spacing(2),
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
    <Grid container className={classes.container}>
      <SEO title="Software" location={location} />
      <Grid container direction="row" spacing={4}>
        <Grid item container direction="column" md={6} spacing={4}>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography variant="h5">
                2020: New stuff I&apos;ve been learning / using
              </Typography>
              <Typography variant="subtitle1">
                (By no means exhaustive ♥)
              </Typography>
              <List dense>{listItems2020}</List>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography variant="h5">2019: Stuff I learned</Typography>
              <List dense>{listItems2019}</List>
            </Paper>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <Paper className={classes.paper}>
            <TableContainer>
              <Table aria-label="simple table">
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
                        <CustomLink href={repository?.url}>
                          {repository?.name}
                        </CustomLink>
                      </TableCell>
                      <TableCell align="right">
                        {repository?.primaryLanguage?.name ?? "Unknown"}
                      </TableCell>
                      <TableCell align="right">
                        {repository?.updatedAt}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
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
                    updatedAt(formatString: "MMMM DD, YYYY")
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
