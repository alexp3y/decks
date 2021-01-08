import React, { CSSProperties } from 'react';
import { AppState } from '../../../../types';

interface Props {
  state: AppState;
}

export const Counter: React.FC<Props> = ({ state }) => {
  let frontSideUp: boolean =
    (!state.cardFlipped && !state.deckReversed) ||
    (state.cardFlipped && state.deckReversed);

  let count = `${state.activeCardIndex + 1} / ${state.cards!.length}`;
  let side = frontSideUp ? 'FRONT' : 'BACK';
  return (
    <div style={styles}>
      <p style={textStyles.count}>{count}</p>
      <div
        style={Object.assign(getSideBoxColor(frontSideUp), textStyles.sideBox)}
      >
        <p style={textStyles.sideText}>{side}</p>
      </div>
    </div>
  );
};

const getSideBoxColor = (flipped: boolean) =>
  flipped
    ? { backgroundColor: 'var(--color-blue)' }
    : { backgroundColor: 'var(--color-red)' };

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
  textAlign: 'center',
};

const textStyles = {
  count: {
    fontSize: '25px',
    margin: '6px 0px',
  },
  sideBox: {
    border: '1px solid var(--color-bg)',
    borderRadius: '2px',
    width: '70px',
  },
  sideText: {
    fontSize: '13px',
    padding: '2px 4px',
  },
};
