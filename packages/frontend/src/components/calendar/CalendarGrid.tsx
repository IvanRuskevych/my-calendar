import { type FC, useMemo } from 'react';
import { CalendarGridWrapper, CellWrapper } from '~/components/calendar/calendar.styles.ts';
import { CalendarGridCell } from '~/components/calendar/CalendarGridCell.tsx';
import type { CalendarGridProps } from '~/types';
import { getWeekDays } from '~/utils';

export const CalendarGrid: FC<CalendarGridProps> = ({ daysArray, today, currentMonth }) => {
  const weekDays = useMemo(() => getWeekDays(), []);

  return (
    <>
      <CalendarGridWrapper isHeader>
        {weekDays.map((day) => (
          <CellWrapper key={day} isHeader>
            {day}
          </CellWrapper>
        ))}
      </CalendarGridWrapper>
      <CalendarGridWrapper>
        {daysArray.map((dayItem) => (
          <CalendarGridCell key={dayItem.unix()} dayItem={dayItem} today={today} currentMonth={currentMonth} />
        ))}
      </CalendarGridWrapper>
    </>
  );
};
