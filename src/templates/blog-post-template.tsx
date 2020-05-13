import {
  createStyles,
  Theme,
  Typography,
  WithStyles,
  withStyles,
  Divider,
  Link,
  Container,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
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

const styles = ({ spacing }: Theme): StyleRules =>
  createStyles({
    container: {
      marginTop: spacing(6),
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
    <Container className={classes.container} maxWidth="md" direction="column">
      <SEO
        location={location}
        title={post.exports?.meta.title}
        description={post.exports?.meta.description ?? post.excerpt}
        image={post?.exports?.meta?.image?.childImageSharp?.fluid.src}
        imageAlt={post?.exports?.meta?.imageAlt}
        article
      />

      <Grid item className={classes.breadcrumbContainer}>
        <SimpleBreadcrumbs
          location={post?.exports?.meta?.category ?? "Unknown"}
        />
      </Grid>

      <article>
        <header>
          <Typography variant="h4">{post.exports?.meta.title}</Typography>
          <Typography variant="subtitle2">{post.exports?.meta.date}</Typography>
        </header>
        <section>
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
    </Container>
  );
}

export default withStyles(styles)(BlogPostTemplate);

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
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
