import React from 'react';
import styles from './ControlButton.module.css';

interface Props {
  action: string;
  border: boolean;
}

export const ControlButton: React.FC<Props> = ({
  action,
  children,
  border,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.ctrl} style={border ? borderRight : {}}>
        {children}
        {action}
      </div>
    </div>
  );
};

const borderRight = {
  borderRight: '1px solid var(--color-bg)',
};
