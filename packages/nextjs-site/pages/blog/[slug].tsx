import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXComponents } from "mdx/types";
import React from "react";
import styled from "styled-components";
import fs from "fs/promises";
import path from "path";
import { Button } from "../../components/button";
import Image from "next/image";
import {
  ALL_POST_PATHS,
  POSTS_PATH,
} from "packages/nextjs-site/utils/mdx-utils";
import { GetStaticPropsContext } from "next";
import { Layout } from "packages/nextjs-site/components/layout";

const h1 = styled.h1`
  color: hsl(0, 0%, 50%);
  font-size: 3em;
`;

const p = styled.p``;

const mdxComponents = {
  Button: Button,
  Image: Image,
  h1: h1,
  p: p,
};

export default function PostPage({
  source,
}: {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}) {
  return (
    <Layout>
      <MDXRemote {...source} components={mdxComponents as MDXComponents} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const sourceFile = path.join(POSTS_PATH, `${params!.slug}.mdx`);
  const source = (await fs.readFile(sourceFile)).toString();

  const mdxSerializeResult = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    parseFrontmatter: true,
  });

  return {
    props: {
      source: mdxSerializeResult,
      frontMatter: mdxSerializeResult.frontmatter,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = ALL_POST_PATHS.map((path) =>
    path.replace(/\.mdx?$/, "")
  ).flatMap((slug) => [
    { params: { slug }, locale: "en-GB" },
    { params: { slug }, locale: "ja-JP" },
  ]);

  return {
    paths,
    fallback: false,
  };
};
