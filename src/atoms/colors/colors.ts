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
    100: '#D9D7E4',
    200: '#B3AFCA',
    300: '#8C86AF',
    400: '#665E95',
    500: '#40367A',
    600: '#332B62',
    700: '#262049',
    800: '#1A1631',
    900: '#0D0B18',
  },
} as const;

export const gradient = {
  purpleLeft: 'linear-gradient(90deg, rgba(64, 54, 122, 1) 0%, rgba(0, 113, 115, 1) 100%)',
  purpleRight: 'linear-gradient(90deg, rgba(0,113,115,1) 0%, rgba(64,54,122,1) 100%)',
  purpleTop: 'linear-gradient(360deg, rgba(0,113,115,1) 0%, rgba(64,54,122,1) 100%)',
  purpleBottom: 'linear-gradient(180deg, rgba(0,113,115,1) 0%, rgba(64,54,122,1) 100%)',
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
type NumValues = valueof<Omit<ColorOptions, 'common'>>;

// type WithAlpha<T extends number> =
//   | `${T}A10`
//   | `${T}A20`
//   | `${T}A30`
//   | `${T}A40`
//   | `${T}A50`
//   | `${T}A60`
//   | `${T}A70`
//   | `${T}A80`
//   | `${T}A90`;

// type ArrayOptions = WithAlpha<NumValues>;
type ColorArray = [ColorDefinition, Common | NumValues];

export type GetColorDefinition = ColorList | LightAndDark;

export const getColor = (palette: DefaultTheme['palette'], colors: GetColorDefinition) => {
  if (!colors) {
    return;
  }
  const [colorKey, colorValue] =
    typeof colors === 'string' ? (colors.split('-') as ColorArray) : (colors[palette.mode].split('-') as ColorArray);
  const subPalette = palette[colorKey];

  return 'white' in subPalette ? subPalette[colorValue as Common] : subPalette[colorValue as NumValues];
};

export const colorParser = (colorString: ColorList) => {
  if (!colorString) {
    return;
  }
  const [colorKey, colorValue] = colorString.split('-') as ColorArray;

  return colorKey === 'common' ? color[colorKey][colorValue as Common] : color[colorKey][colorValue as NumValues];
};

export default color;
