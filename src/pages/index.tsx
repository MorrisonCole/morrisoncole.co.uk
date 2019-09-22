import React from "react"
import { graphql, Link } from "gatsby"

import Bio from "../components/bio"
import BlogLayout from "../components/blog-layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

interface TimelineIndexProps {
  location: Location
  data: any
}

class TimelineIndex extends React.Component<TimelineIndexProps, {}> {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Timeline" />
        <Bio />

      </Layout>
    )
  }
}

export default TimelineIndex

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
