import { Typography, Divider, Link, Box } from "@mui/material";
import { graphql, HeadProps, Link as GatsbyLink } from "gatsby";
import React from "react";
import SEO from "../components/seo";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SimpleBreadcrumbs from "../components/navigation/breadcrumb";
import MDXLayout from "../components/blog/mdx-layout";
import readingTime from "reading-time";
import { getSrc } from "gatsby-plugin-image";
import { PageProps } from "gatsby";

export const Head = ({
  data,
  location,
}: HeadProps<Queries.BlogPostBySlugQuery>) => {
  const post = data.mdx;

  return (
    <SEO
      pathname={location.pathname}
      title={post.frontmatter.title}
      description={post.frontmatter.description ?? post.excerpt}
      image={getSrc(post?.frontmatter?.image?.childImageSharp?.gatsbyImageData)}
      imageAlt={post?.frontmatter?.imageAlt}
      article
    />
  );
};

interface BlogPageContext {
  previous: any;
  next: any;
}

function BlogPostTemplate({
  data,
  pageContext,
}: PageProps<Queries.BlogPostBySlugQuery, BlogPageContext>): JSX.Element {
  const post = data.mdx;
  const { previous, next } = pageContext;

  return (
    <Box
      sx={{
        marginTop: ({ spacing }) => spacing(6),
      }}
    >
      <Box
        sx={{
          paddingBottom: ({ spacing }) => spacing(2),
        }}
      >
        <SimpleBreadcrumbs
          location={post?.frontmatter?.category ?? "Unknown"}
        />
      </Box>

      <article>
        <header>
          <Typography variant="h1" gutterBottom>
            {post.frontmatter.title}
          </Typography>
          <Typography variant="subtitle2">{post.frontmatter.date}</Typography>
          <Typography variant="subtitle2">
            {`${readingTime(post.body).minutes} min read`}
          </Typography>
        </header>
        <section>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "3fr 1fr min(85ch, 100%) 1fr 3fr",
              "& *": {
                gridColumn: "3 / 4",
              },
            }}
          >
            <MDXLayout>
              <MDXRenderer data={data}>{post.body}</MDXRenderer>
            </MDXLayout>
          </Box>
        </section>
        <Divider />
      </article>

      <nav>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            listStyle: "none",
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link
                component={GatsbyLink}
                to={previous.fields.slug ?? "/blog"}
                rel="prev"
              >
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link
                component={GatsbyLink}
                to={next.fields.slug ?? "/blog"}
                rel="next"
              >
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Box>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        updated(formatString: "MMMM DD, YYYY")
        description
        category
        image {
          childImageSharp {
            gatsbyImageData(width: 800, layout: CONSTRAINED)
          }
        }
        imageAlt
      }
    }
    books2019: allGoodreadsShelf(filter: { name: { eq: "2019" } }) {
      edges {
        node {
          name
          reviews {
            rating
            book {
              title
              authors {
                name
              }
              link
              image_url
            }
          }
        }
      }
    }
    books2020: allGoodreadsShelf(filter: { name: { eq: "2020" } }) {
      edges {
        node {
          name
          reviews {
            rating
            book {
              title
              authors {
                name
              }
              link
              image_url
            }
          }
        }
      }
    }
    books2021: allGoodreadsShelf(filter: { name: { eq: "2021" } }) {
      edges {
        node {
          name
          reviews {
            rating
            book {
              title
              authors {
                name
              }
              link
              image_url
            }
          }
        }
      }
    }
    books2022: allGoodreadsShelf(filter: { name: { eq: "2022" } }) {
      edges {
        node {
          name
          reviews {
            rating
            book {
              title
              authors {
                name
              }
              link
              image_url
            }
          }
        }
      }
    }
  }
`;
