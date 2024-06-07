import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Box, IconButton, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import { ColorModeContext } from '../../../Bootstrap';

const ColorModeSwitch: React.FC = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        width: 'fit-content',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon color="primary" />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
};

export default ColorModeSwitch;
