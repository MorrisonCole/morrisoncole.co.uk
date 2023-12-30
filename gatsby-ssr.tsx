import "./src/styles/global.css";
import React from "react";
import WrapWithCommon from "./src/wrap-with-common";
import type { GatsbySSR } from "gatsby";

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => (
  <WrapWithCommon>{element}</WrapWithCommon>
);

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHeadComponents, setHtmlAttributes }) => {
  setHeadComponents([
    <link
      key="roboto"
      rel="preload"
      href="/fonts/Roboto-Light-subset.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="roboto"
      rel="preload"
      href="/fonts/Roboto-Regular-subset.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="roboto"
      rel="preload"
      href="/fonts/Roboto-Medium-subset.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="roboto"
      rel="preload"
      href="/fonts/Roboto-Bold-subset.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
  ]);
  setHtmlAttributes({ lang: "en" });
};
