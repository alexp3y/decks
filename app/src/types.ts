export type AppState = {
  card: ICard | null;
  activeIndex: number;
  deckReversed: boolean;
  cardFlipped: boolean;
};

export type StateUpdate = {
  card?: ICard | null;
  activeIndex?: number;
  deckReversed?: boolean;
  cardFlipped?: boolean;
};

export type ICard = {
  id: number;
  front: string;
  back: string;
};

export type IDeck = {
  cards: ICard[];
};
