import { navbar } from 'data/data';
import { useState } from 'react';

import Navbar from 'components/Navbar/Navbar';

import { ThemeProvider } from 'contexts/ThemeProvider';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [currentSection, setCurrentSection] = useState<string>('');

  return (
    <ThemeProvider>
      <Navbar links={navbar.links} socials={navbar.socials} zIndex={99} currentSection={currentSection} />
      <Component {...pageProps} setCurrentSection={setCurrentSection} />
    </ThemeProvider>
  );
};

export default MyApp;
