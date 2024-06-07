import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import {
  Box,
  Button,
  Grow,
  IconButton,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CARD_DARK_FADE, CARD_LIGHT_FADE } from '../../constants';
import { IDeck } from '../../services/decks.service';
import { getCardImage } from '../../utils/get-card-image';
import styles from './Deck.module.css';

interface Props {
  deck: IDeck;
}

export const Deck: React.FC<Props> = ({ deck }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [starred, setStarred] = useState(false);

  const handleStarClick = () => {
    const current = starred;
    setStarred(!current);
  };

  const handleDeckClick = () => {
    navigate(`./${deck.id}`);
  };

  return (
    <Grow in={true} mountOnEnter={false}>
      <Paper
        sx={{
          height: '27vh',
          width: '45vh',
          position: 'relative',
        }}
      >
        <Button
          className={styles.style}
          sx={{
            // borderWidth: 1,
            p: 0,
            height: '100%',
            width: '100%',
            // borderColor: 'transparent',
            boxShadow: 2,
            textAlign: 'center',
            backgroundSize: 'cover',
            fontSize: '24px',
            ':hover': {
              cursor: 'pointer',
              // borderColor: 'primary.main',
              boxShadow: 2,
            },
            ':active': {
              // boxShadow: 0,
            },
            color: theme.palette.text.primary,
            ...getCardImage(deck.color, false),
          }}
          id={deck.id.toString()}
          onClick={handleDeckClick}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              placeContent: 'center',
              p: 2,
              textTransform: 'none',
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? `rgba(0,0,0,${CARD_DARK_FADE})`
                  : `rgba(255,255,255,${CARD_LIGHT_FADE})`,
            }}
          >
            <Typography variant="h4" sx={{ mb: 1 }}>
              {deck.name}
            </Typography>
          </Box>
        </Button>
        <IconButton
          id="deck-star"
          size="medium"
          sx={{ position: 'absolute', top: 0, right: 0, m: 1 }}
          onClick={handleStarClick}
        >
          {starred ? (
            <StarIcon sx={{ fontSize: 30 }} />
          ) : (
            <StarOutlineIcon sx={{ fontSize: 30 }} />
          )}
        </IconButton>
      </Paper>
    </Grow>
  );
};
