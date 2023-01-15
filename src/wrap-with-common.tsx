import React, { ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "./theme";

type Props = {
  children: ReactNode;
};

export default function WrapWithCommon({ children }: Props): JSX.Element {
  return (
    <ThemeProvider>
      <CssBaseline />
      <>{children}</>
    </ThemeProvider>
  );
}
