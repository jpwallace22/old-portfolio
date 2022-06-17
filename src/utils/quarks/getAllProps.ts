import { DefaultTheme, ThemedStyledProps } from 'styled-components';

import { DirectProps, ObjectCSS, getDirectProps } from 'utils/quarks/getDirectProps';
import { PseudoClassProps, getPseudoClassProps } from 'utils/quarks/getPseudoClassProps';
import { PseudoEleProps, getPseudoEleProps } from 'utils/quarks/getPseudoEleProps';
import { ResponsiveProps, getResponsiveProps } from 'utils/quarks/getResponsiveProps';

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
