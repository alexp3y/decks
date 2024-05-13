import React from 'react';
import { AppState, CommandHandler } from '../../../types';
import { DarkModeButton } from './ProfileBox/DarkModeButton';
import { ProfileButton } from './ProfileBox/ProfileButton';

interface Props {
  state: AppState;
  onCommand: CommandHandler;
}

export const ProfileBox: React.FC<Props> = ({ state, onCommand }) => {
  return (
    <div style={styles}>
      <DarkModeButton state={state} onCommand={onCommand} />
      <ProfileButton state={state} />
    </div>
  );
};

const styles = {
  midWidth: '150px',
  // margin: '0px 28px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
