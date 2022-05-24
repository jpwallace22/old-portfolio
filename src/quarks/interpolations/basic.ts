import { css } from 'styled-components';

import { GetAllPropTypes, getPropsFromObjectCSS } from 'quarks/quarkUtils/getAllProps';
import basicCSS from 'quarks/styleProps/basic';

export type BasicProps = GetAllPropTypes<typeof basicCSS>;
export const basic = css<BasicProps>`
  ${props => getPropsFromObjectCSS(props, basicCSS)}
`;
