import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import { Logo } from '../Overview/AppBar/Logo';
import { TitleBanner } from '../Overview/TitleBanner';
import ColorModeSwitch from './Navbar/ColorModeSwitch';
import ProfileMenu from './Navbar/ProfileMenu';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'primary', px: 1 }}>
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
            <Box sx={{ display: 'flex', gap: 1 }}>
              <ColorModeSwitch />
              <ProfileMenu />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
