import { type BoxProps, styled } from '@mui/material';
import Box from '@mui/material/Box';
import type { ComponentType } from 'react';
import { shouldNotForward } from '~/utils';

export interface CellWrapperProps extends BoxProps {
  isWeekend: boolean;
  isToday: boolean;
}

export const CellWrapper: ComponentType<CellWrapperProps> = styled(Box, {
  shouldForwardProp: shouldNotForward(['isWeekend', 'isToday']),
})<CellWrapperProps>(({ theme, isWeekend, isToday }) => ({
  aspectRatio: '1.5 / 1',
  backgroundColor: isToday
    ? theme.palette.customColors.today
    : isWeekend
      ? theme.palette.customColors.weekend
      : theme.palette.background.paper,

  color: theme.palette.text.primary,
  // border: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
}));

export const DayWrapper: ComponentType<BoxProps> = styled(Box)({
  height: 33,
  width: 33,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
