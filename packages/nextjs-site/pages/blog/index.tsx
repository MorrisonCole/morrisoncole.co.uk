import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import {
  ALL_POST_PATHS,
  POSTS_PATH,
} from "packages/nextjs-site/utils/mdx-utils";
import path from "path";
import styled from "styled-components";

interface Post {
  content: string;
  frontMatter: FrontMatter;
  filePath: string;
}

export interface FrontMatter {
  title: string;
  date: Date;
  updated?: Date;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  linkText: string;
  draft: boolean;
}

const Button = styled.a`
  display: inline-block;
  color: hsl(340, 59%, 64%);
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

export default function Index({ posts }: { posts: Post[] }) {
  return (
    <>
      {posts.map((post) => (
        <Link
          as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
          href={`/blog/[slug]`}
          passHref
          key={post.filePath}
        >
          <Button>{post.frontMatter.title}</Button>
        </Link>
      ))}
    </>
  );
}

export function getStaticProps() {
  const posts: Post[] = ALL_POST_PATHS.map((filePath) => getPost(filePath));

  return { props: { posts } };
}

function getPost(filePath: string) {
  const sourceFile = path.join(POSTS_PATH, filePath);
  const { content, data } = matter.read(sourceFile);

  return {
    content,
    frontMatter: data as FrontMatter,
    filePath,
  };
}
