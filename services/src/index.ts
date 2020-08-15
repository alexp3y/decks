import 'reflect-metadata';
import { Sequelize } from 'sequelize-typescript';
import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { Resolver, Query, buildSchema } from 'type-graphql';

import 'dotenv/config';
import accessEnv from '#root/helpers/accessEnv';
import models from '#root/models';
import User from './models/User';
import UserResolver from './controllers/User.resolver';
import MessageResolver from './controllers/Message.resolver';
import DeckResolver from './controllers/Deck.resolver';
import CardResolver from './controllers/Card.resolver';

const PORT = accessEnv('PORT', 7000);
const DB_URL = accessEnv('DB_URL');

const main = async () => {
  const schema = await buildSchema({
    resolvers: [UserResolver, MessageResolver, DeckResolver, CardResolver],
  });

  const apolloServer = new ApolloServer({ schema });

  const sequelize = new Sequelize(DB_URL, {
    dialect: 'postgres',
    dialectOptions: {
      charset: 'utf8',
      multipleStatements: true,
    },
    models,
  });
  await sequelize.authenticate();

  const app = express();

  apolloServer.applyMiddleware({ app });

  app.get('/', async (req, res) => {
    let users = await User.findAll();
    res.send(users);
  });

  app.listen(PORT, () => {
    console.info(`Decks app running on port ${PORT}....`);
  });
};

main().catch(console.error);
