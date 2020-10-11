import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import React from "react";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import { TimelineProps } from "./timeline-old";
import TimelineImageCardRaw from "./timeline_image_card";

const styles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: "6px 16px",
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
  })
);

export default function CustomizedTimeline({
  timelineEntries,
}: TimelineProps): JSX.Element {
  const listItems = timelineEntries.map((item) => (
    <TimelineItem key={item.title + item.subtitle1}>
      <TimelineOppositeContent>
        <Typography variant="body2" color="textSecondary">
          {item.date}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
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
    <Timeline align="alternate">
      {listItems}

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <Star />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent />
      </TimelineItem>
    </Timeline>
  );
}
