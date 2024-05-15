import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDeckData } from '../DeckDataContext';
import { BlankCard } from './DeckScreen/CardDisplay/BlankCard';
import { NotecardWrapper } from './DeckScreen/CardDisplay/NotecardWrapper';
import { ControlPanel } from './DeckScreen/ControlPanel';

const DeckScreen: React.FC = () => {
  const { deckId } = useParams();
  const deckData = useDeckData();
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    deckData.openDeck(deckId!);
  }, [deckData.data]);

  return deckData.deck ? (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowX: 'clip',
        width: '100%',
        height: '100%',
        gap: 3.5,
        mt: 5,
      }}
    >
      <Typography variant="h5">
        {cardIndex + 1} / {deckData.cards.length}{' '}
        {flipped ? '(Back)' : '(Front)'}
      </Typography>
      {deckData.cards.length ? (
        <NotecardWrapper
          card={deckData.cards[cardIndex]}
          flipped={flipped}
          cardIndex={cardIndex}
        />
      ) : (
        <BlankCard state={null} />
      )}
      <ControlPanel
        firstCard={cardIndex === 0}
        lastCard={cardIndex === deckData.cards.length - 1}
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
    </Container>
  ) : (
    <></>
  );
};

export default DeckScreen;
