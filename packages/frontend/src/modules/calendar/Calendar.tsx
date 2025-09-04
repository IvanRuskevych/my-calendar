import type { FC } from 'react';
import { CalendarGrid } from '~/components/calendar/CalendarGrid.tsx';
import { CalendarHeader } from '~/components/calendar/CalendarHeader.tsx';
import { CalendarMonitor } from '~/components/calendar/CalendarMonitor.tsx';
import { useCalendar } from '~/hooks';
import { ShadowWrapper } from '~/modules/calendar/styles.ts';

export const Calendar: FC = () => {
  const calendar = useCalendar();

  return (
    <ShadowWrapper>
      <CalendarHeader />
      <CalendarMonitor {...calendar} />
      <CalendarGrid {...calendar} />
    </ShadowWrapper>
  );
};
