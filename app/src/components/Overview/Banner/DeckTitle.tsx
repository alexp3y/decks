import React from 'react';
import { AppState } from '../../../types';

interface Props {
  state: AppState;
}

export const DeckTitle: React.FC<Props> = ({ state }) => {
  return (
    <div className="DeckTitle">
      <p>{state.activeDeck!.name}</p>
    </div>
  );
};
