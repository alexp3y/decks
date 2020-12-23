export type ICard = {
  index: number;
  id: number;
  front: string;
  back: string;
  flipped: boolean;
};

export type IDeck = {
  cards: ICard[];
};
