import { useMediaQuery, PaletteMode } from "@mui/material";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  responsiveFontSizes,
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

  const theme = useMemo(
    () =>
      responsiveFontSizes(
        createTheme({
          components: {
            MuiTypography: {
              styleOverrides: {
                root: {
                  lineHeight: 1.5,
                },
              }
            },
          },
          typography: {
            fontFamily: "Roboto,Helvetica,Arial,sans-serif",
            fontSize: 19,
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
        })
      ),
    [paletteMode]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
