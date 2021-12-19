import { Button, Paper, Typography } from "@mui/material";
import { GetApp } from "@mui/icons-material";
import { graphql, PageProps } from "gatsby";
import React from "react";
import SEO from "../components/seo";
import cvPdf from "../downloads/cv.pdf";
import { life, TimelineEntryData } from "../components/timeline/timeline-data";
import { TimelineIndexQuery } from "../../types/graphql-types";
import CustomizedTimeline from "../components/timeline/timeline";
import { getImage } from "gatsby-plugin-image";
import { Box } from "@mui/system";

interface TimelineIndexProps {
  data: TimelineIndexQuery;
}

export default function TimelineIndex({
  data,
  location,
}: TimelineIndexProps & PageProps): JSX.Element {
  const imageFiles = data.allFile.edges.map((edge) => edge.node);
  const lifeEvents: TimelineEntryData[] = life(
    new Map(imageFiles.map((i) => [i.name, getImage(i)]))
  );

  return (
    <>
      <SEO title="Timeline" location={location} />
      <Box
        sx={(theme) => ({
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr 1fr",
          [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "1fr 6fr 1fr",
          },
          gridTemplateRows: "auto auto",
          justifyContent: "center",
        })}
      >
        <Box
          sx={{
            gridColumn: "2 / 3",
            gridRow: 1,
          }}
        >
          <Paper
            sx={{
              display: "grid",
              justifyItems: "center",
              padding: ({ spacing }) => spacing(2.5),
            }}
          >
            <Typography variant="h5" align="center">
              Hello! 👋
            </Typography>
            <Typography
              variant="body2"
              align="center"
              sx={{
                marginTop: ({ spacing }) => spacing(1),
              }}
            >
              I&apos;m a software engineer, product manager, and (occasional)
              musician working in Tokyo.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              href={cvPdf}
              download="cv-morrison-cole.pdf"
              sx={{
                marginTop: ({ spacing }) => spacing(1),
              }}
            >
              CV (.pdf)
              <GetApp
                sx={{
                  marginLeft: ({ spacing }) => spacing(1),
                }}
              />
            </Button>
          </Paper>
        </Box>

        <Box
          sx={{
            gridRow: 2,
            gridColumn: "1 / 4",
          }}
        >
          <CustomizedTimeline timelineEntries={lifeEvents} />
        </Box>
      </Box>
    </>
  );
}

export const pageQuery = graphql`
  query TimelineIndex {
    allFile(filter: { absolutePath: { regex: "/timeline/.*/" } }) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              sizes: "(min-width: 960px) 320px, (min-width: 600px) 500px, (min-width: 400px) 300px, (min-width: 200px) 150px, (min-width: 0px) 40px, 100vw"
            )
          }
        }
      }
    }
  }
`;
