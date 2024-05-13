import { SxProps, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import React from 'react';
import { useDeckData } from '../../DeckDataContext';
import { CloseButton } from './TitleBanner/CloseButton';
import { useLocation } from 'react-router-dom';
import { BackButton } from './TitleBanner/BackButton';

export const TitleBanner: React.FC = () => {
  const deckData = useDeckData();
  const location = useLocation();

  return (
    <Slide in={!!deckData.deck} direction="down" timeout={500}>
      <Box sx={styles}>
        {deckData.deck &&
          (location.pathname.includes('/edit') ? (
            <>
              <BackButton />
              <Typography variant="h4">Edit Deck</Typography>
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

const styles: SxProps = {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
};
