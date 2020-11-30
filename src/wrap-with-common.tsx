import React from "react";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "./theme";
import createStore from "./state/create-store";

type Props = {
  element: JSX.Element;
};

export default function Common({ element }: Props): JSX.Element {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = createStore();

  return (
    <React.Fragment>
      <Provider store={store}>
        <ThemeProvider>
          <CssBaseline />
          {element}
        </ThemeProvider>
      </Provider>
    </React.Fragment>
  );
}
