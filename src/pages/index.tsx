import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"

interface TimelineIndexProps {
  location: Location
  data: any
}

class TimelineIndex extends React.Component<TimelineIndexProps, {}> {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
        <SEO title="Timeline" />
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
