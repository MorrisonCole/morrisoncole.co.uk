import { graphql, useStaticQuery } from "gatsby";
import { Site, SiteSiteMetadata } from "../../types/graphql-types";

export default function useSiteMetadata(): SiteSiteMetadata {
  const { site }: { site: Site } = useStaticQuery(graphql`
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
