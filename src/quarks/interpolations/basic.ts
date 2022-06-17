import { css } from 'styled-components';

import basicCSS from 'quarks/styleProps/basic';

import { GetAllPropTypes, getPropsFromObjectCSS } from 'utils/quarks/getAllProps';

export type BasicProps = GetAllPropTypes<typeof basicCSS>;
export const basic = css<BasicProps>`
  ${props => getPropsFromObjectCSS(props, basicCSS)}
`;
