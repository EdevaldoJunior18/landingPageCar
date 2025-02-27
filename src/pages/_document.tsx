import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap"
        />
      </Head>
      <body className="antialiased font-oswald">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}