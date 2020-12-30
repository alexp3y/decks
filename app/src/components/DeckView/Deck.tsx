import { Paper } from '@material-ui/core';
import React from 'react';
import { IDeck } from '../../types';
import styles from './Deck.module.css';

interface Props {
  deck: IDeck;
  onClick(e: React.MouseEvent<HTMLDivElement>): void;
}

export const Deck: React.FC<Props> = ({ deck, onClick }) => {
  return (
    <Paper
      className={styles.style}
      id={deck.id.toString()}
      onClick={onClick}
      elevation={3}
    >
      <h4 className="Deck-title" id={deck.id.toString()} onClick={onClick}>
        {deck.name}
      </h4>
    </Paper>
  );
};
