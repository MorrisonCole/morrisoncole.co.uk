import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Link as GatsbyLink } from "gatsby";

interface SimpleBreadcrumbsProps {
  location: string;
}

export default function SimpleBreadcrumbs({
  location,
}: SimpleBreadcrumbsProps): JSX.Element {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" component={GatsbyLink} to="/blog/">
        Blog
      </Link>
      <Typography color="textPrimary">{location}</Typography>
    </Breadcrumbs>
  );
}
