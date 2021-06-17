const sharedConfig = require("../../.eslintrc");

module.exports = {
  ...sharedConfig,
  extends: ["next", "next/core-web-vitals"]
};
