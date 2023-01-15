import type { GatsbyNode } from "gatsby";
import path from "path";
import readingTime from "reading-time";

export const onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body),
    });
  }
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
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
            body
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

  const posts = result.data?.allMdx.nodes;

  posts?.forEach((post, index) => {
    const previousPostId = index === 0 ? null : posts[index - 1].id;
    const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id;

    actions.createPage({
      path: `blog/${post.frontmatter.slug}`,
      component: `${blogPostTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
      context: {
        id: post.id,
        previousPostId,
        nextPostId,
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

      type Mdx implements Node {
        timeToRead: Float @proxy(from: "fields.timeToRead.minutes")
      }
  `);

    // printTypeDefinitions({ path: "./typeDefs.txt" });
  };
