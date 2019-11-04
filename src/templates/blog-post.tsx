import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import Star from "@material-ui/icons/Star"
import ListItemText from "@material-ui/core/ListItemText"
import { createStyles, Theme, Typography, WithStyles, withStyles } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import { BlogPostBySlugQuery, SitePageContext } from "../graphql-types"

const styles = ({ spacing }: Theme) => createStyles({
    container: {
      marginTop: spacing(8),
    }
  }
)

interface BlogPostTemplateProps extends WithStyles<typeof styles> {
  location: Location
  data: BlogPostBySlugQuery
  pageContext: SitePageContext
}

class BlogPostTemplate extends React.Component<BlogPostTemplateProps, {}> {
  render() {
    const {classes, location, data, pageContext} = this.props

    const post = data.markdownRemark
    const { previous, next } = pageContext

    console.log("found " + data.allBooksJson.edges.length)
    const listItems = data.allBooksJson.edges[0].node.book.map((book) =>
      <ListItem button component="a" href={book.link} target={"_blank"}>
        <ListItemIcon>
          <Star/>
        </ListItemIcon>
        <ListItemText
          primary={book.title}
          secondary={book.authors.author.name}
        />
      </ListItem>,
    )

    return (
      <Grid container className={classes.container} direction={"column"}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <Typography variant="h4">
              {post.frontmatter.title}
            </Typography>
            <Typography variant="subtitle2">
              {post.frontmatter.date}
            </Typography>
            <Typography variant="caption">
              {`(Last updated: ${post.frontmatter.updated})`}
            </Typography>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <List dense>
            {listItems}
          </List>
          <hr/>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Grid>
    )
  }
}

export default withStyles(styles)(BlogPostTemplate)

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        updated(formatString: "MMMM DD, YYYY")
        description
      }
    }
    allBooksJson {
      edges {
        node {
          book {
            title
            authors {
              author {
                name
              }
            }
            link
          }
        }
      }
    }
  }
`
