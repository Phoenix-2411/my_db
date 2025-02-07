const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('attachments', {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true
      },
      type: {
        type: DataTypes.STRING(50),
        field: 'type',
        allowNull: false
      },
      mimeType: {
        type: DataTypes.STRING(50),
        field: 'mimeType',
        allowNull: false
      },
      title: {
        type: DataTypes.STRING(255),
        field: 'title',
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(255),
        field: 'description',
        allowNull: false
      },
      active: {
        type: DataTypes.BOOLEAN,
        field: 'active',
        allowNull: false
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        field: 'deleted',
        allowNull: false
      },
      createdBy: {
        type: DataTypes.STRING(50),
        field: 'createdBy',
        allowNull: false
      },
      updatedBy: {
        type: DataTypes.STRING(50),
        field: 'updatedBy',
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'userId'
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
      tableName: 'attachments',
      schema: 'userservice',
    });
  },
};