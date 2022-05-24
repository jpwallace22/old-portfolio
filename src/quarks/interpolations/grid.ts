import { css } from 'styled-components';

import { GetAllPropTypes, getPropsFromObjectCSS } from 'quarks/quarkUtils/getAllProps';
import basicCSS from 'quarks/styleProps/basic';
import gridCSS from 'quarks/styleProps/grid';

const gridStyles = {
  ...gridCSS,
  ...basicCSS,
};

export type GridProps = GetAllPropTypes<typeof gridStyles>;
export const grid = css<GridProps>`
  display: grid;
  ${props => getPropsFromObjectCSS(props, gridStyles)}
`;
