import { Properties } from 'csstype';
import { css } from 'styled-components';

const flexCSS = {
  /**
   * Element's `align-items` value. Accepts `stretch`, `center`, `flex-start`, `flex-end`, etc.
   */
  alignItems: (value: Properties['alignItems']) => css`
    align-items: ${value};
  `,
  /**
   * Element's `justify-content` value. Accepts `stretch`, `center`, `flex-start`, `flex-end`, etc.
   */
  justifyContent: (value: Properties['justifyContent']) => css`
    justify-content: ${value};
  `,
  /**
   * Element's `flex-wrap` value. Accepts `nowrap`, `wrap`, or `wrap-reverse`
   */
  flexWrap: (value: Properties['flexWrap']) => css`
    flex-wrap: ${value};
  `,
  /**
   * Element's `flex-wrap` value. Accepts `nowrap`, `wrap`, or `wrap-reverse`
   */
  flexDirection: (value: Properties['flexDirection']) => css`
    flex-direction: ${value};
  `,
  /**
   * Element's `order` value. Accepts an integer
   */
  order: (value: Properties['order']) => css`
    order: ${value};
  `,
  /**
   * Element's `flex-basis` value. Accepts any valid size
   */
  flexBasis: (value: Properties['flexBasis']) => css`
    flex-basis: ${value};
  `,
  /**
   * Element's `flex-grow` value. Accepts a number
   */
  flexGrow: (value: Properties['flexGrow']) => css`
    flex-grow: ${value};
  `,
  /**
   * Element's `flex-shrink` value. Accepts a number
   */
  flexShrink: (value: Properties['flexShrink']) => css`
    flex-shrink: ${value};
  `,
  /**
   * Element's `gap` value. Accepts any valid size.
   */
  gap: (value: Properties['gap']) => css`
    gap: ${value};
  `,
  /**
   * Element's `column-gap` value. Accepts any valid size
   */
  columnGap: (value: Properties['columnGap']) => css`
    column-gap: ${value};
  `,
  /**
   * Element's `row-gap` value. Accepts any valid size
   */
  rowGap: (value: Properties['rowGap']) => css`
    row-gap: ${value};
  `,
};

export default flexCSS;
