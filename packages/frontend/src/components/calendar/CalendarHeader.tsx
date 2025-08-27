import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

export const CalendarHeader = () => {
  return (
    <Box>
      <Typography variant="h6" component="div" display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        Calendar
      </Typography>
    </Box>
  );
};
