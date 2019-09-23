import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import SEO from "../components/seo"
import Layout from "../components/layout"

interface TimelineIndexProps {
  location: Location
  data: any
}

class TimelineIndex extends React.Component<TimelineIndexProps, {}> {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location}>
        <SEO title="Timeline" />
        <Bio />

      </Layout>
    )
  }
}

export default TimelineIndex

export const pageQuery = graphql`
  query TimelineIndex {
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
