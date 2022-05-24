import color from 'atoms/colors/colors';

export const lightFormControl = {
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        color: color.gray[700],
      },
    },
  },
};

export const darkFormControl = {
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        color: color.gray[100],
      },
    },
  },
};
