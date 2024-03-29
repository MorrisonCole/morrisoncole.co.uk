import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { graphql, HeadProps, Link, PageProps } from "gatsby";
import React from "react";
import SEO from "../components/seo";
import ComposableGatsbyImage from "../components/composable/composable-gatsby-image";
import { IGatsbyImageData } from "gatsby-plugin-image";

export const Head = ({ location }: HeadProps) => {
  return (
    <SEO title="Blog" pathname={location.pathname}>
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Morrison Cole's Blog"
        href="/rss.xml"
      />
    </SEO>
  );
};

export default function Blog({ data }: PageProps<Queries.BlogIndexQuery>): JSX.Element {
  const posts = data.allMdx.edges;

  return (
    <Box
      sx={(theme) => ({
        display: "grid",
        gridAutoRows: "repeat(auto-fill, minmax(auto, 1fr))",
        [theme.breakpoints.up("sm")]: {
          gridTemplateColumns: "repeat(2, 1fr)",
        },
        gridGap: theme.spacing(4),
      })}
    >
      {posts.map(({ node }) => {
        const title = node.frontmatter?.title ?? node.frontmatter?.slug;
        const date = node.frontmatter?.date ?? "";
        const description = node.frontmatter?.description ?? node.excerpt ?? "";
        const link = node.frontmatter?.slug ?? "";
        const linkText = node.frontmatter?.linkText ?? "Continue to post...";
        const image = node.frontmatter?.image?.childImageSharp
          ?.gatsbyImageData as IGatsbyImageData;

        return (
          <CardActionArea key={title} component={Link} to={link}>
            <Card
              sx={(theme) => ({
                display: "flex",
                [theme.breakpoints.up("md")]: {
                  height: "20rem",
                },
              })}
            >
              <Box
                sx={{
                  flex: 1,
                }}
              >
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
              </Box>
              {image && (
                <CardMedia
                  component={ComposableGatsbyImage}
                  imageSrc={image}
                  title={title}
                  src="" // TODO: avoid passing
                  sx={{
                    flex: 0.66,
                  }}
                />
              )}
            </Card>
          </CardActionArea>
        );
      })}
    </Box>
  );
}

export const pageQuery = graphql`
  query BlogIndex {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            slug
            draft
            title
            date(formatString: "MMMM DD, YYYY")
            description
            category
            linkText
            image {
              childImageSharp {
                gatsbyImageData(width: 800, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`;
