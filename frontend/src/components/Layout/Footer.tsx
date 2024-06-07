import { Box, useTheme } from '@mui/material';
import React from 'react';
import { Copyright } from './Copyright';

const Footer: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '100%',
        height: '100px',
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
