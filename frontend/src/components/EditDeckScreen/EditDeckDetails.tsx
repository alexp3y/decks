import { Box, TextField } from '@mui/material';
import React from 'react';
import { useDecks } from '../../DeckContext';

const EditDeckDetails: React.FC = () => {
  const decks = useDecks();
  return (
    <Box sx={{ m: 1, height: '70px' }}>
      <TextField
        label="Deck Title"
        variant="outlined"
        sx={{ width: '100%' }}
        inputProps={{ style: { fontSize: '30px' } }}
        value={decks.deck?.name}
      />
    </Box>
  );
};

export default EditDeckDetails;
