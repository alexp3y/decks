import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { DeckColor } from '../services/decks.service';
import { BlankNotecard } from './HomeScreen/BlankNotecard';
import { useDeckData } from '../DeckDataContext';

const HomeScreen: React.FC = () => {
  const [rotated, setRotated] = useState(false);
  const deckData = useDeckData();

  useEffect(() => {
    if (deckData.deck) {
      deckData.closeDeck();
    }
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
        height: '85vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        pt: 5,
        gap: 10,
      }}
    >
      <Typography variant="h2">WELCOME TO DECKSY!</Typography>
      <Box
        onMouseEnter={() => setRotated(true)}
        onMouseLeave={() => setRotated(false)}
        sx={{
          position: 'relative',
          width: '50vh',
          height: '30vh',
        }}
      >
        <BlankNotecard color={DeckColor.GREEN} rotate={12} rotated={rotated} />
        <BlankNotecard color={DeckColor.ORANGE} rotate={8} rotated={rotated} />
        <BlankNotecard color={DeckColor.BLUE} rotate={4} rotated={rotated} />
        <BlankNotecard color={DeckColor.PINK} rotate={0} rotated={rotated} />
        <BlankNotecard
          color={DeckColor.DEFAULT}
          rotate={-4}
          rotated={rotated}
          top
        />
      </Box>
    </Container>
  );
};

export default HomeScreen;
