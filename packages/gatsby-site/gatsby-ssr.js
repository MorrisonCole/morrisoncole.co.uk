import "./src/styles/global.css";
import React from "react";
import WrapWithCommon from "./src/wrap-with-common";

export const wrapPageElement = ({ element }) => (
  <WrapWithCommon>{element}</WrapWithCommon>
);
