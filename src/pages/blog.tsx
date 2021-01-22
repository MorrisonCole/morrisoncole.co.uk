import {
  createStyles,
  Theme,
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import { graphql, Link, PageProps } from "gatsby";
import React from "react";
import SEO from "../components/seo";
import { BlogIndexQuery } from "../../types/graphql-types";
import { GatsbyImage } from "gatsby-plugin-image";

const styles = makeStyles((theme: Theme) =>
  createStyles({
    postGrid: {
      display: "grid",
      gridAutoRows: "repeat(auto-fill, minmax(auto, 1fr))",
      [theme.breakpoints.up("sm")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
      },
      gridGap: theme.spacing(4),
    },
    body: {
      marginTop: theme.spacing(2),
    },
    card: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        height: 220,
      },
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      flex: 0.66,
    },
  })
);

interface BlogProps {
  data: BlogIndexQuery;
}

export default function Blog({
  data,
  location,
}: BlogProps & PageProps): JSX.Element {
  const classes = styles();
  const posts = data.allMdx.edges;

  return (
    <div className={classes.postGrid}>
      <SEO title="Blog" location={location} />

      {posts.map(({ node }) => {
        const title = node.exports?.meta?.title ?? node.fields?.slug;
        const date = node.exports?.meta?.date ?? "";
        const description =
          node.exports?.meta?.description ?? node.excerpt ?? "";
        const link = node.fields?.slug ?? "";
        const linkText = node.exports?.meta?.linkText ?? "Continue to post...";
        const image =
          node.exports?.meta?.image?.childImageSharp?.gatsbyImageData;

        return (
          <CardActionArea key={title} component={Link} to={link}>
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {date}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {description}
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    {linkText}
                  </Typography>
                </CardContent>
              </div>
              {image && (
                <CardMedia
                  className={classes.cardMedia}
                  component={GatsbyImage}
                  fluid={image}
                  alt={title}
                />
              )}
            </Card>
          </CardActionArea>
        );
      })}
    </div>
  );
}

export const pageQuery = graphql`
  query BlogIndex {
    allMdx(
      sort: { fields: [exports___meta___date], order: DESC }
      filter: { exports: { meta: { draft: { eq: false } } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          exports {
            meta {
              draft
              title
              date(formatString: "MMMM DD, YYYY")
              description
              linkText
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 800
                    layout: CONSTRAINED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`;
