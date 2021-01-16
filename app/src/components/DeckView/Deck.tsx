import { Paper } from '@material-ui/core';
import React from 'react';
import { CardColor, IDeck } from '../../types';
import styles from './Deck.module.css';
import PinkCardImageFront from '../../images/pink.png';
import BlueCardImageFront from '../../images/blue.png';
import GreenCardImageFront from '../../images/green.png';
import OrangeCardImageFront from '../../images/orange.png';
import WhiteCardImageFront from '../../images/white.png';
import YellowCardImageFront from '../../images/yellow.png';

interface Props {
  deck: IDeck;
  onClick(e: React.MouseEvent<HTMLDivElement>): void;
}

export const Deck: React.FC<Props> = ({ deck, onClick }) => {
  return (
    <Paper
      className={styles.style}
      style={getCardImage(deck.color)}
      id={deck.id.toString()}
      onClick={onClick}
    >
      <h4 className="Deck-title" id={deck.id.toString()} onClick={onClick}>
        {deck.name}
      </h4>
    </Paper>
  );
};

const getCardImage = (color: CardColor) => {
  switch (color) {
    case CardColor.WHITE:
      return { backgroundImage: `url(${WhiteCardImageFront})` };
    case CardColor.BLUE:
      return { backgroundImage: `url(${BlueCardImageFront})` };
    case CardColor.YELLOW:
      return { backgroundImage: `url(${YellowCardImageFront})` };
    case CardColor.ORANGE:
      return { backgroundImage: `url(${OrangeCardImageFront})` };
    case CardColor.PINK:
      return { backgroundImage: `url(${PinkCardImageFront})` };
    case CardColor.GREEN:
      return { backgroundImage: `url(${GreenCardImageFront})` };
  }
};
