import { FiArrowRight, FiCoffee, FiPlus, FiX } from 'react-icons/fi';

import { ReactComponent as AusFlag } from 'assets/svg/aus-flag.svg';

export default {
  excludeStories: /.*/,
};

export const iconMap = {
  Plus: <FiPlus />,
  ArrowRight: <FiArrowRight />,
  X: <FiX />,
  Coffee: <FiCoffee />,
  AusFlag: <AusFlag />,
  undefined,
};

export const formatMap = {
  Percentage: (value: number) => `${value}%`,
  Celcius: (value: number) => `${value}°C`,
  Fahrenheit: (value: number) => `${value}°F`,
  undefined,
};
export const globalCSSValues = ['initial', 'inherit', 'revert', 'revert-layer', 'unset'];
