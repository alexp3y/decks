'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'cards',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        deletedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        front: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        back: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        deckId: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
      },
      {
        charset: 'utf8',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cards');
  },
};
