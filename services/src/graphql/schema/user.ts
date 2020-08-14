import { gql } from 'apollo-server';

export default gql`
  type User {
    id: ID!
    username: String!
    email: String!
    messages: [Message!]!
    decks: [Deck!]!
  }

  extend type Query {
    user(id: ID!): User!
    users: [User!]
  }

  extend type Mutation {
    createUser(username: String!, email: String!): User!
    deleteUser(id: ID!): Boolean!
  }
`;
