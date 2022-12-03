import { m } from 'framer-motion';

import type { FC, ReactNode } from 'react';

const StandardFadeIn: FC<{ children: ReactNode }> = ({ children }) => (
  <m.div
    whileInView={{ opacity: 1 }}
    initial={{ opacity: 0.2 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    {children}
  </m.div>
);

export default StandardFadeIn;
