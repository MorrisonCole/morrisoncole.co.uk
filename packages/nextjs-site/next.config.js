module.exports = {
  experimental: {
    styledComponents: true,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  reactStrictMode: true,
  poweredByHeader: false,
  i18n: {
    localeDetection: false,
    locales: ["en_GB", "ja_JP"],
    defaultLocale: "en_GB",
    domains: [
      {
        domain: "alpha.morrisoncole.co.uk",
        defaultLocale: "en_GB",
      },
      {
        domain: "alpha.morrisoncole.jp",
        defaultLocale: "ja_JP",
      },
    ],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};
