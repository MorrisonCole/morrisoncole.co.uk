import { Switch } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import {
  ToggleDarkModeAction,
  ToggleDarkModeState,
  TOGGLE_DARK_MODE_MESSAGE,
} from "../../state/create-store";

export default function DarkModeSwitch(): JSX.Element {
  const dispatch = useDispatch<Dispatch<ToggleDarkModeAction>>();
  const initialDarkMode = useSelector(
    (state: ToggleDarkModeState) => state.darkMode
  );
  const [darkMode, setDarkMode] = React.useState(initialDarkMode);

  const handleDarkModeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const darkMode = !event.target.checked;
    setDarkMode(darkMode);

    dispatch({
      type: TOGGLE_DARK_MODE_MESSAGE,
      payload: { darkMode: darkMode },
    });
  };

  return <Switch checked={!darkMode} onChange={handleDarkModeChange} />;
}
