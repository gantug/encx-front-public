import React from "react";
import Head from "next/head";

export default function Header() {
  return (
    <>
      <Head>
        <title>{"ENCX - Demo"}</title>
        <meta property="og:image" content={"ENCX Demo site"} />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"></script>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <script
          src="https://kit.fontawesome.com/116c207772.js"
          crossOrigin="anonymous"
        ></script>
        <script src="https://fb.me/react-0.14.3.min.js"></script>
        <script src="https://fb.me/react-dom-0.14.3.min.js"></script>
      </Head>
    </>
  );
}
