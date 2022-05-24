import { css } from 'styled-components';

import { font } from 'atoms/typography/typography';

type TextStyles = keyof typeof font.text;

const textCSS = {
  /**
   * Element's `font` shorthand property. Only accepts values set in the `text` typography atom.
   * Ex: `xs`, `sm`, etc.
   */
  textStyle: (value: TextStyles) => css`
    font: ${font.text[value].font()};
  `,
};

export default textCSS;
