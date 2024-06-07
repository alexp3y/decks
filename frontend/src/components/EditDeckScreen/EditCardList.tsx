import { Box, Typography } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import { TransitionGroup } from 'react-transition-group';
import { DeckSyncStatus, useDeckData } from '../../DeckDataContext';
import { ICard, cardsService } from '../../services/cards.service';
import AddCardButton from './EditCardList/AddCardButton';
import EditCardListItem from './EditCardList/EditCardListItem';
import SyncIndicator from './SyncIndicator';

export default function EditCardList() {
  const deckData = useDeckData();

  const handleRemoveCard = (id: string) => {
    deckData.removeCard(id);
  };

  const handleItemFocusChange = (card: ICard) => {
    if (deckData.syncStatus === DeckSyncStatus.CHANGED) {
      console.log('SAVE FORCED');
      deckData.setSyncStatus(DeckSyncStatus.LOADING);
      cardsService.update(card.id, card).finally(() => {
        deckData.setSyncStatus(DeckSyncStatus.SYNCED);
      });
    }
  };

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
          px: 1,
        }}
      >
        <SyncIndicator />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography sx={{ fontSize: 26 }} variant="h5">
            Add Card
          </Typography>
          <AddCardButton />
        </Box>
      </Box>
      <List sx={{ p: 0 }}>
        <TransitionGroup>
          {deckData.cards.map((item) => (
            <Collapse key={item.id}>
              <EditCardListItem
                onRemoveCard={handleRemoveCard}
                item={item}
                onFocusOut={handleItemFocusChange}
              />
            </Collapse>
          ))}
        </TransitionGroup>
      </List>
    </Box>
  );
}
