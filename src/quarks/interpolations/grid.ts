import { css } from 'styled-components';

import basicCSS from 'quarks/styleProps/basic';
import gridCSS from 'quarks/styleProps/grid';

import type { GetAllPropTypes } from 'utils/quarks/getAllProps';
import { getPropsFromObjectCSS } from 'utils/quarks/getAllProps';

const gridStyles = {
  ...gridCSS,
  ...basicCSS,
};

export type GridProps = GetAllPropTypes<typeof gridStyles>;
export const grid = css<GridProps>`
  display: grid;
  ${props => getPropsFromObjectCSS(props, gridStyles)}
`;
