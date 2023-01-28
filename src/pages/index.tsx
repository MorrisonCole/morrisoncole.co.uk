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
  EVERYTHING: [Category.Music, Category.Software, Category.Life],
  LIFE: [Category.Life],
  MUSIC: [Category.Music],
  SOFTWARE: [Category.Software],
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
            <FilterChip
              label="Everything"
              setFilter={setFilter}
              activeFilter={filter}
              expectedFilter={FILTER_MAP.EVERYTHING}
            />
            <FilterChip
              label="Life"
              setFilter={setFilter}
              activeFilter={filter}
              expectedFilter={FILTER_MAP.LIFE}
            />
            <FilterChip
              label="Music"
              setFilter={setFilter}
              activeFilter={filter}
              expectedFilter={FILTER_MAP.MUSIC}
            />
            <FilterChip
              label="Software"
              setFilter={setFilter}
              activeFilter={filter}
              expectedFilter={FILTER_MAP.SOFTWARE}
            />
          </Box>
          <CustomizedTimeline timelineEntries={lifeEvents} />
        </Box>
      </Box>
    </>
  );
}

type FilterChipProps = {
  label: string;
  setFilter: React.Dispatch<React.SetStateAction<Category[]>>;
  activeFilter: Category[];
  expectedFilter: Category[];
};

export function FilterChip({
  label,
  setFilter,
  activeFilter,
  expectedFilter,
}: FilterChipProps): JSX.Element {
  return (
    <Chip
      label={label}
      variant={activeFilter == expectedFilter ? "filled" : "outlined"}
      onClick={() => setFilter(expectedFilter)}
    />
  );
}
