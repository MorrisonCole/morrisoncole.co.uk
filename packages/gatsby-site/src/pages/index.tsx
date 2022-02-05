import { Button, Paper, Typography } from "@mui/material";
import { GetApp } from "@mui/icons-material";
import { PageProps } from "gatsby";
import React from "react";
import SEO from "../components/seo";
import cvPdf from "../downloads/cv.pdf";
import {
  getTimelineEntries,
  TimelineEntry,
} from "../components/timeline/timeline-data";
import CustomizedTimeline from "../components/timeline/timeline";
import { Box } from "@mui/system";

export default function TimelineIndex({ location }: PageProps): JSX.Element {
  const lifeEvents: TimelineEntry[] = getTimelineEntries();

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
