import React from 'react';
import { AppState } from '../types';
import { Banner } from './Overview/Banner';
import { BlueBar } from './Overview/BlueBar';
import { RedBar } from './Overview/RedBar';

interface Props {
  state: AppState;
  showCardView: boolean;
  showDeckView: boolean;
  onCardExitClick(e: React.MouseEvent<HTMLAnchorElement>): void;
}

export const Overview: React.FC<Props> = ({
  state,
  showCardView,
  showDeckView,
  onCardExitClick,
}) => {
  return (
    <div className="Overview">
      <RedBar show={showCardView} onClick={onCardExitClick} />
      <Banner show={showCardView} state={state} />
      <BlueBar show={showDeckView} />
    </div>
  );
};
