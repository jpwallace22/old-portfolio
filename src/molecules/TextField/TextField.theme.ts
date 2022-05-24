import color from 'atoms/colors/colors';
import { fontSize, fontWeight } from 'atoms/typography/typography';

const helperTextStyles = {
  fontSize: fontSize[12],
  marginLeft: 0,
  letterSpacing: '0.3px',
};

const labelFocusedStyles = {
  fontWeight: fontWeight.semiBold,
};

const inputRootStyles = {
  minWidth: 320,
  minHeight: 56,
  borderRadius: 8,
};

export const lightTextField = {
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        color: color.gray[500],
        ...helperTextStyles,
      },
    },
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: {
        color: color.gray[400],
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: color.gray[500],
        '&.Mui-focused': {
          color: color.primary[700],
          ...labelFocusedStyles,
        },
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        ...inputRootStyles,
        backgroundColor: color.gray[100],
        '&:hover': {
          backgroundColor: color.primary[50],
        },
        '&.Mui-focused': {
          backgroundColor: color.primary[50],
          border: `2px solid ${color.primary[500]}`,
        },
      },
    },
  },
};

export const darkTextField = {
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        color: color.gray[200],
        ...helperTextStyles,
      },
    },
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: {
        color: color.gray[400],
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: color.gray[300],
        '&.Mui-focused': {
          color: color.primary[500],
          ...labelFocusedStyles,
        },
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        ...inputRootStyles,
        color: color.common.white,
        backgroundColor: color.gray[600],
        '&:hover': {
          backgroundColor: color.gray[800],
        },
        '&.Mui-focused': {
          backgroundColor: color.gray[800],
          border: `2px solid ${color.primary[500]}`,
        },
      },
    },
  },
};
