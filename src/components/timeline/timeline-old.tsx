import { Star } from "@material-ui/icons";
import React, { ReactNode } from "react";
import CustomVerticalTimelineElement from "./custom_vertical_timeline_element";
import { TimelineEntryData } from "./timeline-data";
import TimelineImageCardRaw from "./timeline_image_card";
import { VerticalTimeline } from "react-vertical-timeline-component";

interface TimelineProps {
  timelineEntries: TimelineEntryData[];
}

export default function OldTimeline({
  timelineEntries,
}: TimelineProps): JSX.Element {
  const listItems = timelineEntries.map((item) => (
    <CustomVerticalTimelineElement
      className="vertical-timeline-element--work"
      date={item.date}
      iconStyle={item.icon.background}
      icon={item.icon.icon}
      key={item.title + item.subtitle1}
    >
      <TimelineImageCardRaw
        title={item.title}
        image={item.image}
        subtitle1={item.subtitle1}
        text={item.text}
        mainLink={item.mainLink}
      />
    </CustomVerticalTimelineElement>
  ));
  return (
    <VerticalTimeline>
      {listItems}

      <CustomVerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<Star />}
      />
    </VerticalTimeline>
  );
}
