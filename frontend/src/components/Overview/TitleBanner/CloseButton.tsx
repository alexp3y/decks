import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDecks } from '../../../DeckContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const CloseButton: React.FC = () => {
  const navigate = useNavigate();
  const decks = useDecks();
  const location = useLocation();

  const handleCloseClick = () => {
    if (location.pathname.includes('/edit')) {
      navigate('.');
    } else {
      decks.closeDeck();
      navigate('/');
    }
  };

  return (
    <IconButton sx={{ mr: 2 }} size="medium" onClick={handleCloseClick}>
      {location.pathname.includes('/edit') ? (
        <ArrowBackIcon fontSize="medium" />
      ) : (
        <CloseIcon fontSize="medium" />
      )}
    </IconButton>
  );
};
