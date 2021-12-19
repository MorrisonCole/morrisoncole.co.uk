import { Switch } from "@mui/material";
import React, { useContext } from "react";
import { ThemeContext } from "../../theme";

export default function DarkModeSwitch(): JSX.Element {
  const { paletteMode, setPaletteMode } = useContext(ThemeContext);

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
