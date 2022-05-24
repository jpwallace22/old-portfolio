import { ThemeProvider } from 'contexts/ThemeProvider';
import 'assets/fonts/font-styles.css';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
