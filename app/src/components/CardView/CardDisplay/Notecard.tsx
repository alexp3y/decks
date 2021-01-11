import React, { CSSProperties } from 'react';
import NotecardImage from '../../../Notecard.jpg';
import LogoImage from '../../../NC-Logo.jpg';
import { AppState, Command, CommandHandler } from '../../../types';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';

interface Props {
  state: AppState;
  onCommand: CommandHandler;
}

export const Notecard: React.FC<Props> = ({ state, onCommand }) => {
  const NOTECARD_ID = 'NOTECARD';
  const onCardClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((e.target as HTMLElement).id === NOTECARD_ID) {
      onCommand(Command.FLIP_CARD, {});
    }
  };
  const onStarClick = () => {
    onCommand(Command.STAR_CARD, {});
  };
  let frontSideUp: boolean =
    (!state.cardFlipped && !state.deckReversed) ||
    (state.cardFlipped && state.deckReversed);

  let text = frontSideUp ? state.activeCard!.front : state.activeCard!.back;
  return (
    <div
      id={NOTECARD_ID}
      style={Object.assign(getHighlightStyle(frontSideUp), cardStyles)}
      onClick={onCardClick}
    >
      <IconButton onClick={onStarClick} style={starButtonStyles}>
        {state.activeCard!.starred ? (
          <StarIcon style={starIconOnStyles} />
        ) : (
          <StarOutlineIcon style={starIconOffStyles} />
        )}
      </IconButton>
      <div>
        <p style={textStyles}>{text}</p>
      </div>
    </div>
  );
};

const starIconOffStyles = {
  fontSize: 'calc(17px + 2vmin)',
  color: 'var(--color-blue)',
};

const starIconOnStyles = {
  fontSize: 'calc(17px + 2vmin)',
  color: 'var(--color-yellow)',
};

const starButtonStyles: CSSProperties = {
  color: 'var(--color-blue)',
  display: 'inline',
  position: 'absolute',
  top: '11px',
  right: '5px',
};

const getHighlightStyle = (frontSideUp: boolean) =>
  frontSideUp
    ? { border: '2px solid var(--color-blue)' }
    : { border: '2px solid var(--color-red)' };

const cardStyles: CSSProperties = {
  zIndex: 9999,
  width: '100vh',
  maxWidth: '600px',
  backgroundImage: `url(${LogoImage})`,
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
};
