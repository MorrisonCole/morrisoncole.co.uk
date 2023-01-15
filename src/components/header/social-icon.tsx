import IconButton from "@mui/material/IconButton";
import React from "react";

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
  return (
    <IconButton
      aria-label={ariaLabel}
      href={href}
      target="_blank"
      rel="noopener"
      size="large"
      sx={{
        marginLeft: ({ spacing }) => spacing(1),
        marginRight: ({ spacing }) => spacing(1),
      }}
    >
      {icon}
    </IconButton>
  );
}
