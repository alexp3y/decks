import { Sequelize } from 'sequelize-typescript';

import accessEnv from '../helpers/accessEnv';

import models from './models';

const DB_URL = accessEnv('DB_URL');

const sequelize = new Sequelize(DB_URL, {
  dialect: 'postgres',
  dialectOptions: {
    charset: 'utf8',
    multipleStatements: true,
  },
  logging: true,
  models,
});

export default sequelize;
