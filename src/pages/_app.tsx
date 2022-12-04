import { Suspense } from 'react';

import { navbar } from 'data/data';
import { LazyMotion, domAnimation } from 'framer-motion';
import Head from 'next/head';
import Script from 'next/script';

import Navbar from 'components/Navbar/Navbar';

import { ThemeProvider } from 'contexts/ThemeProvider';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <ThemeProvider>
      <Script strategy="lazyOnload" async src="https://www.googletagmanager.com/gtag/js?id=G-R2S5FWZ8HX" />
      <Script strategy="lazyOnload" id="g-analytics">
        {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
    
                gtag('config', 'G-R2S5FWZ8HX');
                `}
      </Script>
      <Suspense fallback={<div></div>}>
        <LazyMotion features={domAnimation} strict>
          <Navbar links={navbar.links} socials={navbar.socials} zIndex={99} />
          <Component {...pageProps} />
        </LazyMotion>
      </Suspense>
    </ThemeProvider>
  </>
);

export default MyApp;
