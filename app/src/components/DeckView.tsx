import { Paper, Slide } from '@material-ui/core';
import React from 'react';
import { Card } from './CardView/Card';

interface Props {
  show: boolean;
  onClick(e: React.MouseEvent<HTMLDivElement>): void;
  onExit(): void;
}

export const DeckView: React.FC<Props> = ({ show, onExit, onClick }) => {
  return (
    <Slide
      onExited={onExit}
      direction="right"
      in={show}
      timeout={500}
      unmountOnExit={true}
    >
      {/* <Card /> */}
      <Paper className="Card-empty" onClick={onClick}></Paper>
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
