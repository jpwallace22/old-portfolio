import color from 'atoms/colors/colors';

const rootStyles = {
  height: 8,
  borderRadius: 8,
};

const barStyles = {
  borderRadius: 8,
};

const variants = [
  {
    props: { variant: 'buffer', labelPosition: 'track-top' },
    style: {
      overflow: 'visible',
    },
  },
  {
    props: { variant: 'buffer', labelPosition: 'track-bottom' },
    style: {
      overflow: 'visible',
    },
  },
];

export const lightLinearProgress = {
  MuiLinearProgress: {
    styleOverrides: {
      root: rootStyles,
      bar: barStyles,
      barColorPrimary: {
        backgroundColor: color.primary[50],
      },
      bar1Buffer: {
        backgroundColor: color.primary[600],
      },
      bar1Indeterminate: {
        backgroundColor: color.primary[600],
      },
      bar1Determinate: {
        backgroundColor: color.primary[600],
      },
    },
    variants,
  },
};

export const darkLinearProgress = {
  MuiLinearProgress: {
    styleOverrides: {
      root: rootStyles,
      bar: barStyles,
      barColorPrimary: {
        backgroundColor: color.gray[800],
      },
      bar1Buffer: {
        backgroundColor: color.primary[600],
      },
      bar1Indeterminate: {
        backgroundColor: color.primary[600],
      },
      bar1Determinate: {
        backgroundColor: color.primary[600],
      },
    },
    variants,
  },
};
