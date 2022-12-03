import type { DirectProps, ObjectCSS } from 'utils/quarks/getDirectProps';
import { getDirectProps } from 'utils/quarks/getDirectProps';
import type { PseudoClassProps } from 'utils/quarks/getPseudoClassProps';
import { getPseudoClassProps } from 'utils/quarks/getPseudoClassProps';
import type { PseudoEleProps } from 'utils/quarks/getPseudoEleProps';
import { getPseudoEleProps } from 'utils/quarks/getPseudoEleProps';
import type { ResponsiveProps } from 'utils/quarks/getResponsiveProps';
import { getResponsiveProps } from 'utils/quarks/getResponsiveProps';

import type { DefaultTheme, ThemedStyledProps } from 'styled-components';

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
