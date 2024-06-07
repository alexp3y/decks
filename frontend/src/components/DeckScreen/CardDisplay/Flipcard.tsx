import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { ICard } from '../../../services/cards.service';

interface Props {
  card: ICard;
  flipped: boolean;
  isBottomCard: boolean;
}

export const Flipcard: React.FC<Props> = ({ card, flipped, isBottomCard }) => {
  useEffect(() => {
    console.log('transforming');
    document
      .getElementById('flip-container')
      ?.animate()
      ?.style.setProperty('transform', 'rotateY(180deg)');
  }, []);
  return (
    <Box
      sx={{
        backgroundColor: 'transparent',
        width: '85vh',
        height: '50vh',
        perspective: '1000px',
      }}
    >
      <Box
        id="flip-container"
        sx={{
          postion: 'relative',
          width: '100%',
          height: '100%',
          transition: 'transform 800ms',
          transformStyle: 'preserve-3d',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
          }}
        >
          FLIPPING FRONT
          {/* <Notecard card={card} flipped={false} isBottomCard={false} /> */}
        </Box>
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            backgroundColor: 'dodgerblue',
            transform: 'rotateY(180deg)',
          }}
        >
          FLIPPING BACK
          {/* <Notecard card={card} flipped={true} isBottomCard={false} /> */}
        </Box>
      </Box>
    </Box>
  );
};
