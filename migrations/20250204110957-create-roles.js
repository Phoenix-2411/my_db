const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('role', {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(50),
        field: 'name',
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(255),
        field: 'description',
        allowNull: false
      },
      group: {
        type: DataTypes.STRING(50),
        field: 'group',
        allowNull: false
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        field: 'isActive',
        allowNull: false
      },
      policies: {
        type: DataTypes.JSONB,
        field: 'policies',
        allowNull: false
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
      tableName: 'role',
      schema: 'userservice',
    });
  },
};