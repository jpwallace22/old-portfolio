import { Darker_Grotesque, IBM_Plex_Sans } from '@next/font/google';

const darkerGrotesque = Darker_Grotesque({
  weight: ['700', '900'],
  subsets: ['latin'],
  display: 'fallback',
  preload: true,
});
const ibmPlex = IBM_Plex_Sans({
  weight: ['200', '300', '400', '600', '700'],
  subsets: ['latin'],
  display: 'fallback',
  preload: true,
});

// const secondaryFont = '"IBM Plex Sans", sans-serif;';
const secondaryFont = darkerGrotesque.style.fontFamily;
const primaryFont = ibmPlex.style.fontFamily;

export const fontFamily = {
  primaryFont,
  secondaryFont,
} as const;

export const fontSize = {
  12: '0.75rem',
  14: '0.875rem',
  16: '1rem',
  18: '1.125rem',
  20: '1.25rem',
  24: '1.5rem',
  30: '1.875rem',
  36: '2.25rem',
  48: '3rem',
  60: '3.75rem',
  72: '4.5rem',
  96: '6rem',
} as const;

export const lineHeight = {
  0: '0',
  18: '1.125rem',
  20: '1.25rem',
  24: '1.5rem',
  28: '1.75rem',
  30: '1.875rem',
  32: '2rem',
  38: '2.375rem',
  44: '2.75rem',
  56: '3.5rem',
  60: '3.75rem',
  72: '4.5rem',
  90: '5.625rem',
} as const;

export const letterSpacing = {
  neg4: '-0.04em',
  neg3: '-0.03em',
  0: '0em',
} as const;

export const fontWeight = {
  extraLight: 200,
  light: 300,
  regular: 400,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
} as const;

export const font = {
  text: {
    xs: {
      fontFamily: primaryFont,
      fontSize: fontSize[12],
      lineHeight: lineHeight[18],
      font() {
        return `${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      },
    },
    sm: {
      fontFamily: primaryFont,
      fontSize: fontSize[14],
      lineHeight: lineHeight[20],
      font() {
        return `${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      },
    },
    md: {
      fontFamily: primaryFont,
      fontSize: fontSize[16],
      lineHeight: lineHeight[24],
      font() {
        return `${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      },
    },
    lg: {
      fontFamily: primaryFont,
      fontSize: fontSize[18],
      lineHeight: lineHeight[28],
      font() {
        return `${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      },
    },
    xl: {
      fontFamily: primaryFont,
      fontSize: fontSize[20],
      lineHeight: lineHeight[30],
      font() {
        return `${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      },
    },
  },
  display: {
    xs: {
      fontFamily: secondaryFont,
      fontSize: fontSize[24],
      lineHeight: lineHeight[24],
      fontWeight: fontWeight.black,
      letterSpacing: letterSpacing.neg3,
      font() {
        return `${this.fontWeight} ${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      },
    },
    sm: {
      fontFamily: secondaryFont,
      fontSize: fontSize[30],
      lineHeight: lineHeight[30],
      fontWeight: fontWeight.black,
      letterSpacing: letterSpacing.neg3,
      font() {
        return `${this.fontWeight} ${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      },
    },
    md: {
      fontFamily: secondaryFont,
      fontSize: fontSize[36],
      lineHeight: lineHeight[32],
      fontWeight: fontWeight.black,
      letterSpacing: letterSpacing.neg4,
      font() {
        return `${this.fontWeight} ${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      },
    },
    lg: {
      fontFamily: secondaryFont,
      fontSize: fontSize[48],
      lineHeight: lineHeight[44],
      fontWeight: fontWeight.black,
      letterSpacing: letterSpacing.neg4,
      font() {
        return `${this.fontWeight} ${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      },
    },
    xl: {
      fontFamily: secondaryFont,
      fontSize: fontSize[72],
      lineHeight: lineHeight[60],
      fontWeight: fontWeight.black,
      letterSpacing: letterSpacing.neg4,
      font() {
        return `${this.fontWeight} ${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      },
    },
    xxl: {
      fontFamily: secondaryFont,
      fontSize: fontSize[96],
      lineHeight: lineHeight[72],
      fontWeight: fontWeight.black,
      letterSpacing: letterSpacing.neg4,
      font() {
        return `${this.fontWeight} ${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      },
    },
  },
} as const;

export type FontWeightDefinition = keyof typeof fontWeight;
export type FontSizeDefinition = keyof typeof fontSize;
export type FontFamilyDefinition = keyof typeof fontFamily;
export type LineHeightDefinition = keyof typeof lineHeight;
export type LetterSpacingDefinition = keyof typeof letterSpacing;
