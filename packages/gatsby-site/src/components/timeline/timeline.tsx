import {
  Breakpoint,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
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
import { TimelineEntryData } from "./timeline-data";

const styles = makeStyles((theme: Theme) =>
  createStyles({
    timeline: {
      padding: 0,
    },
    timelineSeparator: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
  })
);

export default CustomizedTimeline;

interface Props {
  timelineEntries: TimelineEntryData[];
}

function useIsWidthUp(breakpoint: number | Breakpoint) {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up(breakpoint));
}

function CustomizedTimeline({ timelineEntries }: Props): JSX.Element {
  const classes = styles();

  const isSmUp = useIsWidthUp("sm");

  const listItems = timelineEntries.map((item) => (
    <TimelineItem
      key={item.title + item.subtitle1}
      className={classes.missingOppositeContent}
    >
      {isSmUp && (
        <TimelineOppositeContent>
          <Typography variant="h5" color="textSecondary">
            {item.date}
          </Typography>
        </TimelineOppositeContent>
      )}
      <TimelineSeparator className={classes.timelineSeparator}>
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
      className={classes.timeline}
      position={isSmUp ? "alternate" : "left"}
    >
      {listItems}

      <TimelineItem>
        <TimelineSeparator className={classes.timelineSeparator}>
          <TimelineDot color="secondary">
            <Star />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent />
      </TimelineItem>
    </Timeline>
  );
}
