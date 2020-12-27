import { Slide } from '@material-ui/core';
import React from 'react';
import { AppState } from '../types';
import { Deck } from './DeckView/Deck';

interface Props {
  state: AppState;
  onClick(e: React.MouseEvent<HTMLDivElement>): void;
  onExited(): void;
}

export const DeckView: React.FC<Props> = ({ state, onExited, onClick }) => {
  return (
    <Slide
      onExited={onExited}
      direction="right"
      in={state.deckViewOn}
      timeout={500}
      unmountOnExit={true}
    >
      <div className="DeckView">
        {state.decks.map((deck) => {
          return (
            <Deck
              deck={deck}
              deckViewOn={state.deckViewOn}
              onClick={onClick}
              onExited={onExited}
            />
          );
        })}
      </div>
    </Slide>
  );
};
