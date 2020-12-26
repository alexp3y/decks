import { Paper, Slide } from '@material-ui/core';
import React from 'react';
import { Card } from './CardView/Card';

interface Props {
  show: boolean;
  onExit(): void;
}

export const CardView: React.FC<Props> = ({ show, onExit }) => {
  return (
    <Slide
      in={show}
      direction={'up'}
      onExited={onExit}
      timeout={500}
      unmountOnExit={true}
    >
      <Paper className="Card-empty"></Paper>
    </Slide>

    // card={state.card!}
    // flipped={state.cardFlipped!}
    // reversed={state.deckReversed}
    // <Navigation
    //   cardIndex={state.activeIndex}
    //   deckSize={deck.cards.length}
    //   onBackClick={handleBackClick}
    //   onForwardClick={handleForwardClick}
    // />
  );
};
