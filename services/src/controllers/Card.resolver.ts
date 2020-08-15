import { Resolver, Query } from 'type-graphql';
import Card from '#root/models/Card';

@Resolver(Card)
export default class CardResolver {
  @Query((returns) => [Card])
  async cards() {
    return await Card.findAll();
  }
}
