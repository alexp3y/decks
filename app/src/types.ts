export type AppState = {
  user?: IUser;
  cardViewOn: boolean;
  deckViewOn: boolean;
};
export type DeckViewState = {
  decks: IDeck[];
};
export type CardViewState = {
  cards: ICard[];
  activeCard: ICard | null;
  activeIndex: number;
  deckReversed: boolean;
  cardFlipped: boolean;
};

export type CardViewStateUpdate = {
  card?: ICard | null;
  activeIndex?: number;
  deckReversed?: boolean;
  cardFlipped?: boolean;
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
