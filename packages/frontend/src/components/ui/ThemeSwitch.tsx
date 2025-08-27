import { styled, Switch, type SwitchProps } from '@mui/material';
import type { FC } from 'react';

export const ThemeSwitch: FC<SwitchProps> = styled(Switch)(({ theme }) => ({
  width: 54,
  height: 27,
  padding: 0,
  display: 'flex',
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(28px)',
      '& .MuiSwitch-thumb': {
        background: 'linear-gradient(135deg, #ff5722, #2196f3)',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 32,
    height: 32,
    // borderRadius: '50%',
    background: 'linear-gradient(135deg, #fdd835, #4a90e2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    // Центрування іконок
    svg: {
      fontSize: 20,
    },
  },
  '& .MuiSwitch-track': {
    borderRadius: 18,
    backgroundColor: theme.palette.mode === 'dark' ? '#555' : '#ccc',
    opacity: 1,
    transition: 'background-color 0.3s',
  },
}));
