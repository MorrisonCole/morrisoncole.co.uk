import React from "react";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "./src/theme";
import ClientOnly from "./src/components/client_only";
import createStore from "./src/state/createStore";

export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = createStore();

  return (
    <React.Fragment>
      <Provider store={store}>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <ClientOnly>
          <ThemeProvider>
            <CssBaseline />
            {element}
          </ThemeProvider>
        </ClientOnly>
      </Provider>
    </React.Fragment>
  );
};
