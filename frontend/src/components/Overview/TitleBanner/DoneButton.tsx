import DoneIcon from '@mui/icons-material/Done';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDeckData } from '../../../DeckDataContext';
import CloseIcon from '@mui/icons-material/Close';

export const DoneButton: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const deckData = useDeckData();

  const handleBackClick = () => {
    const path = location.pathname.substring(0, location.pathname.length - 5);
    deckData.closeDeck();
    navigate(path);
  };

  return (
    <IconButton size="medium" onClick={handleBackClick} title="Done">
      <CloseIcon fontSize="medium" />
    </IconButton>
  );
};
