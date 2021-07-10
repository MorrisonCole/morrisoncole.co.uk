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

const Description = styled.p`
 color: black;
 font-weight: bold;
`

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Morrison Cole - Alpha</title>
        <meta name="description" content="Work in progress." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <Title>Hello, world.</Title>
        <Description>Exciting text.</Description>
      </Content>
    </Layout>
  );
}
