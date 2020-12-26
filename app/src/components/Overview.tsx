import React from 'react';
import { BlueBar } from './Overview/BlueBar';
import { RedBar } from './Overview/RedBar';

interface Props {
  showRed: boolean;
  showBlue: boolean;
  onCardExitClick(e: React.MouseEvent<HTMLAnchorElement>): void;
}

export const Overview: React.FC<Props> = ({
  showRed,
  showBlue,
  onCardExitClick,
}) => {
  return (
    <div className="Overview">
      <RedBar show={showRed} onClick={onCardExitClick} />
      <BlueBar show={showBlue} />
    </div>
  );
};
