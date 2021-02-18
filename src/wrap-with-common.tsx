import React, { ReactNode } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "./theme";

type Props = {
  element: ReactNode;
};

export default function WrapWithCommon({ element }: Props): JSX.Element {
  return (
    <ThemeProvider>
      <CssBaseline />
      <React.Fragment>{element}</React.Fragment>
    </ThemeProvider>
  );
}
