import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDecks } from '../DeckContext';
import { BlankCard } from './DeckScreen/CardDisplay/BlankCard';
import { ControlPanel } from './DeckScreen/ControlPanel';
import { Notecard } from './DeckScreen/CardDisplay/Notecard';

const DeckScreen: React.FC = () => {
  const { deckId } = useParams();
  const decks = useDecks();
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    decks.openDeck(deckId!);
  }, []);

  return decks.deck ? (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // justifyContent: 'center',
          height: '100%',
          gap: 3.5,
          mt: 5,
        }}
      >
        <Typography variant="h5">
          {cardIndex + 1} / {decks.cards.length}{' '}
          {flipped ? '(Back)' : '(Front)'}
        </Typography>
        {decks.cards.length ? (
          <Notecard card={decks.cards[cardIndex]} flipped={flipped} />
        ) : (
          <BlankCard state={null} />
        )}
        <ControlPanel
          firstCard={cardIndex === 0}
          lastCard={cardIndex === decks.cards.length - 1}
          onPrevCard={() => {
            setCardIndex(cardIndex - 1);
            if (flipped) setFlipped(false);
          }}
          onNextCard={() => {
            setCardIndex(cardIndex + 1);
            if (flipped) setFlipped(false);
          }}
          onFlipCard={() => setFlipped(!flipped)}
        />
      </Box>
    </>
  ) : (
    <></>
  );
};

export default DeckScreen;
