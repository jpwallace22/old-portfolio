import { DefaultTheme } from 'styled-components';

import { objectEntries, valueof } from 'utils/typeUtils';

const color = {
  common: { white: '#fff', black: '#110e2d' },
  gray: {
    50: '#f6f7f8',
    100: '#e8eaed',
    200: '#d9dde1',
    300: '#c9cfd4',
    400: '#bec4cb',
    500: '#b2bac2',
    600: '#abb3bc',
    700: '#a2abb4',
    800: '#99a3ac',
    900: '#8a949f',
  },
  primary: {
    50: '#e0eeee',
    100: '#b3d4d5',
    200: '#80b8b9',
    300: '#4d9c9d',
    400: '#268688',
    500: '#007173',
    600: '#00696b',
    700: '#005e60',
    800: '#005456',
    900: '#004243',
  },
  danger: {
    // TODO keep hue, increase brightness, aim for pinkish/fushia
    50: '#f2e2e5',
    100: '#dfb7bf',
    200: '#c98794',
    300: '#b35769',
    400: '#a33348',
    500: '#930f28',
    600: '#8b0d24',
    700: '#800b1e',
    800: '#760818',
    900: '#64040f',
  },
  purple: {
    50: '#e8e7ef',
    100: '#c6c3d7',
    200: '#a09bbd',
    300: '#7972a2',
    400: '#5d548e',
    500: '#40367a',
    600: '#3a3072',
    700: '#322967',
    800: '#2a225d',
    900: '#1c164a',
  },
} as const;

export type ColorObject = typeof color;

type GetColorOptions<T> = {
  readonly [P in keyof T]: keyof T[P];
};

export type ColorOptions = GetColorOptions<ColorObject>;

type GetColorList<T> = {
  readonly [P in keyof T]: `${P extends number | string ? P : never}-${keyof T[P] extends string | number
    ? keyof T[P]
    : never}`;
}[keyof T];

export type ColorList = GetColorList<ColorObject>;
export type ColorDefinition = keyof ColorObject;
export const colorListArray = objectEntries(color)
  .map(([colorName, colorValues]) => Object.keys(colorValues).map(value => `${colorName}-${value}`))
  .flat() as ColorList[];

export interface LightAndDark {
  light: ColorList;
  dark: ColorList;
}

type Common = ColorOptions['common'];
type Others = valueof<Omit<ColorOptions, 'common'>>;
type ColorArray = [ColorDefinition, Common | Others];

export type GetColorDefinition = ColorList | LightAndDark;

export const getColor = (palette: DefaultTheme['palette'], colors: GetColorDefinition) => {
  if (!colors) {
    return;
  }
  const [colorKey, colorValue] =
    typeof colors === 'string' ? (colors.split('-') as ColorArray) : (colors[palette.mode].split('-') as ColorArray);
  const subPalette = palette[colorKey];

  return 'white' in subPalette ? subPalette[colorValue as Common] : subPalette[colorValue as Others];
};

export default color;
