import unwrapImages from "remark-unwrap-images";

const rawUrl = "https://morrisoncole.co.uk";
const siteAddress = new URL(rawUrl);

const goodreadsKey = process.env.GOODREADS_KEY;
if (goodreadsKey == null) {
  throw new Error("Environment variable 'GOODREADS_KEY' must be set.");
}

const gitHubKey = process.env.GITHUB_KEY;
if (gitHubKey == null) {
  throw new Error("Environment variable 'GITHUB_KEY' must be set.");
}

export const siteMetadata = {
  title: "Morrison Cole",
  author: "Morrison Cole",
  description: `I'm a software engineer, technical product manager & musician based in Tokyo, Japan. I love start-ups, 
    and previously worked for Shazam & Improbable. Right now, I'm developing AI-based medicine at Medmain (amongst other things!).`,
  siteUrl: rawUrl,
  social: {
    twitter: "@morrisoncole",
  },
  image: "/morrison-cole.jpg",
  imageAlt: "Morrison Cole Logo",
};

export const plugins = [
  {
    resolve: "gatsby-plugin-preconnect",
    options: {
      domains: [
        "https://www.google.com",
        "https://www.google.co.jp",
        "https://stats.g.doubleclick.net",
      ],
    },
  },
  {
    resolve: "gatsby-plugin-web-font-loader",
    options: {
      google: {
        families: ["Roboto:300,400,500,700&display=swap"],
      },
    },
  },
  {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: rawUrl,
    },
  },
  {
    resolve: "@jamesdanylik/gatsby-source-goodreads",
    options: {
      key: goodreadsKey,
      id: "6320986-morrison",
    },
  },
  {
    resolve: `gatsby-source-github-api`,
    options: {
      token: gitHubKey,
      graphQLQuery: `
          query { 
            viewer {
              repositories(first: 50, privacy: PUBLIC, isFork: false, orderBy: {field: UPDATED_AT, direction: DESC}) {
                totalCount
                nodes {
                  name
                  url
                  updatedAt
                  primaryLanguage {
                    name
                  }
                }
              }
            }
          }
        `,
    },
  },
  {
    resolve: `gatsby-plugin-sitemap`,
    options: {
      resolveSiteUrl: () => {
        return rawUrl;
      },
    },
  },
  "gatsby-transformer-json",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      path: `${__dirname}/../../data/`,
      name: "data",
    },
  },
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-material-ui",
  "gatsby-plugin-styled-components",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      path: `${__dirname}/../../content/`,
      name: "content",
    },
  },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      remarkPlugins: [
        // Prevents images in MDX being wrapped in a paragraph tag, which makes things difficult to style.
        unwrapImages,
      ],
      gatsbyRemarkPlugins: [
        {
          resolve: "gatsby-remark-autolink-headers",
          options: {
            maintainCase: false,
            removeAccents: true,
            isIconAfterHeader: true,
            icon: `<svg
                  aria-hidden="true"
                  version="1.1"
                  viewBox="0 0 16 16"
                  width="0.7em"
                  height="0.7em"
                  focusable="false"
                  fill="currentColor"
                >
                  <path
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  ></path>
                </svg>`,
          },
        },
        {
          resolve: "gatsby-remark-embed-video",
          options: {
            width: 800,
            ratio: 16 / 9,
            related: false,
            noIframeBorder: true,
          },
        },
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 1200,
            wrapperStyle: `width: 100%; grid-column: 1 / 4; margin-bottom: 16px;`,
          },
        },
      ],
    },
  },
  "gatsby-transformer-sharp",
  "gatsby-plugin-sharp",
  {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "GTM-WCT4PHF",

      includeInDevelopment: true,

      defaultDataLayer: {
        environment: process.env.NODE_ENV,
      },

      routeChangeEventName: "route-change",
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
  "gatsby-plugin-typescript",
  {
    resolve: "gatsby-plugin-layout",
    options: {
      component: require.resolve("../components/layout.tsx"),
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
];
