import { css } from 'styled-components';

import { gradient } from 'atoms/colors/colors';
import { font } from 'atoms/typography/typography';

import typography from 'theme/typography';

import type { GradientStyles } from 'atoms/colors/colors';

export type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TextStyles = keyof typeof font.display;

const headingCSS = {
  /**
   * Element's `font` shorthand property. Only accepts values set in the `display` typography atom.
   * Ex: `xs`, `sm`, etc.
   */
  textStyle: (value: TextStyles) => css`
    font: ${font.display[value].font()};
    letter-spacing: ${font.display[value].letterSpacing};
  `,
  /**
   * The heading's element type. Options are `h1`, `h2`, `h3`, `h4`, `h5`, `h6`.
   * The element will automatically be styled accordingly as defined in the typography atom.
   */
  as: (value: HeadingTypes) => css`
    font-size: ${typography.typography[value].fontSize};
    line-height: ${typography.typography[value].lineHeight};
    letter-spacing: ${typography.typography[value].letterSpacing};
    font-weight: ${typography.typography[value].fontWeight};
  `,
  gradient: (value: GradientStyles) => css`
    background: ${gradient[value]};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
};

export default headingCSS;
