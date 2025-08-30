import { type Theme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { createContext, type FC, type ReactNode, useContext, useMemo, useState } from 'react';
import { darkTheme } from '~/theme/darkTheme.ts';
import { lightTheme } from '~/theme/lightTheme.ts';
import type { ThemeContextType, ThemeMode } from '~/theme/types.ts';

const ThemeContext = createContext<ThemeContextType>({
  toggleTheme: () => {},
  mode: 'light',
});

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('light');

  const toggleTheme = () => setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));

  const theme: Theme = useMemo(() => (mode === 'dark' ? darkTheme : lightTheme), [mode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
