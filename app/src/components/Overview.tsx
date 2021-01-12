import { CSSProperties } from '@material-ui/core/styles/withStyles';
import React from 'react';
import { AppState, Command, CommandHandler } from '../types';
import { AppBar } from './Overview/AppBar';
import { TitleBanner } from './Overview/TitleBanner';

interface Props {
  state: AppState;
  onCommand: CommandHandler;
}

export const Overview: React.FC<Props> = ({ state, onCommand }) => {
  const onClick = () => {
    onCommand(Command.EXIT_CARD_VIEW, {});
  };

  return (
    <div style={styles}>
      <TitleBanner state={state} onClick={onClick} />
      <AppBar state={state} onCommand={onCommand} />
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
