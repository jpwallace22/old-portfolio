import { breakpoints } from 'atoms/breakpoints/breakpoints';

import { pseudos } from 'quarks/quarkUtils/getPseudoClassProps';
import { pseudoElements } from 'quarks/quarkUtils/getPseudoEleProps';
import allDirect from 'quarks/styleProps/allDirect';

export const allCSSWithPseudos = {
  ...allDirect,
  ...pseudos,
  ...pseudoElements,
  ...breakpoints,
};

export default allDirect;
