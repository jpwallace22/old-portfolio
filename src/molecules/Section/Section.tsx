import { Flex } from 'quarks';

import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC, ReactNode } from 'react';
import type { IntrinsicElementsKeys } from 'styled-components';

interface SectionProps extends BasicProps {
  id?: string;
  internalName?: string | null;
  sectionId?: string;
  background?: string | null;
  children: ReactNode;
  as?: IntrinsicElementsKeys;
}

export const sectionSizing = {
  maxWidth: '1440px',
  width: '100%',
  paddingX: 16,
  paddingY: 48,
  lg: {
    paddingX: 24,
    paddingY: 64,
  },
  xl: {
    paddingX: 32,
    paddingY: 80,
  },
} as const;

const Section: FC<SectionProps> = ({ children, as, ...props }) => (
  <Flex
    as={as || 'section'}
    contain="layout"
    position="relative"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    marginX="auto"
    {...sectionSizing}
    {...props}
  >
    {children}
  </Flex>
);

export default Section;
