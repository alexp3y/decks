import { exit } from 'process';
import { getCards, getUser, getUserDecks } from './apiFunctions';
import { AppState, Command, CommandDispatch, CommandFunction } from './types';

export const handleKeyCommand = async (
  key: string,
  state: AppState
): Promise<AppState> => {
  let defaultResponse = new Promise<AppState>(() => {
    return state;
  });
  if (state.cardViewOn) {
    switch (key) {
      case 'Escape':
        return await exitCardView(state);
      case 'ArrowRight':
        return await nextCard(state);
      case 'ArrowLeft':
        return await previousCard(state);
      case 'r':
        return await randomCard(state);
      case ' ':
        return await flipCard(state);
    }
  }
  return defaultResponse;
};

export const executeCommand: CommandDispatch = async (command, state, data) => {
  switch (command) {
    case Command.INITIALIZE_APP:
      return await initApp(state, data);
    case Command.EXIT_DECK_VIEW:
      return await exitDeckView(state, data);
    case Command.ENTER_DECK_VIEW:
      return await enterDeckView(state, data);
    case Command.EXIT_CARD_VIEW:
      return await exitCardView(state, data);
    case Command.ENTER_CARD_VIEW:
      return await enterCardView(state, data);
    case Command.REVERSE_DECK:
      return await reverseDeck(state, data);
    case Command.STAR_DECK:
      return await starDeck(state, data);
    case Command.NEXT_CARD:
      return await nextCard(state, data);
    case Command.PREV_CARD:
      return await previousCard(state, data);
    case Command.FLIP_CARD:
      return await flipCard(state, data);
    case Command.RAND_CARD:
      return await randomCard(state, data);
    case Command.STAR_CARD:
      return await starCard(state, data);
    default:
      return state;
  }
};

const initApp: CommandFunction = async (state, data) => {
  let userId = data!.target;
  state.user = await getUser(userId!);
  state.decks = await getUserDecks(userId!);
  return state;
};

const exitDeckView: CommandFunction = async (state, data) => {
  let deckId = data!.target;
  state.activeDeck = state.decks!.find((d) => d.id === deckId);
  state.deckViewOn = false;
  return state;
};

const enterDeckView: CommandFunction = async (state) => {
  state.deckViewOn = true;
  state.cardViewExited = true;
  state.deckViewExited = false;
  return state;
};

const exitCardView: CommandFunction = async (state) => {
  state.cardViewOn = false;
  return state;
};

const enterCardView: CommandFunction = async (state) => {
  state.cards = await getCards(state.activeDeck!.id);
  if (state.cards.length) {
    state.activeCardIndex = 0;
    state.activeCard = state.cards[0];
  }
  state.cardViewOn = true;
  state.deckViewExited = true;
  state.cardViewExited = false;
  return state;
};

const nextCard: CommandFunction = async (state) => {
  if (state.activeCardIndex < state.cards!.length - 1) {
    let nextIndex = state.activeCardIndex + 1;
    state.activeCard = state.cards![nextIndex];
    state.activeCardIndex = nextIndex;
    state.cardFlipped = false;
  }
  return state;
};

const previousCard: CommandFunction = async (state) => {
  if (state.activeCardIndex > 0) {
    let prevIndex = state.activeCardIndex - 1;
    state.activeCard = state.cards![prevIndex];
    state.activeCardIndex = prevIndex;
    state.cardFlipped = false;
  }
  return state;
};

const flipCard: CommandFunction = async (state) => {
  state.cardFlipped = !state.cardFlipped;
  return state;
};

const randomCard: CommandFunction = async (state) => {
  let randomIndex = Math.floor(Math.random() * state.cards!.length);
  state.activeCard = state.cards![randomIndex];
  state.activeCardIndex = randomIndex;
  state.cardFlipped = false;
  return state;
};

const starCard: CommandFunction = async (state) => {
  state.activeCard!.starred = !state.activeCard!.starred;
  return state;
};

const reverseDeck: CommandFunction = async (state) => {
  state.deckReversed = !state.deckReversed;
  return state;
};

const starDeck: CommandFunction = async (state) => {
  state.deckStarred = !state.deckStarred;
  return state;
};
