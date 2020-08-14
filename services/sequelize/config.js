const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

module.exports = {
  development: {
    dialect: 'postgres',
    seederStorage: 'sequelize',
    url: process.env.DB_URL,
  },
  production: {
    dialect: 'postgres',
    seederStorage: 'sequelize',
    url: process.env.DB_URL,
  },
};
