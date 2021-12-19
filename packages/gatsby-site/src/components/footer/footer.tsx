import { Typography, Box } from "@mui/material";
import React from "react";

function currentYear(): number {
  return new Date().getFullYear();
}

export default function Footer(): JSX.Element {
  return (
    <Box sx={{ gridArea: "footer" }}>
      <footer>
        <Box sx={{ padding: 0 }}>
          <Box
            sx={{
              backgroundColor: ({ palette }) =>
                palette.mode === "light"
                  ? palette.grey[200]
                  : palette.grey[800],
              fontSize: "0.9em",
              marginTop: (theme) => theme.spacing(4),
              padding: (theme) => theme.spacing(4, 2),
            }}
          >
            <Typography variant="body2" sx={{ paddingLeft: "5%" }}>
              Handcrafted with TypeScript, React, Material-UI, and Gatsby ♥
            </Typography>
            <Typography
              variant="caption"
              sx={{ paddingLeft: "5%", opacity: 0.6 }}
            >
              &copy; Morrison Cole {currentYear()}
            </Typography>
          </Box>
        </Box>
      </footer>
    </Box>
  );
}
