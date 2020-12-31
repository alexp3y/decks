import React, { CSSProperties } from 'react';
import NotecardImage from '../../../Notecard.jpg';

interface Props {}

export const Notecard: React.FC<Props> = () => {
  return <div style={styles}></div>;
};

const styles: CSSProperties = {
  zIndex: 9999,
  width: '100vh',
  maxWidth: '600px',
  backgroundImage: `url(${NotecardImage})`,
};
