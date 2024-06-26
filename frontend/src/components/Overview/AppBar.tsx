import { Box, Slide } from '@material-ui/core';
import React from 'react';
import { VIEW_TRANSITION_TIME } from '../../constants';
import { AppState, CommandHandler } from '../../types';
import styles from './AppBar.module.css';
import { Logo } from './AppBar/Logo';
import { ProfileBox } from './AppBar/ProfileBox';
import { TitleBanner } from './TitleBanner';

interface Props {
  state: AppState;
  onCommand: CommandHandler;
}

export const AppBar: React.FC<Props> = ({ state, onCommand }) => {
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
        <TitleBanner />
        <ProfileBox state={state} onCommand={onCommand} />
      </Box>
    </Slide>
  );
};
