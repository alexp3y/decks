import React, { useEffect } from 'react';
import EditCardList from './EditDeckScreen/EditCardList';
import EditDeckColor from './EditDeckScreen/EditDeckColor';
import { Box, Container } from '@mui/material';
import EditDeckDetails from './EditDeckScreen/EditDeckDetails';
import { useParams } from 'react-router-dom';
import { useDecks } from '../DeckContext';

const EditDeckScreen: React.FC = () => {
  const { deckId } = useParams();
  const decks = useDecks();

  useEffect(() => {
    if (!decks.deck) {
      //
      decks.openDeck(deckId!);
    }
  }, []);
  return (
    <Container
      sx={{
        mt: 4,
        height: '100%',
        width: '100%',
        display: 'flex',
        overflowY: 'scroll',
        // maxHeight: '100%',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        gap: 3,
      }}
      maxWidth="lg"
    >
      {decks.deck ? (
        <>
          <Box
            sx={{
              width: {
                md: '40%',
              },
              height: '100%',
            }}
          >
            <EditDeckDetails />
            <EditDeckColor />
          </Box>
          <EditCardList />
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </Container>
  );
};

export default EditDeckScreen;
