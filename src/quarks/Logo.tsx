import styled from 'styled-components';

import { ReactComponent as Logo } from 'assets/svg/logo-gradient.svg';

import { basic } from 'quarks/interpolations/basic';

const StyledLogo = styled(Logo)`
  ${basic}
`;

export default StyledLogo;
