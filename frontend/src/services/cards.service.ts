export type ICard = {
  id: string;
  front: string;
  back: string;
  starred: boolean;
  type: CardType;
};

export enum CardType {
  VERB = 'verb',
  NOUN = 'noun',
  ADJECTIVE = 'adjective',
  ADVERB = 'adverb',
  EXPRESSION = 'expression',
  OTHER = 'other',
}

const findByDeck = async (deckId: string): Promise<ICard[]> => {
  const res = await fetch(`http://localhost:5001/decks/${deckId}/cards`);
  return res.json();
};

const update = async (id: string, updates: Partial<ICard>) => {
  const res = await fetch(`http://localhost:5001/cards/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updates),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
};

export const cardsService = {
  findByDeck,
  update,
};
