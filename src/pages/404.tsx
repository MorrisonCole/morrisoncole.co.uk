import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { NotFoundPageQuery } from "../graphql-types"

interface NotFoundPageProps {
  location: Location
  data: NotFoundPageQuery
}

class NotFoundPage extends React.Component<NotFoundPageProps, {}> {
  render() {
    const { data } = this.props
    const siteTitle = data.site && data.site.siteMetadata.title || ""

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query NotFoundPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`
