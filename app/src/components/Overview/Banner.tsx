import { Box, Slide } from '@material-ui/core';
import React from 'react';
import { TRANSITION_TIME } from '../../constants';
import { AppState } from '../../types';
import { CloseButton } from './Banner/CloseButton';
import { DeckTitle } from './Banner/DeckTitle';

interface Props {
  state: AppState;
  onClick(e: React.MouseEvent<HTMLAnchorElement>): void;
}

export const Banner: React.FC<Props> = ({ state, onClick }) => {
  return (
    <Slide
      in={state.cardViewOn}
      direction={'right'}
      timeout={TRANSITION_TIME}
      unmountOnExit={true}
    >
      <Box className="Banner" boxShadow={3} borderRadius={1.5}>
        <DeckTitle state={state} />
        <CloseButton onClick={onClick} />
      </Box>
    </Slide>
  );
};
