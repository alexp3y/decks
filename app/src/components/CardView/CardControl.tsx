import React from 'react';
import { ControlPanel } from './CardControl/ControlPanel';

interface Props {}

export const CardControl: React.FC<Props> = () => {
  return (
    <div style={styles}>
      <ControlPanel />
    </div>
  );
};

const styles = {
  paddingTop: '5vh',
  display: 'flex',
  justifyContent: 'center',
};
