import color from 'atoms/colors/colors';

const circle = {
  strokeLinecap: 'round',
};

export const lightCircularProgress = {
  MuiCircularProgress: {
    styleOverrides: {
      circle: {
        color: color.primary[600],
        ...circle,
      },
    },
  },
};

export const darkCircularProgress = {
  MuiCircularProgress: {
    styleOverrides: {
      svg: {
        color: color.gray[300],
        ...circle,
      },
    },
  },
};
