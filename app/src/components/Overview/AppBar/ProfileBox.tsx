import React from 'react';
import { AppState } from '../../../types';
import { ProfileButton } from './ProfileBox/ProfileButton';

interface Props {
  state: AppState;
}

export const ProfileBox: React.FC<Props> = ({ state }) => {
  return (
    <div style={styles}>
      <ProfileButton state={state} />
    </div>
  );
};

const styles = {
  margin: '0px 28px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
