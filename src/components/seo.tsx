import { WindowLocation } from "@reach/router";
import React from "react";
import { SiteSiteMetadata } from "../../types/graphql-types";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../hooks/use-site-metadata";

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
  const siteMetadata: SiteSiteMetadata = useSiteMetadata();

  const metaDescription = description ?? siteMetadata.description;
  const contentType = article ? "article" : "website";
  const imagePath: string = image ?? siteMetadata.image;
  const imageAltText: string = imageAlt ?? siteMetadata.imageAlt;

  return (
    <Helmet
      defer={false}
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
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
          content: siteMetadata.title,
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
          content: `${siteMetadata.siteUrl}${imagePath}`,
        },
        {
          name: "og:image:alt",
          content: imageAltText,
        },
        {
          name: "og:url",
          content: `${siteMetadata.siteUrl}${location.pathname}`,
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
          content: siteMetadata.social.twitter,
        },
        {
          name: "twitter:creator",
          content: siteMetadata.social.twitter,
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
