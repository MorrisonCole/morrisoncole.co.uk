import { Box, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import DownloadCVButton from "../download-cv-button";

export default function TimelineIntro(): JSX.Element {
  return (
    <Box
      sx={{
        gridColumn: "2 / 3",
      }}
    >
      <Paper
        sx={{
          display: "grid",
          justifyItems: "center",
          padding: ({ spacing }) => spacing(2.5),
        }}
      >
        <Typography variant="h4" align="center">
          Hello! 👋
        </Typography>
        <Typography
          variant="body2"
          align="center"
          sx={{
            marginTop: ({ spacing }) => spacing(1),
          }}
        >
          I&apos;m a software engineer, ex-product manager, and (occasional)
          musician living in Tokyo.
        </Typography>
        <DownloadCVButton />
      </Paper>
    </Box>
  );
}
