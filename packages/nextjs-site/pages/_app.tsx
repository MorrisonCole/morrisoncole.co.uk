import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

// From: https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=optional
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-display: optional;
    src: local(''), url('/fonts/noto-sans-v14-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-display: optional;
    src: local(''), url('/fonts/noto-sans-v14-latin-700.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Noto Sans';
    font-style: italic;
    font-weight: 400;
    font-display: optional;
    src: local(''), url('/fonts/noto-sans-v14-latin-italic.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Noto Sans';
    font-style: italic;
    font-weight: 700;
    font-display: optional;
    src: local(''), url('/fonts/noto-sans-v14-latin-700italic.woff2') format('woff2');
  }

  body {
    margin: 0;
    font-family: 'Noto Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
