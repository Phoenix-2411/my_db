const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('team', {
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
      inspectionTypeId: {
        type: DataTypes.INTEGER,
        field: 'inspectionTypeId',
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(255),
        field: 'description'
      },
      inspectionTypeCode: {
        type: DataTypes.STRING(50),
        field: 'inspectionTypeCode',
        allowNull: false
      },
      claimType: {
        type: DataTypes.STRING(50),
        field: 'claimType',
        allowNull: false
      },
      schedulable: {
        type: DataTypes.BOOLEAN,
        field: 'schedulable',
        allowNull: false
      },
      inspectionTypeName: {
        type: DataTypes.STRING(255),
        field: 'inspectionTypeName',
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
      tableName: 'team',
      schema: 'userservice',
    });
  },
};