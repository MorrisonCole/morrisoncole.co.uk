// Use CommonJS import to work around https://github.com/gatsbyjs/gatsby/issues/7810
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { generateConfig } = require("gatsby-plugin-ts-config");

module.exports = generateConfig({
  configDir: "src/gatsby",
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
    PRESERVE_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PARALLEL_SOURCING: true,
  },
  babel: false,
  tsNode: {
    project: "./tsconfig.json",
  },
});
