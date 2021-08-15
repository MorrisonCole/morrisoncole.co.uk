import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

// From: https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=optional
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-display: optional;
    src: local(''), url('/fonts/NotoSans-Regular-subset.woff2') format('woff2');
    unicode-range: U+20,U+21,U+27,U+2C,U+2E,U+43,U+48,U+49,U+4D,U+61-65,U+68,U+69,U+6C-6F,U+72-74,U+77;
  }

  @font-face {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-display: optional;
    src: local(''), url('/fonts/NotoSans-Bold-subset.woff2') format('woff2');
    unicode-range: U+20,U+21,U+27,U+2C,U+2E,U+43,U+48,U+49,U+4D,U+61-65,U+68,U+69,U+6C-6F,U+72-74,U+77;
  }

  @font-face {
    font-family: 'Noto Sans';
    font-style: italic;
    font-weight: 400;
    font-display: optional;
    src: local(''), url('/fonts/NotoSans-Italic-subset.woff2') format('woff2');
    unicode-range: U+20,U+21,U+27,U+2C,U+2E,U+43,U+48,U+49,U+4D,U+61-65,U+68,U+69,U+6C-6F,U+72-74,U+77;
  }

  @font-face {
    font-family: 'Noto Sans';
    font-style: italic;
    font-weight: 700;
    font-display: optional;
    src: local(''), url('/fonts/NotoSans-BoldItalic-subset.woff2') format('woff2');
    unicode-range: U+20,U+21,U+27,U+2C,U+2E,U+43,U+48,U+49,U+4D,U+61-65,U+68,U+69,U+6C-6F,U+72-74,U+77;
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
