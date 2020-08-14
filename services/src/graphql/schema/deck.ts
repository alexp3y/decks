import { gql } from 'apollo-server';

export default gql`
  type Deck {
    id: ID!
    name: String!
    user: User!
    cards: [Cards!]!
  }

  extend type Query {
    deck(id: ID!): Deck!
    decks: [Deck!]
  }

  extend type Mutation {
    createDeck(name: String!): Deck!
    deleteDeck(id: ID!): Boolean!
  }
`;
