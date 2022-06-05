import styled from 'styled-components';

import { ReactComponent as Logo } from 'assets/svg/logo-gradient.svg';

import { basic } from 'quarks/interpolations/basic';
import { allCSSWithPseudos } from 'quarks/styleProps/all';

const StyledLogo = styled(Logo).withConfig({
  shouldForwardProp: prop => !Object.keys(allCSSWithPseudos).includes(prop),
})`
  ${basic}
`;

export default StyledLogo;
