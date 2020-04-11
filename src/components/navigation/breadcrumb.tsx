import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { Link as GatsbyLink } from "gatsby";

interface SimpleBreadcrumbsProps {
  location: string;
}

export default function SimpleBreadcrumbs(
  props: SimpleBreadcrumbsProps
): JSX.Element {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" component={GatsbyLink} to="/blog">
        Blog
      </Link>
      <Typography color="textPrimary">{props.location}</Typography>
    </Breadcrumbs>
  );
}
