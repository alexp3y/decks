import React from 'react';
import { ICard } from '../types';

interface Props {
  size: number;
  card: ICard;
}

export const Card: React.FC<Props> = ({ size, card }) => {
  const getClasses = (baseClass: string) =>
    `${baseClass} ${card.flipped ? `${baseClass}-flipped` : ''}`;
  return (
    <div className={getClasses('Card')}>
      <h1>{card.flipped ? card.back : card.front}</h1>
      <h6>{card.flipped ? 'back' : 'front'}</h6>
    </div>
  );
};
