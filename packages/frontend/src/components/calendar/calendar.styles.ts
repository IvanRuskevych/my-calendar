import { type BoxProps, Button, type ButtonProps, styled, Typography, type TypographyProps } from '@mui/material';
import Box from '@mui/material/Box';
import type { ComponentType } from 'react';
import type { CalendarGridWrapperProps, CellWrapperProps, CurrentDayWrapperProps, RowInCellProps } from '~/types';
import { shouldNotForward } from '~/utils';

// CalendarHeader
export const CalendarHeaderWrapper: ComponentType<BoxProps> = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: 8,
}));

export const HeaderTitle: ComponentType<TypographyProps> = styled(Typography)({
  variant: 'h6',
  component: 'div',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

//  Calendar Monitor
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

//  CalendarGridCell
export const CellWrapper: ComponentType<CellWrapperProps> = styled(Box, {
  shouldForwardProp: shouldNotForward(['isWeekend', 'isCurrentMonth', 'isHeader']),
})<CellWrapperProps>(({ theme, isWeekend, isCurrentMonth, isHeader }) => ({
  aspectRatio: isHeader ? '1.5 / 0.3' : '1.5 / 1',
  backgroundColor: isHeader
    ? theme.palette.background.paper
    : isWeekend
      ? theme.palette.customColors.weekend
      : theme.palette.background.paper,

  color: isHeader
    ? theme.palette.text.primary
    : isCurrentMonth
      ? theme.palette.text.primary
      : theme.palette.text.secondary,
  display: 'flex',
  flexDirection: isHeader ? 'row' : 'column',
  justifyContent: isHeader ? 'flex-end' : 'flex-start',
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

//CalendarGrid
export const CalendarGridWrapper: ComponentType<CalendarGridWrapperProps> = styled(Box, {
  shouldForwardProp: shouldNotForward(['isHeader']),
})<CalendarGridWrapperProps>(({ theme, isHeader }) => ({
  borderBottom: isHeader ? `1px solid ${theme.palette.customColors.dividerFixed}` : '',
  gap: isHeader ? 0 : 1,
  backgroundColor: theme.palette.customColors.dividerFixed,
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
}));
