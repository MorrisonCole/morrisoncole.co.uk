import "./src/styles/global.css";
import React from "react";
import WrapWithCommon from "./src/wrap-with-common";

export const wrapRootElement = ({ element }) => (
  <WrapWithCommon>{element}</WrapWithCommon>
);
