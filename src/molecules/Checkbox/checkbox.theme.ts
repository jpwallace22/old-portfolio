import color from 'atoms/colors/colors';
import { margin } from 'atoms/spacing/spacing';

declare module '@mui/material/Checkbox' {
  interface CheckboxPropsSizeOverrides {
    large: true;
    medium: false;
  }
}

const checkboxRoot = {
  width: '1.20rem',
  height: '1.20rem',
  marginLeft: margin[8],
  marginTop: '6px',
  alignSelf: 'flex-start',
};

const checkboxRootSvg = {
  '& svg': {
    width: '1.20rem',
    height: '1.20rem',
  },
};

const checkboxVariants = {
  variants: [
    {
      props: { size: 'large' },
      style: {
        marginTop: '0',
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

export const darkCheckbox = {
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: color.gray[600],
        ...checkboxRoot,
        '&:hover': {
          backgroundColor: color.gray[700],
          color: color.primary[700],
          ...checkboxRootSvg,
          borderRadius: '4px',
        },
        '&.Mui-checked': {
          color: color.primary[600],
        },
      },
    },
    ...checkboxVariants,
  },
};

export const lightCheckbox = {
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: color.gray[300],
        ...checkboxRoot,
        '&:hover': {
          backgroundColor: color.primary[50],
          color: color.primary[600],
          borderRadius: '4px',
        },
        '&.Mui-checked': {
          color: color.primary[600],
        },
        ...checkboxRootSvg,
      },
    },
    ...checkboxVariants,
  },
};
