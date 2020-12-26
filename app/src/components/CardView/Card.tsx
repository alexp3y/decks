import { Paper } from '@material-ui/core';
import React from 'react';

interface Props {
  // card: ICard | null;
  // flipped: boolean;
  // reversed: boolean;
}

export const Card: React.FC<Props> = () =>
  // { card, flipped, reversed }
  {
    if (false) {
      //card) {
      // flipped = (flipped && !reversed) || (!flipped && reversed);
      // const getClasses = (baseClass: string) =>
      //   `${baseClass} ${flipped ? `${baseClass}-flipped` : ''}`;
      // return (
      //   <Paper className={getClasses('Card')} elevation={4}>
      //     <h1>{flipped ? card.back : card.front}</h1>
      //     <h6>{flipped ? 'back' : 'front'}</h6>
      //   </Paper>
      // );
    } else {
      return <Paper className="Card-empty"></Paper>;
    }
  };
