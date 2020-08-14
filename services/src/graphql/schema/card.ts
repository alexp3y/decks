import { gql } from 'apollo-server';

export default gql`
  type Card {
    id: ID!
    front: String!
    back: String!
    deck: Deck!
  }

  extend type Query {
    card(id: ID!): Card!
    cards: [Cards!]!
  }

  extend type Mutation {
    createCard(front: String!, back: String): Card!
    deleteCard(id: ID!): Boolean!
  }
`;
