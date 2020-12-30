import { Slide } from '@material-ui/core';
import React, { CSSProperties } from 'react';
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
      <div style={styles}>
        {state.decks.map((deck) => {
          return <Deck deck={deck} onClick={onClick} />;
        })}
      </div>
    </Slide>
  );
};

const styles: CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexWrap: 'wrap',
  alignContent: 'center',
};
