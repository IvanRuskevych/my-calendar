import Box from '@mui/material/Box';
import type { FC } from 'react';
import { CellWrapper, DayWrapper } from '~/components/calendar/calendar.styles.ts';
import { MOMENT_KEYS } from '~/shared/constants';
import type { CalendarGridCellProps } from '~/types';

export const CalendarGridCell: FC<CalendarGridCellProps> = ({ dayItem, today }) => {
  const isWeekend = dayItem.day() === 0 || dayItem.day() === 6;
  const isToday = dayItem.isSame(today, MOMENT_KEYS.DAY);

  return (
    <CellWrapper key={dayItem.format(MOMENT_KEYS.YYYYMMDD)} isWeekend={isWeekend} isToday={isToday}>
      <Box display="flex" justifyContent="flex-end">
        <DayWrapper>{dayItem.format('D')}</DayWrapper>
      </Box>
    </CellWrapper>
  );
};
