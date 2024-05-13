import AddIcon from '@mui/icons-material/Add';
import { Button, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';
import styles from './BlankDeck.module.css';

interface Props {
  onClick: () => void;
}

export const BlankDeck: React.FC<Props> = ({ onClick }) => {
  return (
    <Button
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        borderWidth: 2,
        // boxShadow: 1,
        borderColor: grey[500],
        ':hover': {
          cursor: 'pointer',
          borderColor: 'primary.main',
        },
        // ':active': {
        //   borderColor: 'secondary.main',
        //   boxShadow: '0',
        // },
      }}
      className={styles.style}
      variant="outlined"
      onClick={onClick}
    >
      <Typography variant="h5">New Deck</Typography>
      <AddIcon
        sx={{
          width: '15vh',
          height: '15vh',
          ':active': {
            color: 'secondary',
          },
        }}
      />
    </Button>
  );
};
