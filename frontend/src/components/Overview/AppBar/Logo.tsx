import { Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoImage from '../../../assets/images/NC-Logo.jpg';

export const Logo: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box
      // sx={styles}
      onClick={() => navigate('/')}
      sx={{
        ':hover': {
          cursor: 'pointer',
        },
        background: `url(${LogoImage})`,
        backgroundSize: 'cover',
        width: '115px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '16px',
      }}
    >
      <h3 style={{ color: 'black' }}>DECKS</h3>
    </Box>
  );
};
