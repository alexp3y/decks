import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { IDeck, decksService } from '../services/decks.service';
import { BlankDeck } from './OverviewScreen/BlankDeck';
import { Deck } from './OverviewScreen/Deck';
import { useDeckData } from '../DeckDataContext';

const OverviewScreen: React.FC = () => {
  const deckData = useDeckData();
  const [decks, setDecks] = useState<IDeck[]>();

  useEffect(() => {
    if (deckData.deck) deckData.closeDeck();
    decksService.findAll().then((d) => {
      setDecks(d);
    });
  }, []);

  const handleNewDeckClick = async () => {
    const newDeck = await decksService.createOne('New Deck');
    setDecks([newDeck, ...decks!]);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: '100%',
        width: '100vw',
        p: 5,
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
        <BlankDeck onClick={handleNewDeckClick} />
        {decks?.map((d) => (
          <Deck deck={d} />
        ))}
      </Box>
    </Box>
  );
};

export default OverviewScreen;
