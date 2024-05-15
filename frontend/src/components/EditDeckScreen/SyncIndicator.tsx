import React from 'react';
import { DeckSyncStatus, useDeckData } from '../../DeckDataContext';
import { Box } from '@mui/material';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import CloudIcon from '@mui/icons-material/Cloud';
import SyncIcon from '@mui/icons-material/Sync';

const SyncIndicator: React.FC = () => {
  const deckData = useDeckData();

  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {getStatusIcon(deckData.syncStatus)}
      {getStatusText(deckData.syncStatus)}
    </Box>
  );
};

export default SyncIndicator;

const getStatusIcon = (status: DeckSyncStatus) => {
  switch (status) {
    case DeckSyncStatus.CHANGED:
      return <CloudIcon color="primary" />;
    case DeckSyncStatus.SYNCED:
      return <CloudDoneIcon color="primary" />;
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
          color="primary"
        />
      );
  }
};

const getStatusText = (status: DeckSyncStatus) => {
  switch (status) {
    case DeckSyncStatus.CHANGED:
      return 'Changes Detected';
    case DeckSyncStatus.SYNCED:
      return 'Saved';
    case DeckSyncStatus.LOADING:
      return 'Saving...';
  }
};
