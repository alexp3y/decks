import React from 'react';
import Navbar from './Layout/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Layout/Footer';
import { Box } from '@mui/material';

const Layout: React.FC = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
