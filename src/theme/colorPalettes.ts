import color from 'atoms/colors/colors';

export const lightPalette = {
  background: {
    default: color.common.white,
    paper: color.common.white,
  },
  text: {
    primary: color.common.black,
    secondary: color.common.black,
  },
};

export const darkPalette = {
  background: {
    default: color.common.black,
    paper: color.purple[900],
  },
  text: {
    primary: color.common.white,
    secondary: color.gray[500],
  },
};

export const standardPalette = {
  ...color,
};
