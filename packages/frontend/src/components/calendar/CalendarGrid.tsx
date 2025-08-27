import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import type { FC } from 'react';
import { CalendarGridCell } from '~/components/calendar/CalendarGridCell.tsx';
import { MOMENT_KEYS, TOTAL_DAYS } from '~/shared/constants';
import type { CalendarProps } from '~/types';

export const CalendarGrid: FC<CalendarProps> = ({ startDay, today }) => {
  const theme = useTheme();
  const day = startDay.clone();
  const daysArray = [...Array(TOTAL_DAYS).keys()].map(() => day.add(1, MOMENT_KEYS.DAY).clone());

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(7, 1fr)"
      gridTemplateRows="repeat(6, 1fr)"
      gap="1px"
      bgcolor={theme.palette.customColors.dividerFixed}
    >
      {daysArray.map((dayItem) => (
        <CalendarGridCell key={dayItem.format(MOMENT_KEYS.YYYYMMDD)} dayItem={dayItem} today={today} />
      ))}
    </Box>
  );
};
