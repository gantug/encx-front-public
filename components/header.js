import React from "react";
import Head from "next/head";

export default function Header() {
  return (
    <>
      <Head>
        <title>{"ENCX - Demo"}</title>
        <meta property="og:image" content={"ENCX Demo site"} />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
    </>
  );
}
