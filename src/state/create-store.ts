import { createStore as reduxCreateStore, StoreCreator } from "redux";

export const TOGGLE_DARK_MODE_MESSAGE = "TOGGLE_DARK_MODE_MESSAGE";

export type ToggleDarkModeState = {
  darkMode: boolean;
};

export type ToggleDarkModeAction = {
  type: typeof TOGGLE_DARK_MODE_MESSAGE;
  payload: ToggleDarkModeState;
};

const reducer = (state = initialState, action: ToggleDarkModeAction) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE_MESSAGE:
      return {
        darkMode: action.payload.darkMode,
      };
    default:
      return state;
  }
};

const initialState: ToggleDarkModeState = { darkMode: false };

const createStore = (): StoreCreator => reduxCreateStore(reducer, initialState);
export default createStore;
