import { Box, Button, Grow, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IDeck } from '../../services/decks.service';
import { getCardImage } from '../../utils/get-card-image';
import styles from './Deck.module.css';
interface Props {
  deck: IDeck;
}

export const Deck: React.FC<Props> = ({ deck }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const handleClick = () => {
    navigate(`/${deck.id}`);
  };
  return (
    <Grow in={true} mountOnEnter={false}>
      <Button
        className={styles.style}
        variant="outlined"
        sx={{
          height: '27vh',
          width: '45vh',
          p: 0,
          borderWidth: 1,
          borderColor: 'transparent',
          boxShadow: 2,
          // margin: '20px 10px',
          textAlign: 'center',
          backgroundSize: 'cover',
          fontSize: '24px',
          ':hover': {
            cursor: 'pointer',
            borderColor: 'primary.main',
            boxShadow: 2,
          },
          ':active': {
            // boxShadow: 0,
          },
          color: theme.palette.text.primary,
          ...getCardImage(deck.color, false),
        }}
        id={deck.id.toString()}
        onClick={handleClick}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            placeContent: 'center',
            backgroundColor:
              theme.palette.mode === 'dark'
                ? 'rgba(0,0,0,0.44)'
                : 'transparent',
          }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            {deck.name}
          </Typography>
        </Box>
      </Button>
    </Grow>
  );
};
