import { Theme } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import IconButton from "@mui/material/IconButton";
import makeStyles from '@mui/styles/makeStyles';
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
      size="large">
      {icon}
    </IconButton>
  );
}
