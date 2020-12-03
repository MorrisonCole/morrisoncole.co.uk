import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import React from "react";
import { useSelector } from "react-redux";
import { ToggleDarkModeState } from "./state/create-store";

interface Props {
  children: JSX.Element[];
}

export function ThemeProvider({ children }: Props): JSX.Element {
  const prefersDarkMode = useSelector(
    (state: ToggleDarkModeState) => state.darkMode
  );

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        typography: {
          fontFamily: "Roboto,Helvetica,Arial,sans-serif",
          fontSize: 14,
          h1: {
            fontSize: "2.6rem",
          },
          h2: {
            fontSize: "2.3rem",
          },
          h3: {
            fontSize: "2rem",
          },
        },
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            main: prefersDarkMode ? "#ff7043" : "#0070f2",
          },
          secondary: {
            main: prefersDarkMode ? "#0070f2" : "#ff7043",
          },
        },
      }),
    [prefersDarkMode]
  );

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
