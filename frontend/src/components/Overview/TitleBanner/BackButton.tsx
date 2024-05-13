import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    console.log('path is' + location.pathname.substring(-5));
    navigate('.', { relative: 'path' });
  };

  return (
    <IconButton sx={{ mr: 2 }} size="medium" onClick={handleBackClick}>
      <ArrowBackIcon fontSize="medium" />
    </IconButton>
  );
};
