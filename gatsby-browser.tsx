import "./src/styles/global.css";
import React from "react";
import WrapWithCommon from "./src/wrap-with-common";
import type { GatsbyBrowser } from "gatsby";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => <WrapWithCommon>{element}</WrapWithCommon>;
