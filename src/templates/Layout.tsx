import { lazy } from 'react';

import SEO from 'components/SEO/SEO';

import type { FC, ReactNode } from 'react';

const Footer = lazy(() => import('components/Footer/Footer'));

const Layout: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <SEO />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
