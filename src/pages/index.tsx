import { Chip, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { HeadProps, PageProps } from "gatsby";
import React, { useState } from "react";
import DownloadCVButton from "../components/download-cv-button";
import SEO from "../components/seo";
import CustomizedTimeline from "../components/timeline/timeline";
import {
  Category,
  getTimelineEntries,
  TimelineEntry,
} from "../components/timeline/timeline-data";

const FILTER_MAP = {
  EVERYTHING: [Category.Software, Category.Life],
  SOFTWARE: [Category.Software],
  LIFE: [Category.Life],
};

export const Head = ({ location }: HeadProps) => {
  return <SEO title="Timeline" pathname={location.pathname} />;
};

export default function TimelineIndex(): JSX.Element {
  const [filter, setFilter] = useState(FILTER_MAP.EVERYTHING);
  const lifeEvents: TimelineEntry[] = getTimelineEntries().filter(
    (timelineEntry) => filter.includes(timelineEntry.category)
  );

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
              I&apos;m a software engineer, ex-product manager, and (occasional)
              musician living in Tokyo.
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
          <Box
            sx={{
              display: "flex",
              marginTop: ({ spacing }) => spacing(2),
              justifyContent: "center",
              gap: ({ spacing }) => spacing(1),
            }}
          >
            <Chip
              label="Everything"
              variant={filter == FILTER_MAP.EVERYTHING ? "filled" : "outlined"}
              onClick={() => setFilter(FILTER_MAP.EVERYTHING)}
            />
            <Chip
              label="Software"
              variant={filter == FILTER_MAP.SOFTWARE ? "filled" : "outlined"}
              onClick={() => setFilter(FILTER_MAP.SOFTWARE)}
            />
            <Chip
              label="Life"
              variant={filter == FILTER_MAP.LIFE ? "filled" : "outlined"}
              onClick={() => setFilter(FILTER_MAP.LIFE)}
            />
          </Box>
          <CustomizedTimeline timelineEntries={lifeEvents} />
        </Box>
      </Box>
    </>
  );
}
