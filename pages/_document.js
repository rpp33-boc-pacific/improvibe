import Home, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Home {
  render() {
    return (
      <Html>
        <Head>
            <script async type="text/javascript" src="../public/newrelic.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument