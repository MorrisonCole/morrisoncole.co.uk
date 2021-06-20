import Head from 'next/head'
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Morrison Cole - Alpha</title>
        <meta name="description" content="Work in progress." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <p className="text-gray-900 dark:text-white">Hello, world.</p>
    </>
  );
}
