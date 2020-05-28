import React, { ReactNode } from "react";
import { Link as GatsbyLink } from "gatsby";

interface LinkProps {
  href: string;
  children: ReactNode;
  activeClassName?: string;
  partiallyActive?: boolean;
}

const Link = ({
  href,
  children,
  activeClassName,
  partiallyActive,
  ...other
}: LinkProps): JSX.Element => {
  // Assume any link beginning with exactly one '/' is internal.
  const internalLink = /^[/]{1}/.test(href);

  const anchorLink = /^[#]{1}/.test(href);

  if (internalLink) {
    return (
      <GatsbyLink
        to={href}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }

  const externalLinkAttributes = anchorLink
    ? {}
    : {
        target: "_blank",
        rel: "noopener",
      };
  return (
    <a href={href} {...externalLinkAttributes} {...other}>
      {children}
    </a>
  );
};

export default Link;
