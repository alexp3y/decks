import { Paper } from '@material-ui/core';
import React from 'react';
import { IDeck } from '../../types';

interface Props {
  deck: IDeck;
  onClick(e: React.MouseEvent<HTMLDivElement>): void;
}

export const Deck: React.FC<Props> = ({ deck, onClick }) => {
  return (
    <Paper
      className="Deck"
      id={deck.id.toString()}
      onClick={onClick}
      elevation={3}
    >
      <h4 className="Deck-title">{deck.name}</h4>
    </Paper>
  );
};
