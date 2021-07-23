import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { ReactNode } from "react";
import styled from "styled-components";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Button from "../../components/button";
import Image from "next/image";
import {
  ALL_POST_PATHS,
  POSTS_PATH,
} from "packages/nextjs-site/utils/mdx-utils";
import { GetStaticPropsContext } from "next";

const H1 = styled.h1`
  color: grey;
  font-size: 3em;
`;

const mdxComponents: Record<string, ReactNode> = {
  Button,
  Image,
  h1: H1,
};

export default function PostPage({
  source,
}: {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}) {
  return (
    <div className="wrapper">
      <MDXRemote {...source} components={mdxComponents} />
    </div>
  );
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const postFilePath = path.join(POSTS_PATH, `${params!.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

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
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = ALL_POST_PATHS
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
