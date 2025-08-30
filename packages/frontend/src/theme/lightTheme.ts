import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#9c27b0' },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#000000',
      secondary: '#a3a1a3',
    },
    customColors: {
      weekend: '#e0e0e0',
      today: '#ff5722',
      dividerFixed: '#404040',
    },
  },
});
