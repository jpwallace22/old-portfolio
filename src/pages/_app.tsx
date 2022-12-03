import { navbar } from 'data/data';
import Script from 'next/script';
import { Suspense, useState } from 'react';

import Navbar from 'components/Navbar/Navbar';

import { ThemeProvider } from 'contexts/ThemeProvider';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [currentSection, setCurrentSection] = useState<string>('');

  return (
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
        <Navbar links={navbar.links} socials={navbar.socials} zIndex={99} currentSection={currentSection} />
        <Component {...pageProps} setCurrentSection={setCurrentSection} />
      </Suspense>
    </ThemeProvider>
  );
};

export default MyApp;
