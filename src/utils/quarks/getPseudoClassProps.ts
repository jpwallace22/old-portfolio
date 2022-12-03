import { css } from 'styled-components';

import type { DirectProps, ObjectCSS } from 'utils/quarks/getDirectProps';
import { getDirectProps } from 'utils/quarks/getDirectProps';
import { objectKeys } from 'utils/typeUtils';

import type { DefaultTheme, ThemedStyledProps } from 'styled-components';

export const pseudos = {
  /**
   * Styling props for the element's CSS `hover` state
   */
  hover: 'hover',
  /**
   * Styling props for the element's CSS `active` state
   */
  active: 'active',
  /**
   * Styling props for the element's CSS `focus` state
   */
  focus: 'focus',
  /**
   * Styling props for the element's CSS `focus-within` state
   */
  focusWithin: 'focus-within',
  /**
   * Styling props for the element's CSS `focus-visible` state
   */
  focusVisible: 'focus-visible',
} as const;

const pseudoClasses = objectKeys(pseudos);

export const getPseudoClassProps = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: ThemedStyledProps<Record<string, any>, DefaultTheme>,
  objectCSS: ObjectCSS,
) => {
  const validPassedPseudos = pseudoClasses.filter(pseudo => props[pseudo]);

  return validPassedPseudos.map(pseudo => {
    const pseudoSelector = `&:${pseudos[pseudo]}`;
    const pseudoProps = props[pseudo];

    return css`
      ${pseudoSelector} {
        ${getDirectProps(pseudoProps, objectCSS, props.theme.palette)}
      }
    `;
  });
};

export type PseudoClassProps<T extends ObjectCSS> = {
  [C in keyof typeof pseudos]?: DirectProps<T> | false;
};
