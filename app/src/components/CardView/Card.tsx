import { Paper } from '@material-ui/core';
import React from 'react';
import { ICard } from '../../types';

interface Props {
  card: ICard | null;
  flipped: boolean;
  reversed: boolean;
}

export const Card: React.FC<Props> = ({ card, flipped, reversed }) => {
  if (card) {
    flipped = (flipped && !reversed) || (!flipped && reversed);
    const getClasses = (baseClass: string) =>
      `${baseClass} ${flipped ? `${baseClass}-flipped` : ''}`;
    return (
      <Paper className={getClasses('Card')} elevation={4}>
        <div className="Card-text">
          <h1>{flipped ? card.back : card.front}</h1>
        </div>
      </Paper>
    );
  } else {
    return <Paper className="Card-empty"></Paper>;
  }
};
