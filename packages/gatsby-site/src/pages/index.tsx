import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { HeadProps, PageProps } from "gatsby";
import React from "react";
import DownloadCVButton from "../components/download-cv-button";
import SEO from "../components/seo";
import CustomizedTimeline from "../components/timeline/timeline";
import {
  getTimelineEntries,
  TimelineEntry,
} from "../components/timeline/timeline-data";

export const Head = ({ location }: HeadProps) => {
  return <SEO title="Timeline" pathname={location.pathname} />;
};

export default function TimelineIndex({ location }: PageProps): JSX.Element {
  const lifeEvents: TimelineEntry[] = getTimelineEntries();

  return (
    <>
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
            <Typography variant="h4" align="center">
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
            <DownloadCVButton />
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
