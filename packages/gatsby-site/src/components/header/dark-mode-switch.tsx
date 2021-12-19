import { Switch } from "@mui/material";
import React from "react";
import { ThemeContext } from "../../theme";

export default function DarkModeSwitch(): JSX.Element {
  const { paletteMode, setPaletteMode } = React.useContext(ThemeContext);

  const handleDarkModeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPaletteMode(event.target.checked ? "light" : "dark");
  };

  return (
    <Switch
      checked={paletteMode === "light"}
      onChange={handleDarkModeChange}
      inputProps={{ "aria-label": "Toggle Dark Mode" }}
    />
  );
}
