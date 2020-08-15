import { Resolver, Query } from 'type-graphql';
import Deck from '#root/models/Deck';

@Resolver(Deck)
export default class DeckResolver {
  @Query((returns) => [Deck])
  async decks() {
    return await Deck.findAll();
  }
}
