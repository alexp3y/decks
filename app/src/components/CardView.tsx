import { Slide } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import React from 'react';
import { TRANSITION_TIME } from '../constants';
import { AppState } from '../types';
import { CardControl } from './CardView/CardControl';
import { CardDisplay } from './CardView/CardDisplay';

interface Props {
  state: AppState;
  onExited(): void;
  onBackClick(e: React.MouseEvent<HTMLAnchorElement>): void;
  onForwardClick(e: React.MouseEvent<HTMLAnchorElement>): void;
}

export const CardView: React.FC<Props> = ({ state, onExited }) => {
  return (
    <Slide
      in={state.cardViewOn}
      direction={'up'}
      onExited={onExited}
      timeout={TRANSITION_TIME}
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
