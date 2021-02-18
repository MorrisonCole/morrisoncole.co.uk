import { Switch } from "@material-ui/core";
import React from "react";
import { ThemeContext } from "../../theme";

export default function DarkModeSwitch(): JSX.Element {
  const { paletteType, setPaletteType } = React.useContext(ThemeContext);

  const handleDarkModeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPaletteType(event.target.checked ? "light" : "dark");
  };

  return (
    <Switch
      checked={paletteType === "light"}
      onChange={handleDarkModeChange}
      inputProps={{ "aria-label": "Toggle Dark Mode" }}
    />
  );
}
