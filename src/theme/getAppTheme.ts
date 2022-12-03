import { darkButton, lightButton } from 'molecules/Button/button.theme';
import { darkCircularProgress, lightCircularProgress } from 'molecules/CircularProgress/circularProgress.theme';
import { darkLinearProgress, lightLinearProgress } from 'molecules/LinearProgress/linearProgress.theme';
import { darkTooltip, lightTooltip } from 'molecules/Tooltip/tooltip.theme';

import { darkPalette, lightPalette, standardPalette } from 'theme/colorPalettes';
import { darkFormControl, lightFormControl } from 'theme/formControl.theme';
import typography from 'theme/typography';

export const getAppTheme = (mode: 'light' | 'dark') => {
  const isDark = mode === 'dark';

  return {
    components: {
      ...(isDark ? darkButton : lightButton),
      ...(isDark ? darkTooltip : lightTooltip),
      ...(isDark ? darkLinearProgress : lightLinearProgress),
      ...(isDark ? darkFormControl : lightFormControl),
      ...(isDark ? darkCircularProgress : lightCircularProgress),
    },
    palette: {
      mode,
      ...(isDark ? darkPalette : lightPalette),
      ...standardPalette,
    },
    ...typography,
  };
};

export type AppTheme = ReturnType<typeof getAppTheme>;

export type CSSProps = { theme: AppTheme };
