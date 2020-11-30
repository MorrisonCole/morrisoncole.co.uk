import { createStyles, Theme } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconButton: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  })
);

interface SocialIconProps {
  ariaLabel: string;
  href: string;
  icon: React.ReactNode;
}

export default function SocialIcon({
  ariaLabel,
  href,
  icon,
}: SocialIconProps): JSX.Element {
  const classes = useStyles();

  return (
    <IconButton
      aria-label={ariaLabel}
      href={href}
      target="_blank"
      rel="noopener"
      className={classes.iconButton}
    >
      {icon}
    </IconButton>
  );
}
