import { type BoxProps, type ButtonProps, styled, type TypographyProps } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import type { ComponentType } from 'react';
import type { CellWrapperProps, CurrentDayWrapperProps, RowInCellProps } from '~/types';
import { shouldNotForward } from '~/utils';

export const CalendarHeaderWrapper: ComponentType<BoxProps> = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: 8,
}));

export const CellWrapper: ComponentType<CellWrapperProps> = styled(Box, {
  shouldForwardProp: shouldNotForward(['isWeekend', 'isCurrentMonth']),
})<CellWrapperProps>(({ theme, isWeekend, isCurrentMonth }) => ({
  aspectRatio: '1.5 / 1',
  backgroundColor: isWeekend ? theme.palette.customColors.weekend : theme.palette.background.paper,

  color: isCurrentMonth ? theme.palette.text.primary : theme.palette.text.secondary,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  opacity: isCurrentMonth ? 1 : 0.4,
  padding: 2,
}));

export const DayWrapper: ComponentType<BoxProps> = styled(Box)({
  height: 33,
  width: 33,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const CurrentDayWrapper: ComponentType<CurrentDayWrapperProps> = styled(Box, {
  shouldForwardProp: shouldNotForward(['isToday']),
})<CurrentDayWrapperProps>(({ theme, isToday }) => ({
  backgroundColor: isToday ? theme.palette.customColors.today : 'transparent',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
}));

export const RowInCell: ComponentType<RowInCellProps> = styled(Box, {
  shouldForwardProp: shouldNotForward(['justifyContent']),
})<RowInCellProps>(({ justifyContent }) => ({
  display: 'flex',
  justifyContent: justifyContent ?? 'flex-start',
}));

export const ButtonWrapper: ComponentType<ButtonProps> = styled(Button)({
  border: 'unset',
  backgroundColor: '#565759',
  height: 20,
  width: 'fit-content',
  minWidth: 'unset',
  marginRight: 2,
  borderRadius: 4,
  color: '#e6e6e6',
});

export const TodayButton: ComponentType<ButtonProps> = styled(ButtonWrapper)({
  padding: '0 16px',
  fontWeight: 'bold',
  textTransform: 'capitalize',
});

export const HeaderTitle: ComponentType<TypographyProps> = styled(Typography)({
  variant: 'h6',
  component: 'div',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
