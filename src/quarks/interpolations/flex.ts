import { css } from 'styled-components';

import basicCSS from 'quarks/styleProps/basic';
import flexCSS from 'quarks/styleProps/flex';

import { getPropsFromObjectCSS } from 'utils/quarks/getAllProps';

import type { GetAllPropTypes } from 'utils/quarks/getAllProps';

const flexStyles = {
  ...flexCSS,
  ...basicCSS,
};

export type FlexProps = GetAllPropTypes<typeof flexStyles>;
export const flex = css<FlexProps>`
  display: flex;
  ${props => getPropsFromObjectCSS(props, flexStyles)}
`;
