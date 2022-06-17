import { breakpoints } from 'atoms/breakpoints/breakpoints';

import allDirect from 'quarks/styleProps/allDirect';

import { pseudos } from 'utils/quarks/getPseudoClassProps';
import { pseudoElements } from 'utils/quarks/getPseudoEleProps';

export const allCSSWithPseudos = {
  ...allDirect,
  ...pseudos,
  ...pseudoElements,
  ...breakpoints,
};

export default allDirect;
