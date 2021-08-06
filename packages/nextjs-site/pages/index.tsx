import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const Content = styled.span`
  grid-area: content;
`;

const Title = styled.h1`
  color: grey;
  font-size: 3em;
`;

const Bold = styled.span`
  color: black;
  font-weight: bold;
`;

const Italic = styled.span`
  color: black;
  font-style: italic;
`;

const BoldItalic = styled.span`
  color: black;
  font-weight: bold;
  font-style: italic;
`;

const Japanese = styled.p`
  font-size: 1em;
  font-weight: regular;
`;

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Morrison Cole - Alpha</title>
        <meta name="description" content="Work in progress." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>Hello, world.</Title>
      <p>
        I&apos;m <Bold>bold.</Bold>
      </p>
      <p>
        I&apos;m <Italic>italic.</Italic>
      </p>
      <p>
        I&apos;m <BoldItalic>both!</BoldItalic>
      </p>
      <Japanese>日本語で書いてます。</Japanese>
    </Layout>
  );
}
