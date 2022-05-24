import { DefaultTheme } from 'styled-components';

import { objectEntries, valueof } from 'utils/typeUtils';

const color = {
  common: { white: '#fff', black: '#000' },
  gray: {
    25: '#FCFCFD',
    50: '#F9FAFB',
    100: '#F2F4F7',
    200: '#E4E7EC',
    300: '#D0D5DD',
    400: '#98A2B3',
    500: '#667085',
    600: '#475467',
    700: '#344054',
    800: '#1D2939',
    900: '#101828',
  },
  primary: {
    25: '#F2F9FF',
    50: '#E3F2FF',
    100: '#BCDDFF',
    200: '#90C9FF',
    300: '#62B4FF',
    400: '#40A3FF',
    500: '#2493FF',
    600: '#2885F6',
    700: '#2972E2',
    800: '#2961CF',
    900: '#2740B0',
  },
  swaggy: {
    25: '#FFF2F4',
    50: '#FEEDEF',
    100: '#FED3D5',
    200: '#EDA5A0',
    300: '#E3847C',
    400: '#ED6B5A',
    500: '#F06142',
    600: '#E35941',
    700: '#D14F3B',
    800: '#C34A35',
    900: '#B54029',
  },
  creamSoda: {
    25: '#FFFAF0',
    50: '#FBF2E2',
    100: '#F7DFB6',
    200: '#F2CA87',
    300: '#EDB55A',
    400: '#EAA53C',
    500: '#E89724',
    600: '#E48C20',
    700: '#DE7D1C',
    800: '#D76F17',
    900: '#D76F17',
  },
  kermit: {
    25: '#F1FFFC',
    50: '#DFF5F1',
    100: '#B0E6DB',
    200: '#7BD6C4',
    300: '#3BC5AC',
    400: '#00B799',
    500: '#00A888',
    600: '#009B7B',
    700: '#008A6B',
    800: '#00795C',
    900: '#005C40',
  },
  bleu: {
    25: '#F0F2FD',
    50: '#EAECFD',
    100: '#C8CFF9',
    200: '#A3B1F5',
    300: '#7B92F1',
    400: '#5A77ED',
    500: '#355EE8',
    600: '#2F55DD',
    700: '#224AD0',
    800: '#163FC4',
    900: '#042BAD',
  },
  snorlax: {
    25: '#F0FBFF',
    50: '#E2F5FB',
    100: '#B7E7F5',
    200: '#8AD8EE',
    300: '#63C8E4',
    400: '#4FBDDC',
    500: '#49B2D2',
    600: '#43A2BF',
    700: '#3B8EA5',
    800: '#347A8C',
    900: '#295861',
  },
  blue: {
    25: '#F5FAFF',
    50: '#EFF8FF',
    100: '#D1E9FF',
    200: '#B2DDFF',
    300: '#84CAFF',
    400: '#53B1FD',
    500: '#2E90FA',
    600: '#1570EF',
    700: '#175CD3',
    800: '#1849A9',
    900: '#194185',
  },
  indigo: {
    25: '#F5FAFF',
    50: '#EFF8FF',
    100: '#D1E9FF',
    200: '#B2DDFF',
    300: '#84CAFF',
    400: '#53B1FD',
    500: '#2E90FA',
    600: '#1570EF',
    700: '#175CD3',
    800: '#1849A9',
    900: '#194185',
  },
  purple: {
    25: '#FAFAFF',
    50: '#F4F3FF',
    100: '#EBE9FE',
    200: '#D9D6FE',
    300: '#BDB4FE',
    400: '#9B8AFB',
    500: '#7A5AF8',
    600: '#6938EF',
    700: '#5925DC',
    800: '#4A1FB8',
    900: '#3E1C96',
  },
  pink: {
    25: '#FEF6FB',
    50: '#FDF2FA',
    100: '#FCE7F6',
    200: '#FCCEEE',
    300: '#FAA7E0',
    400: '#F670C7',
    500: '#EE46BC',
    600: '#DD2590',
    700: '#C11574',
    800: '#9E165F',
    900: '#851651',
  },
  rose: {
    25: '#FFF5F6',
    50: '#FFF1F3',
    100: '#FFE4E8',
    200: '#FECDD6',
    300: '#FEA3B4',
    400: '#FD6F8E',
    500: '#F63D68',
    600: '#E31B54',
    700: '#C01048',
    800: '#A11043',
    900: '#89123E',
  },
  orange: {
    25: '#FFFAF5',
    50: '#FFF6ED',
    100: '#FFEAD5',
    200: '#FDDCAB',
    300: '#FEB273',
    400: '#FD853A',
    500: '#FB6514',
    600: '#EC4A0A',
    700: '#C4320A',
    800: '#9C2A10',
    900: '#7E2410',
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
