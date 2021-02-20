import path from "path";
import { createFilePath } from "gatsby-source-filesystem";
import {
  CreateNodeArgs,
  CreatePagesArgs,
  CreateSchemaCustomizationArgs,
} from "gatsby";
import { BlogPagesQuery } from "../../types/graphql-types";

export async function createPages({
  graphql,
  actions,
}: CreatePagesArgs): Promise<void> {
  const blogPostTemplate = path.resolve("src/templates/blog-post-template.tsx");
  const result: {
    errors?: unknown;
    data?: BlogPagesQuery;
  } = await graphql<BlogPagesQuery, unknown>(
    `
      query BlogPages {
        allMdx(
          sort: { fields: [exports___meta___date], order: DESC }
          filter: { exports: { meta: { draft: { eq: false } } } }
          limit: 1000
        ) {
          edges {
            node {
              exports {
                meta {
                  title
                }
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
}

export function onCreateNode({ node, actions, getNode }: CreateNodeArgs): void {
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    actions.createNodeField({
      name: "slug",
      node,
      value: `${value}`,
    });
  }
}

export function createSchemaCustomization({
  actions,
}: CreateSchemaCustomizationArgs): void {
  const typeDefs = `
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
  `;
  actions.createTypes(typeDefs);
}
