import React, { ReactNode } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "./theme";
import { Helmet } from "react-helmet";

type Props = {
  element: ReactNode;
};

export default function WrapWithCommon({ element }: Props): JSX.Element {
  return (
    <ThemeProvider>
      <Helmet>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Morrison Cole's Blog"
          href="/rss.xml"
        />
      </Helmet>
      <CssBaseline />
      <React.Fragment>{element}</React.Fragment>
    </ThemeProvider>
  );
}
