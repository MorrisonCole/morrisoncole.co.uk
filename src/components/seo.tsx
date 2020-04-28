import { graphql, useStaticQuery } from "gatsby";
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
}

function SEO({
  title,
  description,
  lang = "en",
  meta,
  article = false,
  image,
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
            siteUrl
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
  const imagePath: string = image ?? site.siteMetadata.image!;

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
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: site.siteMetadata.author,
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
