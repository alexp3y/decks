import UserResolver from './user/User.resolver';
import MessageResolver from './Message.resolver';
import DeckResolver from './Deck.resolver';
import CardResolver from './Card.resolver';

export const resolvers = [
  UserResolver,
  MessageResolver,
  DeckResolver,
  CardResolver,
] as const;
