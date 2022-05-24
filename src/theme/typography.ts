import { font, fontFamily, fontWeight } from 'atoms/typography/typography';

const typography = {
  typography: {
    fontFamily: fontFamily.primaryFont,
    fontSize: 18,
    h1: {
      fontFamily: font.display.xxl.fontFamily,
      fontSize: font.display.xxl.fontSize,
      lineHeight: font.display.xxl.lineHeight,
      letterSpacing: font.display.xxl.letterSpacing,
      fontWeight: fontWeight.black,
    },
    h2: {
      fontFamily: font.display.xl.fontFamily,
      fontSize: font.display.xl.fontSize,
      lineHeight: font.display.xl.lineHeight,
      letterSpacing: font.display.xl.letterSpacing,
      fontWeight: fontWeight.black,
    },
    h3: {
      fontFamily: font.display.lg.fontFamily,
      fontSize: font.display.lg.fontSize,
      lineHeight: font.display.lg.lineHeight,
      letterSpacing: font.display.lg.letterSpacing,
      fontWeight: fontWeight.black,
    },
    h4: {
      fontFamily: font.display.md.fontFamily,
      fontSize: font.display.md.fontSize,
      lineHeight: font.display.md.lineHeight,
      letterSpacing: font.display.md.letterSpacing,
      fontWeight: fontWeight.black,
    },
    h5: {
      fontFamily: font.display.sm.fontFamily,
      fontSize: font.display.sm.fontSize,
      lineHeight: font.display.sm.lineHeight,
      letterSpacing: font.display.sm.letterSpacing,
      fontWeight: fontWeight.black,
    },
    h6: {
      fontFamily: font.display.xs.fontFamily,
      fontSize: font.display.xs.fontSize,
      lineHeight: font.display.xs.lineHeight,
      letterSpacing: font.display.xs.letterSpacing,
      fontWeight: fontWeight.black,
    },
    body1: {
      fontFamily: font.text.lg.fontFamily,
      fontSize: font.text.lg.fontSize,
      lineHeight: font.text.lg.lineHeight,
      fontWeight: fontWeight.regular,
    },
    button: {
      fontFamily: font.text.sm.fontFamily,
      fontSize: font.text.sm.fontSize,
      lineHeight: font.text.lg.lineHeight,
      fontWeight: fontWeight.black,
    },
  },
};

export default typography;
