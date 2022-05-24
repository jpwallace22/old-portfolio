import { DefaultTheme, ThemedStyledProps } from 'styled-components';

import { DirectProps, ObjectCSS, getDirectProps } from 'quarks/quarkUtils/getDirectProps';
import { PseudoClassProps, getPseudoClassProps } from 'quarks/quarkUtils/getPseudoClassProps';
import { PseudoEleProps, getPseudoEleProps } from 'quarks/quarkUtils/getPseudoEleProps';
import { ResponsiveProps, getResponsiveProps } from 'quarks/quarkUtils/getResponsiveProps';

export const getPropsFromObjectCSS = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: ThemedStyledProps<Record<string, any>, DefaultTheme>,
  objectCSS: ObjectCSS,
) => [
  ...getDirectProps(props, objectCSS, props.theme.palette),
  ...getResponsiveProps(props, objectCSS),
  ...getPseudoClassProps(props, objectCSS),
  ...getPseudoEleProps(props),
];

export type GetAllPropTypes<T extends ObjectCSS> = DirectProps<T> &
  ResponsiveProps<T> &
  PseudoClassProps<T> &
  PseudoEleProps;
