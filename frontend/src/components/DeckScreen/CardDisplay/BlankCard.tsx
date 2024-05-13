import React, { CSSProperties } from 'react';

export const BlankCard: React.FC = () => {
  return (
    <div style={cardStyles}>
      <div>
        <p style={textStyles}>{'asdf'}</p>
      </div>
    </div>
  );
};

const cardStyles: CSSProperties = {
  zIndex: 9999,
  border: 'dashed 2px var(--color-red-blur)',
  width: '100vh',
  maxWidth: '600px',
  color: 'black',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const textStyles: CSSProperties = {
  maxWidth: '600px',
  maxHeight: '300px',
  wordWrap: 'break-word',
  textAlign: 'center',
  margin: '20px',
  fontSize: 'calc(15px + 2vmin)',
  color: 'var(--color-blue-active-blur)',
};
