import { lazy } from 'react';

import type { FC, ReactNode } from 'react';

const Footer = lazy(() => import('components/Footer/Footer'));

interface ILayout {
  children: ReactNode;
  fullHeightFooter?: boolean;
}

const Layout: FC<ILayout> = ({ children, fullHeightFooter }) => (
  <>
    <main>{children}</main>
    <Footer fullHeight={fullHeightFooter || false} />
  </>
);

export default Layout;
