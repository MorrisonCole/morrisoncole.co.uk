import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Roboto,Helvetica,Arial,sans-serif",
    fontSize: 14,
  },
  palette: {
    primary: {
      main: "#007bff",
    },
    secondary: {
      main: "#ff7043",
    },
  },
});

export default theme;
