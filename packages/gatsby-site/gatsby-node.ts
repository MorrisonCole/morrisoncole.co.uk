import type { GatsbyNode } from "gatsby";

const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter
}) => {
  const blogPostTemplate = path.resolve("src/templates/blog-post-template.tsx");
  const result = await graphql<Queries.BlogPagesQuery>(
    `
      query BlogPages {
        allMdx(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { draft: { eq: false } } }
        ) {
          nodes {
            id
            frontmatter {
              title
              slug
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors);
  }

  const nodes = result.data?.allMdx.nodes;

  nodes?.forEach((node, index) => {
    const previous = index === nodes.length - 1 ? null : nodes[index + 1].node;
    const next = index === 0 ? null : nodes[index - 1].node;

    actions.createPage({
      path: `blog/${node.frontmatter.slug}`,
      component: `${blogPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        previous,
        next,
      },
    });
  });
};

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    const { createTypes, printTypeDefinitions } = actions;

    createTypes(`
    type Site implements Node {
      siteMetadata: SiteSiteMetadata!
    }
    
    type SiteSiteMetadata {
      title: String!
      description: String!
      author: String!
      siteUrl: String!
      image: String!
      imageAlt: String!
      social: SiteSiteMetadataSocial!
    }

    type SiteSiteMetadataSocial {
      twitter: String!
    }

    type SoftwareJson implements Node {
      _2019: [String!]!
      _2020: [String!]!
    }

    type MdxFrontmatter @dontInfer {
      title: String!
      date: Date! @dateformat
      updated: Date @dateformat
      description: String!
      category: String
      image: File! @fileByRelativePath
      imageAlt: String!
      linkText: String
      draft: Boolean!
      slug: String!
    }
  `);

    // printTypeDefinitions({ path: "./typeDefs.txt" });
  };
