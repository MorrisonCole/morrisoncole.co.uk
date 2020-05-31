import { createStyles, Theme, Switch, useMediaQuery } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import useStateWithLocalStorage from "../../state-with-local-storage";
import { useChangeTheme } from "../../theme";

const useStyles = makeStyles(() => createStyles({}));

export default function DarkModeSwitch(): JSX.Element {
  const systemPrefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const [darkMode, setDarkMode] = useStateWithLocalStorage(
    systemPrefersDarkMode,
    "darkMode"
  );

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
