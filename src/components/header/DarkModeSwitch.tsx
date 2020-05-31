import { createStyles, Theme, Switch } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import useStateWithLocalStorage from "../../state-with-local-storage";
import { useChangeTheme } from "../../theme";

const useStyles = makeStyles(() => createStyles({}));

export default function DarkModeSwitch(): JSX.Element {
  const [darkMode, setDarkMode] = useStateWithLocalStorage(false, "darkMode");
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
