import { Box } from '@material-ui/core';
import React from 'react';
import styles from './NavButton.module.css';

interface Props {
  show: boolean;
}

export const NavButton: React.FC<Props> = ({ children, show }) => {
  return (
    <div className={styles.container}>
      {show ? (
        <Box boxShadow={3} borderRadius={3} className={styles.button}>
          {children}
        </Box>
      ) : (
        <div className={styles.button} style={{ backgroundColor: 'inherit' }} />
      )}
    </div>
  );
};
