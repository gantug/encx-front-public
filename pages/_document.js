import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
