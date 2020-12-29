import React from 'react';
import { AppState } from '../../../types';
import { ProfileButton } from './ProfileBox/ProfileButton';

interface Props {
  state: AppState;
}

export const ProfileBox: React.FC<Props> = ({ state }) => {
  return (
    <div className="ProfileBox">
      <ProfileButton state={state} />
    </div>
  );
};
