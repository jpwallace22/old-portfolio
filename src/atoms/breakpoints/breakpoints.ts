export const breakpoints = {
  xs: '375px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1280px',
} as const;

export const media = {
  /**
   * Styling props for everything above the `xs` breakpoint. Takes an object.
   */
  xs: `@media screen and (min-width: ${breakpoints.xs})`,
  /**
   * Styling props for everything above the `sm` breakpoint. Takes an object.
   */
  sm: `@media screen and (min-width: ${breakpoints.sm})`,
  /**
   * Styling props for everything above the `md` breakpoint. Takes an object.
   */
  md: `@media screen and (min-width: ${breakpoints.md})`,
  /**
   * Styling props for everything above the `lg` breakpoint. Takes an object.
   */
  lg: `@media screen and (min-width: ${breakpoints.lg})`,
  /**
   * Styling props for everything above the `xl` breakpoint. Takes an object.
   */
  xl: `@media screen and (min-width: ${breakpoints.xl})`,
} as const;
