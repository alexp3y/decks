import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDeckData } from '../DeckDataContext';
import EditCardList from './EditDeckScreen/EditCardList';
import EditDeckDetails from './EditDeckScreen/EditDeckDetails';

const EditDeckScreen: React.FC = () => {
  const { deckId } = useParams();
  const deckData = useDeckData();

  useEffect(() => {
    if (!deckData.deck) {
      deckData.openDeck(deckId!);
    }
  }, []);

  return (
    <Container
      sx={{
        my: 4,
        height: '100%',
        width: '100%',
        display: 'flex',
        overflowY: 'scroll',
        minHeight: '90vh',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        gap: 3,
      }}
      maxWidth="lg"
    >
      {deckData.deck ? (
        <>
          <EditDeckDetails />
          <EditCardList />
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </Container>
  );
};

export default EditDeckScreen;
