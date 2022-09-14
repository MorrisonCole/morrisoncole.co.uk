import "./src/styles/global.css";
import React from "react";
import WrapWithCommon from "./src/wrap-with-common";
import type { GatsbySSR } from "gatsby";

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => (
  <WrapWithCommon>{element}</WrapWithCommon>
);

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "en" });
};
