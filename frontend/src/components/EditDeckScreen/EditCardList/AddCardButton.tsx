import { Fab } from '@mui/material';
import React from 'react';
import { useDeckData } from '../../../DeckDataContext';
import AddIcon from '@mui/icons-material/Add';

const AddCardButton: React.FC = () => {
  const deckData = useDeckData();

  const handleAddCard = () => {
    deckData.addCard();
  };

  return (
    <Fab
      color="primary"
      sx={{ boxShadow: 2 }}
      size="large"
      aria-label="add"
      onClick={handleAddCard}
    >
      <AddIcon />
    </Fab>
  );
};

export default AddCardButton;
