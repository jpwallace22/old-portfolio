import { DefaultTheme, ThemedStyledProps, css } from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';

import { DirectProps, ObjectCSS, getDirectProps } from 'quarks/quarkUtils/getDirectProps';

import { objectKeys } from 'utils/typeUtils';

const breakpointArray = objectKeys(media);

export const getResponsiveProps = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: ThemedStyledProps<Record<string, any>, DefaultTheme>,
  objectCSS: ObjectCSS,
) => {
  const validPassedBreakpoints = breakpointArray.filter(display => props[display]);

  return validPassedBreakpoints.map(breakpoint => {
    const mediaQuery = media[breakpoint];
    const responsiveProps = props[breakpoint];

    return css`
      ${mediaQuery} {
        ${getDirectProps(responsiveProps, objectCSS, props.theme.palette)}
      }
    `;
  });
};

export type ResponsiveProps<T extends ObjectCSS> = {
  [S in keyof typeof media]?: DirectProps<T>;
};
