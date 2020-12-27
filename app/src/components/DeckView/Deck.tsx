import { Paper, Slide } from '@material-ui/core';
import React from 'react';
import { IDeck } from '../../types';

interface Props {
  deck: IDeck;
  deckViewOn: boolean;
  onClick(e: React.MouseEvent<HTMLDivElement>): void;
  onExited(): void;
}

export const Deck: React.FC<Props> = ({
  deck,
  deckViewOn,
  onClick,
  onExited,
}) => {
  return (
    <Slide
      onExited={onExited}
      direction="up"
      in={deckViewOn}
      timeout={500}
      unmountOnExit={true}
    >
      <Paper
        className="Deck"
        id={deck.id.toString()}
        onClick={onClick}
        elevation={3}
      >
        {deck.name}
      </Paper>
    </Slide>
  );
};
