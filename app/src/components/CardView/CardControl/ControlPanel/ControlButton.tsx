import { CSSProperties } from '@material-ui/core/styles/withStyles';
import React from 'react';

interface Props {
  action: string;
}

export const ControlButton: React.FC<Props> = ({ action, children }) => {
  return (
    <div style={styles}>
      {children}
      {action}
    </div>
  );
};

const styles: CSSProperties = {
  borderRight: '1px solid var(--color-bg)',
  height: '65px',
  width: '90px',
  fontSize: '12px',
  margin: '5px 0px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
};
