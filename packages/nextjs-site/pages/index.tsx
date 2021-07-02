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

      <div className="grid grid-cols-content">
        <div className="col-start-3 col-end-4 text-gray-900 dark:text-white">
          Hello, world.
        </div>
      </div>
    </>
  );
}
