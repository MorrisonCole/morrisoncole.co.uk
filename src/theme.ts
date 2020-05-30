import { createMuiTheme, Theme } from "@material-ui/core";

const theme = (prefersDarkMode: boolean): Theme =>
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
  });

export default theme;
