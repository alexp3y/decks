import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDeckData } from '../../DeckDataContext';
import { CloseButton } from './TitleBanner/CloseButton';
import { DoneButton } from './TitleBanner/DoneButton';

export const TitleBanner: React.FC = () => {
  const deckData = useDeckData();
  const location = useLocation();

  return (
    <Slide in={!!deckData.deck} direction="down" timeout={500}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          gap: 1.5,
        }}
      >
        {deckData.deck &&
          (location.pathname.includes('/edit') ? (
            <>
              <Typography variant="h4">Edit Deck</Typography>
              <DoneButton />
            </>
          ) : (
            <>
              <Typography variant="h4">{deckData.deck!.name}</Typography>
              <CloseButton />
            </>
          ))}
      </Box>
    </Slide>
  );
};
