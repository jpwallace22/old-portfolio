import { css } from 'styled-components';

import { GetAllPropTypes, getPropsFromObjectCSS } from 'quarks/quarkUtils/getAllProps';
import basicCSS from 'quarks/styleProps/basic';
import flexCSS from 'quarks/styleProps/flex';

const flexStyles = {
  ...flexCSS,
  ...basicCSS,
};

export type FlexProps = GetAllPropTypes<typeof flexStyles>;
export const flex = css<FlexProps>`
  display: flex;
  ${props => getPropsFromObjectCSS(props, flexStyles)}
`;
