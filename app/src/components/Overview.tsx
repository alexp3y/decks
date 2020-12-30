import { CSSProperties } from '@material-ui/core/styles/withStyles';
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
    <div style={styles}>
      <Banner state={state} onClick={onExitClick} />
      <AppBar state={state} />
    </div>
  );
};

const styles: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 9999,
  maxHeight: '0px',
  color: 'var(--color-bg)',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
};
