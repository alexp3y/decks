import { Box, useTheme } from '@mui/material';
import React from 'react';
import { Copyright } from './Copyright';

const Footer: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: '100%',
        p: 2,
        ...(theme.palette.mode === 'light' && {
          backgroundColor: theme.palette.secondary.light,
        }),
      }}
    >
      <Copyright />
    </Box>
  );
};

export default Footer;
