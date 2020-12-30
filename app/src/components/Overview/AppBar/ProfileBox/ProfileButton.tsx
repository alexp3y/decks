import React from 'react';
import { AppState } from '../../../../types';
import styles from './ProfileButton.module.css';

interface Props {
  state: AppState;
}

export const ProfileButton: React.FC<Props> = ({ state }) => {
  let userInitials = `${state.user?.firstName[0].toUpperCase()}${state.user?.lastName[0].toUpperCase()}`;
  return <button className={styles.button}>{userInitials}</button>;
};
