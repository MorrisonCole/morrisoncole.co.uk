import React from "react";
import SEO from "../components/seo";
import { Paper, Typography, Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import { HeadProps, PageProps } from "gatsby";

export const Head = ({ location }: HeadProps) => {
  return <SEO title="404: Not Found" pathname={location.pathname} />;
};

export default function NotFoundPage({ location }: PageProps): JSX.Element {
  return (
    <>
      <Box
        sx={{
          marginTop: ({ spacing }) => spacing(8),
        }}
      >
        <Paper
          sx={{
            padding: ({ spacing }) => spacing(2),
          }}
        >
          <Typography variant="h5" align="center">
            404: Not Found 🚷
          </Typography>
          <Alert
            severity="error"
            sx={{
              marginTop: ({ spacing }) => spacing(2),
            }}
          >
            Oh you explorer you! Unfortunately, there&apos;s no page at
            {` ${location.pathname}`}
          </Alert>
        </Paper>
      </Box>
    </>
  );
}
