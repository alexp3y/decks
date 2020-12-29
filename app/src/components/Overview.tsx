import React from 'react';
import { AppState } from '../types';
import { AppBar } from './Overview/AppBar';
import { Banner } from './Overview/Banner';

interface Props {
  state: AppState;
  onExitClick(e: React.MouseEvent<HTMLAnchorElement>): void;
}

export const Overview: React.FC<Props> = ({ state, onExitClick }) => {
  return (
    <div className="Overview">
      <Banner state={state} onClick={onExitClick} />
      <AppBar state={state} />
    </div>
  );
};
