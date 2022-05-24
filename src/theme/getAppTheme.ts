import { darkButton, lightButton } from 'molecules/Button/button.theme';
import { darkButtonGroup, lightButtonGroup } from 'molecules/ButtonGroup/buttonGroup.theme';
import { darkCheckbox, lightCheckbox } from 'molecules/Checkbox/checkbox.theme';
import { darkCircularProgress, lightCircularProgress } from 'molecules/CircularProgress/circularProgress.theme';
import { darkLinearProgress, lightLinearProgress } from 'molecules/LinearProgress/linearProgress.theme';
import { darkRadio, lightRadio } from 'molecules/Radio/radio.theme';
import { darkSelect, lightSelect } from 'molecules/Select/Select.theme';
import { darkSlider, lightSlider } from 'molecules/Slider/slider.theme';
import { darkSwitch, lightSwitch } from 'molecules/Switch/switch.theme';
import { darkTextField, lightTextField } from 'molecules/TextField/TextField.theme';
import { darkTooltip, lightTooltip } from 'molecules/Tooltip/tooltip.theme';

import { darkPalette, lightPalette, standardPalette } from 'theme/colorPalettes';
import { darkFormControl, lightFormControl } from 'theme/formControl.theme';
import typography from 'theme/typography';

export const getAppTheme = (mode: 'light' | 'dark') => {
  const isDark = mode === 'dark';

  return {
    components: {
      ...(isDark ? darkButton : lightButton),
      ...(isDark ? darkTextField : lightTextField),
      ...(isDark ? darkSwitch : lightSwitch),
      ...(isDark ? darkRadio : lightRadio),
      ...(isDark ? darkTooltip : lightTooltip),
      ...(isDark ? darkButtonGroup : lightButtonGroup),
      ...(isDark ? darkLinearProgress : lightLinearProgress),
      ...(isDark ? darkSlider : lightSlider),
      ...(isDark ? darkCheckbox : lightCheckbox),
      ...(isDark ? darkSelect : lightSelect),
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
