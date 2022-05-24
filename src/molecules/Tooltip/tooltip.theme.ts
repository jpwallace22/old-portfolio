import color from 'atoms/colors/colors';
import shadows from 'atoms/shadows/shadows';
import { fontSize, fontWeight } from 'atoms/typography/typography';

const tooltipRoot = {
  fontSize: fontSize[12],
  fontWeight: fontWeight.semiBold,
  borderRadius: 8,
  boxShadow: shadows.xl,
};

export const darkTooltip = {
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: color.common.white,
        color: color.gray[700],
        ...tooltipRoot,
      },
      arrow: {
        color: color.common.white,
      },
    },
  },
};

export const lightTooltip = {
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: color.gray[900],
        color: color.common.white,
        ...tooltipRoot,
      },
      arrow: {
        color: color.gray[900],
      },
    },
  },
};
