import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

export default function ComposableGatsbyImage({
  src,
  imageSrc,
  title,
  ...props
}: {
  src: string;
  imageSrc: IGatsbyImageData;
  title: string;
}): JSX.Element {
  return <GatsbyImage image={imageSrc} alt={title} title={title} {...props} />;
}
