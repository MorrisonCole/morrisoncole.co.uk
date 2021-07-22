import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Button from "../components/button";
import { ReactNode } from "react";
import styled from "styled-components";

const H1 = styled.h1`
  color: grey;
  font-size: 3em;
`;

const mdxComponents: Record<string, ReactNode> = {
  Button,
  h1: H1
};

export default function TestPage({
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

export async function getStaticProps() {
  const sourceMdx = `
import Button from "../components/button";

# MDX Test

It's a button!

<Button>Hello, world 👋</Button>
  `;

  const serializedSource = await serialize(sourceMdx);
  return { props: { source: serializedSource } };
}
