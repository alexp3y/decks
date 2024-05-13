import React, { ReactNode } from 'react';
import styles from './NavButton.module.css';
import { Box } from '@mui/material';

interface Props {
  children?: ReactNode;
  show: boolean;
}

export const NavButton: React.FC<Props> = ({ show, children }) => {
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
