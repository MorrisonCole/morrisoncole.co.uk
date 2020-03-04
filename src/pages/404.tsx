import { graphql } from 'gatsby'
import React from 'react'
import SEO from '../components/seo'
import { NotFoundPageQuery } from '../../types/graphql-types'

interface NotFoundPageProps {
  location: Location;
  data: NotFoundPageQuery;
}

class NotFoundPage extends React.Component<NotFoundPageProps, {}> {
  public render () {
    const { data } = this.props
    const siteTitle = (data.site && data.site.siteMetadata.title) || ''

    return (
      <div>
        <SEO title="404: Not Found"/>
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
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
