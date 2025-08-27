import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { FC } from 'react';

export const Footer: FC = () => {
  return (
    <Box component="footer" p={2} textAlign="center" bgcolor="grey.100" mt="auto">
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Created by Ivan Ruskevych.
      </Typography>
    </Box>
  );
};
