import {
  createStyles,
  isWidthUp,
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

export default withWidth()(CustomizedTimeline);

interface Props {
  timelineEntries: TimelineEntryData[];
}

function CustomizedTimeline({
  timelineEntries,
  width,
}: Props | WithWidth): JSX.Element {
  const classes = styles();

  const listItems = timelineEntries.map((item) => (
    <TimelineItem
      key={item.title + item.subtitle1}
      className={classes.missingOppositeContent}
    >
      {isWidthUp("sm", width) && (
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
      align={isWidthUp("sm", width) ? "alternate" : "left"}
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
