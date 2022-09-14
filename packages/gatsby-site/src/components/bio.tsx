import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import useSiteMetadata from "../hooks/use-site-metadata";

const Bio = (): JSX.Element => {
  const data: Queries.BioQuery = useStaticQuery(graphql`
    query Bio {
      avatar: file(absolutePath: { regex: "/morrison-cole-profile.jpg/" }) {
        childImageSharp {
          gatsbyImageData(width: 50, height: 50, layout: FIXED)
        }
      }
    }
  `);

  const { author, social }: Queries.SiteSiteMetadata = useSiteMetadata();

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <GatsbyImage
        image={getImage(data.avatar)}
        alt={author}
        style={{
          marginBottom: 0,
          minWidth: 50,
          borderRadius: "100%",
        }}
        imgStyle={{
          borderRadius: "50%",
        }}
      />
      <p>
        Written by <strong>{author}</strong> who lives and works in Kobe, Japan
        building things and writing music.{" "}
        <a href={`https://twitter.com/${social.twitter}`}>
          You should follow him on Twitter
        </a>
      </p>
    </div>
  );
};

export default Bio;
