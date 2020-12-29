import React from 'react';
import { AppState } from '../../../../types';

interface Props {
  state: AppState;
}

export const ProfileButton: React.FC<Props> = ({ state }) => {
  let userInitials = `${state.user?.firstName[0].toUpperCase()}${state.user?.lastName[0].toUpperCase()}`;
  return (
    <div>
      <button className="ProfileButton">{userInitials}</button>
    </div>
  );
};
