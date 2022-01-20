module.exports = {
  experimental: {
    styledComponents: true,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  reactStrictMode: true,
  poweredByHeader: false,
  i18n: {
    localeDetection: false,
    locales: ["en-GB", "ja-JP"],
    defaultLocale: "en-GB",
    domains: [
      {
        domain: "alpha.morrisoncole.co.uk",
        defaultLocale: "en-GB",
      },
      {
        domain: "alpha.morrisoncole.jp",
        defaultLocale: "ja-JP",
      },
    ],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};
