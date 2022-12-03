import { Suspense } from 'react';

import { navbar } from 'data/data';
import { LazyMotion, domAnimation } from 'framer-motion';
import Script from 'next/script';

import Navbar from 'components/Navbar/Navbar';

import { ThemeProvider } from 'contexts/ThemeProvider';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Suspense fallback={<div></div>}>
      <Script strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-R2S5FWZ8HX" />
      <Script strategy="afterInteractive" id="g-analytics">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
        
              gtag('config', 'G-R2S5FWZ8HX');
            `}
      </Script>
      <LazyMotion features={domAnimation} strict>
        <Navbar links={navbar.links} socials={navbar.socials} zIndex={99} />
        <Component {...pageProps} />
      </LazyMotion>
    </Suspense>
  </ThemeProvider>
);

export default MyApp;
