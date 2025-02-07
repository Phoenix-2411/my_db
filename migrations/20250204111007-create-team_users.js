const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teamUser', {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        field: 'isActive',
        allowNull: false
      },
      teamId: {
        type: DataTypes.INTEGER,
        field: 'teamId'
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'userId'
      },
      roleId: {
        type: DataTypes.INTEGER,
        field: 'roleId'
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    }, {
      schema: 'userservice',
      timestamps: true
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({
      tableName: 'teamUser',
      schema: 'userservice',
    });
  },
};