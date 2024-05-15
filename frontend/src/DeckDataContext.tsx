import { ReactNode, createContext, useContext, useState } from 'react';
import { ICard, cardsService } from './services/cards.service';
import { IDeck, decksService } from './services/decks.service';
import { cardId } from './utils/card-id';

interface IDeckDataContext {
  deck: IDeck | null;
  cards: ICard[];
  syncStatus: DeckSyncStatus;
  setSyncStatus: (status: DeckSyncStatus) => void;
  addCard: () => void;
  removeCard: (id: string) => void;
  openDeck: (deckId: string) => void;
  closeDeck: () => void;
}

export enum DeckSyncStatus {
  SYNCED,
  CHANGED,
  LOADING,
}

const DeckDataContext = createContext<IDeckDataContext>({} as IDeckDataContext);

export const DeckProvider = ({ children }: { children: ReactNode }) => {
  const [deck, setDeck] = useState<IDeck | null>(null);
  const [cards, setCards] = useState<ICard[]>([]);
  const [syncStatus, setSyncStatus] = useState<DeckSyncStatus>(
    DeckSyncStatus.SYNCED
  );

  const openDeck = async (deckId: string) => {
    console.log('opening deck: ' + deckId);
    Promise.all([
      decksService.findOne(deckId!),
      cardsService.findByDeck(deckId!),
    ]).then(([deck, cards]) => {
      setDeck(deck);
      setCards(cards.sort(sortCards));
    });
  };

  const closeDeck = () => {
    setDeck(null);
    setCards([]);
  };

  const addCard = () => {
    const newCard = { id: cardId(), deckId: deck!.id } as ICard;
    setCards([newCard, ...cards]);
    setSyncStatus(DeckSyncStatus.LOADING);
    cardsService.create(newCard).then(() => {
      setSyncStatus(DeckSyncStatus.SYNCED);
    });
  };

  const removeCard = (id: string) => {
    setCards([...cards.filter((c) => c.id !== id)]);
    setSyncStatus(DeckSyncStatus.LOADING);
    cardsService.deleteOne(id).then(() => {
      setSyncStatus(DeckSyncStatus.SYNCED);
    });
  };

  const sortCards = (a, b) => new Date(b.createdOn) - new Date(a.createdOn);

  return (
    <DeckDataContext.Provider
      value={{
        cards,
        deck,
        syncStatus,
        setSyncStatus,
        openDeck,
        addCard,
        removeCard,
        closeDeck,
      }}
    >
      {children}
    </DeckDataContext.Provider>
  );
};

export const useDeckData = () => useContext(DeckDataContext);
