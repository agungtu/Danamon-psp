import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="zxx">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,600"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/images/favicon.ico"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
