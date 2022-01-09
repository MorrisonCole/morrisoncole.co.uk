import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React, { ReactNode } from "react";
import styled from "styled-components";
import path from "path";
import matter from "gray-matter";
import { Button } from "../../components/button";
import Image from "next/image";
import {
  ALL_POST_PATHS,
  POSTS_PATH,
} from "packages/nextjs-site/utils/mdx-utils";
import { GetStaticPropsContext } from "next";
import { FrontMatter } from ".";
import { Layout } from "packages/nextjs-site/components/layout";

const h1 = styled.h1`
  color: grey;
  font-size: 3em;
`;

const p = styled.p``;

const mdxComponents: Record<string, ReactNode> = {
  Button,
  Image,
  h1,
  p,
};

export default function PostPage({
  source,
}: {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}) {
  return (
    <Layout>
      <MDXRemote {...source} components={mdxComponents} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const sourceFile = path.join(POSTS_PATH, `${params!.slug}.mdx`);
  const { content, data } = matter.read(sourceFile);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data as FrontMatter,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = ALL_POST_PATHS.map((path) => path.replace(/\.mdx?$/, "")).map(
    (slug) => ({ params: { slug } })
  );

  return {
    paths,
    fallback: false,
  };
};
