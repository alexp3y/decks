import { Slide } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import React from 'react';
import { VIEW_TRANSITION_TIME } from '../constants';
import { AppState, Command, CommandHandler } from '../types';
import { CardControl } from './CardView/CardControl';
import { CardDisplay } from './CardView/CardDisplay';

interface Props {
  state: AppState;
  onCommand: CommandHandler;
}

export const CardView: React.FC<Props> = ({ state, onCommand }) => {
  const onExited = () => {
    onCommand(Command.ENTER_DECK_VIEW, {});
  };

  return (
    <Slide
      in={state.cardViewOn}
      direction={'up'}
      onExited={onExited}
      timeout={VIEW_TRANSITION_TIME}
      unmountOnExit={true}
    >
      <div style={styles}>
        <CardDisplay />
        <CardControl />
      </div>
    </Slide>
  );
};

const styles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  fontFamily: 'Raleway',
};
