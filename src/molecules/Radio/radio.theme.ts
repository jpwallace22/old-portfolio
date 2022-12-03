import color from 'atoms/colors/colors';
import { margin } from 'atoms/spacing/spacing';

declare module '@mui/material/Radio' {
  interface RadioPropsSizeOverrides {
    large: true;
    medium: false;
  }
}

const radioRoot = {
  width: '1.20rem',
  height: '1.20rem',
  marginRight: margin[8],
  marginLeft: margin[8],
  marginTop: '6px',
  alignSelf: 'flex-start',
};

const radioRootSvg = {
  '& svg': {
    width: '1.20rem',
    height: '1.20rem',
  },
};

const radioVariants = {
  variants: [
    {
      props: { size: 'large' },
      style: {
        marginRight: margin[12],
        marginTop: '4px',
        width: '1.5rem',
        height: '1.5rem',
        '& svg': {
          width: '1.5rem',
          height: '1.5rem',
        },
      },
    },
  ],
};

export const darkRadio = {
  MuiRadio: {
    styleOverrides: {
      root: {
        color: color.gray[600],
        ...radioRoot,
        '&:hover': {
          backgroundColor: color.gray[700],
          color: color.primary[700],
          ...radioRootSvg,
        },
      },
    },
    ...radioVariants,
  },
};

export const lightRadio = {
  MuiRadio: {
    styleOverrides: {
      root: {
        color: color.gray[300],
        ...radioRoot,
        '&:hover': {
          backgroundColor: color.primary[50],
          color: color.primary[600],
        },
        ...radioRootSvg,
      },
    },
    ...radioVariants,
  },
};
