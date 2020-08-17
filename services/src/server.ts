import 'reflect-metadata';
import 'dotenv/config';
import { Sequelize } from 'sequelize-typescript';
import Express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

import accessEnv from '#root/helpers/accessEnv';
import models from '#root/models';
import { resolvers } from '#root/controllers';

const PORT = accessEnv('PORT', 7000);
const DB_URL = accessEnv('DB_URL');

const main = async () => {
  const schema = await buildSchema({
    resolvers,
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
  const app = Express();
  apolloServer.applyMiddleware({ app });
  app.listen(PORT, () => {
    console.info(`Decks app running on port ${PORT}....`);
  });
};

main().catch(console.error);
