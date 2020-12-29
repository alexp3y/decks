import { Box, Slide } from '@material-ui/core';
import React from 'react';
import { TRANSITION_TIME } from '../../constants';
import { AppState } from '../../types';
import { Logo } from './AppBar/Logo';
import { ProfileBox } from './AppBar/ProfileBox';

interface Props {
  state: AppState;
}

export const AppBar: React.FC<Props> = ({ state }) => {
  const getClassName = () =>
    'AppBar ' + (state.deckViewExited ? 'AppBar-card' : '');
  return (
    <Slide
      in={state.deckViewOn || state.cardViewOn}
      direction={'left'}
      timeout={TRANSITION_TIME}
      unmountOnExit={true}
    >
      <Box className={getClassName()} boxShadow={3} borderRadius={1.5}>
        <Logo />
        <ProfileBox state={state} />
      </Box>
    </Slide>
  );
};
