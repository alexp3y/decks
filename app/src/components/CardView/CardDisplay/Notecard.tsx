import React, { CSSProperties } from 'react';
import { AppState, Command, CommandHandler } from '../../../types';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';
import { CardColor } from '../../../types';
import PinkCardImageFront from '../../../images/pink.png';
import PinkCardImageBack from '../../../images/pink-back.png';
import BlueCardImageFront from '../../../images/blue.png';
import BlueCardImageBack from '../../../images/blue-back.png';
import GreenCardImageFront from '../../../images/green.png';
import GreenCardImageBack from '../../../images/green-back.png';
import OrangeCardImageFront from '../../../images/orange.png';
import OrangeCardImageBack from '../../../images/orange-back.png';
import WhiteCardImageFront from '../../../images/white.png';
import WhiteCardImageBack from '../../../images/white-back.png';
import YellowCardImageFront from '../../../images/yellow.png';
import YellowCardImageBack from '../../../images/yellow-back.png';

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
      style={Object.assign(
        getDynamicCardStyles(state.activeDeck!.color, frontSideUp),
        cardStyles
      )}
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

const getDynamicCardStyles = (color: number, frontSideUp: boolean) => {
  const border = frontSideUp
    ? { border: '2px solid var(--color-blue)' }
    : { border: '2px solid var(--color-red)' };
  const backgroundImage = getCardImage(color, frontSideUp);
  return Object.assign(border, backgroundImage);
};

const getCardImage = (color: CardColor, frontSideUp: boolean) => {
  switch (color) {
    case CardColor.WHITE:
      return frontSideUp
        ? { backgroundImage: `url(${WhiteCardImageFront})` }
        : { backgroundImage: `url(${WhiteCardImageBack})` };
    case CardColor.BLUE:
      return frontSideUp
        ? { backgroundImage: `url(${BlueCardImageFront})` }
        : { backgroundImage: `url(${BlueCardImageBack})` };
    case CardColor.YELLOW:
      return frontSideUp
        ? { backgroundImage: `url(${YellowCardImageFront})` }
        : { backgroundImage: `url(${YellowCardImageBack})` };
    case CardColor.ORANGE:
      return frontSideUp
        ? { backgroundImage: `url(${OrangeCardImageFront})` }
        : { backgroundImage: `url(${OrangeCardImageBack})` };
    case CardColor.PINK:
      return frontSideUp
        ? { backgroundImage: `url(${PinkCardImageFront})` }
        : { backgroundImage: `url(${PinkCardImageBack})` };
    case CardColor.GREEN:
      return frontSideUp
        ? { backgroundImage: `url(${GreenCardImageFront})` }
        : { backgroundImage: `url(${GreenCardImageBack})` };
  }
};

const cardStyles: CSSProperties = {
  zIndex: 9999,
  width: '100vh',
  maxWidth: '600px',
  backgroundSize: '600px 300px',
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
