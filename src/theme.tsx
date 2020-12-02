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
        },
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#007bff",
          },
          secondary: {
            main: "#ff7043",
          },
        },
      }),
    [prefersDarkMode]
  );

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
