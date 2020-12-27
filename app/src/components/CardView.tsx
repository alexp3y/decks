import { Slide } from '@material-ui/core';
import React from 'react';
import { AppState } from '../types';
import { Card } from './CardView/Card';
import { Navigation } from './CardView/Navigation';

interface Props {
  state: AppState;
  onExited(): void;
  onBackClick(e: React.MouseEvent<HTMLAnchorElement>): void;
  onForwardClick(e: React.MouseEvent<HTMLAnchorElement>): void;
}

export const CardView: React.FC<Props> = ({
  state,
  onExited,
  onBackClick,
  onForwardClick,
}) => {
  return (
    <Slide
      in={state.cardViewOn}
      direction={'up'}
      onExited={onExited}
      timeout={500}
      unmountOnExit={true}
    >
      <div className="CardView">
        <Card
          card={state.activeCard!}
          flipped={state.cardFlipped}
          reversed={state.deckReversed}
        />
        <Navigation
          cardIndex={state.activeIndex}
          deckSize={state.cards.length}
          onBackClick={onBackClick}
          onForwardClick={onForwardClick}
        />
      </div>
    </Slide>
  );
};
