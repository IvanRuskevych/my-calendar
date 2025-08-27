import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#1976d2' },
    secondary: { main: '#9c27b0' },
    background: {
      default: '#121212',
      paper: '#1e1f21',
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    },
    customColors: {
      weekend: '#272829',
      today: '#ff5722',
    },
  },
});
