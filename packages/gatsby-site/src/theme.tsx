import { useMediaQuery, PaletteMode } from "@mui/material";
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
  createTheme,
} from "@mui/material/styles";
import React, { createContext, useEffect, useMemo, useState } from "react";

interface Props {
  children: JSX.Element[];
}

interface ThemeContext {
  paletteMode: PaletteMode;
  setPaletteMode: (paletteMode: PaletteMode) => void;
}

export const ThemeContext = createContext<ThemeContext>(undefined);

export function ThemeProvider({ children }: Props): JSX.Element {
  const prefersDarkMode: boolean = useMediaQuery(
    "(prefers-color-scheme: dark)"
  );
  const [paletteMode, setPaletteMode] = useState<PaletteMode>("light");

  useEffect(() => {
    setPaletteMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  const contextValue = useMemo(() => {
    return {
      paletteMode,
      setPaletteMode,
    };
  }, [paletteMode, setPaletteMode]);

  const defaultTheme = createTheme();
  const theme = useMemo(
    () =>
      createTheme({
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
          mode: paletteMode,
          primary: {
            main: paletteMode === "dark" ? "#ff7043" : "#0070f2",
          },
          secondary: {
            main: paletteMode === "dark" ? "#0070f2" : "#ff7043",
          },
        },
        components: {
          MuiTimelineItem: {
            missingOppositeContent: {
              [defaultTheme.breakpoints.only("xs")]: {
                "&:before": {
                  content: '""',
                  flex: 0,
                  padding: 0,
                },
              },
            },
          },
        },
      }),
    [paletteMode]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
      </StyledEngineProvider>
    </ThemeContext.Provider>
  );
}
