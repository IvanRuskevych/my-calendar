import moment, { type Moment } from 'moment';
import { useCallback, useMemo, useState } from 'react';
import { MOMENT_KEYS } from '~/shared/constants';
import type { UseCalendarResult } from '~/types';

export const useCalendar = (initialDate: Moment = moment()): UseCalendarResult => {
  const [currentDate, setCurrentDate] = useState<Moment>(initialDate);
  const today = useMemo(() => moment(), []);

  const calendarData = useMemo(() => {
    const startDay = currentDate.clone().startOf(MOMENT_KEYS.MONTH).startOf(MOMENT_KEYS.WEEK).clone();
    const currentMonth = currentDate.clone().month();

    //   calendar grid 6*7=42
    const totalDays = 42;
    const daysArray = [...Array(totalDays).keys()].map(() => startDay.add(1, MOMENT_KEYS.DAY).clone());

    return {
      today,
      daysArray,
      currentMonth,
    };
  }, [today, currentDate]);

  // Month
  const nextMonth = useCallback(() => {
    setCurrentDate((prev) => prev.clone().add(1, MOMENT_KEYS.MONTH));
  }, []);

  const prevMonth = useCallback(() => {
    setCurrentDate((prev) => prev.clone().subtract(1, MOMENT_KEYS.MONTH));
  }, []);

  const resetToToday = useCallback(() => {
    setCurrentDate(moment()); // не today, бо він "застиглий", а новий момент
  }, []);

  return {
    ...calendarData,
    currentDate,
    nextMonth,
    prevMonth,
    resetToToday,
  };
};
