import {
  Button,
  createStyles,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import { GetApp } from "@material-ui/icons";
import { graphql, PageProps } from "gatsby";
import React from "react";
import SEO from "../components/seo";
import cvPdf from "../downloads/cv.pdf";
import { life, TimelineEntryData } from "../components/timeline/timeline-data";
import { TimelineIndexQuery } from "../../types/graphql-types";
import CustomizedTimeline from "../components/timeline/timeline";
import { getImage } from "gatsby-plugin-image";

const styles = makeStyles((theme: Theme) =>
  createStyles({
    timelineGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1.4fr 1fr",
      [theme.breakpoints.down("xs")]: {
        gridTemplateColumns: "1fr 6fr 1fr",
      },
      gridTemplateRows: "auto auto",
      justifyContent: "center",
    },
    introContainer: {
      gridColumn: "2 / 3",
      gridRow: 1,
    },
    timeline: {
      gridRow: 2,
      gridColumn: "1 / 4",
    },
    introTextPaper: {
      display: "grid",
      justifyItems: "center",
      padding: theme.spacing(2.5),
    },
    introTextBody: {
      marginTop: theme.spacing(1),
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
    button: {
      marginTop: theme.spacing(1),
    },
  })
);

interface TimelineIndexProps {
  data: TimelineIndexQuery;
}

export default function TimelineIndex({
  data,
  location,
}: TimelineIndexProps & PageProps): JSX.Element {
  const classes = styles();

  const imageFiles = data.allFile.edges.map((edge) => edge.node);
  const lifeEvents: TimelineEntryData[] = life(
    new Map(imageFiles.map((i) => [i.name, getImage(i)]))
  );

  return (
    <React.Fragment>
      <SEO title="Timeline" location={location} />
      <div className={classes.timelineGrid}>
        <div className={classes.introContainer}>
          <Paper className={classes.introTextPaper}>
            <Typography variant="h5" align="center">
              Hello! 👋
            </Typography>
            <Typography
              variant="body2"
              align="center"
              className={classes.introTextBody}
            >
              I&apos;m a software engineer, product manager, and (occasional)
              musician working in Tokyo.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              className={classes.button}
              href={cvPdf}
              download="cv-morrison-cole.pdf"
            >
              CV (.pdf)
              <GetApp className={classes.rightIcon} />
            </Button>
          </Paper>
        </div>

        <div className={classes.timeline}>
          <CustomizedTimeline timelineEntries={lifeEvents} />
        </div>
      </div>
    </React.Fragment>
  );
}

export const pageQuery = graphql`
  query TimelineIndex {
    allFile(filter: { absolutePath: { regex: "/timeline/.*/" } }) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
