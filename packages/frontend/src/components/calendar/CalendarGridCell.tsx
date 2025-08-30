import Box from '@mui/material/Box';
import type { FC } from 'react';
import { CellWrapper, CurrentDayWrapper, DayWrapper } from '~/components/calendar/calendar.styles.ts';
import { MOMENT_KEYS } from '~/shared/constants';
import type { CalendarGridCellProps } from '~/types';

export const CalendarGridCell: FC<CalendarGridCellProps> = ({ dayItem, today, currentMonth }) => {
  const isWeekend = dayItem.day() === 0 || dayItem.day() === 6;
  const isToday = dayItem.isSame(today, MOMENT_KEYS.DAY);
  const isCurrentMonth = dayItem.month() === currentMonth;

  return (
    <CellWrapper isCurrentMonth={isCurrentMonth} isWeekend={isWeekend}>
      <Box display="flex" justifyContent="flex-end">
        {/*<RowInCell justifyContent="flex-end">*/}
        <DayWrapper>
          <CurrentDayWrapper isToday={isToday}>{dayItem.format('D')}</CurrentDayWrapper>
        </DayWrapper>
        {/*</RowInCell>*/}
      </Box>
    </CellWrapper>
  );
};
