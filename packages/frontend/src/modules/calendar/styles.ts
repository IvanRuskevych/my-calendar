import type { StyledComponent } from '@emotion/styled';
import { type BoxProps, styled } from '@mui/material';
import Box from '@mui/material/Box';

export const ShadowWrapper: StyledComponent<BoxProps> = styled(Box)({
  borderRadius: 4,
  overflow: 'hidden',
  border: '1px solid #737374',
  boxShadow: '0 0 0 1px #1a1a1a 0 8px 20px 6px #888',
});
