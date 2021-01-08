import React from 'react';
import { AppState, CommandHandler } from '../../types';
import { ControlPanel } from './CardControl/ControlPanel';

interface Props {
  state: AppState;
  onCommand: CommandHandler;
}

export const CardControl: React.FC<Props> = ({ state, onCommand }) => {
  return (
    <div style={styles}>
      <ControlPanel state={state} onCommand={onCommand} />
    </div>
  );
};

const styles = {
  paddingTop: '5vh',
  display: 'flex',
  justifyContent: 'center',
};
