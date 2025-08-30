export type ThemeMode = 'dark' | 'light';

export interface ThemeContextType {
  toggleTheme: () => void;
  mode: ThemeMode;
}
