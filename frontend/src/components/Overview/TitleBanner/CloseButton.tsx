import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDeckData } from '../../../DeckDataContext';

export const CloseButton: React.FC = () => {
  const navigate = useNavigate();
  const deckData = useDeckData();

  const handleCloseClick = () => {
    navigate('/');
    deckData.closeDeck();
  };

  return (
    <IconButton
      sx={{ mr: 2 }}
      size="medium"
      onClick={handleCloseClick}
      title="Close Deck"
    >
      <CloseIcon fontSize="medium" />
    </IconButton>
  );
};
