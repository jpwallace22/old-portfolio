import { css } from 'styled-components';

import basicCSS from 'quarks/styleProps/basic';
import textCSS from 'quarks/styleProps/text';

import { getPropsFromObjectCSS } from 'utils/quarks/getAllProps';

import type { GetAllPropTypes } from 'utils/quarks/getAllProps';

const textStyles = {
  ...textCSS,
  ...basicCSS,
};

export type TextProps = GetAllPropTypes<typeof textStyles>;
export const text = css<TextProps>`
  ${props => getPropsFromObjectCSS(props, textStyles)}
`;
