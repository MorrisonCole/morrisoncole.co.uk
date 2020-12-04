import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "./theme";

type Props = {
  element: JSX.Element;
};

export default function Common({ element }: Props): JSX.Element {
  return (
    <React.Fragment>
      <ThemeProvider>
        <CssBaseline />
        {element}
      </ThemeProvider>
    </React.Fragment>
  );
}
