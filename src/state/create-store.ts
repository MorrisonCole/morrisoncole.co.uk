import { createStore as reduxCreateStore } from "redux";

const reducer = (state, action) => {
  if (action.type === `CHANGE`) {
    return Object.assign({}, state, {
      darkMode: state.darkMode,
    });
  }
  return state;
};

const initialState = { darkMode: false };

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
