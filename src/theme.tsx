import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import React from "react";

export const DispatchContext = React.createContext(() => {
  throw new Error("Forgot to wrap component in `ThemeProvider`");
});

export function useChangeTheme() {
  const dispatch = React.useContext(DispatchContext);
  return React.useCallback(
    (options) => dispatch({ type: "CHANGE", payload: options }),
    [dispatch]
  );
}

export function ThemeProvider(props: {
  children: React.ReactNode;
}): JSX.Element {
  const { children } = props;

  const [darkMode] = React.useState(() => {
    return false;
  });

  const [prefersDarkMode, dispatch] = React.useReducer(
    (state: any, action: { type: any; payload: { darkMode: boolean } }) => {
      switch (action.type) {
        case "CHANGE":
          return action.payload.darkMode;
        default:
          throw new Error(`Unrecognized type ${action.type}`);
      }
    },
    darkMode
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

  return (
    <MuiThemeProvider theme={theme}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </MuiThemeProvider>
  );
}
