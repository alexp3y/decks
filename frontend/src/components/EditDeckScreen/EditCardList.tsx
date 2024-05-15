import AddIcon from '@mui/icons-material/Add';
import { Box, Fab, Typography } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import { TransitionGroup } from 'react-transition-group';
import { useDeckData } from '../../DeckDataContext';
import SyncIndicator from './SyncIndicator';
import EditCardListItem from './EditCardListItem';

export default function EditCardList() {
  const deckData = useDeckData();

  const handleAddCard = () => {
    deckData.addCard();
  };

  const handleRemoveCard = (id: string) => {
    deckData.removeCard(id);
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
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '70px',
          px: 2,
        }}
      >
        <SyncIndicator />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography sx={{}} variant="h5">
            Add Card
          </Typography>
          {addCardButton}
        </Box>
      </Box>
      <List sx={{ p: 0 }}>
        <TransitionGroup>
          {deckData.cards.map((item) => (
            <Collapse key={item.id}>
              <EditCardListItem onRemoveCard={handleRemoveCard} item={item} />
            </Collapse>
          ))}
        </TransitionGroup>
      </List>
    </Box>
  );
}
