import React, { CSSProperties } from 'react';

interface Props {}

export const Counter: React.FC<Props> = () => {
  return (
    <div style={styles}>
      <p style={textStyles.count}>1 / 1</p>
      <p style={textStyles.side}>BACK</p>
    </div>
  );
};

const styles: CSSProperties = {
  borderLeft: '1px solid var(--color-bg)',
  borderRight: '1px solid var(--color-bg)',
  height: '65px',
  margin: '5px 0px',
  width: '150px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const textStyles = {
  count: {
    fontSize: '25px',
    marginTop: '8px',
    marginBottom: '8px',
  },
  side: {
    fontSize: '20px',
    marginBottom: '8px',
    color: 'var(--color-red)',
  },
};
