import { motion } from 'framer-motion';

import type { FC, ReactNode } from 'react';

const StandardFadeIn: FC<{ children: ReactNode }> = ({ children }) => (
  <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0.2 }} transition={{ duration: 0.7 }}>
    {children}
  </motion.div>
);

export default StandardFadeIn;

StandardFadeIn.defaultProps = {};
