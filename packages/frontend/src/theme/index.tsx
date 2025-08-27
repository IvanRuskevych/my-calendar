import { type Theme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { createContext, type FC, type ReactNode, useMemo, useState } from 'react';
import { darkTheme } from '~/theme/darkTheme.ts';
import { lightTheme } from '~/theme/lightTheme.ts';
import type { ThemeContextType, ThemeMode } from '~/theme/types.ts';

const ThemeContext = createContext<ThemeContextType>({
  toggleTheme: () => {},
  mode: 'light',
});

// export const useThemeContext = () => useContext(ThemeContext); TODO: use later

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
