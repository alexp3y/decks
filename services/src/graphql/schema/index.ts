import { gql } from 'apollo-server';

import userSchema from '#root/graphql/schema/user';
import messageSchema from '#root/graphql/schema/message';
import deckSchema from '#root/graphql/schema/deck';
import cardSchema from '#root/graphql/schema/card';

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, userSchema, messageSchema, deckSchema, cardSchema];
