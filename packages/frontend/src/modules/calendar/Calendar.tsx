import moment, { type Moment } from 'moment';
import type { FC } from 'react';
import { CalendarGrid } from '~/components/calendar/CalendarGrid.tsx';
import { CalendarHeader } from '~/components/calendar/CalendarHeader.tsx';

export const Calendar: FC = () => {
  const startDay: Moment = moment().startOf('month').startOf('week');
  const today = moment();

  return (
    <>
      <CalendarHeader />
      <CalendarGrid startDay={startDay} today={today} />
    </>
  );
};
