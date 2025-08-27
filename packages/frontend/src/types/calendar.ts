import type { Moment } from 'moment';

export interface CalendarProps {
  startDay: Moment;
  today: Moment;
}

export interface CalendarGridCellProps {
  dayItem: Moment;
  today: Moment;
}

export interface CellWrapperProps {
  isWeekend: boolean;
  isToday: boolean;
}
