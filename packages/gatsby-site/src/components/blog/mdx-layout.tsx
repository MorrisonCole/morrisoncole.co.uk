import { MDXProvider } from "@mdx-js/react";
import React from "react";
import { Typography, Divider, Paper, Box } from "@mui/material";
import CustomLink from "./link";
import { Code } from "./code";
import "./mdx-layout.css";
import { SpotifyAlbum } from "./spotify-album";
import { SpotifyTrack } from "./spotify-track";

const components = {
  SpotifyAlbum,
  SpotifyTrack,
  h1: (props): JSX.Element => (
    <Typography {...props} component="h1" variant="h1" gutterBottom={true} />
  ),
  h2: (props): JSX.Element => (
    <Typography {...props} component="h2" variant="h2" gutterBottom={true} />
  ),
  h3: (props): JSX.Element => (
    <Typography {...props} component="h3" variant="h3" gutterBottom={true} />
  ),
  h4: (props): JSX.Element => (
    <Typography {...props} component="h4" variant="h4" gutterBottom={true} />
  ),
  h5: (props): JSX.Element => (
    <Typography {...props} component="h5" variant="h5" gutterBottom={true} />
  ),
  h6: (props): JSX.Element => (
    <Typography {...props} component="h6" variant="h6" gutterBottom={true} />
  ),
  p: (props): JSX.Element => <Typography {...props} paragraph={true} />,
  ul: ({ ...props }) => (
    <Typography
      {...props}
      component="ul"
      sx={{
        marginBottom: ({ spacing }) => spacing(2),
      }}
    />
  ),
  ol: ({ ...props }) => (
    <Typography
      {...props}
      component="ol"
      sx={{
        marginBottom: ({ spacing }) => spacing(2),
      }}
    />
  ),
  hr: ({ ...props }) => (
    <Divider
      {...props}
      variant="middle"
      sx={{
        marginTop: ({ spacing }) => spacing(2),
        marginBottom: ({ spacing }) => spacing(2),
      }}
    />
  ),
  blockquote: ({ ...props }) => (
    <Box
      sx={{
        padding: ({ spacing }) => spacing(3),
        gridColumn: "3 / 4",
      }}
    >
      <Paper
        {...props}
        elevation={3}
        sx={{
          padding: ({ spacing }) => spacing(3),
        }}
      />
    </Box>
  ),
  a: (props): JSX.Element => <CustomLink {...props}></CustomLink>,
  pre: (props) => {
    const childProps = props.children.props;
    if (childProps.className) {
      return <Code className={childProps.className}>{childProps.children}</Code>;
    }
    return <pre {...props} />;
  },
};

export default function MDXLayout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
