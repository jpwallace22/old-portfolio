import color from 'atoms/colors/colors';
import shadow from 'atoms/shadows/shadows';

const trackStyles = {
  borderRadius: 0,
  height: 7,
};

const railStyles = {
  borderRadius: 0,
  minHeight: 8,
  opacity: 1,
};

const labelStyles = {
  borderRadius: 8,
  boxShadow: shadow.lg,
  fontSize: 12,
  padding: 10,
};

const invertedTrack = {
  height: 8,
};

export const lightSlider = {
  MuiSlider: {
    styleOverrides: {
      root: {
        '&.MuiSlider-trackInverted .MuiSlider-track': {
          backgroundColor: color.gray[200],
          borderColor: color.gray[200],
          ...invertedTrack,
        },
        '&.MuiSlider-trackInverted .MuiSlider-rail': {
          color: color.primary[600],
        },
      },
      thumb: {
        color: color.common.white,
        '&.Mui-disabled': {
          color: color.gray[200],
        },
      },
      track: {
        color: color.primary[600],
        ...trackStyles,
      },
      rail: {
        color: color.gray[200],
        ...railStyles,
      },
      valueLabel: {
        backgroundColor: color.common.white,
        color: color.gray[700],
        ...labelStyles,
      },
    },
  },
};

export const darkSlider = {
  MuiSlider: {
    styleOverrides: {
      root: {
        '&.MuiSlider-trackInverted .MuiSlider-track': {
          backgroundColor: color.gray[700],
          borderColor: color.gray[700],
          ...invertedTrack,
        },
        '&.MuiSlider-trackInverted .MuiSlider-rail': {
          color: color.primary[600],
        },
      },
      thumb: {
        color: color.gray[50],
        '&.Mui-disabled': {
          color: color.gray[700],
        },
      },
      track: {
        color: color.primary[600],
        ...trackStyles,
      },
      rail: {
        color: color.gray[700],
        ...railStyles,
      },
      valueLabel: {
        backgroundColor: color.gray[800],
        color: color.common.white,
        ...labelStyles,
      },
    },
  },
};
