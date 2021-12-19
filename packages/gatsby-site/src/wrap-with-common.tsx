import React, { ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "./theme";
import { Helmet } from "react-helmet";

type Props = {
  children: ReactNode;
};

export default function WrapWithCommon({ children }: Props): JSX.Element {
  return (
    <>
      <Helmet>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Morrison Cole's Blog"
          href="/rss.xml"
        />
      </Helmet>
      <ThemeProvider>
        <CssBaseline />
        <>{children}</>
      </ThemeProvider>
    </>
  );
}
