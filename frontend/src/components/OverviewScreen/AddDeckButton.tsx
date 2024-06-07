import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import styles from './BlankDeck.module.css';

interface Props {
  onClick: () => void;
}

export const AddDeckButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Box
      sx={{
        height: '27vh',
        width: '45vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        sx={{
          display: 'flex',
          borderStyle: 'dashed',
          borderWidth: 2,
          ':hover': {
            borderStyle: 'dashed',
            borderWidth: 2,
          },
          flexDirection: 'column',
          height: '95%',
          width: '95%',
          gap: 1,
          pt: 2,
        }}
        className={styles.style}
        variant="outlined"
        onClick={onClick}
      >
        <Typography variant="h5">Add Deck</Typography>
        <AddIcon
          sx={{
            fontSize: 64,
          }}
        />
      </Button>
    </Box>
  );
};
