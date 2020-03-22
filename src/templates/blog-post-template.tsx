import { createStyles, Theme, Typography, WithStyles, withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { graphql, Link } from 'gatsby'
import React from 'react'
import SEO from '../components/seo'
import { BlogPostBySlugQuery, SitePageContext } from '../../types/graphql-types'
import { StyleRules } from '@material-ui/core/styles/withStyles'
import { MDXRenderer } from "gatsby-plugin-mdx"

const styles = ({ spacing }: Theme): StyleRules => createStyles({
  container: {
    marginTop: spacing(8)
  }
})

interface BlogPostTemplateProps extends WithStyles<typeof styles> {
  location: Location;
  data: BlogPostBySlugQuery;
  pageContext: SitePageContext;
}

class BlogPostTemplate extends React.Component<BlogPostTemplateProps, {}> {
  public render (): JSX.Element {
    const {
      classes, data, pageContext
    } = this.props

    const post = data.mdx
    const { previous, next } = pageContext

    return (
      <Grid container className={classes.container} direction="column">
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description ?? post.excerpt}
        />
        <article>
          <header>
            <Typography variant="h4">{post.frontmatter.title}</Typography>
            <Typography variant="subtitle2">{post.frontmatter.date}</Typography>
            <Typography variant="caption">
              {`(Last updated: ${post.frontmatter.updated ?? "never"})`}
            </Typography>
          </header>
          <section>
            <MDXRenderer data={data}>{post.body}</MDXRenderer>
          </section>
          <hr />
        </article>

        <nav>
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ←
                  {' '}
                  {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title}
                  {' '}
                  →
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
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        updated(formatString: "MMMM DD, YYYY")
        description
      }
    }
    books2019: allGoodreadsShelf(filter: {name: {eq: "2019"}}) {
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
    books2020: allGoodreadsShelf(filter: {name: {eq: "2020"}}) {
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
`
