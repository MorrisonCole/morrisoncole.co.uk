import { Grow } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

interface TimelineImageCardProps {
  title: string;
  mainLink: string;
  image: JSX.Element;
  subtitle1: string;
  text: string;
}

export default function TimelineImageCardRaw({
  title,
  mainLink,
  image,
  subtitle1,
  text,
}: TimelineImageCardProps): JSX.Element {
  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  if (!visible && inView) {
    setVisible(true);
  }

  return (
    <Grow
      ref={ref}
      in={visible}
      style={{
        transformOrigin: "top left",
        visibility: visible ? "visible" : "hidden",
      }}
      {...{ timeout: 800 }}
    >
      <Card>
        <CardActionArea href={mainLink} target="_blank" rel="noopener">
          {image}
          <CardContent>
            <Typography variant="h4">{title}</Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              sx={{
                marginBottom: "12px",
              }}
            >
              {subtitle1}
            </Typography>
            <Typography variant="body2">{text}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grow>
  );
}
