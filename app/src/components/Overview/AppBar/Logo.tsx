import React from 'react';
import LogoImage from '../../../NC-Logo.jpg';

interface Props {}

export const Logo: React.FC<Props> = () => {
  return (
    <div style={styles}>
      <h3>DECKS</h3>
    </div>
  );
};

const styles = {
  background: `url(${LogoImage})`,
  backgroundSize: 'contain',
  width: '105px',
  height: 'var(--overview-height)',
  margin: '0px 28px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '30px',
};
