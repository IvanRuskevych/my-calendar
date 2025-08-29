import type { BoxProps } from '@mui/material';
import type { Moment } from 'moment';

export interface UseCalendarResult {
  today: Moment;
  daysArray: Moment[];
  currentDate: Moment;
  currentMonth: number;
  nextMonth: () => void;
  prevMonth: () => void;
  resetToToday: () => void;
}

export interface CalendarGridCellProps {
  dayItem: Moment;
  today: UseCalendarResult['today'];
  currentMonth: UseCalendarResult['currentMonth'];
}

export type CalendarGridProps = Pick<UseCalendarResult, 'daysArray' | 'today' | 'currentMonth'>;
export type CalendarMonitorProps = Pick<UseCalendarResult, 'currentDate' | 'prevMonth' | 'resetToToday' | 'nextMonth'>;

export interface CellWrapperProps extends BoxProps {
  isWeekend: boolean;
  isCurrentMonth: boolean;
}

export interface CurrentDayWrapperProps extends BoxProps {
  isToday: boolean;
}

export interface RowInCellProps extends BoxProps {
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between';
}
