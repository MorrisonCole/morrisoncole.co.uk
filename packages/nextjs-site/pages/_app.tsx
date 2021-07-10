import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
