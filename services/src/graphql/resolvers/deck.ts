import { Deck, Card } from '#root/db/models';

export default {
  Query: {
    decks: (parent, args, { models }) => {

    }
  }
  
  cards: (deck: Deck) => {
    return Card.findAll({
      include: [
        {
          model: Deck,
          where: { id: deck.id },
        },
      ],
      order: [['name', 'ASC']],
    });
  },
};
