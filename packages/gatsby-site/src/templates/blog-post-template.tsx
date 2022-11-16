import { Typography, Divider, Link, Box } from "@mui/material";
import { graphql, HeadProps, Link as GatsbyLink } from "gatsby";
import React from "react";
import SEO from "../components/seo";
import SimpleBreadcrumbs from "../components/navigation/breadcrumb";
import { MDXProvider } from "@mdx-js/react";
import readingTime from "reading-time";
import { getSrc } from "gatsby-plugin-image";
import { PageProps } from "gatsby";

export const Head = ({
  data: { mdx },
  location,
}: HeadProps<Queries.BlogPostByIdQuery>) => {
  console.error(JSON.stringify(mdx));

  return (
    <SEO
      pathname={location.pathname}
      title={mdx.frontmatter?.title}
      description={mdx.frontmatter?.description ?? mdx?.excerpt}
      image={getSrc(mdx.frontmatter?.image?.childImageSharp?.gatsbyImageData)}
      imageAlt={mdx?.frontmatter?.imageAlt}
      article
    />
  );
};

interface BlogPageContext {
  previous: any;
  next: any;
}

export default function BlogPostTemplate({
  data: { mdx },
  pageContext,
  children,
}: PageProps<Queries.BlogPostByIdQuery, BlogPageContext>): JSX.Element {
  const { previous, next } = pageContext;
  console.error(JSON.stringify(mdx));

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
        <SimpleBreadcrumbs location={mdx?.frontmatter?.category ?? "Unknown"} />
      </Box>

      <article>
        <header>
          <Typography variant="h1" gutterBottom>
            {mdx.frontmatter.title}
          </Typography>
          <Typography variant="subtitle2">{mdx.frontmatter.date}</Typography>
          <Typography variant="subtitle2">
            {`${readingTime(mdx.body).minutes} min read`}
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
            <MDXProvider>{children}</MDXProvider>
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
                to={previous.frontmatter.slug ?? "/blog"}
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
                to={next.frontmatter.slug ?? "/blog"}
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

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    mdx(id: { eq: $id }) {
      body
      excerpt(pruneLength: 160)
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
