'use-strict';

module.exports = {
  up: (queryInterface, DataTypes) =>
    queryInterface.createTable(
      'table-name',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        deletedAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },

        // field: {
        //   allowNull: false,
        //   type: DataTypes.STRING,
        // },
      },
      {
        charset: 'utf8',
      }
    ),

  down: (queryInterface) => queryInterface.dropTable('table-name'),
};
