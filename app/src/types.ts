export type AppState = {
  user: IUser | undefined;
  deckViewOn: boolean;
  deckViewExited: boolean;
  cardViewOn: boolean;
  cardViewExited: boolean;
  decks: IDeck[] | undefined;
  activeDeck: IDeck | undefined;
  cards: ICard[] | undefined;
  activeCard: ICard | undefined;
  activeCardIndex: number;
  deckReversed: boolean;
  deckStarred: boolean;
  cardFlipped: boolean;
  editMode: boolean;
};

export type CommandHandler = (command: Command, data: CommandData) => void;

export type CommandDispatch = (
  command: Command,
  state: AppState,
  data: CommandData
) => Promise<AppState>;

export type CommandFunction = (
  state: AppState,
  data?: CommandData
) => Promise<AppState>;

export type CommandData = {
  target?: number;
  data?: any;
};

export enum Command {
  INITIALIZE_APP,
  EXIT_DECK_VIEW,
  ENTER_DECK_VIEW,
  EXIT_CARD_VIEW,
  ENTER_CARD_VIEW,
  NEXT_CARD,
  PREV_CARD,
  RAND_CARD,
  STAR_CARD,
  FLIP_CARD,
  REVERSE_DECK,
  STAR_DECK,
  ADD_CARD,
  EDIT_CARD,
  SAVE_CARD,
  DELETE_CARD,
}

export type ICard = {
  id: number;
  deckId: number;
  front: string;
  back: string;
  starred: boolean;
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
