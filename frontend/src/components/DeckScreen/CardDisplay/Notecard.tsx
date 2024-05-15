import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { useDeckData } from '../../../DeckDataContext';
import { ICard } from '../../../services/cards.service';
import { getCardImage } from '../../../utils/get-card-image';
import { CARD_DARK_FADE, CARD_LIGHT_FADE } from '../../../constants';

interface Props {
  card: ICard;
  flipped: boolean;
}

export const Notecard: React.FC<Props> = ({ card, flipped }) => {
  const deckData = useDeckData();
  const theme = useTheme();

  const onStarClick = () => {};

  return (
    <Paper
      sx={{
        ...getCardImage(deckData.deck!.color, flipped),
        width: '85vh',
        height: '50vh',
        backgroundSize: 'cover',
        position: 'relative',
        boxShadow: 3,
        backgroundRepeat: 'no-repeat',
      }}
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
        <Typography sx={{ mb: 3, whiteSpace: 'pre-line' }} variant="h3">
          {flipped ? card.back : card.front}
        </Typography>
        <IconButton
          size="large"
          sx={{ position: 'absolute', top: 0, right: 0, mt: 0.5, mr: 1 }}
          onClick={onStarClick}
        >
          {card.starred ? (
            <StarIcon fontSize="large" />
          ) : (
            <StarOutlineIcon fontSize="large" />
          )}
        </IconButton>
      </Box>
    </Paper>
  );
};
