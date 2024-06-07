import AddIcon from '@mui/icons-material/Add';
import { Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const EditDeckButton: React.FC = () => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`./edit`);
  };

  return (
    <Button
      sx={{
        borderStyle: 'dashed',
        borderWidth: '2px',
        width: '65vh',
        height: '35vh',
        display: 'flex',
        flexDirection: 'column',
        ':hover': {
          borderStyle: 'dashed',
          borderWidth: '2px',
        },
        gap: 1,
      }}
      variant="outlined"
      onClick={handleEditClick}
    >
      <Typography variant="h4">Edit Deck</Typography>
      <AddIcon
        sx={{
          fontSize: 84,
        }}
      />
    </Button>
  );
};
