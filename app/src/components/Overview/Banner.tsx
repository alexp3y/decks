import { Box, Slide } from '@material-ui/core';
import React from 'react';
import { AppState } from '../../types';

interface Props {
  state: AppState;
  show: boolean;
}

export const Banner: React.FC<Props> = ({ show, state }) => {
  return (
    <Slide in={show} direction="down" timeout={500} unmountOnExit={true}>
      <Box className="Banner" boxShadow={3} borderRadius={1.5}>
        {state.activeDeck ? state.activeDeck.name : ''}
      </Box>
    </Slide>
  );
};
