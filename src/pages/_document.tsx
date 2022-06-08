import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head lang="en">
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;600;700;900&family=IBM+Plex+Sans:wght@200;300;400;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/images/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/images/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#00aba9" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
