import type { GatsbyNode } from "gatsby";

const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const blogPostTemplate = path.resolve("src/templates/blog-post-template.tsx");
  const result = await graphql(
    `
      query BlogPages {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { draft: { eq: false } } }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allMdx.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    actions.createPage({
      path: post.node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  actions,
  getNode,
}) => {
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    actions.createNodeField({
      name: "slug",
      node,
      value: `${value}`,
    });
  }
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
    }
  `);

    // printTypeDefinitions({ path: "./typeDefs.txt" });
  };
