import { Box, Slide } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ICard } from '../../../services/cards.service';
import { Flipcard } from './Flipcard';
import { Notecard } from './Notecard';

interface Props {
  card: ICard;
  flipped: boolean;
  flipAll: boolean;
  cardIndex: number;
  isBottomCard: boolean;
}

export const NotecardWrapper: React.FC<Props> = ({
  card: nextCard,
  flipped: nextCardFlipped,
  flipAll,
  cardIndex: nextCardIndex,
  isBottomCard,
}) => {
  const [lastCard, setLastCard] = useState(nextCard);
  const [lastCardFlipped, setLastCardFlipped] = useState(nextCardFlipped);
  const [nextCardOut, setNextCardOut] = useState(false);
  const [prevCardIn, setPrevCardIn] = useState(false);
  const [lastCardIndex, setLastCardIndex] = useState(0);
  const [flipIn, setFlipIn] = useState(false);

  useEffect(() => {
    setFlipIn(true);
    setTimeout(() => {
      setFlipIn(false);
    }, 800);
  }, [nextCardFlipped]);

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
      <Notecard
        card={prevCardIn ? lastCard : nextCard}
        flipped={prevCardIn ? lastCardFlipped : flipAll ? true : false}
        isBottomCard={isBottomCard}
      />

      {/* NEXT CARD SLIDES OFF TO */}
      <Slide
        in={!nextCardOut}
        // appear={false}
        timeout={{
          enter: 0,
          exit: 150,
        }}
        direction="left"
      >
        <Box
          sx={{
            position: 'absolute',
            top: isBottomCard ? 0 : -6,
            right: isBottomCard ? 0 : 6,
          }}
        >
          {prevCardIn || (
            <Notecard
              card={lastCard}
              flipped={lastCardFlipped}
              isBottomCard={isBottomCard}
            />
          )}
        </Box>
      </Slide>
      {/* PREVIOUS CARD SLIDE IN FROM RIGHT */}
      <Slide
        in={prevCardIn}
        timeout={{
          enter: 150,
          exit: 0,
        }}
        direction="left"
      >
        <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
          <Notecard
            card={nextCard}
            flipped={flipAll ? true : false}
            isBottomCard={isBottomCard}
          />
        </Box>
      </Slide>
      {/* <Box
        sx={{
          position: 'absolute',
          top: isBottomCard ? 0 : -6,
          right: isBottomCard ? 0 : 6,
        }}
      >
        {flipIn && (
          <Flipcard
            card={nextCard}
            flipped={nextCardFlipped}
            isBottomCard={false}
          />
        )}
      </Box> */}
    </Box>
  );
};
