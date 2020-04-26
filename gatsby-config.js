const rawUrl = "https://www.morrisoncole.co.uk";
const siteAddress = new URL(rawUrl);

module.exports = {
  siteMetadata: {
    title: "Morrison Cole",
    author: "Morrison Cole",
    description: `I'm a software engineer, technical product manager & musician based in Tokyo, Japan. I love start-ups, 
    and previously worked for Shazam & Improbable. Right now, I'm developing AI-based medicine at Medmain (amongst other things!).`,
    siteUrl: rawUrl, // Don't include a trailing slash!
    social: {
      twitter: "morrisoncole",
    },
    image: "/morrison-cole.jpg",
  },
  plugins: [
    {
      resolve: "@jamesdanylik/gatsby-source-goodreads",
      options: {
        key: process.env.GOODREADS_KEY,
        id: "6320986-morrison",
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/data/`,
        name: "data",
      },
    },
    {
      resolve: "gatsby-plugin-material-ui",
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/`,
        name: "content",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              maintainCase: true,
              removeAccents: true,
              isIconAfterHeader: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-38635265-1",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Morrison Cole Blog",
        short_name: "MorrisonCole",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "content/assets/favicon.ico",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/layout.tsx"),
      },
    },
    {
      resolve: "gatsby-plugin-s3",
      options: {
        bucketName: "morrisoncole.co.uk",
        protocol: siteAddress.protocol.slice(0, -1),
        hostname: siteAddress.hostname,
      },
    },
    "gatsby-plugin-remove-serviceworker",
  ],
};
