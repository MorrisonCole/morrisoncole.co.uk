import { createStyles, Theme } from "@material-ui/core"
import makeStyles from "@material-ui/core/styles/makeStyles"
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon"
import React from "react"
import SocialIcon from "./social_icon"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      fontSize: "3.5rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2.5rem",
      },
      color: "#0077b5",
    },
  })
)

function LinkedinIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
    </SvgIcon>
  )
}

export default function LinkedInSocialIcon() {
  const classes = useStyles()

  return (
    <SocialIcon
      ariaLabel={"LinkedIn"}
      href={"https://www.linkedin.com/in/morrisoncole/"}
      icon={<LinkedinIcon className={classes.icon} />}
    />
  )
}
