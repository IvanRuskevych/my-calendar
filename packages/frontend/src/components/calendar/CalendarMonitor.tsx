import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { FC } from 'react';
import { ButtonWrapper, TodayButton } from '~/components/calendar/calendar.styles.ts';
import { MOMENT_FORMAT } from '~/shared/constants';
import type { CalendarMonitorProps } from '~/types';

export const CalendarMonitor: FC<CalendarMonitorProps> = ({ currentDate, prevMonth, resetToToday, nextMonth }) => {
  const currentMonthFormated = currentDate?.format(MOMENT_FORMAT.MMMM);
  const currentYearFormated = currentDate?.format(MOMENT_FORMAT.YYYY);

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      p={1}
      bgcolor={(theme) => theme.palette.background.paper}
      color={(theme) => theme.palette.text.secondary}
    >
      <Box display="flex" flexDirection="row" gap={2}>
        <Typography variant="h5" fontWeight="bold">
          {currentMonthFormated}
        </Typography>
        <Typography variant="h6">{currentYearFormated}</Typography>
      </Box>

      <Box>
        <ButtonWrapper onClick={prevMonth}>
          <ChevronLeftRoundedIcon />
        </ButtonWrapper>
        <TodayButton onClick={resetToToday}>Today</TodayButton>
        <ButtonWrapper onClick={nextMonth}>
          <ChevronRightRoundedIcon />
        </ButtonWrapper>
      </Box>
    </Box>
  );
};
