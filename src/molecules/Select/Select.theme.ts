import check from 'assets/svg/check.svg';

import { padding } from 'atoms/spacing/spacing';

export const menuProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
  style: {
    marginTop: padding[8],
  },
  getContentAnchorEl: null,
} as const;

const selectedCheck = {
  MuiMenuItem: {
    styleOverrides: {
      root: {
        '&.Mui-selected:after': {
          backgroundImage: `url(${check})`,
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          width: '24px',
          height: '24px',
          content: '""',
          marginLeft: 'auto',
        },
      },
    },
  },
};

export const lightSelect = {
  MuiSelect: {
    styleOverrides: {
      root: {
        '&.Mui-focused .MuiSelect-select': {
          borderRadius: 8,
          boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #D9D6FE',
        },
      },
    },
  },
  ...selectedCheck,
};

export const darkSelect = {
  MuiSelect: {
    styleOverrides: {
      root: {
        '&.Mui-focused .MuiSelect-select': {
          borderRadius: 8,
          boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #4A1FB8',
        },
      },
    },
  },
  ...selectedCheck,
};
