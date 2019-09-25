import React from "react"
import Grid from "@material-ui/core/Grid"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Typography from "@material-ui/core/Typography"
import { createStyles, Theme } from "@material-ui/core"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"

const styles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(8),
    },
    body: {
      marginTop: theme.spacing(2),
    },
  }),
)

interface BlogProps {
  location: Location
  data: any
}

export default function Blog(props: BlogProps) {
  const classes = styles()
  const posts = props.data.allMarkdownRemark.edges

  return (
    <Grid container className={classes.container} direction={"column"}>
      <SEO title="Blog"/>

      {posts.map(({ node }: any) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <Typography variant="h4">
                <Link to={node.fields.slug}>
                  {title}
                </Link>
              </Typography>
              <Typography variant="subtitle2">
                {node.frontmatter.date}
              </Typography>
            </header>
            <section>
              <Typography variant="subtitle1"
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Grid>
  )
}

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`