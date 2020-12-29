import { Box, IconButton, Slide } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';

interface Props {
  show: boolean;
  onClick(e: React.MouseEvent<HTMLAnchorElement>): void;
}

export const RedBar: React.FC<Props> = ({ show, onClick }) => {
  return (
    <Slide in={show} direction={'right'} timeout={500} unmountOnExit={true}>
      <Box className="Bar-red" width={1 / 7} boxShadow={3} borderRadius={1.5}>
        <h1>Dutch vocabulary 1</h1>
        <IconButton href="" size="medium" onClick={onClick}>
          <CloseIcon fontSize="large" />
        </IconButton>
      </Box>
    </Slide>
  );
};
