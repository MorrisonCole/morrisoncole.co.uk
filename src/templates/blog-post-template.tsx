import {
  createStyles,
  Theme,
  Typography,
  WithStyles,
  withStyles,
  Divider,
  Link,
} from "@material-ui/core";
import { graphql, Link as GatsbyLink } from "gatsby";
import React from "react";
import SEO from "../components/seo";
import {
  BlogPostBySlugQuery,
  SitePageContext,
} from "../../types/graphql-types";
import { StyleRules } from "@material-ui/core/styles/withStyles";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SimpleBreadcrumbs from "../components/navigation/breadcrumb";
import MDXLayout from "../components/blog/mdx-layout";
import { WindowLocation } from "@reach/router";
import readingTime from "reading-time";

const styles = ({ spacing }: Theme): StyleRules =>
  createStyles({
    blogPostContainer: {
      marginTop: spacing(6),
    },
    blogContent: {
      display: "grid",
      gridTemplateColumns: "3fr 1fr min(85ch, 100%) 1fr 3fr",
      "& *": {
        gridColumn: "3 / 4",
      },
    },
    breadcrumbContainer: {
      paddingBottom: spacing(2),
    },
  });

interface BlogPostTemplateProps extends WithStyles<typeof styles> {
  location: WindowLocation;
  data: BlogPostBySlugQuery;
  pageContext: SitePageContext;
}

function BlogPostTemplate({
  classes,
  location,
  data,
  pageContext,
}: BlogPostTemplateProps): JSX.Element {
  const post = data.mdx;
  const { previous, next } = pageContext;

  return (
    <div className={classes.blogPostContainer}>
      <SEO
        location={location}
        title={post.exports?.meta.title}
        description={post.exports?.meta.description ?? post.excerpt}
        image={post?.exports?.meta?.image?.childImageSharp?.fluid.src}
        imageAlt={post?.exports?.meta?.imageAlt}
        article
      />

      <div className={classes.breadcrumbContainer}>
        <SimpleBreadcrumbs
          location={post?.exports?.meta?.category ?? "Unknown"}
        />
      </div>

      <article>
        <header>
          <Typography variant="h1" gutterBottom>
            {post.exports?.meta.title}
          </Typography>
          <Typography variant="subtitle2">{post.exports?.meta.date}</Typography>
          <Typography variant="subtitle2">
            {readingTime(post.body).text}
          </Typography>
        </header>
        <section className={classes.blogContent}>
          <MDXLayout>
            <MDXRenderer data={data}>{post.body}</MDXRenderer>
          </MDXLayout>
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
                ← {previous.exports?.meta.title}
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
                {next.exports?.meta.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default withStyles(styles)(BlogPostTemplate);

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      exports {
        meta {
          title
          date(formatString: "MMMM DD, YYYY")
          updated(formatString: "MMMM DD, YYYY")
          description
          category
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imageAlt
        }
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
  }
`;
