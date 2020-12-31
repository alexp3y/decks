import { Box } from '@material-ui/core';
import React from 'react';

interface Props {}

export const NavButton: React.FC<Props> = ({ children }) => {
  return (
    <div style={styles.container}>
      <Box boxShadow={3} borderRadius={3} style={styles.button}>
        {children}
      </Box>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'var(--color-blue)',
    color: 'var(--color-bg)',
    width: '18vh',
    maxWidth: '105px',
    height: '60%',
    margin: '0px 40px',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
  },
};
