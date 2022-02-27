import Head from "next/head";
import React from "react";
import styled from "styled-components";
import { Centered } from "../components/centered";
import { Layout } from "../components/layout";
import { SwitchLocaleButton } from "../components/switch-locale-button";

const Title = styled.h1`
  font-size: 4rem;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Italic = styled.span`
  font-style: italic;
`;

const BoldItalic = styled.span`
  font-weight: bold;
  font-style: italic;
`;

const Japanese = styled.p`
  font-size: 1rem;
  font-family: "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif; ;
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

      <Centered>
        <SwitchLocaleButton />
      </Centered>
    </Layout>
  );
}
