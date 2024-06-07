import { ReactNode, createContext, useContext, useState } from 'react';
import { ICard, cardsService } from './services/cards.service';
import { IDeck, decksService } from './services/decks.service';
import { cardId } from './utils/card-id';
import { sortByCreatedOn } from './utils/sort-by-created';

interface IDeckDataContext {
  decks: IDeck[];
  deck: IDeck | null;
  cards: ICard[];
  syncStatus: DeckSyncStatus;
  setSyncStatus: (status: DeckSyncStatus) => void;
  refreshDecks: () => void;
  addDeck: () => void;
  addCard: () => void;
  updateCard: (id: string, updates: ICard) => Promise<void>;
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
  const [decks, setDecks] = useState<IDeck[]>([]);
  const [deck, setDeck] = useState<IDeck | null>(null);
  const [cards, setCards] = useState<ICard[]>([]);
  const [syncStatus, setSyncStatus] = useState<DeckSyncStatus>(
    DeckSyncStatus.SYNCED
  );

  const refreshDecks = () => {
    if (deck) closeDeck();
    decksService.findAll().then((d) => {
      setDecks(d);
    });
  };

  const addDeck = () => {
    return decksService.createOne('New Deck').then((d) => {
      setDecks([d, ...decks]);
    });
  };

  const openDeck = async (deckId: string) => {
    Promise.all([
      decksService.findOne(deckId!),
      cardsService.findByDeck(deckId!),
    ]).then(([deck, cards]) => {
      setDeck(deck);
      setCards(cards.sort(sortByCreatedOn));
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

  const updateCard = (id: string, updates: ICard) => {
    const current = cards.find((c) => c.id === id)!;
    setCards(cards.map((c) => (c.id === id ? updates : c)));
    return cardsService.update(id, updates).catch((e) => {
      setCards(cards.map((c) => (c.id === id ? current : c)));
      throw e;
    });
  };

  const removeCard = (id: string) => {
    setCards([...cards.filter((c) => c.id !== id)]);
    setSyncStatus(DeckSyncStatus.LOADING);
    cardsService.deleteOne(id).then(() => {
      setSyncStatus(DeckSyncStatus.SYNCED);
    });
  };

  return (
    <DeckDataContext.Provider
      value={{
        decks,
        cards,
        deck,
        syncStatus,
        setSyncStatus,
        refreshDecks,
        addDeck,
        openDeck,
        addCard,
        updateCard,
        removeCard,
        closeDeck,
      }}
    >
      {children}
    </DeckDataContext.Provider>
  );
};

export const useDeckData = () => useContext(DeckDataContext);
