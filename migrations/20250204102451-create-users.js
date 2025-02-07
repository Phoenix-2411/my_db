const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', {
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
      isFirstLogin: {
        type: DataTypes.BOOLEAN,
        field: 'isFirstLogin',
        allowNull: false
      },
      isSSOEnabled: {
        type: DataTypes.BOOLEAN,
        field: 'isSSOEnabled',
        allowNull: false
      },
      type: {
        type: DataTypes.STRING(50),
        field: 'type',
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(255),
        field: 'description',
        allowNull: false
      },
      clientSpecific: {
        type: DataTypes.BOOLEAN,
        field: 'clientSpecific',
        allowNull: false
      },
      clientCode: {
        type: DataTypes.STRING(50),
        field: 'clientCode',
        allowNull: false
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        field: 'isDeleted',
        allowNull: false
      },
      clientId: {
        type: DataTypes.INTEGER,
        field: 'clientId',
      },
      roleId: {
        type: DataTypes.INTEGER,
        field: 'roleId',
      },
      profileId: {
        type: DataTypes.INTEGER,
        field: 'profileId',
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    },
      {
        schema: 'userservice',
        timestamps: true,
      });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({
      tableName: 'user',
      schema: 'userservice',
    });
  },
};