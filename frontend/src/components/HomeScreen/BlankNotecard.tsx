import { Box, Button, useTheme } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CARD_DARK_FADE, CARD_LIGHT_FADE } from '../../constants';
import { DeckColor } from '../../services/decks.service';
import { getCardImage } from '../../utils/get-card-image';

interface Props {
  color: DeckColor;
  rotate: number;
  rotated?: boolean;
  top?: boolean;
}

export const BlankNotecard: React.FC<Props> = ({
  top,
  color,
  rotate,
  rotated,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('./decks');
  };

  return (
    <Button
      disabled={!top}
      sx={{
        ...getCardImage(color, false),
        width: '50vh',
        height: '30vh',
        backgroundSize: 'cover',
        color: theme.palette.text.primary,
        fontFamily: 'Indie Flower',
        fontSize: 64,
        position: 'absolute',
        transitionDuration: 500,
        p: 0,
        top: rotate,
        left: rotate,
        transition: 'all 100ms ease-out',
        ...(rotated && {
          transform: `rotate(${rotate}deg) scale(1.2)`,
        }),
        boxShadow: 3,
        backgroundRepeat: 'no-repeat',
      }}
      onClick={handleClick}
    >
      <Box
        sx={{
          height: '101%',
          width: '100%',
          placeContent: 'center',
          textAlign: 'center',
          backgroundColor:
            theme.palette.mode === 'dark'
              ? `rgba(0,0,0,${CARD_DARK_FADE})`
              : `rgba(255,255,255,${CARD_LIGHT_FADE})`,
        }}
      >
        Enter App
      </Box>
    </Button>
  );
};
