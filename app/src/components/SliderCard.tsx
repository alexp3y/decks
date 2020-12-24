import { Slide } from '@material-ui/core';
import React from 'react';
import { ICard } from '../types';
import { Card } from './Card';

interface Props {
  moveIn: boolean;
  direction: 'left' | 'right' | 'up' | 'down';
  card: ICard;
}

export const SliderCard: React.FC<Props> = ({ moveIn, direction, card }) => {
  return (
    <Slide direction={direction} in={moveIn} timeout={500}>
      <div>
        <Card card={card} />
      </div>
    </Slide>
  );
};
