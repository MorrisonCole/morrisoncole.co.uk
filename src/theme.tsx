import { PaletteType, useMediaQuery } from "@material-ui/core";
import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import React from "react";

interface Props {
  children: JSX.Element[];
}

interface ThemeContext {
  paletteType: PaletteType;
  setPaletteType: (paletteType: PaletteType) => void;
}

export const ThemeContext = React.createContext<ThemeContext>(undefined);

export function ThemeProvider({ children }: Props): JSX.Element {
  const prefersDarkMode: boolean = useMediaQuery(
    "(prefers-color-scheme: dark)"
  );
  const [paletteType, setPaletteType] = React.useState<PaletteType>(undefined);

  React.useEffect(() => {
    setPaletteType(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  const contextValue = React.useMemo(() => {
    return {
      paletteType,
      setPaletteType,
    };
  }, [paletteType, setPaletteType]);

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
          type: paletteType,
          primary: {
            main: paletteType === "dark" ? "#ff7043" : "#0070f2",
          },
          secondary: {
            main: paletteType === "dark" ? "#0070f2" : "#ff7043",
          },
        },
      }),
    [paletteType]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
