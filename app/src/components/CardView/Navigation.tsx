import { IconButton } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import React from 'react';
import { Counter } from './Counter';

interface Props {
  cardIndex: number;
  deckSize: number;
  onBackClick(e: React.MouseEvent<HTMLAnchorElement>): void;
  onForwardClick(e: React.MouseEvent<HTMLAnchorElement>): void;
}

export const Navigation: React.FC<Props> = ({
  cardIndex,
  deckSize,
  onBackClick,
  onForwardClick,
}) => {
  return (
    <div className="Navigation">
      <IconButton href="" className="Button-arrow" onClick={onBackClick}>
        <ArrowBack className="Icon-arrow" />
      </IconButton>
      <Counter index={cardIndex} size={deckSize} />
      <IconButton href="" className="Button-arrow" onClick={onForwardClick}>
        <ArrowForward className="Icon-arrow" />
      </IconButton>
    </div>
  );
};
