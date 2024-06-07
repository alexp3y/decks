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
  const editMode = location.pathname.includes('/edit');

  return (
    <Slide in={!!deckData.deck} direction="down" timeout={500}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          gap: 2,
        }}
      >
        {deckData.deck && (
          <Box sx={{ display: 'flex', ml: '70px' }}>
            <Typography variant="h4">
              {editMode ? 'Edit Deck' : deckData.deck!.name}
            </Typography>
            <Box sx={{ width: '50px', mx: '10px' }}>
              {editMode ? <DoneButton /> : <CloseButton />}
            </Box>
          </Box>
        )}
      </Box>
    </Slide>
  );
};
