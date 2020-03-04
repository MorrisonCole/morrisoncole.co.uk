import { Typography } from '@material-ui/core'
import classNames from 'classnames'
import React, { CSSProperties, MouseEventHandler } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import './custom_vertical_timeline_element.css'

interface CustomVerticalTimelineElementProps {
  id?: string
  children?: React.ReactNode | React.ReactNodeArray
  className?: string
  icon: React.ReactNode
  iconStyle: CSSProperties
  iconOnClick?: MouseEventHandler
  style?: CSSProperties
  date?: React.ReactNode
  position?: string
}

export default function CustomVerticalTimelineElement (
  props: CustomVerticalTimelineElementProps
) {
  const [visible, setVisible] = React.useState<{}>(false)

  const handleChange = (isVisible: boolean) => {
    if (isVisible) {
      setVisible(true)
    }
  }

  return (
    <div
      id={props.id}
      className={classNames(props.className, 'vertical-timeline-element', {
        'vertical-timeline-element--left': props.position === 'left',
        'vertical-timeline-element--right': props.position === 'right',
        'vertical-timeline-element--no-children': props.children === null
      })}
      style={props.style}
    >
      <VisibilitySensor
        partialVisibility
        offset={{ bottom: 80 }}
        onChange={handleChange}
      >
        <div>
          <span
            style={props.iconStyle}
            onClick={props.iconOnClick}
            className={`vertical-timeline-element-icon ${
              visible ? 'bounce-in' : 'is-hidden'
            }`}
          >
            {props.icon}
          </span>
          <div
            className={`custom-vertical-timeline-element-content ${
              visible ? 'bounce-in' : 'is-hidden'
            }`}
          >
            {props.children}
            <Typography variant="h5" className="vertical-timeline-element-date">
              {props.date}
            </Typography>
          </div>
        </div>
      </VisibilitySensor>
    </div>
  )
}
