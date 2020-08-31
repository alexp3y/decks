import 'reflect-metadata';
import 'dotenv/config';
import { Sequelize } from 'sequelize-typescript';
import Express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import session from 'express-session';
import connectRedis from 'connect-redis';
import cors from 'cors';

import { accessEnv } from '#root/helpers/accessEnv';
import models from '#root/models';
import { redis } from '#root/redis';

const PORT = accessEnv('PORT', 7000);
const DB_URL = accessEnv('DB_URL');

const main = async () => {
  const schema = await buildSchema({
    resolvers: [__dirname + '/modules/**/*.ts'],
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req }) => ({ req }),
  });

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

  app.use(
    cors({
      credentials: true,
      origin: 'http://localhost:3000',
    })
  );

  const RedisStore = connectRedis(session);

  app.use(
    session({
      store: new RedisStore({
        client: redis,
      }),
      name: 'qid',
      secret: accessEnv('SESSION_SECRET', 'as4234ldkfjlwkjdsf12321'),
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: accessEnv('ENVIRONMENT', 'dev') === 'production',
        maxAge: 1000 * 60 * 60 * 24 * 365 * 7, // 7 years
      },
    })
  );

  apolloServer.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.info(`Decks app running on port ${PORT}....`);
  });
};

main().catch(console.error);
