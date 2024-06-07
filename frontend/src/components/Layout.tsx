import React from 'react';
import Navbar from './Layout/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Layout/Footer';
import { Box } from '@mui/material';

const Layout: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Navbar />
      <Box sx={{ width: '100%', flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
