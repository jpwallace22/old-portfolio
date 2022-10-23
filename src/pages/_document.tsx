import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { Fragment } from 'react';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          <Fragment key="1">
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link rel="preload" as="image" href="assets/images/dots.webp" /> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;600;700;900&family=IBM+Plex+Sans:wght@200;300;400;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="description" content="Personal portfolio of the frontend engineer, Justin Wallace" />
          <meta name="msapplication-TileColor" content="#00aba9" />
          <meta name="theme-color" content="#ffffff" />
          <meta property="og:image" content="assets/images/jwdev.webp" />
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PNC24L5');</script>`}
          </Script>
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-R2S5FWZ8HX"></Script>
          <Script id="google-analytics">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
                 
            gtag('config', '${process.env.GOOGLE_TAG_ID}');
          `}
          </Script>
        </Head>
        <body>
          <noscript>
            <iframe
              title="googleTagManager"
              src="https://www.googletagmanager.com/ns.html?id=GTM-PNC24L5"
              height="0"
              width="0"
              // eslint-disable-next-line no-inline-styles/no-inline-styles
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
