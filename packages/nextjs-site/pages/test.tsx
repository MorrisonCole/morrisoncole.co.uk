import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import Button from "../components/button";

const components = { Button };

export default function TestPage({
  source,
}: {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}) {
  return (
    <div className="wrapper">
      <MDXRemote {...source} components={components} />
    </div>
  );
}

export async function getStaticProps() {
  const source = `
import Button from "../components/button";

# MDX Test

It's a button!

<Button>Hello, world 👋</Button>
  `;
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
}
