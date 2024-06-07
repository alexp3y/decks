import React from 'react';
import { DeckSyncStatus, useDeckData } from '../../DeckDataContext';
import { Box, Button } from '@mui/material';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import CloudIcon from '@mui/icons-material/Cloud';
import SyncIcon from '@mui/icons-material/Sync';

const SyncIndicator: React.FC = () => {
  const deckData = useDeckData();

  const handleSave = () => {
    deckData.setSyncStatus(DeckSyncStatus.LOADING);
  };

  return (
    <Button
      variant="outlined"
      // sx={{ width: '135px', px: 2 }}
      size="large"
      disabled={deckData.syncStatus !== DeckSyncStatus.CHANGED}
      startIcon={getStatusIcon(deckData.syncStatus)}
      onClick={handleSave}
    >
      <Box pl={0.5}>{getStatusText(deckData.syncStatus)}</Box>
    </Button>
  );
};

export default SyncIndicator;

const getStatusIcon = (status: DeckSyncStatus) => {
  switch (status) {
    case DeckSyncStatus.CHANGED:
      return <CloudIcon color="primary" fontSize="large" />;
    case DeckSyncStatus.SYNCED:
      return <CloudDoneIcon color="primary" fontSize="large" />;
    case DeckSyncStatus.LOADING:
      return (
        <SyncIcon
          sx={{
            animation: 'spin 2s linear infinite',
            '@keyframes spin': {
              '0%': {
                transform: 'rotate(360deg)',
              },
              '100%': {
                transform: 'rotate(0deg)',
              },
            },
          }}
          fontSize="large"
          color="primary"
        />
      );
  }
};

const getStatusText = (status: DeckSyncStatus) => {
  switch (status) {
    case DeckSyncStatus.CHANGED:
      return 'Changed';
    case DeckSyncStatus.SYNCED:
      return 'Saved';
    case DeckSyncStatus.LOADING:
      return 'Saving...';
  }
};
