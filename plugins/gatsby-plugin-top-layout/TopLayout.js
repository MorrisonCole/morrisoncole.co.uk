import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "../../src/theme";
import ClientOnly from "../../src/components/client_only";

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ClientOnly>
        <ThemeProvider>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {props.children}
        </ThemeProvider>
      </ClientOnly>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
