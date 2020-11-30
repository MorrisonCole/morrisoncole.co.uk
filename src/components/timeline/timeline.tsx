import {
  createStyles,
  isWidthDown,
  makeStyles,
  Theme,
  Typography,
  WithWidth,
  withWidth,
} from "@material-ui/core";
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
import TimelineImageCardRaw from "./timeline-image-card";

const styles = makeStyles((theme: Theme) =>
  createStyles({
    timelineSeparator: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
    },
  })
);

export default withWidth()(CustomizedTimeline);

function CustomizedTimeline({
  timelineEntries,
  width,
}: TimelineProps | WithWidth): JSX.Element {
  const classes = styles();

  const listItems = timelineEntries.map((item) => (
    <TimelineItem key={item.title + item.subtitle1}>
      <TimelineOppositeContent>
        <Typography variant="h5" color="textSecondary">
          {item.date}
        </Typography>
      </TimelineOppositeContent>
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
    <Timeline align={isWidthDown("sm", width) ? "left" : "alternate"}>
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
