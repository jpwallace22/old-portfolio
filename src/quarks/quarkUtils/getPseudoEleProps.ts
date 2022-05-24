import { Properties } from 'csstype';
import { DefaultTheme, ThemedStyledProps, css } from 'styled-components';

import { getDirectProps } from 'quarks/quarkUtils/getDirectProps';
import allDirect from 'quarks/styleProps/allDirect';

import { objectKeys } from 'utils/typeUtils';

const validCSSContent = (value: string) => {
  if (typeof value !== 'string') {
    return '';
  }
  const validNonStringInputs = [
    'url(',
    'linear-gradient(',
    'image-set(',
    'counter(',
    'attr(',
    'open-quote',
    'close-quote',
  ];
  const globalValues = ['inherit', 'initial', 'revert', 'revert-layer', 'unset'];
  const valueIsNotString =
    validNonStringInputs.some(inputType => value.includes(inputType)) ||
    globalValues.some(globalVal => value === globalVal);

  return valueIsNotString ? value : `'${value}'`;
};

const pseudoElementOnlyCSS = {
  /**
   * CSS `content` value. Required for pseudo-elements. Can take a string, url, gradient, etc.
   */
  content: (value: Properties['content']) => css`
    content: ${validCSSContent(value as string)};
  `,
};

const pseudoEleCSS = {
  ...allDirect,
  ...pseudoElementOnlyCSS,
};

export const pseudoElements = {
  /**
   * Styling props for the element's `::before` pseudo-element. Requires `content` value
   */
  before: 'before',
  /**
   * Styling props for the element's `::after` pseudo-element. Requires `content` value
   */
  after: 'after',
} as const;

const pseudoElementKeys = objectKeys(pseudoElements);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getPseudoEleProps = (props: ThemedStyledProps<Record<string, any>, DefaultTheme>) => {
  const validPassedPseudosEles = pseudoElementKeys.filter(pseudoEle => props[pseudoEle]);

  return validPassedPseudosEles.map(pseudoEle => {
    const pseudoEleSelector = `&::${pseudoElements[pseudoEle]}`;
    const pseudoProps = props[pseudoEle];

    return css`
      ${pseudoEleSelector} {
        ${getDirectProps(pseudoProps, pseudoEleCSS, props.theme.palette)}
      }
    `;
  });
};

type AllDirect = typeof allDirect;
type PseudoElementOnlyCSS = typeof pseudoElementOnlyCSS;

type PseudoEleDirectProps = {
  [Req in keyof PseudoElementOnlyCSS]: Parameters<PseudoElementOnlyCSS[Req]>[0];
} & {
  [P in keyof AllDirect]?: Parameters<AllDirect[P]>[0];
};

export type PseudoEleProps = {
  [E in keyof typeof pseudoElements]?: PseudoEleDirectProps;
};
