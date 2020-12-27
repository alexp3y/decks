export type AppState = {
  user?: IUser;
  deckViewOn: boolean;
  cardViewOn: boolean;
  decks: IDeck[];
  cards: ICard[];
  card: ICard | null;
  activeIndex: number;
  deckReversed: boolean;
  cardFlipped: boolean;
};

export type ICard = {
  id: number;
  deckId: number;
  front: string;
  back: string;
};

export type IDeck = {
  id: number;
  userId: number;
  name: string;
  cards: ICard[];
};

export type IUser = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};
