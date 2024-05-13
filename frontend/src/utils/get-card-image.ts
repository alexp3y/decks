import BlueCardImageBack from '../assets/images/blue-back.png';
import BlueCardImageFront from '../assets/images/blue.png';
import GreenCardImageBack from '../assets/images/green-back.png';
import GreenCardImageFront from '../assets/images/green.png';
import OrangeCardImageBack from '../assets/images/orange-back.png';
import OrangeCardImageFront from '../assets/images/orange.png';
import PinkCardImageBack from '../assets/images/pink-back.png';
import PinkCardImageFront from '../assets/images/pink.png';
import WhiteCardImageBack from '../assets/images/white-back.png';
import WhiteCardImageFront from '../assets/images/white.png';
import YellowCardImageBack from '../assets/images/yellow-back.png';
import YellowCardImageFront from '../assets/images/yellow.png';
import { DeckColor } from '../services/decks.service';

export const getCardImage = (color: DeckColor, flipped: boolean) => {
  switch (color) {
    case DeckColor.DEFAULT:
      return !flipped
        ? { backgroundImage: `url(${WhiteCardImageFront})` }
        : { backgroundImage: `url(${WhiteCardImageBack})` };
    case DeckColor.BLUE:
      return !flipped
        ? { backgroundImage: `url(${BlueCardImageFront})` }
        : { backgroundImage: `url(${BlueCardImageBack})` };
    case DeckColor.YELLOW:
      return !flipped
        ? { backgroundImage: `url(${YellowCardImageFront})` }
        : { backgroundImage: `url(${YellowCardImageBack})` };
    case DeckColor.ORANGE:
      return !flipped
        ? { backgroundImage: `url(${OrangeCardImageFront})` }
        : { backgroundImage: `url(${OrangeCardImageBack})` };
    case DeckColor.PINK:
      return !flipped
        ? { backgroundImage: `url(${PinkCardImageFront})` }
        : { backgroundImage: `url(${PinkCardImageBack})` };
    case DeckColor.GREEN:
      return !flipped
        ? { backgroundImage: `url(${GreenCardImageFront})` }
        : { backgroundImage: `url(${GreenCardImageBack})` };
  }
};
