import { Box, TextField } from '@mui/material';
import React from 'react';
import { useDeckData } from '../../DeckDataContext';

const EditDeckDetails: React.FC = () => {
  const deckData = useDeckData();
  return (
    <Box sx={{ m: 1, height: '70px' }}>
      <TextField
        label="Deck Title"
        variant="outlined"
        sx={{ width: '100%' }}
        inputProps={{ style: { fontSize: '30px' } }}
        value={deckData.deck?.name}
      />
    </Box>
  );
};

export default EditDeckDetails;
