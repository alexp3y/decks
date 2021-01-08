import React, { CSSProperties } from 'react';
import NotecardImage from '../../../Notecard.jpg';
import { AppState, Command, CommandHandler } from '../../../types';

interface Props {
  state: AppState;
  onCommand: CommandHandler;
}

export const Notecard: React.FC<Props> = ({ state, onCommand }) => {
  const onClick = () => {
    onCommand(Command.FLIP_CARD, {});
  };
  let frontSideUp: boolean =
    (!state.cardFlipped && !state.deckReversed) ||
    (state.cardFlipped && state.deckReversed);

  let text = frontSideUp ? state.activeCard!.front : state.activeCard!.back;
  return (
    <div
      style={Object.assign(getHighlightStyle(frontSideUp), styles)}
      onClick={onClick}
    >
      <p style={textStyles}>{text}</p>
    </div>
  );
};

const getHighlightStyle = (frontSideUp: boolean) => {
  return frontSideUp
    ? { border: '2px solid var(--color-blue)' }
    : { border: '2px solid var(--color-red)' };
};

const styles: CSSProperties = {
  zIndex: 9999,
  width: '100vh',
  maxWidth: '600px',
  backgroundImage: `url(${NotecardImage})`,
  color: 'black',
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
};
