import React, { CSSProperties } from 'react';
import { AppState } from '../../../types';

interface Props {
  state: AppState;
}

export const BlankCard: React.FC<Props> = ({ state }) => {
  let text = state.deckStarred ? 'No Starred Cards' : 'No Cards';
  return (
    <div style={cardStyles}>
      <div>
        <p style={textStyles}>{text}</p>
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
