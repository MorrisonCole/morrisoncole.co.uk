import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const Title = styled.h1`
  color: black;
  font-size: 40px;
`;

const Content = styled.span`
  grid-area: content;
`;

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
      </Content>
    </Layout>
  );
}
