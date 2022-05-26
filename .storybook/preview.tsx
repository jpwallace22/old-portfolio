/* eslint-disable absolute-only/imports */
import { addDecorator } from '@storybook/react';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';

import DocsTabContainer from '../.storybook/DocsTabContainer';
import blackLogo from '../.storybook/public/blackLogo.png';
import lightLogo from '../.storybook/public/lightLogo.png';
import { ThemeProvider } from '../src/contexts/ThemeProvider';

const defaultTheme = {
  brandTitle: 'Webstacks',
  brandUrl: 'https://webstacks.com/',
};

const parameters = {
  backgrounds: { disable: true },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Guides', ['Get Started', '*'], 'Quarks', 'Atoms', 'Molecules', 'Components'],
    },
    showPanel: true,
  },
  darkMode: {
    dark: { ...themes.dark, ...defaultTheme, brandImage: lightLogo },
    light: { ...themes.light, ...defaultTheme, brandImage: blackLogo },
  },
  docs: {
    container: DocsTabContainer,
  },
  actions: {
    argTypesRegex: '^on.*',
  },
  controls: {
    sort: 'requiredFirst',
  },
};

addDecorator(story => {
  const isDarkMode = useDarkMode();

  return <ThemeProvider storybookIsDarkMode={isDarkMode}>{story()}</ThemeProvider>;
});

export default parameters;
