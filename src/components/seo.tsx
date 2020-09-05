import { graphql, useStaticQuery } from "gatsby";
import { WindowLocation } from "@reach/router";
import React from "react";
import { SeoQuery } from "../../types/graphql-types";
import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description?: string;
  lang?: string;
  article?: boolean;
  image?: string;
  imageAlt?: string;
  location: WindowLocation;
}

function SEO({
  title,
  description,
  lang = "en",
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
          name: "title",
          content: title,
        },
        {
          name: "description",
          content: metaDescription,
        },
        {
          name: "og:site_name",
          content: site.siteMetadata.title,
        },
        {
          name: "og:title",
          content: title,
        },
        {
          name: "og:description",
          content: metaDescription,
        },
        {
          name: "og:type",
          content: contentType,
        },
        {
          name: "og:image",
          content: `${site.siteMetadata.siteUrl}${imagePath}`,
        },
        {
          name: "og:image:alt",
          content: imageAltText,
        },
        {
          name: "og:url",
          content: `${site.siteMetadata.siteUrl}${location.pathname}`,
        },
        {
          name: "og:locale",
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
      ]}
    />
  );
}

export default SEO;
