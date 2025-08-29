import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import type { FC } from 'react';
import { CalendarGridCell } from '~/components/calendar/CalendarGridCell.tsx';
import type { CalendarGridProps } from '~/types';

export const CalendarGrid: FC<CalendarGridProps> = ({ daysArray, today, currentMonth }) => {
  const theme = useTheme();

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(7, 1fr)"
      gridTemplateRows="repeat(6, 1fr)"
      gap="1px"
      bgcolor={theme.palette.customColors.dividerFixed}
    >
      {daysArray.map((dayItem) => (
        <CalendarGridCell key={dayItem.unix()} dayItem={dayItem} today={today} currentMonth={currentMonth} />
      ))}
    </Box>
  );
};
