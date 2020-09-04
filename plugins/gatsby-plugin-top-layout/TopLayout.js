import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "../../src/theme";
import ClientOnly from "../../src/components/client_only";

export default function TopLayout(props) {
  return (
    <React.Fragment>
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
