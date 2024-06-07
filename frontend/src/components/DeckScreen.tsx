import { Edit } from '@mui/icons-material';
import FlipIcon from '@mui/icons-material/Flip';
import StarIcon from '@mui/icons-material/Star';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDeckData } from '../DeckDataContext';
import { EditDeckButton } from './DeckScreen/CardDisplay/EditDeckButton';
import { NotecardWrapper } from './DeckScreen/CardDisplay/NotecardWrapper';
import { ControlPanel } from './DeckScreen/ControlPanel';
import { ControlButton } from './DeckScreen/ControlPanel/ControlButton';

const DeckScreen: React.FC = () => {
  const { deckId } = useParams();
  const deckData = useDeckData();
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [flipAll, setFlipAll] = useState(false);
  const [favorites, setFavorites] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  const handleFirstCard = () => {
    setCardIndex(0);
    if (flipAll) {
      setFlipped(true);
    } else {
      setFlipped(false);
    }
  };

  const handleLastCard = () => {
    setCardIndex(deckData.cards.length - 1);
    if (flipAll) {
      setFlipped(true);
    } else {
      setFlipped(false);
    }
  };

  const handlePrevCard = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
      if (flipAll) {
        setFlipped(true);
      } else {
        setFlipped(false);
      }
    }
  };

  const handleNextCard = () => {
    if (cardIndex < deckData.cards.length - 1) {
      setCardIndex(cardIndex + 1);
      if (flipAll) {
        setFlipped(true);
      } else {
        setFlipped(false);
      }
    }
  };

  const handleFlipCard = () => {
    setFlipped(!flipped);
  };

  const onEditClick = () => {
    navigate(`./edit`);
  };

  const handleWindowKeyDown = (e: KeyboardEvent) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  };

  const handleFlipAll = () => {
    if (!flipAll && !flipped) {
      setFlipped(true);
    } else if (flipAll && flipped) {
      setFlipped(false);
    }
    setFlipAll(!flipAll);
  };

  const handleFavorites = () => {
    setFavorites(!favorites);
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    switch (e.key) {
      case 'ArrowLeft':
        handlePrevCard();
        break;
      case 'ArrowRight':
        handleNextCard();
        break;
      case ' ':
      case 'ArrowUp':
      case 'ArrowDown':
        handleFlipCard();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    deckData.openDeck(deckId!);
  }, [deckId]);

  useEffect(() => {
    window.addEventListener('keydown', handleWindowKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleWindowKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  });

  return deckData.deck ? (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowX: 'clip',
        width: '100%',
        height: '100%',
        gap: 3.5,
        mt: 5,
        mb: 10,
      }}
    >
      {deckData.cards.length ? (
        <>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1 }}>
            <Typography sx={{ fontSize: 44, pr: 1 }} variant="h4">
              {deckData.cards.length === 0 ? 0 : cardIndex + 1}
            </Typography>
            <Typography sx={{ fontSize: 29 }}>/</Typography>
            <Typography sx={{ fontSize: 29 }}>
              {deckData.cards.length}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', mr: '140px' }}>
            <Box
              sx={{
                width: '140px',
                placeContent: 'center',
              }}
            >
              <Paper
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 3,
                  borderRadius: 5,
                  width: 'fit-content',
                }}
                variant={
                  theme.palette.mode === 'dark' ? 'outlined' : 'elevation'
                }
              >
                <ControlButton title="EDIT DECK" top onClick={onEditClick}>
                  <Edit style={iconStyles} />
                </ControlButton>
                <ControlButton
                  title="FLIP ALL"
                  onClick={handleFlipAll}
                  active={flipAll}
                >
                  <FlipIcon style={iconStyles} />
                </ControlButton>
                <ControlButton
                  title="FAVORITES"
                  bottom
                  onClick={handleFavorites}
                  active={favorites}
                >
                  <StarIcon style={iconStyles} />
                </ControlButton>
              </Paper>
            </Box>
            <NotecardWrapper
              card={deckData.cards[cardIndex]}
              flipped={flipped}
              flipAll={flipAll}
              cardIndex={cardIndex}
              isBottomCard={cardIndex === deckData.cards.length - 1}
            />
          </Box>
          <ControlPanel
            firstCard={cardIndex === 0}
            lastCard={cardIndex === deckData.cards.length - 1}
            onFirstCard={handleFirstCard}
            onLastCard={handleLastCard}
            onPrevCard={handlePrevCard}
            onNextCard={handleNextCard}
            onFlipCard={handleFlipCard}
          />
        </>
      ) : (
        <Box sx={{ mt: 8 }}>
          <EditDeckButton />
        </Box>
      )}
    </Box>
  ) : (
    <></>
  );
};

const iconStyles = {
  height: '38px',
  width: '34px',
};

export default DeckScreen;
