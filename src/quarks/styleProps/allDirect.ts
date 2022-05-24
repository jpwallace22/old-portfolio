import basicCSS from 'quarks/styleProps/basic';
import flexCSS from 'quarks/styleProps/flex';
import gridCSS from 'quarks/styleProps/grid';
import textCSS from 'quarks/styleProps/text';

const allDirect = {
  ...flexCSS,
  ...gridCSS,
  ...basicCSS,
  ...textCSS,
};

export default allDirect;
