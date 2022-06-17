/* eslint-disable @typescript-eslint/no-explicit-any */
import { DefaultTheme, FlattenSimpleInterpolation } from 'styled-components';

import { objectEntries } from 'utils/typeUtils';

export type ObjectCSS = { [key: string]: (...args: any[]) => FlattenSimpleInterpolation };

export const getDirectProps = (props: Record<string, any>, objectCSS: ObjectCSS, palette: DefaultTheme['palette']) => {
  const validPassedProps = objectEntries(props).filter(([propKey]) => objectCSS[propKey]);

  return validPassedProps.map(([propKey, propValue]) => {
    const functionFromProp = objectCSS[propKey];

    return functionFromProp(propValue, palette);
  });
};

export type DirectProps<T extends ObjectCSS> = {
  [P in keyof T]?: Parameters<T[P]>[0];
};
