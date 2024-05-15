import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';
import { DeckSyncStatus, useDeckData } from '../../DeckDataContext';
import { IDeck, decksService } from '../../services/decks.service';
import { debounceAsync } from '../../utils/debounce-async';
import EditDeckColor from './EditDeckColor';

const updateDeck = (deck: IDeck, callback) => {
  callback(DeckSyncStatus.LOADING);
  return decksService.update(deck.id, deck);
};

const debouncedUpdateDeck = debounceAsync(updateDeck, 1000);

const EditDeckDetails: React.FC = () => {
  const deckData = useDeckData();
  const [deck, setDeck] = useState<IDeck>(deckData.deck!);

  const handleNameChange = async (e) => {
    if (deckData.syncStatus === DeckSyncStatus.SYNCED) {
      deckData.setSyncStatus(DeckSyncStatus.CHANGED);
    }
    const updated = {
      ...deck,
      name: e.target.value,
    };
    setDeck(updated);
    debouncedUpdateDeck(updated, deckData.setSyncStatus).then(() => {
      updateSyncStatus();
    });
  };

  const handleColorChange = async (e) => {
    if (deckData.syncStatus === DeckSyncStatus.SYNCED) {
      deckData.setSyncStatus(DeckSyncStatus.CHANGED);
    }
    const updated = {
      ...deck,
      color: e.target.value,
    };
    setDeck(updated);
    debouncedUpdateDeck(updated, deckData.setSyncStatus).then(() => {
      updateSyncStatus();
    });
  };

  const updateSyncStatus = () => {
    deckData.setSyncStatus(DeckSyncStatus.SYNCED);
  };

  return (
    <Box
      sx={{
        width: {
          md: '40%',
        },
        height: '100%',
      }}
    >
      <Box
        sx={{
          m: 1,
          height: '70px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <TextField
          label="Deck Name"
          variant="outlined"
          size="small"
          sx={{ maxWidth: '400px', width: '100%' }}
          inputProps={{ style: { fontSize: '28px' } }}
          value={deck.name}
          onChange={handleNameChange}
        />
      </Box>
      <EditDeckColor color={deck.color} onColorChange={handleColorChange} />
    </Box>
  );
};

export default EditDeckDetails;
