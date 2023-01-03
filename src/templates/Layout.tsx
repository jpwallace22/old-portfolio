import { lazy } from 'react';

import type { FC, ReactNode } from 'react';

const Footer = lazy(() => import('components/Footer/Footer'));

const Layout: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
