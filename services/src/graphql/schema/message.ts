import { gql } from 'apollo-server';

export default gql`
  type Message {
    id: ID!
    text: String!
    user: User!
  }

  extend type Query {
    message(id: ID!): Message!
    messages: [Message!]!
  }

  extend type Mutation {
    createMessage(text: String!): Message!
    deleteMessage(id: ID!): Boolean!
  }
`;
