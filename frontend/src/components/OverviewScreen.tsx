import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDeckData } from '../DeckDataContext';
import { AddDeckButton } from './OverviewScreen/AddDeckButton';
import { Deck } from './OverviewScreen/Deck';

const OverviewScreen: React.FC = () => {
  const deckData = useDeckData();
  const [deckCreating, setDeckCreating] = useState(false);

  useEffect(() => {
    deckData.refreshDecks();
  }, []);

  const handleNewDeckClick = async () => {
    deckData.addDeck();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: '100%',
        width: '100vw',
        p: 7,
        mb: 10,
        flexGrow: 0,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: {
            md: 'flex-start',
            xs: 'center',
          },
          width: '90%',
          flexWrap: 'wrap',
          gap: {
            xs: 4,
            md: 6,
          },
        }}
      >
        <AddDeckButton onClick={handleNewDeckClick} />
        {deckData.decks.map((d) => (
          <Deck key={d.id} deck={d} />
        ))}
      </Box>
    </Box>
  );
};

export default OverviewScreen;
