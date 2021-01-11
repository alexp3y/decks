import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import styles from './BlankDeck.module.css';

interface Props {}

export const BlankDeck: React.FC<Props> = () => {
  return (
    <div className={styles.style}>
      <AddIcon style={iconStyles} />
    </div>
  );
};

const iconStyles = {
  width: '25vh',
  height: '20vh',
  color: 'var(--color-blue-active-blur)',
};
