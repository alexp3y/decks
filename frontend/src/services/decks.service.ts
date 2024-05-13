export type IDeck = {
  id: string;
  name: string;
  color: DeckColor;
};

export enum DeckColor {
  DEFAULT = 'DEFAULT',
  BLUE = 'BLUE',
  GREEN = 'GREEN',
  ORANGE = 'ORANGE',
  YELLOW = 'YELLOW',
  PINK = 'PINK',
}

const findAll = async (): Promise<IDeck[]> => {
  const res = await fetch('http://localhost:5001/decks');
  return res.json();
};

const findOne = async (deckId: string): Promise<IDeck> => {
  const res = await fetch(`http://localhost:5001/decks/${deckId}`);
  return res.json();
};

const createOne = async (name: string) => {
  const res = await fetch('http://localhost:5001/decks', {
    method: 'POST',
    body: JSON.stringify({
      name,
      color: DeckColor.DEFAULT,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
};

export const decksService = {
  findAll,
  findOne,
  createOne,
};
