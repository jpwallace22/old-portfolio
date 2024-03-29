import { css } from 'styled-components';

import basicCSS from 'quarks/styleProps/basic';
import headingCSS from 'quarks/styleProps/heading';

import { getPropsFromObjectCSS } from 'utils/quarks/getAllProps';

import type { GetAllPropTypes } from 'utils/quarks/getAllProps';

const headingStyles = {
  ...headingCSS,
  ...basicCSS,
};

export type HeadingProps = GetAllPropTypes<typeof headingStyles>;
export const heading = css<HeadingProps>`
  ${props => getPropsFromObjectCSS(props, headingStyles)}
`;
