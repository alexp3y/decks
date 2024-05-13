import AddIcon from '@mui/icons-material/Add';
import { Box, Fab, Typography } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import { TransitionGroup } from 'react-transition-group';
import { useDecks } from '../../DeckContext';
import { ICard } from '../../services/cards.service';
import { cardId } from '../../utils/card-id';
import EditCardListItem from './EditCardListItem';

export default function EditCardList() {
  const decks = useDecks();

  const handleAddCard = () => {
    const newCard = {
      id: cardId(),
    } as ICard;
    if (newCard) {
      setCards((prev) => [newCard, ...prev]);
    }
  };

  const handleRemoveCard = (id: string) => {
    setCards((prev) => [...prev.filter((c) => c.id !== id)]);
  };

  const addCardButton = (
    <Fab
      color="primary"
      sx={{ boxShadow: 2 }}
      size="medium"
      aria-label="add"
      onClick={handleAddCard}
    >
      <AddIcon />
    </Fab>
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
        overflowY: {
          md: 'scroll',
        },
        mb: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          m: 1,
          height: '70px',
          px: 1,
          gap: 2,
        }}
      >
        <Typography sx={{}} variant="h5">
          New Card
        </Typography>
        {addCardButton}
      </Box>
      <List>
        <TransitionGroup>
          {decks.cards.map((item) => (
            <Collapse key={item.id}>
              <EditCardListItem onRemoveCard={handleRemoveCard} item={item} />
            </Collapse>
          ))}
        </TransitionGroup>
      </List>
    </Box>
  );
}
