import color from 'atoms/colors/colors';

declare module '@mui/material/Switch' {
  interface SwitchPropsSizeOverrides {
    small: true;
    large: true;
    medium: false;
  }
}

const root = {
  minWidth: 71,
  alignSelf: 'flex-start',
  '&& .Mui-checked+.MuiSwitch-track': {
    backgroundColor: color.primary[600],
    opacity: 1,
  },
  '&& .MuiSwitch-switchBase.Mui-checked:hover': {
    backgroundColor: 'transparent',
  },
  '& .MuiSwitch-switchBase:hover': {
    backgroundColor: 'transparent',
  },
};

const switchBase = {
  borderRadius: 50,
  '&& hover': {
    backgroundColor: 'transparent',
  },
};

const track = {
  height: 25,
  top: '-5.5px',
  position: 'relative',
  borderRadius: '25px',
  minWidth: 46,
  opacity: 1,
};

const thumb = {
  marginLeft: 6.5,
};

const variants = [
  {
    props: { size: 'small' },
    style: {
      marginTop: 5,
      marginRight: 8,
      marginLeft: 3,
      minWidth: 49,
      '& .MuiSwitch-track': {
        height: 20,
        top: '-5px',
        minWidth: 39,
      },
    },
  },
];

export const darkSwitch = {
  MuiSwitch: {
    styleOverrides: {
      root: {
        ...root,
        '&& :not(.Mui-checked).MuiSwitch-switchBase:hover + .MuiSwitch-track': {
          backgroundColor: color.gray[800],
        },
        '&& .MuiSwitch-switchBase:focus-within + .MuiSwitch-track': {
          boxShadow: '0px 0px 0px 4px #34405430',
        },
      },
      switchBase,
      track: {
        ...track,
        backgroundColor: color.gray[700],
      },
      thumb: {
        backgroundColor: color.gray[25],
        ...thumb,
      },
    },
    variants,
  },
};

export const lightSwitch = {
  MuiSwitch: {
    styleOverrides: {
      root: {
        ...root,
        '&& :not(.Mui-checked).MuiSwitch-switchBase:hover + .MuiSwitch-track': {
          backgroundColor: color.gray[200],
        },
        '&& .MuiSwitch-switchBase:focus-within + .MuiSwitch-track': {
          boxShadow: '0px 0px 0px 4px #F4EBFF90',
        },
      },
      switchBase,
      track: {
        ...track,
        backgroundColor: color.gray[100],
      },
      thumb: {
        backgroundColor: color.common.white,
        ...thumb,
      },
    },
    variants,
  },
};
