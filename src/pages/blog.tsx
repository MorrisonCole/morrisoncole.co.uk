import {
  createStyles,
  Theme,
  CardActionArea,
  Card,
  CardContent,
  Hidden,
  CardMedia,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import { graphql, Link, PageProps } from "gatsby";
import React from "react";
import SEO from "../components/seo";
import { BlogIndexQuery } from "../../types/graphql-types";
import Image from "gatsby-image";

const styles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(4),
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
    <Grid container className={classes.container} spacing={4}>
      <SEO title="Blog" location={location} />

      {posts.map(({ node }) => {
        const title = node.exports?.meta?.title ?? node.fields?.slug;
        const date = node.exports?.meta?.date ?? "";
        const description =
          node.exports?.meta?.description ?? node.excerpt ?? "";
        const link = node.fields?.slug ?? "";
        const linkText = node.exports?.meta?.linkText ?? "Continue to post...";
        const image = node.exports?.meta?.image?.childImageSharp?.fluid;

        return (
          <Grid key={title} item xs={12} md={6}>
            <CardActionArea component={Link} to={link}>
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
                    component={Image}
                    fluid={image}
                    alt={title}
                  />
                )}
              </Card>
            </CardActionArea>
          </Grid>
        );
      })}
    </Grid>
  );
}

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [exports___meta___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          exports {
            meta {
              title
              date(formatString: "MMMM DD, YYYY")
              description
              linkText
              image {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
