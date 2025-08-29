import moment from 'moment';

export const getWeekDays = (format: 'ddd' | 'dddd' = 'ddd'): string[] => {
  return [...Array(7).keys()].map((i) =>
    moment()
      .isoWeekday(i + 1)
      .format(format),
  );
};
