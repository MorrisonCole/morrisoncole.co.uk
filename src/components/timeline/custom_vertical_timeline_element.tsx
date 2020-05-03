import { Typography } from "@material-ui/core";
import classNames from "classnames";
import React, { CSSProperties, MouseEventHandler } from "react";
import VisibilitySensor from "react-visibility-sensor";
import "./custom_vertical_timeline_element.css";

interface CustomVerticalTimelineElementProps {
  id?: string;
  children?: React.ReactNode | React.ReactNodeArray;
  className?: string;
  icon: React.ReactNode;
  iconStyle: CSSProperties;
  iconOnClick?: MouseEventHandler;
  style?: CSSProperties;
  date?: React.ReactNode;
  position?: string;
}

export default function CustomVerticalTimelineElement({
  id,
  children,
  className,
  icon,
  iconStyle,
  iconOnClick,
  style,
  date,
  position,
}: CustomVerticalTimelineElementProps): JSX.Element {
  const [visible, setVisible] = React.useState<{}>(false);

  const handleChange = (isVisible: boolean): void => {
    if (isVisible) {
      setVisible(true);
    }
  };

  return (
    <div
      id={id}
      className={classNames(className, "vertical-timeline-element", {
        "vertical-timeline-element--left": position === "left",
        "vertical-timeline-element--right": position === "right",
        "vertical-timeline-element--no-children": children === null,
      })}
      style={style}
    >
      <VisibilitySensor
        partialVisibility
        offset={{ bottom: 80 }}
        onChange={handleChange}
      >
        <div>
          <span
            style={iconStyle}
            onClick={iconOnClick}
            className={`vertical-timeline-element-icon ${
              visible ? "bounce-in" : "is-hidden"
            }`}
          >
            {icon}
          </span>
          <div
            className={`custom-vertical-timeline-element-content ${
              visible ? "bounce-in" : "is-hidden"
            }`}
          >
            {children}
            <Typography variant="h5" className="vertical-timeline-element-date">
              {date}
            </Typography>
          </div>
        </div>
      </VisibilitySensor>
    </div>
  );
}
