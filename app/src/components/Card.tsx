import { Paper } from '@material-ui/core';
import React from 'react';
import { ICard } from '../types';

interface Props {
  card: ICard;
}

export const Card: React.FC<Props> = ({ card }) => {
  const getClasses = (baseClass: string) =>
    `${baseClass} ${card.flipped ? `${baseClass}-flipped` : ''}`;

  return (
    <Paper className={getClasses('Card')} elevation={4}>
      <h1>{card.flipped ? card.back : card.front}</h1>
      <h6>{card.flipped ? 'back' : 'front'}</h6>
    </Paper>
  );
};
