import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Box, Paper, Slide, Typography, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React, { useEffect, useState } from 'react';
import { useDecks } from '../../../DeckContext';
import { ICard } from '../../../services/cards.service';
import { getCardImage } from '../../../utils/get-card-image';

interface Props {
  card: ICard;
  flipped: boolean;
}

export const Notecard: React.FC<Props> = ({ card: initialCard, flipped }) => {
  const decks = useDecks();
  const theme = useTheme();
  const [card, setCard] = useState(initialCard);
  const [flipIn, setFlipIn] = useState(true);
  const [cardIn, setCardIn] = useState(true);

  const onStarClick = () => {};

  useEffect(() => {
    // setFlipIn(false);
    // setTimeout(() => {
    //   setFlipIn(true);
    // }, 100);
  }, [flipped]);

  useEffect(() => {
    setCardIn(false);
    setCard(initialCard);
    setTimeout(() => {
      setCardIn(true);
    }, 300);
  }, [initialCard]);

  return (
    <Slide
      in={cardIn}
      appear={false}
      timeout={{
        enter: 0,
        exit: 300,
      }}
      direction="right"
    >
      <Paper
        sx={{
          ...getCardImage(decks.deck!.color, flipped),
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
                ? 'rgba(0,0,0,.5)'
                : 'rgba(255,255,255,.3)',
          }}
        >
          {cardIn && (
            <Typography sx={{ mb: 3, whiteSpace: 'pre-line' }} variant="h3">
              {flipped ? card.back : card.front}
            </Typography>
          )}
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
    </Slide>
  );
};
