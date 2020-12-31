import { Box } from '@material-ui/core';
import React from 'react';
import styles from './NavButton.module.css';

interface Props {}

export const NavButton: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Box boxShadow={3} borderRadius={3} className={styles.button}>
        {children}
      </Box>
    </div>
  );
};
