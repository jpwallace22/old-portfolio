import { css } from 'styled-components';

import { GetAllPropTypes, getPropsFromObjectCSS } from 'quarks/quarkUtils/getAllProps';
import basicCSS from 'quarks/styleProps/basic';
import headingCSS from 'quarks/styleProps/heading';

const headingStyles = {
  ...headingCSS,
  ...basicCSS,
};

export type HeadingProps = GetAllPropTypes<typeof headingStyles>;
export const heading = css<HeadingProps>`
  ${props => getPropsFromObjectCSS(props, headingStyles)}
`;
