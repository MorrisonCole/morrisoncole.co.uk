const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  reactStrictMode: true,
  poweredByHeader: false,
  i18n: {
    locales: ["en-GB"],
    defaultLocale: "en-GB",
  },
});
