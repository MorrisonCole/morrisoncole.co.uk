import { graphql, useStaticQuery } from "gatsby";
import { WindowLocation } from "@reach/router";
import React from "react";
import { SeoQuery } from "../../types/graphql-types";
import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: [];
  article?: boolean;
  image?: string;
  imageAlt?: string;
  location: WindowLocation;
}

function SEO({
  title,
  description,
  lang = "en",
  meta,
  article = false,
  image,
  imageAlt,
  location,
}: SEOProps): JSX.Element {
  const { site }: SeoQuery = useStaticQuery(
    graphql`
      query Seo {
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
    `
  );

  if (site == null) {
    return <div />;
  }

  const metaDescription = description ?? site.siteMetadata.description;
  const contentType = article ? "article" : "website";
  const imagePath: string = image ?? site.siteMetadata.image;
  const imageAltText: string = imageAlt ?? site.siteMetadata.imageAlt;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:site_name",
          content: site.siteMetadata.title,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: contentType,
        },
        {
          property: "og:image",
          content: `${site.siteMetadata.siteUrl}${imagePath}`,
        },
        {
          property: "og:image:alt",
          content: imageAltText,
        },
        {
          property: "og:url",
          content: `${site.siteMetadata.siteUrl}${location.pathname}`,
        },
        {
          property: "og:locale",
          content: lang,
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:site",
          content: site.siteMetadata.social.twitter,
        },
        {
          name: "twitter:creator",
          content: site.siteMetadata.social.twitter,
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
      ].concat(meta ?? [])}
    />
  );
}

export default SEO;
