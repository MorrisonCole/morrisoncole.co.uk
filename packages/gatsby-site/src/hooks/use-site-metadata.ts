import { graphql, useStaticQuery } from "gatsby";

export default function useSiteMetadata(): Queries.SiteSiteMetadata {
  const { site }: { site: Queries.Site } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
          author
          image
          imageAlt
          siteUrl
          social {
            twitter
          }
        }
      }
    }
  `);
  return site.siteMetadata;
}
