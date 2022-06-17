import { navbar } from 'data/data';

import Navbar from 'components/Navbar/Navbar';

import { ThemeProvider } from 'contexts/ThemeProvider';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Navbar links={navbar.links} socials={navbar.socials} zIndex={99} />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
