import { Switch } from "@material-ui/core";
import React from "react";
import { useChangeTheme } from "../../theme";

export default function DarkModeSwitch(): JSX.Element {
  const [darkMode, setDarkMode] = React.useState(() => {
    return false;
  });

  const changeTheme = useChangeTheme();

  const handleDarkModeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const darkMode = !event.target.checked;
    setDarkMode(darkMode);
    changeTheme({ darkMode });
  };

  return <Switch checked={!darkMode} onChange={handleDarkModeChange} />;
}
