import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from 'quarks/GlobalStyles';

import { getAppTheme } from 'theme/getAppTheme';

import type { ThemeOptions } from '@mui/material/styles';
import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';

interface ThemeProviderProps {
  /**
   * Pass Storybook's darkMode boolean here to sync it with the ThemeProvider one
   */
  storybookIsDarkMode?: boolean;
  /**
   * The rest of your application must be passed in as a child.
   */
  children: ReactNode;
}

const ThemeContext = createContext<[boolean, Dispatch<SetStateAction<boolean>>]>([false, () => null]);

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, storybookIsDarkMode }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (typeof storybookIsDarkMode === 'boolean') {
      setIsDarkMode(storybookIsDarkMode);
    }
  }, [storybookIsDarkMode]);

  const themes = useMemo(() => {
    const styled = getAppTheme(isDarkMode ? 'dark' : 'light');

    return {
      styled,
      mui: createTheme(styled as ThemeOptions),
    };
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={[isDarkMode, setIsDarkMode]}>
      <StyledThemeProvider theme={themes.styled}>
        <MuiThemeProvider theme={themes.mui}>
          <CssBaseline />
          <GlobalStyle />
          {children}
        </MuiThemeProvider>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

const useDarkMode = () => useContext(ThemeContext);

export default useDarkMode;
