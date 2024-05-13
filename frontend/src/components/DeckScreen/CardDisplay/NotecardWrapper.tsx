import { Box, Grow, Slide } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ICard } from '../../../services/cards.service';
import { Notecard } from './Notecard';

interface Props {
  card: ICard;
  flipped: boolean;
  cardIndex: number;
}

export const NotecardWrapper: React.FC<Props> = ({
  card: nextCard,
  flipped: nextCardFlipped,
  cardIndex: nextCardIndex,
}) => {
  const [lastCard, setLastCard] = useState(nextCard);
  const [lastCardFlipped, setLastCardFlipped] = useState(nextCardFlipped);
  const [nextCardOut, setNextCardOut] = useState(false);
  const [prevCardIn, setPrevCardIn] = useState(false);
  const [lastCardIndex, setLastCardIndex] = useState(0);

  useEffect(() => {
    if (lastCardIndex < nextCardIndex) {
      setNextCardOut(true);
      setTimeout(() => {
        setNextCardOut(false);
        setLastCard(nextCard);
        setLastCardFlipped(nextCardFlipped);
        setLastCardIndex(nextCardIndex);
      }, 200);
    } else if (lastCardIndex > nextCardIndex) {
      setPrevCardIn(true);
      setTimeout(() => {
        setPrevCardIn(false);
        setLastCard(nextCard);
        setLastCardFlipped(nextCardFlipped);
        setLastCardIndex(nextCardIndex);
      }, 200);
    }
  }, [nextCard]);

  useEffect(() => {
    if (nextCardIndex === lastCardIndex) {
      setLastCardFlipped(nextCardFlipped);
    }
  }, [nextCardFlipped]);

  return (
    <Box sx={{ position: 'relative' }}>
      <Notecard card={nextCard} flipped={nextCardFlipped} />
      {/* NEXT CARD SLIDES OFF TO */}
      <Slide
        in={!nextCardOut}
        // appear={false}
        timeout={{
          enter: 0,
          exit: 200,
        }}
        direction="left"
      >
        <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
          <Notecard card={lastCard} flipped={lastCardFlipped} />
        </Box>
      </Slide>
      {/* PREVIOUS CARD SLIDE IN FROM RIGHT */}
      <Slide
        in={prevCardIn}
        timeout={{
          enter: 200,
          exit: 0,
        }}
        direction="left"
      >
        <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
          <Notecard card={nextCard} flipped={nextCardFlipped} />
        </Box>
      </Slide>
    </Box>
  );
};
