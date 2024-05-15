import {
  Card,
  ListItem,
  IconButton,
  Box,
  TextField,
  Divider,
} from '@mui/material';
import React, { useState } from 'react';
import { ICard, cardsService } from '../../services/cards.service';
import DeleteIcon from '@mui/icons-material/Delete';
import { debounceAsync } from '../../utils/debounce-async';
import { DeckSyncStatus, useDeckData } from '../../DeckDataContext';

interface RenderItemOptions {
  item: ICard;
  onRemoveCard: (id: string) => void;
}

const updateCard = (card: ICard, callback) => {
  callback(DeckSyncStatus.LOADING);
  return cardsService.update(card.id, card);
};

const debouncedUpdateCard = debounceAsync(updateCard, 1000);

const EditCardListItem: React.FC<RenderItemOptions> = ({
  item,
  onRemoveCard,
}) => {
  const deckData = useDeckData();
  const [card, setCard] = useState(item);

  const updateSyncStatus = () => {
    deckData.setSyncStatus(DeckSyncStatus.SYNCED);
  };

  const onChangeContent = async (e) => {
    if (e.target.value.split(/\n/).length < 4) {
      if (deckData.syncStatus === DeckSyncStatus.SYNCED) {
        deckData.setSyncStatus(DeckSyncStatus.CHANGED);
      }
      card[e.target.id] = e.target.value;
      setCard({ ...card });
      debouncedUpdateCard(card, deckData.setSyncStatus).then(() => {
        updateSyncStatus();
      });
    }
  };

  return (
    <Card sx={{ width: '100%', display: 'flex', mt: 1 }} variant="outlined">
      <ListItem
        sx={{
          p: 1,
          gap: 1,
        }}
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            title="Delete"
            onClick={() => onRemoveCard(item.id)}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <Box
          sx={{
            width: '50%',
          }}
        >
          <TextField
            id="front"
            sx={{
              height: '100%',
              width: '100%',
              overflowY: 'unset',
              maxHeight: '100%',
              maxLength: 255,
            }}
            label="Front"
            placeholder="Front Content"
            multiline
            rows={3}
            variant="outlined"
            onChange={onChangeContent}
            value={card.front}
          />
        </Box>
        <Box
          sx={{
            width: '50%',
          }}
        >
          <TextField
            id="back"
            sx={{ height: '100%', width: '100%' }}
            label="Back"
            placeholder="Back Content"
            multiline
            rows={3}
            variant="outlined"
            onChange={onChangeContent}
            value={card.back}
          />
        </Box>
      </ListItem>
      <Divider />
    </Card>
  );
};

export default EditCardListItem;
