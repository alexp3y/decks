import { Box, Slide } from '@material-ui/core';
import React from 'react';
import { VIEW_TRANSITION_TIME } from '../../constants';
import { AppState } from '../../types';
import styles from './AppBar.module.css';
import { Logo } from './AppBar/Logo';
import { ProfileBox } from './AppBar/ProfileBox';

interface Props {
  state: AppState;
}

export const AppBar: React.FC<Props> = ({ state }) => {
  return (
    <Slide
      in={state.deckViewOn || state.cardViewOn}
      direction={'left'}
      timeout={VIEW_TRANSITION_TIME}
      unmountOnExit={true}
    >
      <Box
        className={
          state.deckViewExited
            ? `${styles.bar} ${styles.minimized}`
            : styles.bar
        }
        boxShadow={3}
        borderRadius={1.5}
      >
        <Logo />
        <ProfileBox state={state} />
      </Box>
    </Slide>
  );
};
