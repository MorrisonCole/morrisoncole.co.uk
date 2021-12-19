import sharedConfig from "../../.eslintrc";

export default {
  ...sharedConfig,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["tsconfig.eslint.json"],
  },
};
