import { css } from 'styled-components';

import { GetAllPropTypes, getPropsFromObjectCSS } from 'quarks/quarkUtils/getAllProps';
import basicCSS from 'quarks/styleProps/basic';
import textCSS from 'quarks/styleProps/text';

const textStyles = {
  ...textCSS,
  ...basicCSS,
};

export type TextProps = GetAllPropTypes<typeof textStyles>;
export const text = css<TextProps>`
  ${props => getPropsFromObjectCSS(props, textStyles)}
`;
