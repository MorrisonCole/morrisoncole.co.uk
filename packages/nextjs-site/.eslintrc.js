const sharedConfig = require("../../.eslintrc");

module.exports = {
  ...sharedConfig,
  extends: ["next", "next/core-web-vitals"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["tsconfig.eslint.json"],
  },
};
