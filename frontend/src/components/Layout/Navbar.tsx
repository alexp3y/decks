import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { Logo } from '../Overview/AppBar/Logo';
import ColorModeSwitch from './ColorModeSwitch';

import Box from '@mui/material/Box';
import React from 'react';
import { TitleBanner } from '../Overview/TitleBanner';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'primary' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Logo />
            <TitleBanner />
            <ColorModeSwitch />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
