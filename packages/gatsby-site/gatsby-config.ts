import type { GatsbyConfig } from "gatsby";
import path from "path";

const rawUrl = "https://morrisoncole.co.uk";
const siteAddress = new URL(rawUrl);

const goodreadsKey = process.env.GOODREADS_KEY;
if (goodreadsKey == null) {
  throw new Error("Environment variable 'GOODREADS_KEY' must be set.");
}

const config: GatsbyConfig = {
  graphqlTypegen: true,
  flags: {
    FAST_DEV: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PARALLEL_SOURCING: true,
  },
  siteMetadata: {
    title: "Morrison Cole",
    author: "Morrison Cole",
    description: `I'm a senior software engineer at Unity based in Tokyo, Japan. I love start-ups and previously worked for Shazam & Improbable.`,
    siteUrl: rawUrl,
    social: {
      twitter: "@morrisoncole",
    },
    image: "/morrison-cole.jpg",
    imageAlt: "Morrison Cole Logo",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              author
              image
              imageAlt
              siteUrl
              social {
                twitter
              }
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query }) => {
              return query.allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  site_url: query.site.siteMetadata.siteUrl,
                  url:
                    query.site.siteMetadata.siteUrl +
                    edge.node.frontmatter.slug,
                  guid:
                    query.site.siteMetadata.siteUrl +
                    edge.node.frontmatter.slug,
                  categories: [edge.node.frontmatter.category],
                  custom_elements: [
                    {
                      "content:encoded": `<strong><a href="${
                        query.site.siteMetadata.siteUrl +
                        edge.node.frontmatter.slug
                      }">Read directly on morrisoncole.co.uk</a>...</strong>`,
                    },
                  ],
                  enclosure: {
                    url: `${rawUrl}${edge.node.frontmatter.image.childImageSharp.gatsbyImageData.images.fallback.src}`,
                    type: "image/jpeg",
                  },
                });
              });
            },
            query: `
            {
              allMdx(
                sort: { frontmatter: { date: DESC } }
                filter: { frontmatter: { draft: { eq: false } } }
              ) {
                edges {
                  node {
                    frontmatter {
                      slug
                      draft
                      title
                      date(formatString: "MMMM DD, YYYY")
                      category
                      description
                      linkText
                      image {
                        childImageSharp {
                          gatsbyImageData(width: 800, layout: CONSTRAINED)
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
            output: "/rss.xml",
            title: "Morrison Cole's Blog",
            site_url: `${rawUrl}/`,
            image_url: `${rawUrl}/morrison-cole.jpg`,
            match: "^/blog/",
          },
        ],
      },
    },
    "gatsby-plugin-image",
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
      resolve: "@morrisoncole/gatsby-source-goodreads",
      options: {
        key: goodreadsKey,
        id: "6320986-morrison",
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
    "gatsby-plugin-mui-emotion",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.resolve(`content`),
        name: "content",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins: [require("remark-unwrap-images")],
        },
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
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              wrapperStyle: `width: 100%; grid-column: 1 / 6; margin-bottom: 16px;`,
              linkImagesToOriginal: false,
              withAvif: true,
              withWebp: true,
              srcSetBreakpoints: [600, 900, 1200],
            },
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: ["auto", "webp", "avif"],
          breakpoints: [600, 900, 1200],
        },
      },
    },
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
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: path.resolve("./src/components/layout.tsx"),
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

export default config;
