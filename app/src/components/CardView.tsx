import { Slide } from '@material-ui/core';
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
      <div className="CardView">
        <CardDisplay />
        <CardControl />
      </div>
    </Slide>
  );
};
