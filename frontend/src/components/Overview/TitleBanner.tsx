import { SxProps, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import React from 'react';
import { useDecks } from '../../DeckContext';
import { CloseButton } from './TitleBanner/CloseButton';
import { useLocation } from 'react-router-dom';
import { BackButton } from './TitleBanner/BackButton';

export const TitleBanner: React.FC = () => {
  const decks = useDecks();
  const location = useLocation();

  return (
    <Slide in={!!decks.deck} direction="down" timeout={500}>
      <Box sx={styles}>
        {decks.deck &&
          (location.pathname.includes('/edit') ? (
            <>
              <BackButton />
              <Typography variant="h4">Edit Deck</Typography>
            </>
          ) : (
            <>
              <Typography variant="h4">{decks.deck!.name}</Typography>
              <CloseButton />
            </>
          ))}
      </Box>
    </Slide>
  );
};

const styles: SxProps = {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
};
