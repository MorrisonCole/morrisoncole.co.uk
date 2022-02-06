import { Breakpoint, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Star } from "@mui/icons-material";
import React from "react";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import TimelineImageCardRaw from "./timeline-image-card";
import { TimelineEntry } from "./timeline-data";

export default CustomizedTimeline;

interface Props {
  timelineEntries: TimelineEntry[];
}

function useIsWidthUp(breakpoint: number | Breakpoint) {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up(breakpoint));
}

function CustomizedTimeline({ timelineEntries }: Props): JSX.Element {
  const isSmUp = useIsWidthUp("sm");

  const listItems = timelineEntries.map((item) => (
    <TimelineItem key={item.title + item.subtitle1}>
      {isSmUp && (
        <TimelineOppositeContent>
          <Typography variant="h5" color="textSecondary">
            {item.date}
          </Typography>
        </TimelineOppositeContent>
      )}
      <TimelineSeparator
        sx={{
          marginLeft: ({ spacing }) => spacing(2),
          marginRight: ({ spacing }) => spacing(2),
        }}
      >
        <TimelineDot color="primary">{item.icon.icon}</TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <TimelineImageCardRaw
          title={item.title}
          image={item.image}
          subtitle1={item.subtitle1}
          text={item.text}
          mainLink={item.mainLink}
        />
      </TimelineContent>
    </TimelineItem>
  ));

  return (
    <Timeline
      sx={({ breakpoints }) => ({
        padding: 0,
        "& .MuiTimelineItem-missingOppositeContent": {
          [breakpoints.only("xs")]: {
            "&:before": {
              content: '""',
              flex: 0,
              padding: 0,
            },
          },
        },
      })}
      position={isSmUp ? "alternate" : "right"}
    >
      {listItems}

      <TimelineItem>
        <TimelineSeparator
          sx={{
            marginLeft: ({ spacing }) => spacing(2),
            marginRight: ({ spacing }) => spacing(2),
          }}
        >
          <TimelineDot color="secondary">
            <Star />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent />
      </TimelineItem>
    </Timeline>
  );
}
