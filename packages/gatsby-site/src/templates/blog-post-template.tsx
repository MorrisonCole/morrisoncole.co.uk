import { Typography, Divider, Link, Box } from "@mui/material";
import { graphql, HeadProps, Link as GatsbyLink } from "gatsby";
import React from "react";
import SEO from "../components/seo";
import SimpleBreadcrumbs from "../components/navigation/breadcrumb";
import { getSrc } from "gatsby-plugin-image";
import { PageProps } from "gatsby";
import MDXLayout from "../components/blog/mdx-layout";

export const Head = ({
  data: { mdx },
  location,
}: HeadProps<Queries.BlogPostByIdQuery>) => {
  return (
    <SEO
      pathname={location.pathname}
      title={mdx?.frontmatter.title}
      description={mdx.frontmatter.description}
      image={getSrc(mdx.frontmatter.image.childImageSharp?.gatsbyImageData)}
      imageAlt={mdx?.frontmatter?.imageAlt}
      article
    />
  );
};

export default function BlogPostTemplate({
  data: { mdx, previous, next },
  children,
}: PageProps<Queries.BlogPostByIdQuery>): JSX.Element {
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
            {`${mdx.timeToRead} min read`}
          </Typography>
        </header>
        <section>
          <Box
            sx={{
              marginTop: ({ spacing }) => spacing(2),
              display: "grid",
              gridTemplateColumns: "3fr 1fr min(85ch, 100%) 1fr 3fr",
              "& *": {
                gridColumn: "3 / 4",
              },
            }}
          >
            <MDXLayout>{children}</MDXLayout>
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
                to={`/blog/${previous.frontmatter.slug}`}
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
                to={`/blog/${next.frontmatter.slug}`}
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
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    mdx(id: { eq: $id }) {
      timeToRead
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
    previous: mdx(id: { eq: $previousPostId }) {
      frontmatter {
        slug
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      frontmatter {
        slug
        title
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
