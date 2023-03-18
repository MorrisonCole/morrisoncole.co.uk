import React from "react";
import useSiteMetadata from "../hooks/use-site-metadata";

interface SEOProps {
  title?: string;
  description?: string;
  locale?: string;
  article?: boolean;
  image?: string;
  imageAlt?: string;
  pathname: string;
  children?: React.ReactNode;
}

function SEO({
  title,
  description,
  locale = "en",
  article = false,
  image,
  imageAlt,
  pathname,
  children,
}: SEOProps): JSX.Element {
  const siteMetadata: Queries.SiteSiteMetadata = useSiteMetadata();

  const formattedTitle = title
    ? `${title} | ${siteMetadata.title}`
    : siteMetadata.title;
  const metaDescription = description ?? siteMetadata.description;
  const contentType = article ? "article" : "website";
  const imagePath: string = image ?? siteMetadata.image;
  const imageAltText: string = imageAlt ?? siteMetadata.imageAlt;

  return (
    <>
      <title>{formattedTitle}</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      <meta id="description" name="description" content={metaDescription} />
      <meta
        id="image"
        name="image"
        content={`${siteMetadata.siteUrl}${imagePath}`}
      />
      <meta
        id="og:site_name"
        name="og:site_name"
        content={siteMetadata.title}
      />
      <meta id="og:title" name="og:title" content={formattedTitle} />
      <meta
        id="og:description"
        name="og:description"
        content={metaDescription}
      />
      <meta id="og:type" name="og:type" content={contentType} />
      <meta
        id="og:image"
        name="og:image"
        content={`${siteMetadata.siteUrl}${imagePath}`}
      />
      <meta id="og:image:alt" name="og:image:alt" content={imageAltText} />
      <meta id="og:locale" name="og:locale" content={locale} />
      <meta
        id="og:url"
        name="og:url"
        content={`${siteMetadata.siteUrl}${pathname}`}
      />
      <meta id="twitter:card" name="twitter:card" content={"summary"} />
      <meta
        id="twitter:site"
        name="twitter:site"
        content={siteMetadata.social.twitter}
      />
      <meta
        id="twitter:creator"
        name="twitter:creator"
        content={siteMetadata.social.twitter}
      />
      <meta id="twitter:title" name="twitter:title" content={title} />
      <meta
        id="twitter:description"
        name="twitter:description"
        content={metaDescription}
      />
      {children}
    </>
  );
}

export default SEO;
