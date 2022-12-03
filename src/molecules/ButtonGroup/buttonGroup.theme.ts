import color from 'atoms/colors/colors';
import { fontSize, fontWeight } from 'atoms/typography/typography';

const buttonGroupButtonRoot = {
  fontSize: fontSize[12],
  fontWeight: fontWeight.semiBold,
  minWidth: 0,
};

export const lightButtonGroup = {
  MuiButtonGroup: {
    styleOverrides: {
      root: {
        '& .MuiButton-root': {
          ...buttonGroupButtonRoot,
          color: color.gray[700],
        },
      },
    },
  },
};

export const darkButtonGroup = {
  MuiButtonGroup: {
    styleOverrides: {
      root: {
        '& .MuiButton-root': {
          ...buttonGroupButtonRoot,
          color: color.gray[300],
        },
      },
    },
  },
};
