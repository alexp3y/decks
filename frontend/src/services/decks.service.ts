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

const update = async (id: string, updates: Partial<IDeck>): Promise<IDeck> => {
  const res = await fetch(`http://localhost:5001/decks/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updates),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
};

const deleteOne = async (id: string) => {
  await fetch(`http://localhost:5001/decks/${id}`, {
    method: 'DELETE',
  });
};

export const decksService = {
  findAll,
  findOne,
  createOne,
  update,
  deleteOne,
};
