const primaryFont = '"Averta","Helvetica Neue","Arial Nova", sans-serif';
// const secondaryFont = '';

export const fontFamily = {
  primaryFont,
  // secondaryFont: secondaryFont,
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
  72: '4rem',
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
  60: '3.75rem',
  72: '4rem',
  90: '5.625rem',
} as const;

export const letterSpacing = {
  neg2: '-0.02em',
  0: '0em',
} as const;

export const fontWeight = {
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
      fontFamily: primaryFont,
      fontSize: fontSize[24],
      lineHeight: lineHeight[32],
      fontWeight: fontWeight.black,
      letterSpacing: letterSpacing[0],
      font() {
        return `${this.fontWeight} ${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      },
    },
    sm: {
      fontFamily: primaryFont,
      fontSize: fontSize[30],
      lineHeight: lineHeight[38],
      fontWeight: fontWeight.black,
      letterSpacing: letterSpacing[0],
      font() {
        return `${this.fontWeight} ${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      },
    },
    md: {
      fontFamily: primaryFont,
      fontSize: fontSize[36],
      lineHeight: lineHeight[44],
      fontWeight: fontWeight.black,
      letterSpacing: letterSpacing.neg2,
      font() {
        return `${this.fontWeight} ${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      },
    },
    lg: {
      fontFamily: primaryFont,
      fontSize: fontSize[48],
      lineHeight: lineHeight[60],
      fontWeight: fontWeight.black,
      letterSpacing: letterSpacing.neg2,
      font() {
        return `${this.fontWeight} ${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      },
    },
    xl: {
      fontFamily: primaryFont,
      fontSize: fontSize[60],
      lineHeight: lineHeight[72],
      fontWeight: fontWeight.black,
      letterSpacing: letterSpacing.neg2,
      font() {
        return `${this.fontWeight} ${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      },
    },
    xxl: {
      fontFamily: primaryFont,
      fontSize: fontSize[72],
      lineHeight: lineHeight[90],
      fontWeight: fontWeight.black,
      letterSpacing: letterSpacing.neg2,
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
