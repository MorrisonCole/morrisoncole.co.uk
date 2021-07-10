import Head from 'next/head'
import React from "react";
import styled from 'styled-components';

const Title = styled.h1`
  color: black;
  font-size: 40px;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Morrison Cole - Alpha</title>
        <meta name="description" content="Work in progress." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Title>
          Hello, world.
        </Title>
      </div>
    </>
  );
}
