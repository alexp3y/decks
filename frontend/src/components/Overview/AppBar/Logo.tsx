import { Box, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DeckColor } from '../../../services/decks.service';
import { getCardImage } from '../../../utils/get-card-image';
import { useDeckData } from '../../../DeckDataContext';

export const Logo: React.FC = () => {
  const navigate = useNavigate();
  const deckData = useDeckData();

  const handleClick = () => {
    deckData.closeDeck();
    navigate('/');
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        ':hover': {
          cursor: 'pointer',
        },
        ...getCardImage(DeckColor.YELLOW, false),
        backgroundSize: 'cover',
        width: {
          xs: '115px',
          sm: '125px',
        },
        height: {
          xs: '60px',
          sm: '65px',
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '16px',
      }}
    >
      <Typography
        sx={{
          color: 'black',
          fontFamily: 'Indie Flower',
          mt: 1,
          fontSize: {
            xs: 30,
            sm: 34,
          },
        }}
      >
        DECKSY
      </Typography>
    </Box>
  );
};
