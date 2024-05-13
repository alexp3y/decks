import { ReactNode, createContext, useContext, useState } from 'react';
import { ICard, cardsService } from './services/cards.service';
import { IDeck, decksService } from './services/decks.service';

interface IDeckDataContext {
  deck: IDeck | null;
  cards: ICard[];
  // addNewCard: () => void;
  openDeck: (deckId: string) => void;
  closeDeck: () => void;
  updateCard: () => void;
}

const DeckDataContext = createContext<IDeckDataContext>({} as IDeckDataContext);

export const DeckProvider = ({ children }: { children: ReactNode }) => {
  const [deck, setDeck] = useState<IDeck | null>(null);
  const [cards, setCards] = useState<ICard[]>([]);

  const openDeck = async (deckId: string) => {
    Promise.all([
      decksService.findOne(deckId!),
      cardsService.findByDeck(deckId!),
    ]).then(([deck, cards]) => {
      setDeck(deck);
      setCards(cards);
    });
  };

  const closeDeck = () => {
    setDeck(null);
    setCards([]);
  };

  return (
    <DeckDataContext.Provider
      value={{
        cards,
        deck,
        openDeck,
        closeDeck,
        updateCard: () => console.log('api call'),
      }}
    >
      {children}
    </DeckDataContext.Provider>
  );
};

export const useDeckData = () => useContext(DeckDataContext);
